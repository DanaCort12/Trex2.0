var trex, trex_running, edges;
var groundImage;
var ground;
var sueloinvisible;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  // crear sprite suelo
  ground = createSprite (300,170,600,10);
  ground.addImage("ground", groundImage);
  ground.velocityX = -3;

  //agregar tamaño y posición al Trex
  trex.scale = 0.6;
  trex.x = 50

  // suelo invisible
  sueloinvisible = createSprite (200,180,400,10);
  sueloinvisible.visible = false;
}


function draw(){
  //establecer color de fondo.
  background("pink");
  
  //cargar la posición Y del Trex
  console.log(trex.y)
  
  if (keyDown ("space") && trex.y >= 100){
    trex.velocityY = -8; 
  }

  if (ground.x < 0 ){
    ground.x = 1000;
  }

  trex.velocityY = trex.velocityY + 0.9

  trex.collide(sueloinvisible);
  drawSprites();
}
