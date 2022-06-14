let addbtn=document.querySelector('.btn_add')

let todolist=document.querySelector('.todolist')
let form= document.querySelector('.form')

let inputvalue=document.querySelector('.form input')

form.addEventListener('submit', addtodo)

getdata()

function addtodo(e){
    e.preventDefault() 
     if (inputvalue.value.length>0){

         addstorage()
     }
     
   

    
}

function getdata(){
    let storage=JSON.parse(localStorage.getItem('todolist'))
         displayfunction(storage)
}

function addstorage(){
  

        let storage=JSON.parse(localStorage.getItem('todolist'))
        console.log(storage)
        if (storage!==null){
           storage.push(inputvalue.value)
           displayfunction([inputvalue.value])
           localStorage.setItem('todolist', JSON.stringify(storage))
        }else{
            let arra=[inputvalue.value]
            localStorage.setItem('todolist',JSON.stringify(arra))
            displayfunction(arra)
        }
         
        inputvalue.value=''
    
}

function displayfunction(datas){
    for (let i=0;i<datas.length;i++){
        let heEl= document.createElement('h3')
        heEl.innerText=datas[i]
        todolist.appendChild(heEl)
    }
}