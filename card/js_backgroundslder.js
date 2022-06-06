let pre_arrow= document.querySelector('.left_btn')

let next_arrow= document.querySelector('.right_btn')

let wrapper=document.querySelector('.wrapper')
let slider= document.querySelectorAll('.slide')


let slider_id=0;

pre_arrow.addEventListener('click',()=>{
    slider_id--;
    if (slider_id<0){
        slider_id=slider.length-1
    }
    activateSlide(slider_id)
    
})

next_arrow.addEventListener('click',()=>{
    slider_id++;
    if (slider_id>=slider.length){
        slider_id=0
    }
    activateSlide(slider_id)
})


activateSlide(slider_id)


function activateSlide(slider_id){
    slider.forEach((slide,id)=>{
       
        if (slider_id==id){
         

            slide.classList.add('active')
            let url= slide.getAttribute('style')
            setbackgroundImage(url)
        }else{
            slide.classList.remove('active')

        }
    })
}

function setbackgroundImage(url){
    wrapper.style=url
}