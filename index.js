// random1-6
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

// /1/images/dice1.png - /1/images/dice1.png
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.getElementById("P1").setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.getElementById("P2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
