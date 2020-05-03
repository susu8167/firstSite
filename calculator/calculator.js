
var current = "";
var calArr = [0];
var calSize = 0;
var btnResult = document.querySelector("#result");

var btnAC = document.querySelector("#AC");
var btnSign = document.querySelector("#sign");
var btnPercent = document.querySelector("#percent");
var btnDivide = document.querySelector("#divide");
var btnMultiply = document.querySelector("#multiply");
var btnMinus = document.querySelector("#minus");
var btnDecimal = document.querySelector("#decimal");
var btnequal = document.querySelector("#equal");
var btnPlus = document.querySelector("#plus");

var btnBack = document.querySelector("#back");
var changeColor = document.querySelector("#changeColor");
var cal = document.querySelector("#calculator");
var calBorder = document.querySelector("#calculatorBorder");

var btnZero = document.querySelector("#zero");
var btnOne = document.querySelector("#one");
var btnTwo = document.querySelector("#two")
var btnThree = document.querySelector("#three");
var btnFour = document.querySelector("#four");
var btnFive = document.querySelector("#five");
var btnSix = document.querySelector("#six");
var btnSeven = document.querySelector("#seven");
var btneight = document.querySelector("#eight");
var btnNine = document.querySelector("#nine");

function randomRGB(){ // return RGB(xxx,xxx,xxx)
    var r = Math.random()*256;
    var g = Math.random()*256;
    var b = Math.random()*256;
    return "rgb("+r+", "+g+", "+b+")";
};

changeColor.addEventListener("click",function(){
    var color = randomRGB();
    calBorder.style.background = color;
    calBorder.style.borderColor = color;
    var anotherColor = randomRGB();
    cal.style.background = anotherColor;
});

function doMath(){
    switch(calArr[1]){
        case "+":
            calArr[0] = String(Number(calArr[0]) + Number(calArr[2]));
            break;
        case "-":
            calArr[0] = String(Number(calArr[0]) - Number(calArr[2]));
            break;
        case "*":
            calArr[0] = String(Number(calArr[0]) * Number(calArr[2]));
            break;
        case "/":
            calArr[0] = String(Number(calArr[0]) / Number(calArr[2]));
            break;
    }
    calSize = 1;
    calArr = [calArr[0]];
    current = "";
}

function updateUI(){
    if(current){
        if(current.length > 8){
            btnResult.textContent = Number.parseFloat(current).toExponential(3);
        }
        else{
            btnResult.textContent = current;
        }
    }
    else{
        if(calArr[0].length > 8){
            btnResult.textContent = Number.parseFloat(calArr[0]).toExponential(3);
        }
        else{
            btnResult.textContent = calArr[0];
        }
    }

    if(calArr[0] == "0.25278552716001"){
        btnBack.setAttribute("href","../gallery/imageGallery.html");
    }
    else{
        btnBack.setAttribute("href","../index.html");
    }
}

btnAC.addEventListener("click",function(){
    current = "";
    calArr = [0];
    calSize = 0;
    updateUI();
});

btnSign.addEventListener("click",function(){
    if(current){
        if(current[0] != "-"){
            current = "-" + current;
        }
        else{
            current = current.slice(1);
        }
    }
    else{
        current = calArr[0];
        if(current[0] != "-"){
            current = "-" + current;
        }
        else{
            current = current.slice(1);
        }
        calArr = [];
        calSize = 0;
    }
    updateUI();
})

btnPercent.addEventListener("click",function(){
    if(current){
        current = current * 0.01;
        updateUI();
    }
})

btnequal.addEventListener("click",function(){

    if(current != ""){
        calArr[calSize] = current;
        calSize++;
        current = "";
    }

    if(calSize == 3){
        doMath();
    }
    updateUI();
})

btnDivide.addEventListener("click",function(){
    if(current != ""){
        calArr[calSize] = current;
        calSize++;
        current = "";
    }

    if(calSize == 3){
        doMath();
        calArr[1] = "/";
        calSize = 2;
    }
    else if(calSize == 1){
        calArr[1] = "/";
        calSize = 2;
    }
    else if(calSize == 2){
        calArr[1] = "/";
    }
    updateUI();
})

btnMultiply.addEventListener("click",function(){
    if(current != ""){
        calArr[calSize] = current;
        calSize++;
        current = "";
    }

    if(calSize == 3){
        doMath();
        calArr[1] = "*";
        calSize = 2;
    }
    else if(calSize == 1){
        calArr[1] = "*";
        calSize = 2;
    }
    else if(calSize == 2){
        calArr[1] = "*";
    }
    updateUI();
})

btnMinus.addEventListener("click",function(){
    if(current != ""){
        calArr[calSize] = current;
        calSize++;
        current = "";
    }
    if(calSize == 3){
        doMath();
        calArr[1] = "-";
        calSize = 2;
    }
    else if(calSize == 1){
        calArr[1] = "-";
        calSize = 2;
    }
    else if(calSize == 2){
        calArr[1] = "-";
    }
    updateUI();
})

btnPlus.addEventListener("click",function(){
    if(current != ""){
        calArr[calSize] = current;
        calSize++;
        current = "";
    }
    if(calSize == 3){
        doMath();
        calArr[1] = "+";
        calSize = 2;
    }
    else if(calSize == 1){
        calArr[1] = "+";
        calSize = 2;
        current = "";
    }
    else if(calSize == 2){
        calArr[1] = "+";
    }
    updateUI();
})

btnZero.addEventListener("click",function(){
    if(current && current != "-0" && current != "0"){
        current = current + "0";
        updateUI();
    }
})

btnOne.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "1";
    }
    else{
        current = current + "1";
    }
    updateUI();
})

btnTwo.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "2";
    }
    else{
        current = current + "2";
    }
    updateUI();
})

btnThree.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "3";
    }
    else{
        current = current + "3";
    }
    updateUI();
})

btnFour.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "4";
    }
    else{
        current = current + "4";
    }
    updateUI();
})

btnFive.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "5";
    }
    else{
        current = current + "5";
    }
    updateUI();
})

btnSix.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "6";
    }
    else{
        current = current + "6";
    }
    updateUI();
})

btnSeven.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "7";
    }
    else{
        current = current + "7";
    }
    updateUI();
})

btneight.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "8";
    }
    else{
        current = current + "8";
    }
    updateUI();
})

btnNine.addEventListener("click",function(){
    if(current == "-0" || current == "0"){
        current = current.slice(0,-1) + "9";
    }
    else{
        current = current + "9";
    }
    updateUI();
})

btnDecimal.addEventListener("click",function(){
    var decimal = false;
    for(var i=0;i<current.length;i++){
        if(current[i] == "."){
            decimal = true;
        }
    }
    if(!decimal){
        if(!current){
            current += "0.";
        }
        else{
            current += ".";
        }
    }
    updateUI();
})