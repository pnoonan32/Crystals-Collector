var wins = 0;
var lost = 0;
var randomResult;
var previous = 0;



var resetAndStart = function () {
    $(".crystals").empty();

    var images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNqNVFUmvFpS3YoxsGMwsRPCuYpGC-aLx8L81j2Nj-2Wbv3kP",
        "https://www.jckonline.com/wp-content/uploads/2017/08/stock_diamonds_getty_large-single-diamond-200x200.jpg",
        "https://cdn.shopify.com/s/files/1/0945/7330/products/thumbnail.asp.png?v=1501801583",
        "https://static1.squarespace.com/static/576d290ab8a79bfab4b366c9/59e0cce58419c22034399643/59e10b7b85c5bdce1a264690/1507931225966/?format=300w"
        ];

    randomResult = Math.floor(Math.random() * 69 ) + 30;

$("#results").html('Random Result: ' + randomResult);

for ( var i = 0; i < 4; i++ ) {
    var randomNumber = Math.floor(Math.random() * 11) + 1;

    console.log(randomNumber);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "dataRandomNumber": randomNumber
    });
    crystal.css({
        "background-image":"url('" +images[i] + "')",
        "background-size":"cover"
    });
    crystal.html(randomNumber);

    $(".crystals").append(crystal);
}

$("#previous").html("Total Score: " + previous);

}

resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt(($(this).attr('dataRandomNumber')));

    previous += num;
    console.log(previous);

    if ( previous > randomResult) {
        console.log("you lost!");
        lost--;
        $("#losses").html(lost);

        previous = 0;

        resetAndStart();
    } 
    else if ( previous === randomResult ) {
        console.log("You win");
        wins++;

        $("#wins").html(wins);

        previous = 0;

        resetAndStart();
    }

});