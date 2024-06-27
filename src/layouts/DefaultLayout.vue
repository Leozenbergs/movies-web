<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title
        class="d-flex justify-start align-center pl-6 cursor-pointer"
        @click="router.push('/')"
      >
        TMDB Filmes
      </v-toolbar-title>
    </v-toolbar>
    <v-container class="home">
      <section class="search-section">
        <div>
          <h1 class="mb-1">Bem-Vindo(a).</h1> 
          <h1 class="mb-4">Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h1>
          <v-text-field
            v-model="search"
            label="Buscar por um filme ou serie"
            variant="solo-filled"
            flat
            rounded
            @keydown.enter.prevent="searchMovie()"
            @click:appendInner="searchMovie()"
            append-inner-icon="mdi-magnify"
          />
        </div>
      </section>
      <main class="pt-4">
        <router-view></router-view>
      </main>
    </v-container>
    <footer-tmdb />
    <v-snackbar
      v-model="showSnackbar"
      location="center right"
      :timeout="2000"
      color="amber-lighten-1"
      elevation="24"
    >
      Especifique sua pesquisa
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from "vue-router"
import FooterTmdb from "@/components/FooterTmdb.vue";

const router = useRouter()
const search = ref('')
const showSnackbar = ref(false)

watch(showSnackbar, (value) => {
  if(value) setTimeout(() => {showSnackbar.value = false}, 2000)
})

const searchMovie = () => {
  if(search.value === "") return showSnackbar.value = true
  router.push(`/movies?search=${search.value}`)
}
</script>

<style scoped>
.search-section {
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>