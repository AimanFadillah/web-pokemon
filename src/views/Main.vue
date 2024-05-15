<script setup>
  import Navbar from '@/components/navbar.vue';
  import Card from '@/components/card.vue';
  import Modal from "@/components/modal.vue";
  import { getPokemon, getPokemons } from '@/functions/pokemon';
  import { ref } from 'vue';

  const {pokemons,searchPokemon} = getPokemons()
  const {pokemon,setPokemon} = getPokemon();
  const search = ref("");

</script>

<template>
  <Navbar>
    <form @submit.prevent="(e) => searchPokemon(search)" class="d-flex mt-4 border border-2 border-primary rounded p-lg-2 p-1 shadow" >
      <input @keyup="(e) => searchPokemon(e.target.value)" v-model="search" type="text" class="form-control border-0 input-search" placeholder="Pokemon name " >
      <button class="btn btn-warning py-lg-2 px-lg-5 fw-bold text-primary" >Search</button>
    </form>
    <div class="row justify-content-center mt-4">
      <Card @get-id="setPokemon" v-for="(pokemon,index) of pokemons" :id="pokemon.url.split('/')[6]" :pokemon="pokemon"></Card>
    </div>
  </Navbar>
  <Modal>
    <div v-if="pokemon != false" class="row">
      <div class="col-lg-6 order-2 order-lg-1">
        <div class="row justify-content-center align-items-center flex-column" >
          <img class="img-fluid w-75 col-12 h-md-380px" loading="eager" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" :alt="pokemon.name">
          <div class="row justify-content-between">
            <h6 class="col-6"><span class="text-dark fw-bold" >Weight</span> : {{ pokemon.weight }}</h6>
            <h6 class="col-6" ><span class="text-dark fw-bold" >Height</span> : {{ pokemon.height }}</h6>
            <h6 class="col-6"><span class="text-dark fw-bold" >Order</span> : {{ pokemon.order }}</h6>
            <h6 class="col-6"><span class="text-dark fw-bold" >Experience</span> : {{ pokemon.base_experience }}</h6>
            <h6 class="col-md-12 mt-3 fw-bold mb-2">Type:</h6>
            <div class="col-md-12 row ps-3">
              <div v-for="tipe of pokemon.types" :class="`col-sm-2 col-4 text-center ms-1 mb-1 d-inline type-${tipe.type.name} py-1`" style="border-radius: 15px;">
                {{ tipe.type.name.substring(0,1).toUpperCase() + tipe.type.name.substring(1) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 order-1">
        <h1 class="fw-bold text-primary" style="font-size: 50px;" >{{pokemon.name}}</h1>
        <div class="row justify-content-between align-items-center mt-md-4">
          <div class="col-6 fs-5 fw-bold">
            #{{ pokemon.id }}
          </div>
          <div class="col-6 text-primary text-end fw-bold">
            <i class="bi bi-bookmark"></i> Add to Bookmark
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row justify-content-center align-items-center" style="height: 450px;">
        <img class="col-lg-3 col-5" src="/images/loading.gif"  alt="Loading pikachu">
    </div>
  </Modal>
</template>
