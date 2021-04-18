
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

//Declare launcherObject and launchForce variable here
var launcherObject
var launchForce = 100

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,20);
  mango2=new mango(1170,130,20);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,15);
	mango5=new mango(1100,70,10);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,20);
	mango8=new mango(1140,150,20);
	mango9=new mango(1100,230,30);
	mango10=new mango(1200,200,25);
	mango11=new mango(1120,50,25);
	mango12=new mango(900,160,30);
  mango13=new mango(1095,150,20);
  mango14=new mango(1050,180,23);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,580,width,40);
  //create launcherObject here
 launcherObject = new Launcher(stoneObj.body, {x: 235,y: 420})

	Engine.run(engine);
}

function draw() {

  background("lightblue");
  textSize(35);
  strokeWeight(6);
  stroke("black");
  fill("lightBlue");
  text("Press Space to get a second Chance to Play!!",80 ,50);

  stroke("brown");
  fill("yellow") 
  text("Let's See, How many Mangoes you're gonna ", 20, 200);
  text("eat today! (VIRTUALLY)", 40,240);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();

  stoneObj.display();
  groundObject.display();
  // display launcher object here
    launcherObject.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
  detectollision(stoneObj,mango13);
  detectollision(stoneObj,mango14);

  keyPressed();
  drawSprites();
}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x: mouseX,y: mouseY});

}

//create mouseReleased function here
function mouseReleased(){
  launcherObject.fly();
}

//create keyPressed function here
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
launcherObject.attach(stoneObj.body);
launcherObject = new Launcher(stoneObj.body, {x: 235,y: 420})
}
}

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }