var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext('2d');

var x = 100, y = 100;
var speedX = 5, speedY = 3;
var radius = 25;
var color = "rgb(255,255,255)";
var framePerSecond = 100;
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
    this.playBall = function(){
        drawBall(this.x,this.y,this.radius,this.color);
        if(this.x>=document.body.clientWidth || this.x<=0){
            this.speedX = -this.speedX;
            this.randomBall();
        }
        if(this.y>=document.body.clientHeight || this.y<=0){
            this.speedY = -this.speedY;
            this.randomBall();
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

setInterval(() => {
    drawCanvas();
    for(var i=0 ; i<balls.length ; i++){
        balls[i].playBall();
    }
}, 1000/framePerSecond);

window.onload = function(){
    this.drawCanvas();
    canvas.addEventListener("click",function(){
        balls[size] = new Ball(x,y,radius,speedX,speedY,color);
        size += 1;
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