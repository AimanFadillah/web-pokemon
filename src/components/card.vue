<script setup>
    defineProps(["pokemon","id"])
</script>

<template>
    <div class="col-md-3 mb-3">
        <div class="border border-primary rounded p-2 ">
            <img class="w-100" loading="lazy" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id > 1025 ? id + 8975     : id}.png`" :alt="pokemon.name">
            <h1>{{pokemon.name}}</h1>
        </div>
    </div>
</template>