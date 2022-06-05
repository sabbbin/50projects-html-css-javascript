let show_btn =document.querySelectorAll('.show')
let close_btn= document.querySelectorAll('.close')



showbtnclick()
showbtnclose()

function showbtnclick(){
    show_btn.forEach((show_bt)=>{
        console.log(show_bt)
        show_bt.addEventListener('click',()=>{
                  show_bt.parentElement.classList.add('card_active')
              })
          })
        
    
}

function showbtnclose(){
    close_btn.forEach((close_bt)=>{
    close_bt.addEventListener('click',()=>{
        close_bt.parentElement.classList.remove('card_active')
    })
    })
}

