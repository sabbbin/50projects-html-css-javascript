let searchResult=document.querySelector('.search_result')

let searchText=document.querySelector('input')

var users=[]

searchText.addEventListener('input',getUser)

function getUser(){
    let filter=this.value
  let divquery= document.querySelectorAll('.search_info h4')
  divquery.forEach(divque=>{
   let parentEL=divque.parentElement
      if (divque.innerText.toLowerCase().includes(filter.toLowerCase()))  {
        
        parentEL.parentElement.classList.remove('hide')
    }
    else{
        parentEL.parentElement.classList.add('hide')

      }
  })

        
    



}

getAllUser()

async function getAllUser(){
    let user= await axios("https://randomuser.me/api/?results=10")
     users=user.data.results
    displayFunction(users)
  
}

function displayFunction(datas){
    console.log(datas)
  datas.forEach(data=>{

      let result=document.createElement('div')
      result.classList.add('result')
      result.innerHTML=`
                  <img src=${data.picture.thumbnail}>
                        <div class="search_info">
                            <h4>${data.name.first} ${data.name.last}</h4>
                            <p> ${data.location.city}, ${data.location.country}</p>
    
                        </div>
      `
      searchResult.append(result)
  })
}