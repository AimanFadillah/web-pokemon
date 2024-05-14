<script setup>
    defineProps(["pokemon","id"])
</script>

<template>
    <div @click="$emit('getId',id)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="text-decoration-none text-dark col-lg-3 col-6 mb-3">
        <div class="border border-2 border-primary rounded p-2 shadow">
            <div class="row align-items-center mt-2">
                <img class="w-100 col-12 order-2 order-sm-1" loading="lazy" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`" :alt="pokemon.name">
                <div class="col-sm-10 order-2 order-sm-1">
                    <h4 class="fw-bold text-truncate" >{{pokemon.name}}</h4>
                    <h6 class="text-secondary">#{{ id }}</h6>
                </div>
                <h4 class="col-sm-2 order-1" ><i class="bi bi-bookmark text-primary" style="font-size: 20px;" ></i></h4>
            </div>
        </div>
    </div>
</template>