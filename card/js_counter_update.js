let count_values= document.querySelectorAll('.value')


count_values.forEach(counter=>{
    counter.innerText='0'
    const target=counter.getAttribute('data-target')

     const updateCounter=()=>{

         
     
         const c= + counter.innerText
         const increment= target/1000
         if (c<target){
             counter.innerText=`${Math.ceil(c+increment)}`
             setTimeout(updateCounter,1)
         }
     }
    
         
     updateCounter()

})



