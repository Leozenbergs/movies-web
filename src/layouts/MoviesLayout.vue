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
    <v-container class="h-100">
      <v-text-field
        v-model="search"
        label="Pesquisar"
        variant="solo-filled"
        flat
        rounded
        @keydown.enter.prevent="searchMovie()"
        @click:appendInner="searchMovie()"
        append-inner-icon="mdi-magnify"
      />
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
import { ref, watch  } from 'vue'
import { useRoute, useRouter } from "vue-router"
import FooterTmdb from "@/components/FooterTmdb.vue";

const router = useRouter()
const route = useRoute()
const search = ref('')

search.value = route.query?.search

const showSnackbar = ref(false)

watch(showSnackbar, (value) => {
  if(value) setTimeout(() => {showSnackbar.value = false}, 2000)
})

const searchMovie = () => {
  if(search.value === "") return showSnackbar.value = true
  router.replace({ ...route, query: { ...route.query, search: search.value }})
}
</script>

<style scoped>
.search-section {
  height: 90vh;
}
</style>