let btn_left = document.querySelector('.btn_left')
let btn_right= document.querySelector('.btn_right')

let imag= document.querySelector('.imag')
let imgLength= document.querySelectorAll('img')


let swapvalue=0



btn_left.addEventListener('click',swift_left)

let Value=imag.clientWidth
function swift_left(){
  swapvalue--;
 
  if (swapvalue<0){
      swapvalue=imgLength.length-1;
    }
    imag.style.transform="translateX(-"+swapvalue*Value+"px)"
 
}


btn_right.addEventListener('click',swift_right)

function swift_right(){
 
   swapvalue++
   if(swapvalue>=imgLength.length){
     swapvalue=0
    }
    imag.style.transform='translateX(-'+swapvalue*Value+'px)'
  
}


function automove(){
  
  setInterval(() => {
    swift_right()
  }, 5000);
}
automove()