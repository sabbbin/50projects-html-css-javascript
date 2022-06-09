let btn_click=document.querySelector('.btn')
let toast= document.querySelector('.toast')

const msg=[
    'msg1',
    'msg2',
    'msg3',
    'msg4'
]

const msgerr=[
    'toast_info',
    'toast_warning',
    'toast_danger'
]


btn_click.addEventListener('click',displaymsg)


function displaymsg(){
    let dismsg=document.createElement('h4')
    let randnum= +Math.floor(Math.random()*3)
    let randmsg=+ Math.floor(Math.random()*3)
    
    dismsg.innerHTML=msg[randnum]
    console.log(typeof(msgerr[randmsg]))
    dismsg.classList.add(String(msgerr[randmsg]))
    toast.appendChild(dismsg)
    
    setTimeout(() => {
        dismsg.remove()
    }, 3000);
   
}