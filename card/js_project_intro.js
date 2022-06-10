let add_btn= document.querySelector('.add_btn')
let container= document.querySelector('.container')
let id=0;


allStorage()
function allStorage(){
    let abc= Object.keys(localStorage)
    abc.forEach(ab=>{
        let text= localStorage.getItem(ab)
        container.innerHTML+=`
    <div class="wrapper">


            <div class="note_title ">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-delete-left"></i>

            </div>
            <textarea class="note_text active" disabled id=${id}>
                ${text}
            </textarea>

        </div>
    `
    id++;
    })

    addeditfuction()
    deleteitfunction()
}




addeditfuction()
deleteitfunction()

function deleteitfunction(){
    let delete_btn=document.querySelectorAll('.fa-delete-left')

    
    delete_btn.forEach(del=>{
    
        del.addEventListener('click', deletefunction)
    })
    
}

function addeditfuction(){
    let edit_btn =document.querySelectorAll('.fa-pencil')
    edit_btn.forEach(edit=>{
        edit.addEventListener('click',editfunction)
    })
}

add_btn.addEventListener('click', addbtnfunction)


function editfunction(){

    let notetitle=this.closest('div.note_title')
    console.log(notetitle.nextElementSibling)
   
    let val =notetitle.nextElementSibling
    localStorage.setItem(`${val.id}`,val.value)
    val.disabled=!val.disabled
   
}



function deletefunction(){
    let notetitle=this.closest('div.note_title')
    console.log(notetitle.nextElementSibling)
   

    let val =notetitle.nextElementSibling.id
    localStorage.removeItem(val)
   
this.closest('div.wrapper').remove()
}

function addbtnfunction(){
    container.innerHTML+=`
    <div class="wrapper">


            <div class="note_title ">
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-delete-left"></i>

            </div>
            <textarea rows='10' class="note_text active" id=${id}></textarea>

        </div>
    `
    id++;

    addeditfuction()
    deleteitfunction()
}



