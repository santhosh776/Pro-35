var balloon,balloonImage1,balloonImage2;

// create database and position variable here
var database;
var position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1200,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
  var BallPosition=database.ref('ball/position');
  BallPosition.on("value",readPosition,showError);
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    changePosition(-2,0);
   
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    changePosition(2,0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    changePosition(0,-2);
    balloon.scale=balloon.scale-0.1
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    changePosition(0,2);
    balloon.scale=balloon.scale+0.1
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}
function changePosition(x,y){
  balloon.x=balloon.x + x
  balloon.y=balloon.y + y
}
function readPosition(data)
{
    position=data.val();
    Ball.x=position.x;
    Ball.y=position.y;
}
function updateHeight(x,y)
{
database.ref('balloon/height').set({
'x' : height.x + x ,
'y' : height.y + y

})
}
function showError()
{
  console.log("Error in writing to the database")
}
function readHeight()
{
  position=data.val();
  Balloon.x=position.x;
  Balloon.y=position.y;
}
