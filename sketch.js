
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.5,
    frictionAir:0.05
  };
   
   var ground_options ={
     isStatic: true
   };


   var rock_options ={
    restitution: 0.91,
    frictionAir:0.01 
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(200,20,10,rock_options);
  World.add(world,rock);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  wall = Bodies.rectangle(300,200,200,20,ground_options);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
  
  
}

