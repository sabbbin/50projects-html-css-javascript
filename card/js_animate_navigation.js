let close_btn= document.querySelector('.close_btn')
let show_btn= document.querySelector('.show_btn')
let wrapper= document.querySelector('.wrapper')


console.log('helo', close_btn)


close_btn.addEventListener('click', function(){
    wrapper.classList.add('wrapper_active')
})



show_btn.addEventListener('click',()=>{
    wrapper.classList.remove('wrapper_active')
    

})