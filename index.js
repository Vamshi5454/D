// alert(" hello");

// document.getElementsByClassName(".button").addEventListener("click", function () {
//     alert(" hey buddy");
//   });

// let temp = document.querySelectorAll(".drum");

// console.log(temp);
// var audio = new audio(sounds / crash.mp3);
let temp = document.getElementsByClassName("drum");
for (let i = 0; i <= temp.length; i++) {
  temp[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    let buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
  });
}

// document.addEventListener("keypress", function (event) {
//   makeSound(event.key);
//   console.log("tried");
// });

$(document).keypress(function (event) {
  console.log(" i am here");
  makeSound(event.key);
});

// document.addEventListener("DOMContentLoaded", function () {
//   document.addEventListener("keydown", function (event) {
//     console.log("button pressed");
//     makeSound(event.key);
//   });
// });
function makeSound(gotFromTop) {
  switch (gotFromTop) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      console.log("sound plyed");
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
  }
}
console.log(temp);

// var audio = new audio(crash.mp3);
