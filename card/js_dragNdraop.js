let items=  document.querySelectorAll('.card')


items.forEach(item=>{
    item.addEventListener('dragstart',dragStart)

    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragleave',dragLeave)
    item.addEventListener('dragend',dragEnd)
    item.addEventListener('drop',drop)
})

function dragEnd(e){
    e.target.classList.remove('hide')
    e.target.classList.remove('drag_over')
}


function dragStart(e){

    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('drag_over')

    setTimeout(() => {
        
        e.target.classList.add('hide')
    }, 0);
}


function dragEnter(e){
 e.preventDefault()
 e.target.classList.add('drag_over')
}

function dragOver(e){
    e.preventDefault()
  e.target.classList.add('drag_over')
}

function dragLeave(e){
    e.preventDefault()
    e.target.classList.remove('drag_over')
}

function drop(e){
  
    e.target.classList.remove('drag_over')
    const id= e.dataTransfer.getData('text/plain')
    console.log('id',id)
    const draggable=document.getElementById(id)

    e.target.appendChild(draggable)
    draggable.classList.remove('hide')
    draggable.classList.remove('drag_over')
}