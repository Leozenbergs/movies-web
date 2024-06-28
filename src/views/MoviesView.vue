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
          class="mb-4 py-0 cursor-pointer"
          rounded="lg"
          @click="router.push(`/movies/${item?.id}`)"
        >
          <div class="d-flex">
            <div style="width: 100; height: 150;">
              <v-img
                lazy-src="https://placehold.co/100x150"
                :src="getImage(item?.poster_path)"
                :width="100"
                :height="150"
                aspect-ratio="1"
                eager
              />
            </div>
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
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store'
import useHelpers from '@/composables/useHelpers'
import { getMovies } from "@/services/tmdb"

const { query } = storeToRefs(useMainStore())
const router = useRouter()
const route = useRoute()
const { truncate, formatDate, getImage } = useHelpers()

const { search } = route?.query

const total = ref()
const currentPage = ref(1)

const results: any = ref([])

watch(() => query.value, (value) => {
  searchMovie(value)
})

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

</script>

<style>
.home {
  text-align: left;
}
.v-img ,img {
  display: block !important;
}
</style>
