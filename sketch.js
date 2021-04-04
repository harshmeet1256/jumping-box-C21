var canvas, surface1, surface2, surface3, surface4, box;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");

}

function setup(){
    canvas = createCanvas(800,600);

    

//creating 4 different surfaces
    surface1=createSprite(100,590,190,40);
    surface1.shapeColor="blue";
    surface2=createSprite(300,590,190,40);
    surface2.shapeColor="yellow";
    surface3=createSprite(500,590,190,40);
    surface3.shapeColor="red";
    surface4=createSprite(700,590,190,40);
    surface4.shapeColor="green";
    
//creating the box
    box=createSprite(100,100,40,40);
    box.shapeColor=(300);
    box.velocityY=3;
    box.velocityX=-7;
    
}

function draw() {
  background("grey");

  edges=createEdgeSprites();
  box.bounceOff(edges);
  
  //calling the functions

  if(surface4.isTouching(box))
  {
    music.play();
    box.shapeColor="green"; 
  }
  if(surface1.isTouching(box))
  {
    music.play();
    box.shapeColor="blue"; 
  }

  if(surface2.isTouching(box))
  {
    music.play();
    box.shapeColor="yellow"; 
    box.velocityX=0;
    box.velocityY=0;
  }

  if(surface3.isTouching(box))
  {
    music.play();
    box.shapeColor="red"; 
  }


    drawSprites();
}
