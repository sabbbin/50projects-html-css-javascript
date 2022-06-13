let btn= document.querySelector('.btn')
let wrapper= document.querySelector('.wrapper')
let feedbackdiv= document.querySelectorAll('.feedback_icons div')

let feedback=document.querySelector('.feedback')

btn.addEventListener('click',sendFeedback)

let feedbackicons=document.querySelectorAll('.feedback_icon')
let feedbackword= document.querySelector('.feedback_word')

feedbackicons.forEach(feedbackicon=>{
   
    feedbackicon.addEventListener('click',()=>{
    
       feedbackword.innerHTML='Submit Reviews:  '+feedbackicon.lastElementChild.innerText
    })
})

function sendFeedback(){
 feedback.classList.remove('hide')
 wrapper.classList.add('hide')
}



feedbackdiv.forEach(feedback=>{
    feedback.addEventListener('click',addActive)
})

function addActive(){
    for (let i=0;i<feedbackdiv.length;i++){
        feedbackdiv[i].classList.remove('active')
    }
    this.classList.add('active')
}