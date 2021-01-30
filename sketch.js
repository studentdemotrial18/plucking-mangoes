var ground,boy,boyImg,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11
,stone,tree,treeImg,slingShot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
    boyImg=loadImage("boy.png");
    treeImg=loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(120,440,50,50);
	boy.addImage(boyImg);
    boy.scale=0.1;
    
    tree = createSprite(800,250,10,10);
    tree.addImage(treeImg);
    tree.scale=0.4;

    fill("grey");
	ground= Bodies.rectangle(500,490,1000,20, {isStatic:true});
	World.add(world,ground);

	stone = new Stone(70,383,30,30);
	mango1 =new Mango(766,111,40,40);
	mango2 =new Mango(750,50,40,40);
	mango3 =new Mango(800,50,40,40);
	mango4 =new Mango(850,50,40,40);
	mango5 =new Mango(950,190,40,40);
	mango6 =new Mango(860,103,40,40);
	mango7 =new Mango(800,160,40,40);
	mango8 =new Mango(670,172,40,40);
	mango9 =new Mango(744,190,40,40);
	mango10 =new Mango(857,177,40,40);
	mango11 =new Mango(929,146,40,40);

    slingShot = new Throw(stone.body,{x:70,y:383});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,20);

  drawSprites();
  
  slingShot.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

  
  fill("black");
  textSize(25);
  text("Press Space to get a second chance",50,50);
}

function keyPressed(){
	if(keyCode===32){
        Matter.Body.setPosition(stone.body,{x:70,y:383});
        slingShot.attach(stone.body);
	}
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

    slingShot.fly();
}

function detectCollision(lstone,lmango){

    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
    //Added below lines of code
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance<lmango.width+lstone.width)
    {
        	  Matter.Body.setStatic(lmango.body,false);
    }
}



