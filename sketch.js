
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
//var invisibleGround;
//var invisibleGroundGroup;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 700);
	engine = Engine.create();
	world = engine.world;

	// create more objects for ground class
	groundObj=new Ground(width/2,670,width,20);
	leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(1300,600,20,120);
    // assign properties to ball
	var ball_options={
		isStatic:false,
		restitution:0.003,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
    ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	//invisibleGround = createSprite(1200,670,170,20);
	//invisibleGround.visible = false;
	//invisibleGroundGroup = createGroup();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  // display ball on canvas using ellips ()
  ellipse(ball.position.x,ball.position.y,20);

  //invisibleGroundGroup.add(invisibleGround);
  //if(invisibleGroundGroup.isTouching(ball)){
	//  ball.restitution = 0;
 //}

 //if(ball.x===1200 && ball.y===670){
	// ball.restitution = 0;
// }
  // write function to display the ground objects on canvas
  groundObj.show();
  leftSide.show();
  rightSide.show();
  drawSprites();
  keypressed();
}

// make the ball jump and fall in the bucket when up arrow key is pressed 
function keypressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.1});
	}
}

