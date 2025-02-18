<template>
    <div class="container mt-5">
      <h1>Bem-vindo ao Meu Portfólio!</h1>
      <p>Explore meus projetos e saiba mais sobre mim.</p>
  
      <!-- Slider de Destaque -->
      <div id="reposSlider" class="carousel slide mt-4" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(repo, index) in reposDestaque" :key="repo.id" 
            :class="['carousel-item', { active: index === 0 }]">
            <div class="card repo-card p-3 mx-auto">
              <div class="d-flex align-items-center">
                <img :src="getIcon(repo)" class="language-icon me-2" alt="Ícone da linguagem">
                <div>
                  <a :href="repo.html_url" target="_blank" class="repo-link">{{ repo.name }}</a>
                  <p class="text-muted">{{ repo.description || 'Sem descrição' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Controles do Slider -->
        <button class="carousel-control-prev" type="button" data-bs-target="#reposSlider" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#reposSlider" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  // Lista de ícones para Linguagens e Frameworks
  const icones: Record<string, string> = {
    JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  
    // Ícones de Frameworks
    Vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  };
  
  // Lista de repositórios para destaque
  const reposDestaque = ref<any[]>([]);
  const destaques = ['jramso.github.io', 'AppVueBanhoTosa', 'AgendamentoBanhoETosa'];
  
  const getIcon = (repo: any) => {
    const language = repo.language;
    const topics = repo.topics || [];
  
    // Se a linguagem estiver no objeto de ícones, usa ela
    if (language && icones[language]) {
      return icones[language];
    }
  
    // Se um framework for detectado nos tópicos do GitHub, retorna o ícone dele
    for (const framework of ['Vue', 'React', 'Angular']) {
      if (topics.includes(framework.toLowerCase())) {
        return icones[framework];
      }
    }
  
    // Ícone padrão (GitHub) se não encontrar uma linguagem ou framework
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
  };
  
  onMounted(async () => {
    try {
      const response = await fetch('https://api.github.com/users/jramso/repos');
      const repos = await response.json();
      reposDestaque.value = repos.filter((repo: any) => destaques.includes(repo.name));
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    }
  });
  </script>
  
  <style scoped>
  .repo-card {
    width: 60%;
    border: 1px solid #ddd;
    text-align: center;
    transition: transform 0.3s ease-in-out;
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
  