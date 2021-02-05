var balloon, background;
var database;


function preload() 
{
  backgroundImg = loadImage("1.png")
  balloonImage = loadAnimation("2.png","3.png","4.png");
}

function setup()
{
   database = firebase.database();
   console.log(database);
    createCanvas(500,500);

balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;
}

function draw()
{

    background(backgroundImg);
  
        if(keyDown(LEFT_ARROW)){
            balloon.x = balloon.x - 10;
        }
        else if(keyDown(RIGHT_ARROW)){
            balloon.x = balloon.x + 10;
        }
        else if(keyDown(UP_ARROW)){
            balloon.y = balloon.y - 10;
        }
        else if(keyDown(DOWN_ARROW)){
             balloon.y = balloon.y + 10;
        }
        drawSprites();
       }

    


