var canvas=document.querySelector("canvas");
// canvas.width=500p;
// canvas.height=window.innerHeight;
var x=100;
var y=500;
var j=100;
var k=300;
var add=Math.random()*3+1;
var add2=Math.random()*3+1;
var com2X= 100;
var com2Y= 950;
var comX= 100;
var comY= 750;
//Sprite parameters
var cx=100;
var cy=100;
var sx=0;
var sy=0;
var swidth=75;
var sheight=90;
var difference=0;
var game = new Audio('StartGame.mp3');
var gamePlay= new Audio('Horsesound.mp3')
var win = new Audio('251419__tritus__you-win-the-fight (1).aiff')

document.addEventListener("keydown",keyPush);

function keyPush(evt){

	switch(evt.keyCode){
		case 65:
		case 68:
		j+=20;
		break;

		case 188:
		case 190:
		x +=20;
		break;
	}
}

var ci = document.getElementById("myCanvas");
var c=ci.getContext('2d');
var doAnim=false;

var start=document.querySelector('#start')
start.addEventListener("click",function(){
	doAnim=true;
window.requestAnimationFrame(draw);

})
buildMap();
finishLine();
fence();
instructions();
function draw(){
if(doAnim==true){
c.clearRect(0,0,2000,2000);
game.play()
gamePlay.play();
//create 1 additional player if its'a one player game
// finishLine();//tell the position of each player
// countDown();//countdown 3 2 1 and then sound horn then play audio throughout
buildMap();
finishLine();
fence();
player1();
player2();
computer1();
computer2();
// horn();
checkWin();
var store=window.requestAnimationFrame(draw);
}
else{
	game.pause();
	gamePlay.pause();
	win.play();
	announceWinner();
}
}

function instructions(){
	c.fillStyle="black";
	c.font="30px Arial";
	c.fillText("Controls: ",100,1150)
	c.fillText("1st Player: ",100,1200)
	c.fillText("A      D", 100,1250)
	c.fillText("2nd Player: ",400,1200)
	c.fillText("<      >", 400,1250)
	// c.fillStyle("black");
	// (+"1st Player: A D buttons\n"+"2nd Player: < > buttons",100,1150)
}

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function playAudio(){
	for(var i=0; i<20;i++){
	game.play();
	gamePlay.play()
	win.play()
}
}
	// var time1= Math.random()*1000+800;
	// var time2= Math.random()*1000+800;
	// console.log(time1);
	// console.log(time2);
	// var com1=setInterval(computer1,time1)
	// var com2=setInterval(computer2,time2);

// function horse(){
// var sprite= new Image();
// sprite.src="Horses.png";
// c.drawImage(sprite,sx,sy,swidth,sheight,cx,cy,140,136)
// console.log('Horse');
// }

function player1(){
c.beginPath();
// c.arc(j,k,20,0,Math.PI*2,false);
var sprite= new Image();
sprite.src="Horseactual.png";
c.drawImage(sprite,sx,sy,65,90,x,y,160,200)
c.fillStyle='rgba(255,255,0)';
c.fill()
c.stroke();
}
//Player 2
function player2(){
c.beginPath();
var sprite= new Image();
sprite.src="rsz_owls.png";
c.drawImage(sprite,sx,sy,65,90,j,k,160,200)
c.fillStyle='rgba(255,255,0)';
c.fill()
c.stroke();
}

function computer1(){
c.beginPath();
var sprite= new Image();
sprite.src="rsz_chicken.png";
c.drawImage(sprite,sx,sy,50,90,comX,comY,160,200)
// c.arc(comX,comY,20,0,Math.PI*2,false);
comX= comX+add;
c.fillStyle='rgba(255,255,0)';
c.fill()
c.stroke();
}
function computer2(){
//Computer 2
c.beginPath();
var sprite= new Image();
sprite.src="rsz_crabs.png";;
c.drawImage(sprite,sx,sy,50,90,com2X,com2Y,160,200)
// c.arc(com2X,com2Y,20,0,Math.PI*2,false);
com2X=com2X+add2;
c.fillStyle='rgba(255,255,0)';
c.fill()
c.stroke();
}

// need to create a function to make two cirlces and ensure that cleaing of rectangle will end up with the updating of both circles

function buildMap(){
	 c.beginPath();
	 c.rect(100,100,1500,1000)
	 c.fillStyle='green';
	 c.fill();
	 c.stroke();
}
function fence(){
	for(var i=0; i<5;i++){
	c.beginPath();
	var width= 160*1.4*i 
	c.rect(100,width,1330,10)
	c.fillStyle='chocolate';
	c.fill();
	c.stroke();
}
	// c.
}
function finishLine(){
	c.beginPath();
	c.rect(1425,100 ,10,1000)
	c.fillStyle='black';
	c.fill();
	c.stroke();
}

// function chips(){
// 	for(var i =0;i<6;i++){

// 	c.arc(j,k,20,0,Math.PI*2,false);
// }
// }



function checkWin(){
	if(x>=1430 || j>=1430 || comX>=1430 || com2X>=1430){
		doAnim=false;
	}
}
function horn(){
	c.beginPath()
	var horn= new Image();
	horn.src="Horn.png"
	c.drawImage(horn,sx,sy,100,100,230,432,425,424)
	c.fillStyle='black';
	c.fill();
	c.stroke();
}

// Need to get 1st,2nd and 3rd
function announceWinner(){
	console.log(x+'x');
	console.log(j+'j');
	console.log(comX+'com1');
	console.log(com2X+'com2');


	var storeVal = [
		{
			name: 'Player 2',
			value: x
		},
		{
			name: 'Player 1',
			value: j
		},
		{
			name:'Player 3',
			value:comX
		},
		{
			name:'Player 4',
			value:com2X
		}
	];
	

	storeVal.sort(function(a,b){
		return a.value < b.value;
	})
		console.log(storeVal);

		var first= storeVal[0].name;
		var second= storeVal[1].name;
		var third= storeVal[2].name;
		alert("The winner is "+first+"\n The 1st runner up is "+second+"\n The 2nd runner up is "+third);
		toggleModal();

}
