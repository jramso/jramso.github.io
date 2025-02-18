<script setup lang="ts">
const nome = 'Josué'
</script>

<template>
    <div>
    <h1>Fala, {{ nome }}!</h1>
    <p>Esse é meu portfólio feito com Vue + TypeScript e Vite!</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
