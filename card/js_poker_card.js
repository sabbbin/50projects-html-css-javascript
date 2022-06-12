let wrapper= document.querySelector('.wrapper')

let data_count=6
getHome()

async function getHome(){
    for (let i=1;i<=data_count;i++){
       let a =await  getdata(i)
    }
}

async function getdata(id){

   let res= await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pokemondata=res.data
    
    
    
    display(pokemondata)
}

function display(data){
 
    const poke_types=data.types.map(type=>type.type.name)
 
 
   let id=data.id.toString().padStart(3,0)
    let card=`
    <div class="card">
                <div class="img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png">
                </div>
                <div class="body">
                    <h5 class="card_code">#${id}</h5>
                    <h4 class="card_title">${data.name}</h4>
                    <p class="card_des">${poke_types[0]}</p>
                     
                </div>

            </div>
    `
     wrapper.innerHTML+=card
   
}



