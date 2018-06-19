var sheetWidth=840;
var sheetHeight=560;
var cols=12;
var rows=8;
var width=sheetWidth/cols; //70
var height=sheetHeight/rows; // 70
var currentFrame=0;
function update(){
	currentFrame= ++currentFrame%cols;
	srcX= currentFrame*width;
	srcY=0;
}




//Width and height for our canvas
 var canvasWidth = 1200; 
 var canvasHeight = 1200;
 
 //the with and height of our spritesheet
 var spriteWidth = 1000; 
 var spriteHeight = 2800; 
 
 //we are having two rows and 8 cols in the current sprite sheet
 var rows = 2; 
 var cols = 8; 
 
 //The 0th (first) row is for the right movement
 var trackRight = 0; 
 
 //1st (second) row for the left movement (counting the index from 0)
 var trackLeft = 1; 
 
 //To get the width of a single sprite we divided the width of sprite with the number of cols
 //because all the sprites are of equal width and height 
 var width = spriteWidth/cols; 
 
 //Same for the height we divided the height with number of rows 
 var height = spriteHeight/rows; 
 
 //Each row contains 8 frame and at start we will display the first frame (assuming the index from 0)
 var curFrame = 0; 
 
 //The total frame is 8 
 var frameCount = 8; 

 //x and y coordinates to render the sprite 
 var x=0;
 var y=0; 
 
 //x and y coordinates of the canvas to get the single frame 
 var srcX=0; 
 var srcY=0; 
 
 //tracking the movement left and write 
 var left = false;
 
                        //Assuming that at start the character will move right side 
 var right = true;
 
 //Speed of the movement 
 var speed = 1; 
 
 //Getting the canvas 
 var canvas = document.getElementById('myCanvas');
 
 //setting width and height of the canvas 
 canvas.width = canvasWidth;
 canvas.height = canvasHeight; 
 
 //Establishing a context to the canvas 
 var ctx = canvas.getContext("2d");
 
//Creating an Image object for our character 
 var character = new Image(); 
 
 //Setting the source to the image file 
 character.src = "Horse.png";

 function updateFrame(){

 ctx.clearRect(x,y,width,height);
 //Updating the frame index 
 curFrame = ++curFrame % frameCount; 
 
 //Calculating the x coordinate for spritesheet 
 srcX = curFrame * width; 
}
function draw(){
 //Updating the frame 
 updateFrame();
 //Drawing the image 
 ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}
	
setInterval (draw,1000);