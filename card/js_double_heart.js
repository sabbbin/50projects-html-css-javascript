let img= document.querySelector('.img')

img.addEventListener('click', heartfun)

function heartfun(e){
      console.log(e.offsetX)
     let divEl= document.createElement('div')
     divEl.style.top=e.offsetY+"px"
     divEl.style.left=e.offsetX+"px"
  
 
     divEl.classList.add('heart')
   
    img.appendChild(divEl)
    setTimeout(()=>{
        divEl.remove()
    },3000)
}