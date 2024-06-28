<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title
        class="d-flex justify-start align-center pl-6 cursor-pointer"
        @click="router.push('/')"
      >
        TMDB Movies
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <h1>404: Page not found</h1>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
</script>