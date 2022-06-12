let image= document.querySelectorAll('.imag img')


let icons= document.querySelectorAll('.homebar i')



icons.forEach(icon=>{
    icon.addEventListener('click',changeImage)
})

function changeImage(){
    
    for (let i=0;i<image.length;i++){
        if (this.id==i){
            icons[i].classList.add('active')
            image[i].classList.add('active')
        }else{
            image[i].classList.remove('active')
            icons[i].classList.remove('active')
        }

    }

}


// rotating horizontally

let documentwrapper= document.querySelector('.imag1')
let images=document.querySelectorAll('.imag1 img')

let verticalrotate=0
function rotateHorizontally(){
      verticalrotate++;
      if (verticalrotate>=images.length){
        verticalrotate=0

    }
    setTimeout(() => {
        
        documentwrapper.style.transform='translateY(-'+verticalrotate*405+'px)'
        rotateHorizontally()
    }, 3000);
    

}
rotateHorizontally()