
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var pipe;
var rope1,roofObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	pipe = new Roof(200,100,120,20);
	pipe.shapeColor = "white";

	bobobject1 = new Bob(200,600,70,70);
	bobobject1.shapeColor = "pink";
	bobobject2 = new Bob(270,600,70,70);
	bobobject2.shapeColor = "pink";
	bobobject3 = new Bob(340,600,70,70);
	bobobject3.shapeColor = "pink";
	bobobject2 = new Bob(410,600,70,70);
	bobobject4.shapeColor = "pink";
	bobobject5 = new Bob(480,600,70,70);
	bobobject5.shapeColor = "pink";

	roofObject = new Roof(100,50,200,10);
	rope1 = new Rope(bobobject1.body,roofobject.body,bobDiameter*2,0);
	rope2 = new Rope(bobobject2.body,roofobject.body,-bobDiameter*2,0);
	rope3 = new Rope(bobobject2.body,roofobject.body,-bobDiameter*2,0);
	rope4 = new Rope(bobobject2.body,roofobject.body,-bobDiameter*2,0);
	rope5 = new Rope(bobobject2.body,roofobject.body,-bobDiameter*2,0);
	rope6 = new Rope(bobobject2.body,roofobject.body,-bobDiameter*2,0);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  pipe.display();
  roofObject.display();
  rope1.display();
  
  drawSprites();
 
}


