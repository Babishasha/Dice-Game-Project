function myfunc() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "Dice" + randomNumber1 + ".svg"; //dice1.png - dice6.png

  var randomImageSource = "assets/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "assets/Dice" + randomNumber2 + ".svg";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win🚩";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Win🚩";
  } else {
    document.querySelector("h1").innerHTML = "It's a Draw..!";
  }
}
