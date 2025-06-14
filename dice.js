var randomNumber1 = Math.random();
a = Math.floor(randomNumber1 * 6);

var randomNumber2 = Math.random();
q = Math.floor(randomNumber2 * 6);

var ar = ["dice1","dice2","dice3","dice4","dice5","dice6"];

var b = "images/"+ar[a]+".png";

var q1 = "images/"+ar[q]+".png";

document.querySelector(".img1").setAttribute("src",b);

document.querySelector(".img2").setAttribute("src",q1);

if (a>q){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (q>a){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
//document.querySelector("container").innerHTML = ""