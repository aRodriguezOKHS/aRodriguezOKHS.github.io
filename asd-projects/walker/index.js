/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
  };

  const walker = {
    x: 0, // horizontal position (left/right)
    y: 0, // vertical position (up/down)
    speedX: 0, // horizontal speed
    speedY: 0, // vertical speed
  };

  var leftWall = 0; // Position of Left Wall
  var topWall = 0; // Position of Top Wall
  var rightWall = $("#board").width(); // Position of Right Wall
  var bottomWall = $("#board").height(); // Position of Bottom Wall

  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on("keydown", handleKeyDown); // Actually moves the box when key is detected
  $(document).on("keyup", handleKeyUp); // Stops moving when key is released

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }

  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
    }

    if (event.which === KEY.UP) {
      walker.speedY = -5;
    }

    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
    }

    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
    }
    // When the key is being pressed, it will move any the direction of
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
    }

    if (event.which === KEY.UP) {
      walker.speedY = 0;
    }

    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }

    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    // add speed to according variable position
    walker.x += walker.speedX;
    walker.y += walker.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
  }

  function wallCollision() {
    // Keeps walker from being able to move out the box
    var walkerRightSide = walker.x + 50;
    var walkerBottomSide = walker.y + 50;

    if (walker.x < leftWall || rightWall < walkerRightSide) {
      walker.x -= walker.speedX;
    }

    if (walker.y < topWall || bottomWall < walkerBottomSide) {
      walker.y -= walker.speedY;
    }
  }
}
