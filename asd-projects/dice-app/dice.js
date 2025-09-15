$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die");
});

$("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die2");

function makeDot(top, left, elementID) {
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .appendTo(elementID);
}

function rollDie() {
  $("#die").empty();
  console.log("clicked");
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
  if (randomNum === 1) {
    makeDot(45, 45, "#die"); // middle middle
  } else if (randomNum === 2) {
    makeDot(20, 20, "#die"); // top left
    makeDot(70, 70, "#die"); // bottom right
  } else if (randomNum === 3) {
    makeDot(20, 20, "#die"); // top left
    makeDot(70, 70, "#die"); // bottom right
    makeDot(45, 45, "#die"); // middle middle
  } else if (randomNum === 4) {
    makeDot(70, 70, "#die"); // bottom right
    makeDot(20, 20, "#die"); // top left
    makeDot(20, 70, "#die"); // bottom left
    makeDot(70, 20, "#die"); // top right
  } else if (randomNum === 5) {
    makeDot(45, 45, "#die"); // middle middle
    makeDot(70, 70, "#die"); // bottom right
    makeDot(20, 20, "#die"); // top left
    makeDot(20, 70, "#die"); // bottom left
    makeDot(70, 20, "#die"); // top right
  } else if (randomNum === 6) {
    makeDot(70, 70, "#die"); // bottom right
    makeDot(45, 70, "#die"); // mid right
    makeDot(20, 70, "#die"); // top right
    makeDot(70, 15, "#die"); // bottom left
    makeDot(45, 15, "#die"); // mid left
    makeDot(20, 15, "#die"); // top left
  }
}

$("#die").on("click", rollDie);


function rollDie2() {
  $("#die2").empty();
  console.log("clicked");
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
  if (randomNum === 1) {
    makeDot(45, 45, "#die2"); // middle middle
  } else if (randomNum === 2) {
    makeDot(20, 20, "#die2"); // top left
    makeDot(70, 70, "#die2"); // bottom right
  } else if (randomNum === 3) {
    makeDot(20, 20, "#die2"); // top left
    makeDot(70, 70, "#die2"); // bottom right
    makeDot(45, 45, "#die2"); // middle middle
  } else if (randomNum === 4) {
    makeDot(70, 70, "#die2"); // bottom right
    makeDot(20, 20, "#die2"); // top left
    makeDot(20, 70, "#die2"); // bottom left
    makeDot(70, 20, "#die2"); // top right
  } else if (randomNum === 5) {
    makeDot(45, 45, "#die2"); // middle middle
    makeDot(70, 70, "#die2"); // bottom right
    makeDot(20, 20, "#die2"); // top left
    makeDot(20, 70, "#die2"); // bottom left
    makeDot(70, 20, "#die2"); // top right
  } else if (randomNum === 6) {
    makeDot(70, 70, "#die2"); // bottom right
    makeDot(45, 70, "#die2"); // mid right
    makeDot(20, 70, "#die2"); // top right
    makeDot(70, 15, "#die2"); // bottom left
    makeDot(45, 15, "#die2"); // mid left
    makeDot(20, 15, "#die2"); // top left
  }
}

$("#die2").on("click", rollDie2);