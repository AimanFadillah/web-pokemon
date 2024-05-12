<script setup>
  import Navbar from '@/components/navbar.vue';
  import Card from '@/components/card.vue';
  import { getPokemons } from '@/functions/pokemon';
  import { ref } from 'vue';

  const {pokemons,searchPokemon} = getPokemons()
  const search = ref("");
</script>

<template>
  <Navbar>
    <form @submit.prevent="(e) => searchPokemon(search)" class="d-flex mt-4 border border-2 border-primary rounded p-2" >
      <input @keyup="(e) => searchPokemon(e.target.value)" v-model="search" type="search" class="form-control border-0 fs-4" placeholder="Pokemon name " >
      <button class="btn btn-warning py-2 px-5 fw-bold text-primary" >Search</button>
    </form>
    <div class="row justify-content-center mt-4">
      <Card v-for="(pokemon,index) of pokemons" :id="pokemon.url.split('/')[6]" :pokemon="pokemon"></Card>
    </div>
  </Navbar>
</template>
