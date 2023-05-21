var foodX, foodY;
var ranX = [0,0,0,0], ranY = [0,0,0,0];
var lengthbox = 25;
var row = 20;
var col = 20;
var context;
var length = 5;
var frame;
var direction;
window.onload = () => {
  frame  =document.getElementById("frame");
     frame.height = lengthbox * row;
     frame.width = lengthbox * col;
    context = frame.getContext("2d");
       direction = 'R';
  newfood();
    document.addEventListener("keyup", changedirection);
    setInterval(draw, 100);
};

function draw() {
 
    context.fillStyle = "black";
    context.fillRect(0, 0, frame.width, frame.height);

  
 
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, lengthbox, lengthbox);

    for (let i = 0; i < length; i++) {
        context.fillStyle = "green";
        context.fillRect(ranX[i], ranY[i], lengthbox, lengthbox);
		

    };
    move();
    eatfood();
    checkcolistion();
    
}
function move() {
    for (let i = length; i > 0; i--) {
			ranX[i] = ranX[i - 1];
			ranY[i] = ranY[i - 1];
    }
    	switch (direction) {
		case 'U':
			ranY[0] -= lengthbox;
			break;
		case 'D':
			ranY[0] += lengthbox;
			break;
		case 'R':
			ranX[0] += lengthbox;
			break;
		case 'L':
			ranX[0] -= lengthbox;
			break;
		}
  
};

function newfood() {
    foodX = (Math.floor(Math.random() * 12)) * lengthbox;
     foodY=(Math.floor(Math.random() * 20))*lengthbox;
    
};
function eatfood() {
      if ((ranX[0] == foodX)&&(ranY[0]==foodY) ){
        length++;
        newfood();
    }  
};
function checkcolistion() {
    if (ranX[0]==(frame.width+25)||ranX[0]==0-25||ranY[0]==frame.height+25||ranY[0]==-50) {
        alert("Game over");
    }
    
    for (let i = 1; i < length; i++){
        if ((ranX[0] == ranX[i]) && (ranY[0] == ranY[i])) {
             alert("Game over");
        }
    }
    
};
function changedirection(e) {
    if (e.code== "ArrowDown"&&direction!='U') {
        direction = 'D';
     
    }else  if (e.code== "ArrowUp"&&direction!='D') {
        direction = 'U';
     
    }else  if (e.code== "ArrowRight"&&direction!='L') {
        direction = 'R';
     
    }else  if (e.code== "ArrowLeft"&&direction!='R') {
        direction = 'L';
     
    }
    
}