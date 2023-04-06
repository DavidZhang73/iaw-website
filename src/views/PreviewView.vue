<template>
  <div>
    <section-divider name="PREVIEW" color="tertiary">
      <PresentationChartBarIcon />
    </section-divider>
    <div class="page-padding flex justify-center flex-wrap">
      <template v-if="currentDatasetIndex !== null && currentDatasetIndex !== undefined && currentDatasetIndex >= 0">
        <div class="w-full flex items-center">
          <!-- Head -->
          <div class="w-20 font-bold">Furniture:</div>
          <input
            class="w-20 dataset-selector"
            list="furniture"
            @input="handleDatasetIndexInput"
            :value="currentDatasetIndex"
          />
          <datalist id="furniture">
            <option v-for="(data, index) in dataset" :value="index">
              {{ data.subCategory }} {{ data.id }} {{ data.name }} {{ data.typeName }}
            </option>
          </datalist>
          <div class="text-center font-bold text-3xl flex-grow">
            <a :href="currentDataset.pipUrl" target="_blank"
              >{{ currentDataset.subCategory }} {{ currentDataset.id }} {{ currentDataset.name }}
              {{ currentDataset.typeName }}
            </a>
          </div>
          <a :href="currentDataset.pipUrl" target="_blank">
            <img class="inline w-32" :src="currentDataset.mainImageUrl"
          /></a>
        </div>
        <div class="w-full xl:w-1/2 xl:pr-2">
          <!-- Manual -->
          <div class="flex items-center py-1">
            <div class="w-20 font-bold">Manual:</div>
            <div class="flex flex-wrap">
              <button
                v-for="(manual, index) in currentDataset.manualList"
                :key="manual.url"
                :class="{ 'bg-primary': index === currentManualIndex, 'active-btn': index === currentManualIndex }"
                @click="currentManualIndex = index"
              >
                {{ index + 1 }}
              </button>
            </div>
          </div>
          <div class="flex items-center py-1">
            <div class="w-20 font-bold">Step:</div>
            <div class="flex flex-wrap">
              <button
                v-for="annotation in currentDataset.annotationList.filter((item) => item.manual === currentManualIndex)"
                :class="{
                  'bg-primary': annotation.step === currentManualStep,
                  'active-btn': annotation.step === currentManualStep,
                }"
                @click="currentManualStep = annotation.step"
              >
                {{ annotation.step + 1 }}
              </button>
            </div>
          </div>
          <pdf-page-viewer :src="currentManual.url" :annotation="currentManualAnnotation" />
          <div class="pt-1 md:pt-2 text-sm text-gray-500">{{ currentManualAnnotation }}</div>
        </div>
        <div class="w-full xl:w-1/2 xl:pl-2">
          <!-- Video -->
          <div class="flex items-center py-1">
            <div class="w-20 font-bold">Video:</div>
            <div class="flex flex-wrap">
              <button
                v-for="(video, index) in currentDataset.videoList"
                :key="video.url"
                :class="{ 'bg-primary': index === currentVideoIndex, 'active-btn': index === currentVideoIndex }"
                @click="currentVideoIndex = index"
              >
                {{ video.url.split("https://www.youtube.com/watch?v=").at(-1) }}
              </button>
            </div>
          </div>
          <div class="flex items-center py-1">
            <div class="w-20 font-bold">Action:</div>
            <div class="flex flex-wrap">
              <button
                v-for="(annotation, index) in currentVideo.annotation"
                :class="{
                  'bg-primary': index === currentVideoAnnotationIndex,
                  'active-btn': index === currentVideoAnnotationIndex,
                }"
                @click="handleChangeCurrentVideoAnnotationIndex(index)"
              >
                {{ annotation.action + 1 }}
              </button>
            </div>
          </div>
          <iframe
            class="w-full"
            type="text/html"
            height="600"
            :src="`https://www.youtube.com/embed/${currentVideoId}?start=${currentVideoStart}&end=${currentVideoEnd}`"
            frameborder="0"
          ></iframe>
          <div class="pt-1 md:pt-2 text-sm text-gray-500">{{ currentVideoInfo }}</div>
          <div class="text-sm text-gray-500">{{ currentVideoAnnotation }}</div>
        </div>
      </template>
      <template v-else>
        <div class="w-full">Loading</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { PresentationChartBarIcon } from "@heroicons/vue/24/solid"
