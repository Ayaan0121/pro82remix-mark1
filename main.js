//canvas

canvas=document.getElementById("myCanvas");
//variable ctx
ctx = canvas.getContext("2d");
//colur setting var
color ="blue"
color2 ="black"
color3 ="red"
color4 ="yellow"
color5 ="green"
all= 
//style to circle
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
//function
canvas.addEventListener("mousedown", my_mouseDown);
//function mouse down
function my_mouseDown(e){
    color=document.getElementById("colour").value;
    
    console.log("x ="+ mouse_x + "  y =" + mouse_y)
}
//function circle
function  circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function  circle2(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function  circle3(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function  circle4(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function  circle5(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
 //celar
 function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
 }
 ctx.clearRect(0,0,canvas.width,canvas.height);

    mouse_x=228;
    mouse_y=267;
    mouse_2x=314;
    mouse_2y=265;
    mouse_3x=400;
    mouse_3y=255;
    mouse_4x=278;
    mouse_4y=312;
    mouse_5x=371;
    mouse_5y=305;
    circle(mouse_x,mouse_y );
    ctx.strokeStyle=color2;
    circle2(mouse_2x,mouse_2y );
    ctx.strokeStyle=color3;
    circle3(mouse_3x,mouse_3y );
    ctx.strokeStyle=color4;
    circle4(mouse_4x,mouse_4y );
    ctx.strokeStyle=color5;
    circle5(mouse_5x,mouse_5y );
   