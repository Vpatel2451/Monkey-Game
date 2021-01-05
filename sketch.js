
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var Ground
var score

var grass;

function preload(){
  
  

  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   
  createCanvas(600,600);
    
  monkey = createSprite (80,515,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  Ground = createSprite(500,800,900,10)
  Ground.velocityX=-4;
  Ground.x=Ground.widht/2;
  console.log(Ground.x)
  
   FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
}


function draw() {
background('white')
  drawSprites();
  spawnBananas();
}

function spawnBananas(){
  if (frameCount % 80 === 0){
    var banana = createSprite(600,515,10,10);
    banana.velocityX = -(6 + score/100);
    banana.addImage(bananaImage);
    
    banana.y = Math.round(random(120,200));
    
    banana.lifetime = 400;
    banana.scale = 0.5;
     FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount % 60=== 0){
    var obstacle = createSprite(80515,10,10);
    obstacle.velocityX = -(6 + score/100);
    obstacle.addImage(obstacleImage);
    
    obstacle.y = Math.round(random(120,200));
    
    obstacle.lifetime = 400;
    obstacle.scale = 0.5;
    obstacleGroup.add(obstacle);
    
    
  }
}



