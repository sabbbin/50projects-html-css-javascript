let sidbar=document.querySelector('.sidbar')
let slide=document.querySelector('.sidbar')

let home = document.querySelector('.home')


let button_up=document.querySelector('.btn_up')

let button_down= document.querySelector('.btn_down')

let container= document.querySelector('.wrapper')
const slideLength=slide.querySelectorAll('div').length

let current=0


sidbar.style.top=`-${(slideLength-1)*100}vh`

button_up.addEventListener('click',slideup)

button_down.addEventListener('click',slidedown)


function slideup(){
    const sliderHeight=container.clientHeight
    console.log(sliderHeight)
    current++;
    if (current>slideLength-1){
        current=0
    }
    console.log(current)
    sidbar.style.transform=`translateY(${current*sliderHeight}px)`
    home.style.transform=`translateY(-${current*sliderHeight}px)`
    
}

function slidedown(){
    current--;
    const sliderHeight=container.clientHeight
    if (current<0){
        current=slideLength-1
    }
    console.log(current)
    sidbar.style.transform=`translateY(${current*sliderHeight}px)`
    home.style.transform=`translateY(-${current*sliderHeight}px)`
    

}

