

var model = document.querySelector(".model");
var img = document.querySelectorAll("img");
var modelImg = document.querySelector(".model-content");
var close = document.querySelector(".close");

img.forEach(function(event){
    event.addEventListener("click",function(){
        console.log("ok");
        model.style.display = "block";
        var src = this.getAttribute("src");
        modelImg.setAttribute("src",src);
    });
});

close.addEventListener("click",function(){
    model.style.display = "none";
    modelImg.setAttribute("src","");
})
