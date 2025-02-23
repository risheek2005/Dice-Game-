var randomNumber1=Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomDiceImage = "Dice" + randomNumber1 + ".png";
var randomImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/" + "Dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";
}else{
    document.querySelector("h1").innerHTML = "IT'S A DRAW";
}
