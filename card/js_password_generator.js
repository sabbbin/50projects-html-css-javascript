let checkvalue= document.querySelectorAll('input[type="checkbox"]')
let passwordgenerate=document.querySelector('.form_input')
let passwordLength=document.querySelector('input[type="number"]')
let total =passwordLength.value
let btn= document.querySelector('.btn')

let tempfunc=[]
const fun=[
    generateUppercase,
    generateLowercase,
    generateNumber,
    generateSymbol
]

checkvalue.forEach(val=>{
    val.addEventListener('click',checkfunc)
})
checkfunc()

function checkfunc(){
    tempfunc=[]
    checkvalue.forEach((val,id)=>{
        console.log(val.checked)
          if (val.checked){
            tempfunc.push(fun[id])
        }
    })
}
 

btn.addEventListener('click', generatepassword)


function generatepassword(){
    let passwordLength=document.querySelector('input[type="number"]')
    let total =passwordLength.value

    let password=''
    for(let i=0;i<total;i++){
       let number= Math.floor(Math.random()*(tempfunc.length))
     
       let temp= tempfunc[number]()
       password+=temp
    }
    passwordgenerate.value=password
    
}



function generateUppercase(){
    let upper= String.fromCharCode( Math.floor(Math.random()*26)+65)
     return upper

}

function generateLowercase(){
    let lower= String.fromCharCode( Math.floor(Math.random()*26)+97)
    return lower
}

function generateNumber(){
     let number= Math.floor(Math.random()*9)
     return number
}

function generateSymbol(){
            let array='$#%{}*[]~&<>'
            let number= Math.floor(Math.random()*11)
            return array[number]
}