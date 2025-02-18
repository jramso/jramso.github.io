<template>
    <div>
      <h1>Entre em Contato</h1>
      <form @submit.prevent="enviarEmail">
        <div>
          <label for="nome">Seu Nome:</label>
          <input type="text" id="nome" v-model="nome" required />
        </div>
        <div>
          <label for="email">Seu Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" v-model="mensagem" required></textarea>
        </div>
        <button type="submit">Enviar</button>
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
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  </style>
  