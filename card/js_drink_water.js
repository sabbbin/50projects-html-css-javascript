let sub_total= document.querySelector('.sub_total')
let goal=document.querySelector('.goal')
let goal_value=goal.getAttribute('data_target')
let text=document.querySelector('.total_value')


let remaining_value =document.querySelector('.total_water')

let total=Number(goal_value)*1000


let count=0
for (let i=0;i<total;i=i+250){

      let buttons= document.createElement('button')
      buttons.classList.add("small_btn")
      buttons.setAttribute('id',count+1)
      buttons.innerText='250 ml';
      sub_total.appendChild(buttons)
      count=count+1
}

let buttonsClick=document.querySelectorAll('.small_btn')

buttonsClick.forEach(button=>{
    button.addEventListener('click',(e)=>{
       
        for (let j=0 ;j<total/250;j++){
            if (j<e.target.id){
                
                buttonsClick[j].classList.add('btn_active')
            }else{
                buttonsClick[j].classList.remove('btn_active')

            }
        }
    

        remaining_value.style.background=`linear-gradient(to top , yellow ${Number(e.target.id/8)*100}%, white ${(Number(e.target.id/8)*100)}%, white  75%)` 
        text.innerHTML=(1-(Number(e.target.id)/8))*goal_value +'L'
           
   
    
    
        
    })
})

