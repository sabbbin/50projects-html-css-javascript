let search= document.querySelector('#search')
let userSearch= document.querySelector('.user_search')

let userprofile =document.querySelector('.user_profile')

const API_URL=' https://api.github.com/users/'



const getUser=async(e)=>{
    
    e.preventDefault()
    var searchvalue=search.value
 
  

    try {
         let user= await axios (`${API_URL}${searchvalue}`)
         
         if (user.data.name!==null){

       



         let repository= await axios(`${API_URL}${searchvalue}/repos`)
         repository.data.sort((a,b)=>Date.parse(b.updated_at)-Date.parse(a.updated_at))
            
         let ulEl=document.createElement('ul')
         ulEl.classList.add('user_project_ul')
         
         repository.data.slice(0,5)
         .map((single_repo)=>{
             
            
       
         
                ulEl.innerHTML+=
                     `<li> <a href=" ${single_repo.html_url}">${single_repo.name}</a>  </li>`

                
    })
 


         userprofile.innerHTML= `  <img  class ="user_img" src=${user.data.avatar_url} alt="no img">
                 
         <div class="user_info">
             <h4 class="username">${user.data.name}</h4>
             <p class="des">${user.data.bio}</p>
              <div class="user_repo">
                   <ul>
                       <li ><span id="follower"> ${user.data.followers}</span>  <strong>Follower</strong></li>
                       <li > <span id="following">${user.data.following}</span> <strong>Following</strong></li>
                       <li ><span id="repository">${user.data.public_repos}</span> <strong>Repository</strong></li>
                   </ul>
              </div>
              <div class="user_project">
                 
               
              </div>

         </div> `
         let user_project= document.querySelector('.user_project')

         user_project.append(ulEl)
   
 
        
        }

        else{
           userprofile.innerHTML='<h2> USER NOT FOUND </h2>'
        }
         
    
    }
    catch(err){
       console.log('erro in fetching data', err)
    }
}


userSearch.addEventListener('submit',getUser)