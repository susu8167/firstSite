
var modeBG = document.querySelector(".modeBG");
var PVP = document.querySelector(".playerMode");
var Com = document.querySelector(".computerMode");

PVP.addEventListener("click",function(){
    modePVP = true;
    modeBG.style.display = "none";
    playerM();
})

Com.addEventListener("click",function(){
    modePVP = false;
    modeBG.style.display = "none";
    comM();
})

var td = document.querySelectorAll("td");
var bingo = [["td1","td2","td3"],
["td4","td5","td6"],
["td7","td8","td9"],
["td1","td4","td7"],
["td2","td5","td8"],
["td3","td6","td9"], 
["td1","td5","td9"],
["td7","td5","td3"]]

var display1 = document.querySelector(".player1Score");
var display2 = document.querySelector(".player2Score");
var message = document.querySelector(".message");

var player1 = [];
var player2 = [];
var computer = [];
var turn1 = true; //false == player2's turn, otherwise player1
var taken = [];
var win = false;

function init(){
    player1 = [];
    player2 = [];
    computer = [];
    turn1 = true;
    taken = [];
    win = false;
    td.forEach(function(cell){
        cell.innerHTML = "";
    });
    message.textContent = "Player1 GO!";
    message.classList.remove("click");
    message.removeEventListener("click",init);
}

function checkWin(playerArr){
    var match = 0;
    bingo.forEach(function(array){
        if(win == false){
            for(var i=0 ; i<array.length ; i++){
                for(var j=0 ; j<playerArr.length ; j++){
                    if(array[i] == playerArr[j]){
                        match++;
                    }
                }
            }
            if(match == 3){
                win = true;
                return;
            }
            else{
                match = 0;
            }
        }
    });
}

function gameOver(){
    var over = true;
    td.forEach(function(event){
        if(!event.innerHTML){
            over = false;
        }
    });
    return over;
}


function playerM(){

    message.textContent = "Player1 GO!";
    document.querySelector(".player2").textContent = "Player2 (O)";
    td.forEach(function(event){
        event.addEventListener("click",function(){ // player vs player
            var val = this.getAttribute("class");
            var run = true;
            taken.forEach(function(i){
                if(val == i){
                    run = false;
                }
            });
            if(!win && run){
                if(turn1){
                    event.innerHTML = "&times;";
                    player1.push(val);
                    taken.push(val);
                    console.log("play1 " + val);
                    turn1 = false;
                    checkWin(player1);
                    if(win){
                        console.log("Player0 win!");
                        display1.textContent = String(Number(display1.textContent) + 1);
                        message.classList.add("click");
                        message.textContent = "Play Again?";
                        message.addEventListener("click",init);
                    }
                    else if(gameOver()){
                        console.log("draw");
                        message.classList.add("click");
                        message.textContent = "Play Again?";
                        message.addEventListener("click",init);
                    }
                    else{
                        message.textContent = "Player2 GO!";
                    }
                }
                else{
                    event.innerHTML = "&omicron;";
                    player2.push(val);
                    taken.push(val);
                    console.log("play1 " + val);
                    turn1 = true;
                    checkWin(player2);
                    if(win){
                        console.log("Player1 win!");
                        display2.textContent = String(Number(display2.textContent) + 1);
                        message.classList.add("click");
                        message.textContent = "Play Again?";
                        message.addEventListener("click",init);
                    }
                    else if(gameOver()){
                        console.log("draw");
                        message.classList.add("click");
                        message.textContent = "Play Again?";
                        message.addEventListener("click",init);
                    }
                    else{
                        message.textContent = "Player1 GO!";
                    }
                }
            }
        })
    });
}




function comM(){

    message.textContent = "Player1 GO!";
    document.querySelector(".player2").textContent = "Computer (O)";
    function computerPlay(){
        var rand = Math.floor(Math.random()*(9-taken.length)) + 1;
        console.log("rand=",rand);
        var chosen = -1;
        for(var i=0; i<rand; i++){
            chosen++;
            var available = true;
            taken.forEach(function(e){
                if(e == "td" + String(chosen+1)){
                    available = false;
                }
            });
            while(!available){ //while chosen is already taken
                chosen++;
                available = true;
                taken.forEach(function(e){
                    if(e == "td" + String(chosen+1)){
                        available = false;
                    }
                });
            }; //return the random index(1-9) which isn't taken
        }
        setTimeout(() => {
            console.log(chosen);
            console.log(td[chosen].getAttribute("class"));
            td[chosen].innerHTML = "&omicron;";
            var val = td[chosen].getAttribute("class");
            taken.push(val);
            computer.push(val);
            turn1 = true;
            checkWin(computer);
            if(win){
                console.log("Computer win!");
                display2.textContent = String(Number(display2.textContent) + 1);
                message.classList.add("click");
                message.textContent = "Play Again?";
                message.addEventListener("click",init);
            }
            else if(gameOver()){
                console.log("draw");
                message.classList.add("click");
                message.textContent = "Play Again?";
                message.addEventListener("click",init);
            }
            else{
                message.textContent = "Player1 GO!";
                }
        }, 1000);
    };

    td.forEach(function(event){
        event.addEventListener("click",function(){
            var val = this.getAttribute("class");
            var run = true;
            taken.forEach(function(i){
                if(val == i){
                    run = false;
                }
            });
            if(!win && run){
                if(turn1){
                    event.innerHTML = "&times;";
                    player1.push(val);
                    taken.push(val);
                    console.log("play0 " + val);
                    turn1 = false;
                    checkWin(player1);
                    if(win){
                        console.log("Player0 win!");
                        display1.textContent = String(Number(display1.textContent) + 1);
                        message.classList.add("click");
                        message.textContent = "Play Again?";
                        message.addEventListener("click",init);
                    }
                    else if(gameOver()){
                        console.log("draw");
                        message.classList.add("click");
                        message.textContent = "Play Again?";
                        message.addEventListener("click",init);
                    }
                    else{
                        message.textContent = "Computer GO!";
                        computerPlay();
                    }
                }
            }
        })
    });
}