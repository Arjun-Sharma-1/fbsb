
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball
var ground
var bin,bin2,bin3
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(400,690,800,20);
	bin=new Bin (650,665,200,20);
	bin2=new Bin (760,575,20,200);
	bin3=new Bin (540,575,20,200);
	ball= new Ball(30,600,40,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bin.display();
  bin2.display();
  bin3.display();
  ball.display();
 
}
function keyPressed(){
	if(keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-75});
	}
}
