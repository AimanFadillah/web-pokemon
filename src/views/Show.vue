<script setup>
    import Navbar from '@/components/navbar.vue';    
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const id = route.params.id;
</script>

<template>
    <Navbar>
        <h1>hello {{ id }}</h1>
    </Navbar>
</template>