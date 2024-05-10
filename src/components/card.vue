<script setup>
import { getPokemon } from '@/functions/pokemon';
    defineProps(["pokemon"])
</script>

<template>
    <div class="col-md-4 mb-3">
        <div class="border border-primary rounded p-2 ">
            <img class="w-100" style="height: 350px;" loading="lazy" :src="`https://imagequery.vercel.app/?q=pokemon ${pokemon.name}`" :alt="pokemon.name">
            <h1>{{pokemon.name}}</h1>
        </div>
    </div>
</template>