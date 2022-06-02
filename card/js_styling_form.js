let labels = document.querySelectorAll('.form_group label')


labels.forEach(label=>{

    label.innerHTML=label.innerText
                    .split('')
                    .map((text,idx)=>
                        `<span style="transition-delay: ${idx*50}ms"> ${text} </span>`
                    )
                    .join('')
})


