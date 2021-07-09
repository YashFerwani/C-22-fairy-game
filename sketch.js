var starImg,bgImg;
var star, starBody;
var fairy, fairyAnimation;
var rightEdge;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
    fairyAnimation = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
    fairy =  createSprite(100,500,50,50);
    fairy.addAnimation("moving",fairyAnimation);
    fairy.scale = 0.15;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	rightEdge = createSprite(795,375,20,750);

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  rightEdge.visible = false;
    
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  
  if(fairy.isTouching(rightEdge)){
	  fairy.velocityX = 0;
	  fairy.x = 575;
  }
  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
      Matter.Body.setStatic(starBody, true);
}

  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
    if(keyCode === RIGHT_ARROW)	{
		fairy.velocityX = fairy.velocityX + 5;
	}
	if(keyCode === LEFT_ARROW)	{
		fairy.velocityX = fairy.velocityX - 5;
	}
}
