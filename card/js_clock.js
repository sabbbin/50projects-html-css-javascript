let hour =document.querySelector('.hour')
let minute= document.querySelector('.minute')
let second=document.querySelector('.second')
let time=document.querySelector('.time')
let todaydate= document.querySelector('.date')

setInterval(updateTime,1000)


function updateTime(){
    let date= new Date()
    let hours=date.getHours()%12
    
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()
    hour.style.transform="rotate("+scale(hours,[0,11],[0,359])+"deg )"
    minute.style.transform="rotate("+scale(minutes,[0,59],[0,359])+"deg )"
    second.style.transform="rotate("+scale(seconds,[0,59],[0,359])+"deg )"
    
     let AMPM=(date.getHours()>11)?'PM' : 'AM'
    
     time.innerHTML=String(hours).padStart(2,'0')+':'+String(minutes).padStart(2,'0')+':'+String(seconds).padStart(2, '0')+"  "+AMPM;
    todaydate.innerHTML=date.toDateString()
    }

const scale = (number, [inMin, inMax], [outMin, outMax]) => {
   
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}
updateTime()