import { onMounted, ref, computed, watch } from "vue"

import pdfPageViewer from "../components/pdf-page-viewer.vue"

const DATASET_GITHUB_URL =
  "https://raw.githubusercontent.com/DavidZhang73/IKEAAssemblyInTheWildDataset/main/dataset/IKEAAssemblyInTheWildDataset.json"

let dataset = []
const currentDatasetIndex = ref(-1)
const currentDataset = computed(() => dataset[currentDatasetIndex.value])

const currentManualIndex = ref(0)
const currentManual = computed(() => currentDataset.value.manualList[currentManualIndex.value])

const currentManualStep = ref(0)
const currentManualAnnotation = computed(() =>
  currentDataset.value.annotationList.find(
    (item) => item.manual === currentManualIndex.value && item.step === currentManualStep.value
  )
)

const currentVideoIndex = ref(0)
const currentVideo = computed(() => currentDataset.value.videoList[currentVideoIndex.value])
const currentVideoId = computed(() =>
  currentDataset.value.videoList[currentVideoIndex.value].url.split("https://www.youtube.com/watch?v=").at(-1)
)
const currentVideoInfo = computed(() => {
  const ret = {}
  for (const key of Object.keys(currentVideo.value)) {
    if (key !== "annotation") ret[key] = currentVideo.value[key]
  }
  return ret
})

const currentVideoAnnotationIndex = ref(0)
const currentVideoAnnotation = computed(() => {
  if (currentVideoAnnotationIndex.value !== undefined && currentVideoAnnotationIndex.value !== null)
    return currentVideo.value.annotation[currentVideoAnnotationIndex.value]
  else return {}
})

const currentVideoStart = computed(() => parseInt(currentVideoAnnotation.value.start))
const currentVideoEnd = computed(() => parseInt(currentVideoAnnotation.value.end))

onMounted(async () => {
  const res = await fetch(DATASET_GITHUB_URL)
  dataset = await res.json()
  currentDatasetIndex.value = 0
})

const handleDatasetIndexInput = (event) => {
  const index = event.target.value
  if (index === "" || isNaN(index) || index < 0 || index >= dataset.length) {
    currentDatasetIndex.value = 0
    return
  }
  currentDatasetIndex.value = parseInt(index)
}

watch(currentDatasetIndex, (newVal, oldVal) => {
  if (newVal === oldVal) return
  currentManualStep.value = 0
  currentManualIndex.value = 0
  currentVideoIndex.value = 0
})

watch(currentManualIndex, (newVal, oldVal) => {
  if (newVal === oldVal) return
  for (let i = 0; i < currentVideo.value.annotation.length; i++) {
    if (currentDataset.value.annotationList[i].manual === newVal) {
      currentManualStep.value = i
      break
    }
  }
})

watch([currentManualStep, currentVideoIndex], (newVal, oldVal) => {
  if (newVal === oldVal) return
  for (let i = 0; i < currentVideo.value.annotation.length; i++) {
    if (currentVideo.value.annotation[i].action === currentManualStep.value) {
      currentVideoAnnotationIndex.value = i
      return
    }
  }
  currentVideoAnnotationIndex.value = undefined
})

const handleChangeCurrentVideoAnnotationIndex = (index) => {
  currentVideoAnnotationIndex.value = index
  for (let i = 0; i < currentDataset.value.annotationList.length; i++) {
    if (currentDataset.value.annotationList[i].step === currentVideoAnnotation.value.action) {
      currentManualIndex.value = currentDataset.value.annotationList[i].manual
      currentManualStep.value = currentDataset.value.annotationList[i].step
      return
    }
  }
}
</script>

<style scoped>
button {
  @apply text-sm md:text-base font-bold text-primary border-primary p-1 md:p-2 mr-1 mt-1 border-2 rounded-md hover:text-white hover:bg-primary;
}

.active-btn {
  @apply text-secondary !important;
}

.dataset-selector {
  @apply font-bold text-primary border-primary p-1 md:p-2 border-2 rounded-md hover:text-white hover:bg-primary;
}
</style>
