<script setup>
  import {RouterView } from 'vue-router'
  import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <SpeedInsights />
  <RouterView />
</template>
