
let countready= document.querySelectorAll('span')
let couterbtn=document.querySelector('.counter_btn')


couterbtn.addEventListener('click',ready)

let i=0;
function ready(){
   
    couterbtn.classList.add('toggle')
           if (i<countready.length){

               countready[i].classList.add('active')
               setTimeout(() => {
                countready[i].classList.remove('active')
                 
                
                   
                   i++;
                   ready()
               }, 1000);
           }else{
            couterbtn.classList.remove('toggle')
            i=0
           }
  
}
