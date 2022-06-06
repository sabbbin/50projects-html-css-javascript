
const API_URL='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const IMG_PATH='https://image.tmdb.org/t/p/w1280'  
  

const SEARCH_URL='https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'



const wrapper=document.querySelector('.wrapper')
const form= document.getElementById('form')
const search= document.getElementById('search')

async function getMovies(url){
    const res= await fetch(url)
    const datas=await  res.json()
    wrapper.innerHTML=''
    
    datas.results.forEach((movie)=>{ 
        const card= document.createElement('div')
        card.classList.add('card')
     
        card.innerHTML=`  
        <div class="card_img">
       
            <img src="${IMG_PATH+movie.backdrop_path}" alt='no image' >
        </div>
        <div class="card_header">
            <h3 class="movie_title">${movie.title}</h3>
            <p class="movie_rating">${movie.vote_average}</p>

        </div>
        <div class="card_body">
             ${movie.overview}
        </div>


        
        `
        wrapper.appendChild(card)
    })
}


getMovies(API_URL)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
 
    const searchTerm= search.value
    if (searchTerm && searchTerm!==''){
        getMovies(SEARCH_URL+searchTerm) 
        search.value=''
    }else{
        window.location.reload()
    }
})
