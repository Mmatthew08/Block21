// Assynic Await
//Asynchronous Programming

console.log('One');
setTimeout(()=> console.log('Two'),10);
console.log('Three')

//We need callback and promise funcitons

async function myAsync(){
    return 42
}
console.log(myAsync())

async function handleMyAsync(){
    let result= await myAsync()
    console.log(result/6)
}
handleMyAsync

function addNumbers(a,b){
    if(typeof a != 'number' || typeof b !='number'){
        throw new Error('Can only work with NUMBERS')
    }
    return a+b
}

try {
    console.log('AddNumbers:', addNumbers(3,'apples'))
} catch (err){
    console.error('An Error Occured',err.message)}

    function renderPokemon(pokemonList){
        console.log('data.results',pokemonList)
        pokemonList.forEach((pokemon)=>{
            let h1=document.createElement('h1')
            h1.innerText=pokemon.name
            document.querySelector('body').appendChild(h1)
        })
    }
    async function getAndRender(){
        let data = await getPokemon()
        renderPokemon(data.results)
    }
    getAndRender