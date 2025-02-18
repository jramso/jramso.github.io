<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/sobre">Sobre Mim</router-link> |
      <router-link to="/repos">Repositórios</router-link> |
      <router-link to="/contato">Contato</router-link>
    </nav>
  </template>
  
  <style scoped>
  nav {
    margin-bottom: 20px;
  }
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: #42b983;
  }
  nav a.router-link-active {
    font-weight: bold;
  }
  </style>
  