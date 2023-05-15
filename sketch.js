
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,right,down;
var ball;
var ground
let engine;
let world;
function preload()
{
	
}

function setup() {
	createCanvas(600,600);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,470,width,20);
	right=new Ground(390,200,20,400);
	left=new Ground(350,200,20,400);
	
	

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options);
	ground=Bodies.rectangle(600,400,400,20)
	World.add(world,ball)
	rectMode(CENTER)
	ellipseMode(RADIUS)
	Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
	
	ellipse(ball.position.x,ball.position.y,20)
	rect(ground.position.x,ground.position.y)
  drawSprites();

}
 function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-1})
	}
 }
