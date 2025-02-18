<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">JRamso.DEV</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            
            <li class="nav-item">
              <router-link class="nav-link" to="/sobre">Sobre Mim</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/repos">Repositórios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contato">Contato</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  