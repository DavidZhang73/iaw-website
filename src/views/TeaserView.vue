<template>
  <div ref="canvas" class="relative w-full h-full">
    <div v-for="row in grid" :key="row" class="flex">
      <div
        v-for="cell in row"
        :key="cell"
        :style="{
          width: `${cell.width}px`,
          height: `${cell.height}px`,
        }"
      >
        <grid-cell />
      </div>
    </div>
    <div class="px-10 md:px-40 pt-[67.2px] xl:pt-[84px] absolute inset-0 flex justify-center items-center">
      <div
        class="p-6 md:p-10 text-center text-primary text-bold bg-white/30 rounded-xl backdrop-blur-xl backdrop-sepia"
      >
        <div class="font-extrabold text-2xl md:text-6xl">IKEA ASSEMBLY IN THE WILD (IAW) DATASET</div>
        <a
          class="inline-block pt-2 md:pt-8 text-sm md:text-3xl font-bold hover:underline"
          target="_blank"
          href="https://academic.davidz.cn/en/publication/zhang-cvpr-2023/"
          >Aligning Step-by-Step Instruction Diagrams to Video Demonstrations</a
        >
        <div class="py-2 md:py-16 flex flex-wrap justify-center">
          <a
            href="https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_Aligning_Step-by-Step_Instructional_Diagrams_to_Video_Demonstrations_CVPR_2023_paper.pdf"
            target="_blank"
            ><button class="btn"><NewspaperIcon class="h-4 md:h-6 md:mr-1" />Paper</button></a
          >
          <a href="#download"
            ><button class="btn"><ArrowDownTrayIcon class="h-4 md:h-6 md:mr-1" />Download</button></a
          >
          <a href="#cite"
            ><button class="btn">
              <svg
                class="h-3 md:h-5 md:mr-1"
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                /></svg
              >Cite
            </button></a
          >
        </div>
        <div class="pb-2 md:pb-10 text-sm md:text-3xl font-bold">
          <a href="https://academic.davidz.cn/" class="inline-block px-2 md:px-6 hover:underline" target="_blank"
            >Jiahao Zhang<sup>1</sup></a
          >
          <a
            href="https://users.cecs.anu.edu.au/~cherian/"
            class="inline-block px-2 md:px-6 hover:underline"
            target="_blank"
            >Anoop Cherian<sup>2</sup></a
          >
          <a href="https://csyanbin.github.io/" class="inline-block px-2 md:px-6 hover:underline" target="_blank"
            >Yanbin Liu<sup>1</sup></a
          >
          <div class="lg:w-full"></div>
          <a href="https://www.itzikbs.com/" class="inline-block px-2 md:px-6 hover:underline" target="_blank"
            >Yizhak Ben-Shabat<sup>1,3</sup></a
          >
          <a href="https://crodriguezo.github.io/" class="inline-block px-2 md:px-6 hover:underline" target="_blank"
            >Cristian Rodriguez<sup>4</sup></a
          >
          <a
            href="https://users.cecs.anu.edu.au/~sgould/"
            class="inline-block px-2 md:px-6 hover:underline"
            target="_blank"
            >Stephen Gould<sup>1</sup></a
          >
        </div>
        <div class="flex flex-wrap justify-center text-sm md:text-2xl">
          <div>
            <a href="https://www.anu.edu.au/" class="inline-block px-2 md:px-6 hover:underline" target="_blank"
              ><sup>1</sup>The Australian National University</a
            >
          </div>
          <div>
            <a href="https://www.merl.com/" class="inline-block px-2 md:px-6 hover:underline" target="_blank"
              ><sup>2</sup>Mitsubishi Electric Research Laboratories</a
            >
          </div>
          <div class="lg:w-full"></div>
          <div>
            <a
              href="https://www.technion.ac.il/en/home-2/"
              class="inline-block px-2 md:px-6 hover:underline"
              target="_blank"
              ><sup>3</sup>Technion Israel Institute of Technology</a
            >
          </div>
          <div>
            <a
              href="https://www.adelaide.edu.au/aiml/"
              class="inline-block px-2 md:px-6 hover:underline"
              target="_blank"
              ><sup>4</sup>The Australian Institute for Machine Learning</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useResizeObserver } from "@vueuse/core"
import { NewspaperIcon, ArrowDownTrayIcon, GlobeAltIcon, Bars3Icon } from "@heroicons/vue/24/solid"

import GridCell from "@/components/grid-cell.vue"

const socialLinks = [
  {
    name: "Github",
    url: "",
  },
]

const canvas = ref()
const grid = ref()

const gen_grid = (canvasWidth, canvasHeight, baseWidth) => {
  const numCols = Math.floor(canvasWidth / baseWidth)
  const cellWidth = canvasWidth / numCols
  const numRows = Math.floor(canvasHeight / cellWidth)
  const lastRowCellHeight = canvasHeight - cellWidth * numRows
  const newGrid = []
  for (let i = 0; i < numRows + 1; i++) {
    const newRow = []
    for (let j = 0; j < numCols; j++) {
      newRow.push({
        width: cellWidth,
        height: i === numRows ? lastRowCellHeight : cellWidth,
      })
    }
    newGrid.push(newRow)
  }
  grid.value = newGrid
}
onMounted(() => {
  useResizeObserver(canvas, (entries) => {
    const entry = entries[0]
    let baseWidth = 224
    if (entry.contentRect.width <= 768) {
      baseWidth = 112
    }
    gen_grid(entry.contentRect.width, entry.contentRect.height, baseWidth)
  })
})
</script>

<style>
.btn {
  @apply flex items-center text-sm md:text-lg font-bold align-middle text-primary border-primary p-1 md:p-2 m-1 md:m-2 border-2 rounded-xl md:rounded-2xl hover:text-white hover:bg-primary;
}
</style>
