var canvas =document.getElementById("myCanvas");
var ctx =canvas.getContext("2d");

var color="pink";
var penwidth=3;
var mouse_event;
var start_X,start_Y,end_X,end_Y;

canvas.addEventListener("mouseup" , mymouseup);

function mymouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave" , mymouseleave);

function mymouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousedown" , mymousedown);

function mymousedown(e){
    mouse_event="mousedown";

    start_X=e.clientX - canvas.offsetLeft;
    start_Y=e.clientY - canvas.offsetTop;

}


canvas.addEventListener("mousemove" , mymousemove);

function mymousemove(e){
   
    end_X=e.clientX - canvas.offsetLeft;
    end_Y=e.clientY - canvas.offsetTop;
     
    if(mouse_event=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = penwidth;
     
     
        ctx.arc(start_X,start_Y,30,0,2*Math.PI);
        ctx.stroke();

    }
    start_X=end_X;
    start_Y=end_Y;
      
}


function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function set(){
        color=document.getElementById("color_inp").value;
}