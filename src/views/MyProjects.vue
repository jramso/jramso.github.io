<template>
    <div class="container mt-5">
      <h1>Meus Repositórios e Projetos</h1>
      <p>Aqui estão alguns dos meus projetos, com links diretos para o GitHub.</p>
      
      <div class="row mt-4">
        <div v-for="repo in repositorios" :key="repo.id" class="col-md-6">
          <div class="card repo-card p-3 mb-3">
            <div class="d-flex align-items-center">
              <img :src="getIcon(repo.language)" class="language-icon me-2" alt="Icone da linguagem">
              <div>
                <a :href="repo.html_url" target="_blank" class="repo-link">{{ repo.name }}</a>
                <p class="text-muted">{{ repo.description || 'Sem descrição' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const repositorios = ref<any[]>([]);
  
  const icones: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
};

const getIcon = (language: string | null) => {
  return language && icones[language] ? icones[language] : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
};

  
  onMounted(async () => {
    try {
      const response = await fetch('https://api.github.com/users/jramso/repos');
      repositorios.value = await response.json();
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    }
  });
  </script>
  
  <style scoped>
  .repo-card {
    transition: transform 0.3s ease-in-out;
    border: 1px solid #ddd;
  }
  .repo-card:hover {
    transform: scale(1.05);
  }
  .repo-link {
    font-weight: bold;
    text-decoration: none;
    color: #007bff;
  }
  .language-icon {
    width: 40px;
    height: 40px;
  }
  </style>