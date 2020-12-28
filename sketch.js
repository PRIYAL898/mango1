
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,stone,mango,boy,ground,chain,boyImg;
var engine,world;

function preload()
{
	boyImg=loadImage("images/Priyal-mangoes-main/boy.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(650,740,20,248);

	stone = new Stone(70,420,90,90);

	mango=new Mango(140,200,100,100);

	//boy=new Boy(190,500,300,300);

	ground=new Ground(400,740,800,6);

	chain=new Chain(stone.body,{x:190 , y:500});

	//mango.depth=tree.depth+1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  strokeWeight(7);
  
  tree.display();
  stone.display();
  mango.display();
  ground.display();
  chain.display();

  imageMode(CENTER);
  image(boyImg,150,500,300,300);
  //drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
}
