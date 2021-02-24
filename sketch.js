const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, stone;
var sand1,sand2,sand3,sand4;
var rubber;
var hammer;
var iron;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, height-10, width, 20);
  
  stone = new Stone(800,320,100,100);
  rubber = new Rubber(1000, 350,);

  hammer=new Hammer(200,100);
}

function draw() {
  background("lightblue");

  Engine.update(engine);

  stone.display();
  rubber.display();
  hammer.display();
  ground.display(); 
}