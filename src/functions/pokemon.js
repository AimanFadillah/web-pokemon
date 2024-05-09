import { ref } from "vue";

export function getPokemons () {
    const data = ref([]);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1302").
        then(response => response.json()).
        then(result => data.value = result.results)

    return data;
}

export function getPokemon (url) {
    const data = ref({});
    fetch(url).
        then(response => response.json()).
        then(result => data.value = result.results)

    return data;
}