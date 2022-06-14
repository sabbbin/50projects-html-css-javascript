let checkboxes= document.querySelectorAll('input[type=checkbox]')
let qnss=document.querySelectorAll('.qns')
let submit= document.querySelector('.btn_submit')
let reload= document.querySelector('.btn_reload')
let flag=0
let qnsCount=0
let close_btn=document.querySelector('.close_btn')

function selectchecked() {
     for (let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked=false
     }
     this.checked=true
    submit.disabled=false
    flag=1
    
}

checkboxes.forEach((checkboxe)=>{
    checkboxe.addEventListener('click',selectchecked)
})



submit.addEventListener('click',submitfunction)
reload.addEventListener('click',reloadFunction)

function reloadFunction(){
    qnss[qnsCount].classList.remove('active')
    qnsCount=0;
    qnss[qnsCount].classList.add('active')
    
    submit.classList.remove('hidden')
    reload.classList.add('hidden')
}
function submitfunction(){
    qnss[qnsCount].classList.remove('active')
      qnsCount++
      if (qnsCount>=qnss.length-1){
         
         submit.classList.add('hidden')
         reload.classList.remove('hidden')
      }
      qnss[qnsCount].classList.add('active')
      submit.disabled=true
}

