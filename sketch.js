
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ground,paper;
var block1,block2,block3,paperObject;


function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    
	paper = new Paper(100,300,20);
	ground=new Ground(400,690,800,20);
	
	block1=createSprite(width/2,height-50,200,20)
	block1.shapeColor=color("white");
	block2=createSprite(510,610,20,100);
	block2.shapeColor=color("white");
	block3=createSprite(310,610,20,100)
	block3.shapeColor=color("white")
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  
  drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-45});
	}
}


