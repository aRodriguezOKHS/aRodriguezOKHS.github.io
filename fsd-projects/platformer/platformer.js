$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(250, 650, 100, 15, "orangered");
    createPlatform(250, 380, 100, 15, "orangered");
    createPlatform(100, 245, 100, 15, "orangered");
    createPlatform(480, 450, 100, 15, "orangered");
    createPlatform(400, 100, 10, 180, "black");
    createPlatform(400, 410, 15, 30, "black");
    createPlatform(310, 115, 90, 15, "orangered");
    createPlatform(400, 550, 10, 250, "black");
    createPlatform(400, 280, 200, 10, "black");
    createPlatform(600, 280, 10, 460, "black");
    createPlatform(100, 100, 10, 550, "black");
    createPlatform(670, 200, 100, 15, "orangered");
    createPlatform(575, 90, 100, 15, "orangered");



    

    // TODO 3 - Create Collectables
    createCollectable("database", 610, 50);
    createCollectable();
    createCollectable();

    // TODO 4 - Create Cannons
    createCannon("bottom", 100, 100);
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
