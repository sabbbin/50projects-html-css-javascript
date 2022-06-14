let playbtn= document.querySelector('.btn')
let wrapper= document.querySelector('.wrapper')

let images=document.querySelectorAll('.img_insect div')
let clickimg=document.querySelector('.screen_img')

playbtn.addEventListener('click',nextScreen1)

function nextScreen1(){
    // wrapper.style.transform='translateY(-100vh)'

}

images.forEach(img=>{
    img.addEventListener('click', nextScreen2)
})

function nextScreen2(){
    console.log(this.children[0].src)
    randomImage(this.children[0].src)
    wrapper.style.transform='translateY(-200vh)'
}

let randomImag=1

function randomImage(imgsrc){
    let imageEl=document.createElement('img')
     imageEl.src=imgsrc
     let y=randomPostion()
     console.log(y)
      imageEl.style.top=y[1]+'px';
      imageEl.style.left=y[0]+'px';
     imageEl.addEventListener('click',()=>{
        console.log(imageEl)
        imageEl.remove()
        nextimage(imgsrc)
        randomImag=randomImag*2
     })
    clickimg.appendChild(imageEl)
}

function nextimage(imgsrc){
    for (let j=0;j<randomImag;j++){
        randomImage(imgsrc)
    }

}

let displayare=document.querySelector('.screen_img')
let yy=displayare.clientHeight-200
let xx=displayare.clientWidth-200
console.log(xx,yy)


function randomPostion(){
    let x= Math.floor(Math.random()*xx)+60
    let y= Math.floor(Math.random()*yy)+60
    
    return [x,y]
}