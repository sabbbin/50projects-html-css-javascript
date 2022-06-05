let textbox=document.getElementById('textbox')
let choice= document.getElementById('tags')
textbox.focus()

textbox.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if (e.key=='Enter'){
        randomTags()
    }

})

function createTags(input){
    let tag=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim())
    choice.innerHTML=''
    tag.map((ta)=>{
         let span_tag=document.createElement('span')
        span_tag.classList.add('choice')
         span_tag.innerText=ta
         choice.appendChild(span_tag)
     })
            
    
}

function randomTags(){
    let tags= document.querySelectorAll('.choice')
    let randomNum=Math.ceil(Math.random()*tags.length);
    console.log([tags[0]])
    tags[randomNum].classList.add('choice_active')
}