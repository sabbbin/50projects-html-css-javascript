let sidebar= document.querySelector('.sidebar')
let sidebar1=document.querySelector('.sidebar1')
let sidebar2=document.querySelector('.sidebar2')

let closebtn=document.querySelector('.close_btn')

let openbtn=document.querySelector('.menu_btn')




openbtn.addEventListener('click',openFunction)

function openFunction(){
 sidebar.classList.add('active')
 sidebar1.classList.add('active')
 sidebar2.classList.add('active')
}
closebtn.addEventListener('click',closeFunction)

function closeFunction(){
 sidebar.classList.remove('active')
 sidebar1.classList.remove('active')
 sidebar2.classList.remove('active')
}