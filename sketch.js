var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image, bgImg2, titleImg; 
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; 
var cars = [];

function preload() {
  titleImg = loadImage("assets/title.png");

  bgImg2 = loadImage("assets/jungleroad.jpeg");
  backgroundImage = loadImage("assets/bg.jpg");
  start1 = loadImage("assets/start1.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track1.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  lifeImage = loadImage("assets/life.png");
  obstacle1Image = loadImage("assets/obstacle1.png"); 
  obstacle2Image = loadImage("assets/obstacle2.png"); 
  blastImage = loadImage("assets/blast.png"); //C42 //SA
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if( gameState != 2 ){
  background(backgroundImage); 
}
else{
  background(bgImg2);
}

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.level2();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
