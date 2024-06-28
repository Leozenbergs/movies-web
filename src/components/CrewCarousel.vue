<template>
  <v-slide-group
    show-arrows
    class="bg-grey-lighten-4 rounded-lg"
  >
    <v-slide-group-item v-for="(item, index) in props.items" :key="index">
      <v-card
        :class="['ma-4']"
        color="grey-lighten-4"
        height="350"
        width="200"
        elevation="0"
        rounded="lg"
        @click="navigateTo(item?.id)"
      > 
        <v-img :src="getImage(item.profile_path)" cover :height="300" />
        <v-card-title class="text-left pl-0 text-grey-darken-3">{{ item?.name }}</v-card-title>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import useHelpers from '@/composables/useHelpers'

const { getImage } = useHelpers()

const router = useRouter()

const navigateTo = (id: string): void => {
  router.push(`/movies/${id}`)
}
const props = defineProps<{items: Array<any>}>()
</script>

<style scoped>
</style>
