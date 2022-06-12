const password= document.querySelector('#password')
const background=document.querySelector('.background')

password.addEventListener('keyup',displayInput)



var i=0
function displayInput(){
    
   let value= this.value
  calculateStrength(value)
  console.log(value)
   
}

function calculateStrength(value){
    background.style.filter='blur( 7 px)'
    let strength=0,upper=0,lower=0,digit=0,count=0
   for (let j=0;j<value.length;j++){
    if (value.length>10){
        count=1
    }
   if (value[j].toLowerCase()==value[j].toUpperCase()){
        digit=1
    }
    else if (value[j]==value[j].toUpperCase()){
     
        upper=1
    }
    else if (value[j]==value[j].toLowerCase()){
        lower=1
    }
    

   }

   
   strength=lower+upper+digit+count
   console.log(strength)
   let scale_num=scale_number(strength,0,7,0,4)
   let blur=7-scale_num
   background.style.filter='blur('+blur+'px)'

}

function scale_number(unscaled, to_min, to_max, from_min, from_max){

    return (to_max-to_min)*(unscaled-from_min)/(from_max-from_min)+to_min
}
