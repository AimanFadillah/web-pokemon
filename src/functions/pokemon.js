import { reactive, ref } from "vue";

export function getPokemons () {
    const pokemons = ref([]);
    const data = ref([]);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1302").
        then(response => response.json()).
        then(result => {
            pokemons.value = result.results
            data.value = result.results
        })
    
    function searchPokemon (text) {
        pokemons.value = data.value.filter(pokemon => pokemon.name.includes(text))
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