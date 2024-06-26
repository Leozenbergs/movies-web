<template>
  <v-container class="home">
    <section class="search-section">
      <div>
        <h1 class="mb-1">Bem-Vindo(a).</h1> 
        <h1 class="mb-4">Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h1>
        <v-text-field label="Pesquisar" variant="outlined" rounded append-inner-icon="mdi-magnify" />
      </div>
    </section>
    <main class="pt-4">
      <router-view></router-view>
    </main>
  </v-container>
</template>

<style scoped>
.search-section {
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>