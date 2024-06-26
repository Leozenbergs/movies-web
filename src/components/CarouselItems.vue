<template>
  <v-slide-group
    show-arrows
  >
    <v-slide-group-item v-for="(item, index) in props.items" :key="index">
      <v-card
        :class="['ma-4']"
        color="#ececec"
        height="350"
        width="200"
      > 
        <v-img :src="getImage(item.poster_path)" cover />
        <v-card-title class="text-left">{{ item?.title || item?.original_name }}</v-card-title>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const getImage = (posterPath: string): string => {
  return `https://image.tmdb.org/t/p/original${posterPath}`
}

const props = defineProps<{items: Array<any>}>()
</script>

<style scoped>
</style>
