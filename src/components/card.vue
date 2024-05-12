<script setup>
    defineProps(["pokemon","id"])
</script>

<template>
    <div class="col-md-3 mb-3">
        <div class="border border-2 border-primary rounded p-2">
            <img class="w-100" loading="lazy" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`" :alt="pokemon.name">
            <div class="row align-items-center mt-2">
                <h4 class="fw-bold col-10 text-truncate" >{{pokemon.name}}</h4>
                <h4 class="col-2" ><i class="bi bi-bookmark text-primary" style="font-size: 20px;" ></i></h4>
            </div>
        </div>
    </div>
</template>