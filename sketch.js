const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin,dustBinIMG;


function preLoad(){
  
	

}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


 ground1 = new ground(400,380,800,10);
 ground2 = new ground(0,380,800,10);
  side = new stick(710,300,15,90);
  side1 = new stick(600,300,15,90);
  side2 = new stick(610,380,100,10);
  
  dust = new photo(664,325,10,10);

    paper1 = new paper(200,200,10);
}

function draw() {
  background("white");  
  Engine.update(engine);
  ground1.display();  
  ground2.display();
  paper1.display();
  side.display();   
  side1.display();
  side2.display();
 dust.display();
  

  drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});

  }

  if(keyCode === LEFT_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-5,y:5});

  }

  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:-5});

  }

  if(keyCode === DOWN_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:5});

  }

}

