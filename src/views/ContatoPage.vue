<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Entre em Contato</h1>
      <form @submit.prevent="enviarEmail" class="w-50 mx-auto">
        <div class="mb-3">
          <label for="nome" class="form-label">Seu Nome:</label>
          <input type="text" id="nome" class="form-control" v-model="nome" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Seu Email:</label>
          <input type="email" id="email" class="form-control" v-model="email" required />
        </div>
        <div class="mb-3">
          <label for="mensagem" class="form-label">Mensagem:</label>
          <textarea id="mensagem" class="form-control" rows="4" v-model="mensagem" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Enviar</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const nome = ref('')
  const email = ref('')
  const mensagem = ref('')
  
  const enviarEmail = () => {
    console.log('Nome:', nome.value)
    console.log('Email:', email.value)
    console.log('Mensagem:', mensagem.value)
    alert('Formulário enviado! (Simulação)')
  }
  </script>