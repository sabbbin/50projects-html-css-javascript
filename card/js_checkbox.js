let ball= document.querySelector('.ball');
let checkbox= document.querySelector('.toggle');


ball.addEventListener('click',togglefunction);

function togglefunction(){
    console.log(checkbox.checked)
    if (checkbox.checked){
        checkbox.checked=false
    }
    else{
        checkbox.checked=true
    }
   
}
