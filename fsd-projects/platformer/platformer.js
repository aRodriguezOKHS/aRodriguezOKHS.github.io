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
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(250, 650, 100, 15, "yellowgreen");
    createPlatform(250, 380, 100, 15, "yellowgreen");
    createPlatform(100, 245, 100, 15, "yellowgreen");
    createPlatform(480, 450, 100, 15, "yellowgreen");
    createPlatform(400, 100, 10, 180, "white");
    createPlatform(400, 410, 15, 30, "white");
    createPlatform(310, 115, 90, 15, "white");
    createPlatform(400, 550, 10, 250, "white");
    createPlatform(400, 280, 200, 10, "white");
    createPlatform(600, 280, 10, 460, "white");
    createPlatform(100, 100, 10, 550, "white");
    createPlatform(670, 200, 100, 15, "yellowgreen");
    createPlatform(575, 90, 100, 15, "yellowgreen");
    createPlatform(800, 0, 10, 630, "white");
    createPlatform(1000, 300, 10, 630, "white");
    createPlatform(990, 640, 5, 5, "yellowgreen");
    createPlatform(815, 520, 5, 5, "yellowgreen");
    createPlatform(990, 400, 5, 5, "yellowgreen");
    createPlatform(1000, 300, 300, 10, "white");
    createPlatform(800, 200, 470, 10, "white");
    createPlatform(1200, 100, 10, 100, "white");
    createPlatform(1100, 100, 10, 100, "white");
    createPlatform(1000, 100, 10, 100, "white");
    createPlatform(900, 100, 10, 100, "white");
    createPlatform(1300, 300, 10, 350, "white");
    createPlatform(700, 300, 100, 10, "white");
    createPlatform(600, 400, 100, 10, "white");
    createPlatform(700, 500, 100, 10, "white");
    createPlatform(1100, 650, 200, 10, "white");
    createPlatform(1000, 550, 200, 10, "white");
    createPlatform(1100, 430, 200, 10, "white");
    createPlatform(110, 515, 50, 10, "purple");

    // TODO 3 - Create Collectables
    createCollectable("database", 610, 50);
    createCollectable("database", 835, 150);
    createCollectable("database", 1200, 350);
    //createCollectable();

    // TODO 4 - Create Cannons
    createCannon("left", 540, 1050);
    createCannon("left", 20, 1200);
    createCannon("bottom", 650, 2000);
    createCannon("left", 490, 2000);
    createCannon("left", 650, 3000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
