<template>  
  <div class="text-center">
    <section class="mb-6">
      <div class="d-flex justify-space-between align-center">
        <h2>Movies</h2>
        <v-btn-toggle
          v-model="movieMode"
          color="primary"
          base-color="#ececec"
          rounded="xl"
          group
          class="mb-6 mt-4"
          density="compact"
        >
          <v-btn value="trending">
            Trending
          </v-btn>
  
          <v-btn value="topRated">
            Top rated
          </v-btn>
        </v-btn-toggle>
      </div>
      <carousel v-if="!!trendingMovies" :items="carouselMovieItems"/>
    </section>
    <section>
      <div class="d-flex justify-space-between align-center">
        <h2>Tv shows</h2>
        <v-btn-toggle
          v-model="tvMode"
          color="primary"
          base-color="#ececec"
          rounded="xl"
          group
          class="mb-6 mt-4"
          density="compact"
        >
          <v-btn value="trending">
            Trending
          </v-btn>
  
          <v-btn value="topRated">
            Top rated
          </v-btn>
        </v-btn-toggle>
      </div>
      <carousel v-if="!!trendingTv" :items="carouselTvItems"/>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { getTrendingMovies, getTopRatedMovies, getTopRatedTv, getTrendingTv } from "@/services/tmdb"
import Carousel from '@/components/CarouselMedia.vue';

const trendingMovies = ref()
const topRatedMovies = ref()
const trendingTv = ref()
const topRatedTv = ref()
const movieMode = ref("trending")
const tvMode = ref("trending")

onMounted(() => {
  fetchTrendingMovies()
  fetchTopRatedMovies()
  fetchTrendingTv()
  fetchTopRatedTv()
});

const carouselMovieItems = computed(() => {
  return movieMode.value === "trending" ? trendingMovies.value?.results : topRatedMovies.value?.results
})

const carouselTvItems = computed(() => {
  return tvMode.value === "trending" ? trendingTv.value?.results : topRatedTv.value?.results
})

const fetchTrendingMovies = async () => {
  const { data, status } = await getTrendingMovies()
  if(status === 200) return trendingMovies.value = data
  return
}
const fetchTopRatedMovies = async () => {
  const { data, status } = await getTopRatedMovies()
  if(status === 200) return topRatedMovies.value = data
  return
}

const fetchTrendingTv = async () => {
  const { data, status } = await getTrendingTv()
  if(status === 200) return trendingTv.value = data
  return
}
const fetchTopRatedTv = async () => {
  const { data, status } = await getTopRatedTv()
  if(status === 200) return topRatedTv.value = data
  return
}
</script>

<style scoped>
.home {
  text-align: left;
}
</style>
