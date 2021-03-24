var canvas, mainbg, mainbg2, bgImg, eggImg, basketImg;
var playButton, egg, gameState;
var basketGroup, basket1, basket2, basket3, basket4, basket5, basket6;
var bgSprite;
var score = 0;
var currentBasket = "basket1";
var isCollided = false;
var isInitialStage = true;

function preload() {
  var eggs = ["./assets/egg1.png", "./assets/egg2.png", "./assets/egg2.png"];
  const random = Math.floor(Math.random() * eggs.length);
  mainbg = loadImage("./assets/bg1.png");
  bgImg = loadImage("./assets/bg.png");
  eggImg = loadImage(eggs[random]);
  basketImg = loadImage("./assets/basket.png");
  mainbg2 = loadImage("./assets/bg2.png");
}

function setup() {
  canvas = createCanvas(500, 800);
  centerCanvas();

  playButton = createButton("");
  playButton.position(windowWidth / 2 - 50, height / 2 + 120);
  playButton.class("playbutton");

  bgSprite = createSprite(width / 2, height / 2);
  bgSprite.addImage("background", bgImg);
  bgSprite.scale = 1.3;

  basketGroup = new Group();

  createBaskets();
  egg = createSprite(width / 2, height - 250);
  egg.addImage("egg", eggImg);
  egg.scale = 0.5;
}

function draw() {
  background(mainbg);
  playButton.mousePressed(() => {
    gameState = "play";
    playButton.style("visibility", "hidden");
    mainbg = mainbg2;
    isInitialStage = false;
    basket2.velocityX = -3;
    basket3.velocityX = -3;
    basket5.velocityX = -3;
    basket6.velocityX = 6;
  });

  if (gameState === "play") {
    egg.velocityY += 0.5;
    if (
      egg.isTouching(basket1) &&
      currentBasket === "basket1" &&
      egg.velocityY >= 0
    ) {
      isInitialStage = true;
      egg.velocityY = 0;
      egg.position.x = basket1.position.x;
      egg.position.y = basket1.position.y - 30;
    }

    if (
      egg.isTouching(basket2) &&
      currentBasket === "basket2" &&
      egg.velocityY >= 0
    ) {
      egg.velocityY = 0;
      if (isCollided) {
        isCollided = false;
        score++;
        bgSprite.velocityY = 0;
      }

      egg.position.x = basket2.position.x;
      egg.position.y = basket2.position.y - 30;

      for (var i = 0; i < basketGroup.length; i++) {
        basketGroup.get(i).velocityY = 3;
        if (basket2.position.y > 700) {
          basketGroup.get(i).velocityY = 0;
        }
      }
    }

    if (
      !egg.isTouching(basket2) &&
      currentBasket === "basket2" &&
      egg.velocityY > 3
    ) {
      gameOver();
    }

    if (
      egg.isTouching(basket3) &&
      currentBasket === "basket3" &&
      egg.velocityY >= 0
    ) {
      egg.velocityY = 0;
      if (isCollided) {
        isCollided = false;
        score++;
        bgSprite.velocityY = 0;
      }

      egg.position.x = basket3.position.x;
      egg.position.y = basket3.position.y - 30;

      for (var i = 0; i < basketGroup.length; i++) {
        basketGroup.get(i).velocityY = 3;
        if (basket3.position.y > 700) {
          basketGroup.get(i).velocityY = 0;
        }
      }
    }

    if (
      !egg.isTouching(basket3) &&
      currentBasket === "basket3" &&
      egg.velocityY > 3
    ) {
      gameOver();
    }

    if (
      egg.isTouching(basket4) &&
      currentBasket === "basket4" &&
      egg.velocityY >= 0
    ) {
      egg.velocityY = 0;
      if (isCollided) {
        isCollided = false;
        score++;
        bgSprite.velocityY = 0;
      }

      egg.position.x = basket4.position.x;
      egg.position.y = basket4.position.y - 30;
    }

    if (
      !egg.isTouching(basket4) &&
      currentBasket === "basket4" &&
      egg.velocityY > 3
    ) {
      gameOver();
    }

    if (
      egg.isTouching(basket5) &&
      currentBasket === "basket5" &&
      egg.velocityY >= 0
    ) {
      egg.velocityY = 0;
      if (isCollided) {
        isCollided = false;
        score++;
        bgSprite.velocityY = 0;
      }

      egg.position.x = basket5.position.x;
      egg.position.y = basket5.position.y - 30;
      for (var i = 0; i < basketGroup.length; i++) {
        basketGroup.get(i).velocityY = 3;
        if (basket5.position.y > 500) {
          basketGroup.get(i).velocityY = 0;
        }
      }
    }

    if (
      !egg.isTouching(basket5) &&
      currentBasket === "basket5" &&
      egg.velocityY > 3
    ) {
      gameOver();
    }

    if (
      egg.isTouching(basket6) &&
      currentBasket === "basket6" &&
      egg.velocityY >= 0
    ) {
      egg.velocityY = 0;
      if (isCollided) {
        isCollided = false;
        score++;
        bgSprite.velocityY = 0;
      }

      egg.position.x = basket6.position.x;
      egg.position.y = basket6.position.y - 30;
    }

    if (
      !egg.isTouching(basket6) &&
      currentBasket === "basket6" &&
      egg.velocityY > 3
    ) {
      gameOver();
    }

    if (basket2.position.x >= width - 80 || basket2.position.x <= 80) {
      basket2.velocityX *= -1;
    }

    if (basket3.position.x >= width - 80 || basket3.position.x <= 80) {
      basket3.velocityX *= -1;
    }

    if (basket5.position.x >= width - 80 || basket5.position.x <= 80) {
      basket5.velocityX *= -1;
    }
    //
    if (basket6.position.x >= width - 80 || basket6.position.x <= 80) {
      basket6.velocityX *= -1;
    }

    drawSprites();
    // Score;
    fill(255, 145, 0);
    rect(10, 10, 100, 40, 30, 30, 30, 30);
    fill(255, 255, 255);
    textSize(22);
    text(`Score: ${score}`, 18, 40);
    if (bgSprite.y > 1000) {
      bgSprite.y = bgSprite.height / 2;
    }
  }
}

