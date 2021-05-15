var last_position_of_x , last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthofline= 2 ;
var width = screen.width;
newwidth = screen.width - 70;
newheight = screen.height - 300;
if (width < 992){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    
console.log("my_touchstart");
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}




canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log ("my_touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last position of x and y are");
        console.log("x =" + last_position_of_x + ",y =" + last_position_of_y) ;
        ctx.moveTo (last_position_of_x ,last_position_of_y); 

        console.log("current position of x and y are");
        console.log("x =" + current_position_of_touch_x + ",y =" + current_position_of_touch_y) ;
        ctx.lineTo (current_position_of_touch_x ,current_position_of_touch_y); 
        ctx.stroke();
    
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;

}







