////////////////////\
///cart.html//////////////
/////////////



// let panels=document.getElementsByClassName('panel')


// Array.from(panels).forEach(panel => {
//     panel.addEventListener('click',()=>{
//         removeclass()
//         panel.classList.add('active')
//     })
    
// });


// function removeclass(){

//     Array.from(panels).forEach(panel => {
       
            
//             panel.classList.remove('active')
        
        
//     });

// }


////////////////////////////////////////////////////
                    //creating-step//////
///////////////////////////////////////////////

// let circles=document.querySelectorAll('.circle')
// let prevButton=document.querySelector('.btn_prev')
// let nextButton= document.querySelector('.btn_next')

// let currentActive=1
// function activeclass(){

//     if (currentActive==1){
//         prevButton.classList.add('btn_disabled')
//     }
//     else if (currentActive==circles.length){
//         nextButton.classList.add('btn_disabled')
//     }
//     else{
//         nextButton.classList.remove('btn_disabled')
//         prevButton.classList.remove('btn_disabled')
//     }
// }

// prevButton.addEventListener("click",()=>{
//     if (currentActive>1){
//         currentActive--
//     }
//      updateProgress()
//      addClass()
//      activeclass()
    
// })

// nextButton.addEventListener('click',()=>{
//     if (currentActive<circles.length){
//         currentActive++
//     }
//    updateProgress()
//     addClass()
//     activeclass()
// })

// function updateProgress(){
//     console.log(circles.length)
//     console.log(currentActive)
//         console.log(((currentActive-1)/(circles.length))*100 )
//     document.getElementById('progress').style.width=(`${((currentActive-1)/(circles.length-1))*100}%`)
   
   
// }

// function addClass(){
//     for (i=0;i<currentActive;i++){
//         if (i<currentActive){

//             circles[i].classList.add('active')
//            }
//            else{
//             circles[i].classList.remove('active')

//         }
//    }
// }

///////////////////////////////////////////////////////////////////
                ///rotatingnavbar
//////////////////////////////////////////////////////////////////

// let openBtn = document.querySelector('.open_btn')
// let closeBtn= document.querySelector('.close_btn')


// openBtn.addEventListener('click',()=>{
//     document.querySelector('.container').classList.add('show_nav')
//     openBtn.classList.add('disabled_btn')
//     closeBtn.classList.remove('disabled_btn')
// })

// closeBtn.addEventListener('click',()=>{
//     document.querySelector('.container').classList.remove('show_nav')
//     closeBtn.classList.add('disabled_btn')
//     openBtn.classList.remove('disabled_btn')
// })


/////

///project 4  searchbox.html//////
////


// let search_btn = document.querySelector('.search_btn')
// let search_input= document.querySelector('.search_input')

// search_btn.addEventListener('click',()=>{

//     console.log('button click')
//     search_input.classList.toggle('search_active')
//     search_btn.classList.toggle('btn_active')
// })

////////////////////
/// project 5  css_background//////////
/////////////
// const bg = document.querySelector('.wrapper')
// const text= document.querySelector('.percent')

// let load=0
// let int = setInterval(() => {
//    blurring()
    
// }, 30);

// function blurring(){
//     load++
//     if (load>99){
//         clearInterval(int)
//     }
//     text.innerHTML=`${load}%`
//     text.style.opacity=scale(load,0,100,1,0)
//     bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
  
// }


// const scale=(num,in_min,in_max,out_min,out_max)=>{
//     return ((num-in_min)*(out_max-out_min)/((in_max-in_min)))+out_min
// }

////////////////////////////////
///////////   project 5 ///////////
//////// css_scrollbar /////////////


let boxes= document.querySelectorAll('.side_nav')
console.log(window.innerHeight)

window.addEventListener('scroll', checkbox)

checkbox();

function checkbox(){
    console.log('helo')
    let bottom_height= (window.innerHeight)
    
    boxes.forEach(box=>{
        let boxTop= box.getBoundingClientRect().top
        console.log(boxTop)
        console.log(bottom_height)
      
        if (boxTop<bottom_height){
            box.classList.add('box_show')
        }else{
            box.classList.remove('box_show')
        }
    })
}





















