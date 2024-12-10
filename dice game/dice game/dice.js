var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImageselector = "dice"+randomNumber1+".png";

var imageSource = randomImageselector;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageselector2 ="dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageselector2);

// win conditions 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won!";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won!";
}

else {
    document.querySelector("h1").innerHTML="draw!!!";
}