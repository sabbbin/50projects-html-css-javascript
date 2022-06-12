let box=document.querySelectorAll(".box")
let boxes= document.querySelector('.boxes')

let btn=document.querySelector('.btn')



    let count=0
    for (let i=0;i<4;i++){
        for (let j=0;j<4;j++){
            let translatex=(i/4)*100;
            let translateu=(j/4)*100;
            console.log(translateu,translatex)
            box[count].style.backgroundPosition=translateu+"%"+" "+translatex+"%"
           
          
            count++
        }
    }


    btn.addEventListener('click', flip)

    function flip(){
        console.log('buton')
     boxes.classList.toggle('active')
    }