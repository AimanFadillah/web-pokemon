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
        if(text === "") return pokemons.value = data.value;
        clearTimeout(time)
            time = setTimeout(() => pokemons.value = data.value.filter(pokemon => pokemon.name.includes(text.toLocaleLowerCase()))
        ,100);
    }

    return {pokemons,searchPokemon};
}

export function getPokemon (url) {
    const data = ref({});
    fetch(url).
        then(response => response.json()).
        then(result => data.value = result.results)

    return data;
}