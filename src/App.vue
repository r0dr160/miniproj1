<template>
  <div id="app">
    <!-- Menu de Navegação -->
    <nav>
      <router-link to="/">Quem Sou Eu</router-link>
      <router-link to="/oque-faco">O Que Faço</router-link>
      <router-link to="/hobbies">Hobbies</router-link>
    </nav>

    <!-- Área de Conteúdo -->
    <router-view></router-view>

    <!-- Rodapé com Ícones de Redes Sociais -->
    <footer>
      <a href="https://facebook.com" target="_blank"><span class="material-icons">facebook</span></a>
      <a href="hhttps://github.com/r0dr160/miniproj1" target="_blank"><span class="material-icons">code</span></a> <!-- GitHub não possui ícone específico no Material-->
      <a href="https://www.linkedin.com/in/rodrigoc-costa/" target="_blank"><span class="material-icons">business_center</span></a>
      <a href="https://x.com" target="_blank"><span class="material-icons">alternate_email</span></a> <!-- Representa Twitter/X -->
      <a href="https://api.whatsapp.com/send?phone=351912827482&text=Ol%C3%A1%2C%20meu%20amigo!" target="_blank"><span class="material-icons">chat</span></a>
    </footer>
  </div>
</template>

<style>
/* Estilos gerais */
#app {
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que a página ocupe no mínimo a altura total da tela */
}

/* Menu de Navegação */
nav {
  background-color: #add8e6;
  padding: 10px;
}
nav a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
nav a:hover {
  color: #0056b3;
}

/* Área de Conteúdo */
section {
  padding: 20px;
  flex: 1; /* Faz a seção principal expandir para preencher o espaço restante */
}

/* Rodapé Fixo no Final da Tela */
footer {
  background-color: #add8e6;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
  /* Fixar o rodapé no final da tela */
  position: sticky;
  bottom: 0;
}
footer a {
  color: black;
  font-size: 1.5em;
  text-decoration: none;
}
footer a:hover {
  color: #0056b3;
}
.material-icons {
  font-size: 1.5em;
}
</style>
