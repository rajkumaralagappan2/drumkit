

// Main Action
var leng= document.querySelectorAll(".drum");
for(var i=0; i<leng.length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonClicked=this.innerHTML;
    makesound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

document.addEventListener("keydown",function(){
  var buttonClick= (event.key);
  console.log(buttonClick);
  makesound(buttonClick);
  buttonAnimation(buttonClick);
})

function makesound(buttonClicked){
  switch(buttonClicked){
    case "w":
      var audio= new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio= new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio= new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio= new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio= new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio= new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio= new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:console.log(buttonClicked);
  }
}

function buttonAnimation(buttonkey){
  var buttonclick= document.querySelector("." + buttonkey);
  buttonclick.classList.add("pressed");

  setTimeout(function(){
    buttonclick.classList.remove("pressed");
  },100)
}
