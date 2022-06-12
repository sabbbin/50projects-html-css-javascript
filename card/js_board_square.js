let boxwrapper=document.querySelector('.wrapper')
let color=[
    '#e74c3c', '#8e44ad','#3498db','#e67e22'
]

let box_num=1000;
for (let i=0;i<box_num;i++){
   let box = document.createElement('div')
   box.classList.add('box')
   box.addEventListener('mouseover',()=>setColor(box))
   box.addEventListener('mouseout',()=>removeColor(box))
   boxwrapper.appendChild(box)
}


function setColor(element){
 
    let color=randomColor()
 
    element.style.background=color
}

function removeColor(element){
    setTimeout(() => {
        
        element.style.background="bisque";
    }, 3000);
}

function randomColor(){
    return color[Math.floor(Math.random()*color.length)]
}