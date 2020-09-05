var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var monkeystopp
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  
createCanvas(600,600)

   monkey=createSprite(100,440,20,20);
  monkey.addAnimation("monkeyRun",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(300,450,600,20);

  
  
 bananaGroup= new Group()
 obstaclesGroup= new Group()
  
}


function draw() {

  background("lightblue");
    text("Score: "+ score, 500,50);
  
    if(gameState === PLAY){

     
     
if (bananaGroup.isTouching(monkey)) {
  bananaGroup.destroyEach();
  score=score+3;
}
  if(keyDown("space")&& monkey.y >= 390){
 monkey.velocityY=-15; 
  }    

  monkey.velocityY = monkey.velocityY + 0.8
   
      
      if(obstaclesGroup.isTouching(monkey)){
      gameState= END;
      }

      
  }
   else if (gameState === END) { 
  bananaGroup.setVelocityXEach(0);
  obstaclesGroup.setVelocityXEach(0);
  monkey.destroy();     
   }

  monkey.collide(ground);
  
banana();
obstacles();
drawSprites();
}


function obstacles (){

   
  if(frameCount%160==0){
  var obstacles = createSprite(700, 410, 20, 20);
  obstacles.velocityX=-10;
  obstacles.addAnimation("obstacles",obstacleImage);
  obstacles.scale=0.2;
  obstacles.lifetime=-1;
  obstaclesGroup.add(obstacles)
  }
}
  
function banana (){

   
  if(frameCount%80==0){
  var banana = createSprite(700, 410, 20, 20);
  banana.velocityX=-10;
  banana.addAnimation("banana",bananaImage);
  banana.scale=0.1;
  banana.lifetime=-1;
  banana.y=round(random(300,350)) 
  bananaGroup.add(banana)

  }
}




