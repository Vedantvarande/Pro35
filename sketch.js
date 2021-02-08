var balloon, background;
var database;
var position;


function preload() 
{
  backgroundImg = loadImage("1.png");
  balloonImage = loadAnimation("2.png","3.png","4.png");
}

function setup()
{
   database = firebase.database();
  createCanvas(500,500);

  balloon = createSprite (100,400, 20, 20);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;

  var ballPosition = database.ref('balloon/position');
   ballPosition.on("value",readPosition,showError);

}

function draw()
{

    background(backgroundImg);
  
    if(position!==undefined)
    {
    if(keyDown(LEFT_ARROW))
    {
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW))
    {
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
        drawSprites();
       }
    }

    function changePosition(x,y)
{
    database.ref('balloon/position').set({
        'x': position.x + x ,
        'y': position.y + y
      })
}

function readPosition(data)
{
    position = data.val();
    console.log(position.x);
    balloon.x = position.x;
    balloon.y = position.y;
}

function showError()
{
  console.log("Error in writing to the database");
}