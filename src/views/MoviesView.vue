<template>  
  <div class="text-center">
    <section class="mb-6">
      <div
        v-for="(item, index) in results"
        :key="index"
      >
        <v-card
          v-if="index>0"
          :height="150"
          variant="tonal"
          class="mb-4 py-0"
          rounded="lg"
          @click="router.push(`/movies/${item?.id}`)"
        >
          <div class="d-flex">
            <img :src="getImage(item?.poster_path)" cover rounded="lg" :width="100" :height="150" />
            <div class="px-4 py-2 text-left">
              <p>
                <span class="text-h6">{{ item?.title }}</span> 
                <span v-if="item?.title !== item?.original_title" class="small">({{item?.original_title}})</span>
              </p>
              <div class="small text-grey-darken-1 text-subtitle-2">{{ formatDate(item?.release_date) }}</div>
              <p class="">{{ truncate(item?.overview, 240) }}</p>
            </div>
          </div>
        </v-card>
      </div>
    </section>
    <v-pagination
      v-model="currentPage"
      active-color="primary"
      :length="total"
      :total-visible="7"
      rounded
      density="compact"
      class="mb-4"
    ></v-pagination>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import useHelpers from '@/composables/useHelpers'
import { getMovies } from "@/services/tmdb"

const router = useRouter()
const route = useRoute()
const { truncate, formatDate } = useHelpers()

const { search } = route?.query

const total = ref()
const currentPage = ref(1)

const results = ref([])


watch(() => currentPage.value, () => {  
  searchMovie(search?.toString())
})


onMounted(() => {
  searchMovie(search?.toString())
})

const searchMovie = async (search: string | undefined) => {
  if(search === undefined) return
  const { data, status } = await getMovies(search, currentPage.value)
  total.value = data.total_pages
  if(status === 200) return results.value = data.results
  return
}

const getImage = (path: string) => {
  return `https://image.tmdb.org/t/p/original/${path}`
}
</script>

<style scoped>
.home {
  text-align: left;
}
</style>
