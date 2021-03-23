var canvas, backgroundImg, eggImg, playButton, backgroundMusic;
var gameState = "start";
var score = 0;
var egg, basket1, basket2;
var currentBasket = "basket1";
var isCollided = false;
var bg;
var basketGroup;

function preload() {
  mainBg = loadImage("./assets/bg1.png");
  backgroundImg = loadImage("./assets/bg.png");
  eggImg = loadImage("./assets/egg1.png");
  basketImg = loadImage("./assets/basket.png");
  playImg = loadImage("./assets/play_button.png");
}

function setup() {
  canvas = createCanvas(500, 800);
  centerCanvas();

  // bg = createSprite(width / 2, height / 2);
  // bg.addImage("background", backgroundImg);
  // bg.scale = 1.3;
  //
  // basketGroup = new Group();

  playButton = createSprite(width / 2, height / 2);
  playButton.addImage("playButton", playImg);
  playButton.scale = 1;
  playButton.setCollider("circle", 0, 0, 95);
  playButton.mouseActive = true;

  // backgroundMusic.loop();
  createBaskets();

  egg = createSprite(width / 2, height - 250);
  egg.addImage("egg", eggImg);
  egg.scale = 0.1;
}

function draw() {
  background(mainBg);
  // if (gameState === "start") {
  //   if (playButton.mouseIsOver) {
  //     gameState = "play";
  //     playButton.visible = false;
  //     basket2.velocityX = 3;
  //     basket3.velocityX = -3;
  //     mainBg = 255;
  //   }
  //   drawSprite(playButton);
  // }
  //
  // if (gameState === "play") {
  //   console.log(bg.y);
  //   if (bg.y > 600) {
  //     bg.y = bg.height / 2;
  //   }
  //
  //   egg.velocityY += 0.5;
  //   if (egg.isTouching(basket1) && currentBasket === "basket1") {
  //     egg.velocityY = 0;
  //     egg.position.x = basket1.position.x;
  //     egg.position.y = basket1.position.y - 30;
  //   }
  //
  //   if (egg.isTouching(basket2) && currentBasket === "basket2") {
  //     egg.velocityY = 0;
  //     if (isCollided) {
  //       isCollided = false;
  //       score++;
  //       bg.velocityY = 0;
  //     }
  //
  //     egg.position.x = basket2.position.x;
  //     egg.position.y = basket2.position.y - 30;
  //   }
  //
  //   if (egg.isTouching(basket3) && currentBasket === "basket3") {
  //     egg.velocityY = 0;
  //     if (isCollided) {
  //       isCollided = false;
  //       score++;
  //       bg.velocityY = 0;
  //     }
  //
  //     for (var i = 0; i < basketGroup.length; i++) {
  //       basketGroup.get(i).velocityY = 3;
  //     }
  //     egg.position.x = basket3.position.x;
  //     egg.position.y = basket3.position.y - 30;
  //   }
  //
  //   if (basket2.position.x >= width - 80 || basket2.position.x <= 80) {
  //     basket2.velocityX *= -1;
  //   }
  //
  //   if (basket3.position.x >= width - 80 || basket3.position.x <= 80) {
  //     basket3.velocityX *= -1;
  //   }
  // }
  //
  // gameState !== "start" ? drawSprites() : null;
  // // Score
  // fill(255, 145, 0);
  // rect(10, 10, 100, 40, 30, 30, 30, 30);
  // fill(255, 255, 255);
  // textSize(22);
  // text(`Score ${score}`, 18, 40);
}

function mouseClicked() {
  if (gameState !== "start") {
    if (egg.velocityY === 0) {
      egg.velocityY = -18;
    }

    isCollided = true;
    bg.velocityY = 3;
    if (currentBasket === "basket1") {
      currentBasket = "basket2";
    } else if (currentBasket === "basket2") {
      currentBasket = "basket3";
    } else if (currentBasket === "basket3") {
      currentBasket = "basket4";
    }
  }
}

function createBaskets() {
  basket1 = createSprite(width / 2, height - 100);
  basket1.addImage("basket1", basketImg);
  basket1.setCollider("rectangle", 0, -60, 130, 30);
  basket1.scale = 0.4;

  basket2 = createSprite(width / 2, height / 2);
  basket2.addImage("basket2", basketImg);
  basket2.setCollider("rectangle", 0, -60, 130, 30);
  basket2.scale = 0.4;

  basket3 = createSprite(width / 2, height / 2 - 300);
  basket3.addImage("basket3", basketImg);
  basket3.setCollider("rectangle", 0, -60, 130, 30);
  basket3.scale = 0.4;

  basket4 = createSprite(width / 2, height / 2 - 600);
  basket4.addImage("basket3", basketImg);
  basket4.setCollider("rectangle", 0, -60, 130, 30);
  basket4.scale = 0.4;

  basket5 = createSprite(width / 2, height / 2 - 900);
  basket5.addImage("basket3", basketImg);
  basket5.setCollider("rectangle", 0, -60, 130, 30);
  basket5.scale = 0.4;

  basket6 = createSprite(width / 2, height / 2 - 1200);
  basket6.addImage("basket3", basketImg);
  basket6.setCollider("rectangle", 0, -60, 130, 30);
  basket6.scale = 0.4;

  basketGroup.add(basket1);
  basketGroup.add(basket2);
  basketGroup.add(basket3);
  basketGroup.add(basket4);
  basketGroup.add(basket5);
  basketGroup.add(basket6);
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}
