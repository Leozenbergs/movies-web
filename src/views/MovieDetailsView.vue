<template>  
  <div class="text-center">
    <section class="mb-6">
      <h2>Detalhes</h2>
      <div class="details">
        {{ details }}
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { getMovieDetails } from "@/services/tmdb"

const details = ref()

const { params } = useRoute()

const movieId = params?.id

onMounted(() => {
  fetchMovieDetails(movieId)
});


const fetchMovieDetails = async (id: string | string[]) => {
  const { data, status } = await getMovieDetails(id)
  if(status === 200) return details.value = data
  return
}
</script>

<style scoped>
.home {
  text-align: left;
}
</style>
