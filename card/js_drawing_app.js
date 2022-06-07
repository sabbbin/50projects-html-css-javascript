

let increase=document.querySelector('.fa-plus')
let decrease= document.querySelector('.fa-minus')
let size= document.querySelector('.brush_size')

let brushsize=2

increase.addEventListener('click', increa)
decrease.addEventListener('click', decrea)




let canvas=document.querySelector('.canvas')
var ctx=canvas.getContext('2d')
let color='black'
var isPressed=false; 
var x;
var y;

canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
 
    
     
})
canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;
    x=undefined;
    y=undefined;
   
})

canvas.addEventListener('mousemove',(e)=>{
    
    if (isPressed){
        var x2=e.offsetX;
        var y2=e.offsetY;
    
        circle(x,y)
        drawLine(x,y,x2,y2)
        x=x2
        y=y2
    }
    
})

function circle(x,y){
  ctx.beginPath()
  ctx.arc(x,y,brushsize,0,2*Math.PI);
  ctx.fillStyle=color 
  ctx.fill()
}


function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=brushsize*2;
    ctx.stroke()
}


function increa(){

    brushsize++;
    if (brushsize>20){
        brushsize=20;
    }
    size.innerHTML=brushsize
}
function decrea(){
    brushsize--;
    if (brushsize<0){
        brushsize=0;
    }
    size.innerHTML=brushsize
}