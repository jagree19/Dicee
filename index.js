function randomNumber1() {
    var number = Math.random() * 6;
    var number = Math.floor(number) + 1;
    return number;
}

function setDice1(num) {
  switch(num) {
    case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    break;
    case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;
    case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;
    case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;
    case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;
    case 6:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;
  }
}

function setDice2(num) {
  switch(num) {
    case 1:
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    break;
    case 2:
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    break;
    case 3:
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    break;
    case 4:
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    break;
    case 5:
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    break;
    case 6:
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    break;
  }
}

function displayWinner(num1, num2) {
  if(num1 > num2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
  } else if ( num2 > num1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML="Draw!";
  }

}
