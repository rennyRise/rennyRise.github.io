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
    createPlatform(-50, -50, canvas.width + 250, 45); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(300, 500, 100, 20);
        createPlatform(1350, 400, 60, 100, "red");
        createPlatform(124, 20, 50, 50, "lime"); // bright green for a finished platform
createPlatform(300, 700, 50, 10, "red");
createPlatform(200, 600, 40, 20, "red");
createPlatform(100, 400, 100, 20);




    // TODO 3 - Create Collectables
createCollectable("steve", 340, 470);
createCollectable("diamond", 200, 160, 0.5, 0.7);
createCollectable("grace",150, 350)


    
    // TODO 4 - Create Cannons
createCannon("top",500, 520
  
);
createCannon("right", 200, 430);
createCannon( "right", 430, 500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
