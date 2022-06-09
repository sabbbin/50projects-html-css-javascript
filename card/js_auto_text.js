let text= document.querySelector('.text')

let word= 'We are loving'
let ind=1
animate()

function animate(){
    text.innerHTML=word.slice(0,ind)
    if (ind<word.length+1){
        setTimeout(()=>{
            animate()
        },1000)
    }
    else{
        ind=0
        animate()
    }
    ind++
}