function gameOver() {
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://raw.githubusercontent.com/whitehatjr/hoping-easter-egg/main/assets/game_over.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        window.location.reload();
      }
    }
  );
}

function showAlert() {
  swal(
    {
      title: `Awesome!${"\n"}Score${"\n"}${score}`,
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        window.location.reload();
      }
    }
  );
}

function createBaskets() {
  basket1 = createSprite(width / 2, height - 100);
  basket1.addImage("basket1", basketImg);
  basket1.setCollider("rectangle", 0, -5, 30, 20);
  // basket1.debug = true;
  basket1.scale = 0.9;

  basket2 = createSprite(width / 2, height / 2);
  basket2.addImage("basket2", basketImg);
  basket2.setCollider("rectangle", 0, -5, 30, 20);
  // basket2.debug = true;
  basket2.scale = 0.9;

  basket3 = createSprite(width / 2, height / 2 - 300);
  basket3.addImage("basket3", basketImg);
  basket3.setCollider("rectangle", 0, -5, 30, 20);
  basket3.scale = 0.9;

  basket4 = createSprite(width / 2, height / 2 - 600);
  basket4.addImage("basket3", basketImg);
  basket4.setCollider("rectangle", 0, -5, 30, 20);
  basket4.scale = 0.9;

  basket5 = createSprite(width / 2, height / 2 - 900);
  basket5.addImage("basket3", basketImg);
  basket5.setCollider("rectangle", 0, -5, 30, 20);
  basket5.scale = 0.9;

  basket6 = createSprite(width / 2, height / 2 - 1200);
  basket6.addImage("basket3", basketImg);
  basket6.setCollider("rectangle", 0, -5, 30, 20);
  basket6.scale = 0.9;

  basketGroup.add(basket1);
  basketGroup.add(basket2);
  basketGroup.add(basket3);
  basketGroup.add(basket4);
  basketGroup.add(basket5);
  basketGroup.add(basket6);
}

function mouseClicked() {
  if (gameState === "play") {
    if (isInitialStage) {
      if (egg.velocityY === 0) {
        egg.velocityY = -18;
      }

      isCollided = true;
      bgSprite.velocityY = 6;

      if (currentBasket === "basket1") {
        currentBasket = "basket2";
      } else if (currentBasket === "basket2") {
        currentBasket = "basket3";
      } else if (currentBasket === "basket3") {
        currentBasket = "basket4";
      } else if (currentBasket === "basket4") {
        currentBasket = "basket5";
      } else if (currentBasket === "basket5") {
        currentBasket = "basket6";
      } else if (currentBasket === "basket6") {
        gameState = "win";
      }
    }
  }
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}
