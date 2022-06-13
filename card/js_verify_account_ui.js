let codeboxes = document.querySelectorAll('.code input')
console.log(codeboxes.length)

codeboxes.forEach((box,id)=>{
    if (id!==codeboxes.length-1){

        box.addEventListener('keyup', ()=>{
           box.nextElementSibling.focus()
        })
    }
})
