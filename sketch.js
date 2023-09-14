var path;
var oggy;
var joey,marky,deedee;
var jack;
var olivia;
var bob;

var pathImg;
var oggyImg;
var joeyImg,markyImg,deedeeImg;
var jackImg;
var oliviaImg;
var bobImg;

var joeyCG,markyCG,deedeeCG;
var jackCG;
var oliviaCG;
var bobCG;

var END = 0;
var PLAY = 1;
var gameState = PLAY;

var kills = 0;
var gameOver,restart;

function setup() {
  createCanvas(700,700);
   path = createSprite(500,350);
   path.addImage(pathImg);
   path.velocityY = -5;

   oggy = createSprite();
   oggy.addAnimation();
   oggy.scale = 0.07;

   oggy.setCollider();

   gameOver = createSprite();
   gameOver.addImage();
   gameOver.scale = 0.8;
   gameOver.visible = false;

   joeyCG = newGroup();
   markyCG = newGroup();
   deedeeCG = newGroup();
   jackCG = newGroup();
   oliviaCG = newGroup();
   bobCG = newGroup();
}


function draw() {
  background(0);  
  
  drawSprites();

  textSize(20);
  fill(255);
  text("Kills="+kills,200,50);

  if(gameState===PLAY){
    
    kills = kills + Math.round(getFrameRate()/50);
    path.velocityY = -(6 + 2*kills/150);
   
    oggy.x = World.mouseX;
   
    edges = createEdgeSprites();
    oggy.collide(edges);
   
    if(path.y < 0 ){
     path.y = height/2;
   }
  }
  

}