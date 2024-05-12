<script setup>
  import Navbar from '@/components/navbar.vue';
  import Card from '@/components/card.vue';
  import { getPokemons } from '@/functions/pokemon';

  const pokemons = getPokemons()
</script>

<template>
  <Navbar>
    <div class="row justify-content-center">
      <Card v-for="(pokemon,index) of pokemons" :id="index + 1" :pokemon="pokemon"></Card>
    </div>
  </Navbar>
</template>
