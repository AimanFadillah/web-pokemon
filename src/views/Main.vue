<script setup>
  import Navbar from '@/components/navbar.vue';
  import Card from '@/components/card.vue';
  import { getPokemons } from '@/functions/pokemon';

  const pokemons = getPokemons()
</script>

<template>
  <Navbar>
    <div class="row">
      <Card v-for="pokemon of pokemons" :pokemon="pokemon"></Card>
    </div>
  </Navbar>
</template>
