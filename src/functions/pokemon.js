import { ref } from "vue";

export function getPokemons () {
    const pokemons = ref(history.state.pokemons || []);
    const data = ref(history.state.pokemons || []);
    let time;

    if(!history.state.pokemons){
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1302").
        then(response => response.json()).
        then(result => {
            pokemons.value = result.results
            data.value = result.results
            history.replaceState({
                pokemons:result.results
            },undefined,undefined)
        })
    }
    
    function searchPokemon (text) {
        clearTimeout(time)
        if(text === "") return pokemons.value = data.value;
        time = setTimeout(() => pokemons.value = data.value.filter(pokemon => pokemon.name.includes(text.toLocaleLowerCase()))
        ,400);
    }

    return {pokemons,searchPokemon};
}

export function getPokemon () {
    const pokemon = ref(false);

    function setPokemon (id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).
        then(response => response.json()).
        then(result => pokemon.value = result)
    }

    return {pokemon,setPokemon};
}