let text= document.querySelector('.text')

let btn_jokes=document.querySelector('.btn_jokes')


generateJoke()

function generateJoke(){

    let config={
          headers:{
              Accept:'application/json'
          }
       
    }
    fetch('https://icanhazdadjoke.com',config)
    .then((res)=>res.json())
    .then((data)=>{
        text.innerHTML=data.joke
    })

}


btn_jokes.addEventListener('click',generateJoke)