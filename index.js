
//finding two random numbers for two players
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

//changing the images
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+ randomNumber1 +".png");
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+ randomNumber2 +".png" );

//change the h1
var heading = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    heading.innerHTML = "🥳Player 1 Wins";
}

else if(randomNumber2 > randomNumber1){
    heading.innerHTML = "🥳Player 2 wins";
}

else{
    heading.innerHTML = "😉Draw!!";
}