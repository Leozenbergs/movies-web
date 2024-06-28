<template>  
  <div class="text-center">
    <section v-if="!!details" class="mb-6">
      <div class="details">
        <v-card :height="570" :image="getImage(details?.backdrop_path)" >
          <div class="d-flex blur w-100"></div>
          <v-sheet class="d-flex panel align-start w-100 text-white">
            <div class="mr-4">
              <v-img
              lazy-src="https://placehold.co/200x400"
              :src="getImage(details?.poster_path)"
              cover
              :width="200"
              :height="400"
              rounded="lg"
            />
            </div>
            <div class="ml-4 text-left">
              <div>
                <span class="text-h5">{{ details.original_title }}</span>{{ " " }}
                <span class="small">({{ year }})</span>
              </div>
              <div v-if="genres?.length" class="small">
                <span v-for="(genre, index) in genres" :key="index">{{ genre }},{{ " " }}</span>
              </div>
              <div class="d-flex align-center space-around my-6">
                <v-progress-circular v-model="voteAverage" :width="10" :size="100">
                  <template v-slot:default> {{ voteAverage }}% </template>
                </v-progress-circular>
                <div class="ml-4 text-h7">Users
                  <br />Rating
                </div>
              </div>
              <div>
                <div class="text-h6">Sinopsis</div>
                <p>{{ details?.overview }}</p>
              </div>
            </div>
          </v-sheet>
        </v-card>
        <div>
          <div class="text-h6 text-left my-4">Cast and Crew</div>
          <crew-carousel v-if="crew?.cast.length" :items="crew.cast" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router'
import useHelpers from '@/composables/useHelpers';
import { getMovieDetails, getMovieCrew } from "@/services/tmdb"
import CrewCarousel from '@/components/CrewCarousel.vue'

const { getImage, getYear } = useHelpers()
const { params } = useRoute()

type Genre = {
  id: number,
  name: string,
}

const details = ref()
const crew = ref()
const movieId = params?.id

onMounted(() => {
  fetchMovieDetails(movieId)
  fetchCrew(movieId)
});


const fetchMovieDetails = async (id: string | string[]) => {
  const { data, status } = await getMovieDetails(id)
  if(status === 200) return details.value = data
  return
}

const fetchCrew = async (id: string | string[]) => {
  const { data, status } = await getMovieCrew(id)
  if(status === 200) return crew.value = data
  return
}

const genres = computed(() => {
  return details.value?.genres?.map((genre: Genre) => genre.name) || []
})

const year = computed(() => {
  return getYear(details.value?.release_date) || ""
})

const voteAverage = computed(() => {
  return details.value?.vote_average.toFixed(1) * 10 ?? 0
})
</script>

<style scoped>
.blur, .panel {
  height: 100%;
  width: 100% !important;
  padding: 20px 50px
}
.panel {
  background-color: transparent;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
}
.blur {
  background-color: rgba(0, 0, 0, .6);
  position: absolute;
}
</style>
