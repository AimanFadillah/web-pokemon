<script setup>
import { getPokemon } from '@/functions/pokemon';
    defineProps(["pokemon","id"])
</script>

<template>
    <div class="col-md-4 mb-3">
        <div class="border border-primary rounded p-2">
            <img class="img-fluid" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`" alt="">
            <h1>{{pokemon.name}}</h1>
        </div>
    </div>
</template>