var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext('2d');

var x = 100, y = 100;
var speedX = 15, speedY = 10;
var radius = 25;
var color = "rgb(255,255,255)";
var framePerSecond = 30;
var balls = [];
var size = 0;

Ball = function(x,y,radius,speedX,speedY,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
    this.randomBall = function(){
        this.radius = Math.random()*200;
        this.color = "rgb(" + String(Math.floor(Math.random()*256)) + "," + String(Math.floor(Math.random()*256)) + "," + String(Math.floor(Math.random()*256)) + ")";
    }
}

window.onload = function(){
    this.drawCanvas();
    canvas.addEventListener("click",function(){
        balls[size] = new Ball(x,y,radius,speedX,speedY,color);
        size += 1;
        setInterval(() => {
            drawCanvas();
            for(var i=0 ; i<balls.length ; i++){
                drawBall(balls[i].x,balls[i].y,balls[i].radius,balls[i].color);
                if(balls[i].x>=window.innerWidth || balls[i].x<=0){
                    balls[i].speedX = -balls[i].speedX;
                    balls[i].randomBall();
                }
                if(balls[i].y>=window.innerHeight || balls[i].y<=0){
                    balls[i].speedY = -balls[i].speedY;
                    balls[i].randomBall();
                }
                balls[i].x += balls[i].speedX;
                balls[i].y += balls[i].speedY;
            }
        }, 1000/framePerSecond);
    });
}

function drawCanvas(){
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,document.body.clientWidth,document.body.clientHeight);
}

function drawBall(x,y,radius,color){
    //canvasContext.fillStyle = 'red';
    //canvasContext.fillRect(x, y, 50, 50);
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, 2 * Math.PI, true);
    canvasContext.fillStyle = color;
    canvasContext.fill();
}