<template>
  <Transition>
    <img
      v-if="cellType"
      :src="cellValue.image"
      :alt="cellValue.name"
      class="h-full w-full object-cover select-none"
      style="user-drag: none;"
    >
  </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import resources from '../components/grid-cell-resources'

const cellType = ref()
const cellValue = ref()

const PROBABILITY_EMPTY = 0.5
const DISPLAY_TIME = 10000

const random_choose = (obj) => {
  const key_list = Object.keys(obj)
  const rand = Math.random()
  const random_gap = 1 / key_list.length
  for (let i = 0; i < key_list.length; i++) {
    if (rand < random_gap * (i + 1)) {
      return { key: key_list[i], value: obj[key_list[i]] }
    }
  }
}

const refreshCell = () => {
  cellType.value = null
  cellValue.value = null
  setTimeout(() => {
    if (Math.random() > PROBABILITY_EMPTY) {
      const resource = random_choose(resources)
      cellType.value = resource.key
      cellValue.value = random_choose(resource.value).value
    }
  }, 500)

}

onMounted(() => {
  setTimeout(() => {
    refreshCell()
    setInterval(refreshCell, DISPLAY_TIME)
  }, Math.random() * DISPLAY_TIME)
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
