let leftcontainer= document.querySelector('.left_container')
let rightcontainer=document.querySelector('.right_container')


let wrapper= document.querySelector('.wrapper')


leftcontainer.addEventListener('mouseenter',()=>{
    wrapper.classList.add('hover_left')
})
leftcontainer.addEventListener('mouseleave',()=>{
    wrapper.classList.remove('hover_left')
})

    



rightcontainer.addEventListener('mouseout',()=>{

    rightcontainer.addEventListener('mouseenter',()=>{
        wrapper.classList.add('hover_right')
    })
    rightcontainer.addEventListener('mouseleave',()=>{
        wrapper.classList.remove('hover_right')
    })
})