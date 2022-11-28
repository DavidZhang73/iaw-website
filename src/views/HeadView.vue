<template>
  <div
    ref="canvas"
    class="relative w-full h-full"
  >
    <div
      v-for="row in grid"
      :key="row"
      class="flex opacity-50 filter blur-sm"
    >
      <div
        v-for="cell in row"
        :key="cell"
        :style="{
          width: `${cell.width}px`,
          height: `${cell.height}px`,
        }"
      >
        <grid-cell/>
      </div>
    </div>
    <div class="px-10 md:px-40 pt-[84px] absolute inset-0 flex justify-center items-center">
      <div class="text-center text-primary text-bold">
        <div class="font-extrabold text-3xl md:text-6xl">
          IKEA ASSEMBLY IN THE WILD (IAW) DATASET
        </div>
        <div class="pt-20 pb-4 md:pt-32 md:pb-10 text-xl md:text-3xl font-bold leading-relaxed">
          <a
            href="https://academic.davidz.cn/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          >Jiahao Zhang<sup>1</sup></a>,
          <a
            href="https://users.cecs.anu.edu.au/~cherian/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          >Anoop Cherian<sup>2</sup></a>,
          <a
            href="https://csyanbin.github.io/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          >Yanbin Liu<sup>1</sup></a>,
          <br>
          <a
            href="https://www.itzikbs.com/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          >Yizhak Ben-Shabat<sup>1</sup></a>,
          <a
            href="https://crodriguezo.github.io/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          >Cristian Rodriguez<sup>1</sup></a>,
          <a
            href="https://users.cecs.anu.edu.au/~sgould/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          >Stephen Gould<sup>1</sup></a>
        </div>
        <div class="md:text-2xl">
          <a
            href="https://www.anu.edu.au/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          ><sup>1</sup>The Australian National University (ANU)</a>,
          <a
            href="https://www.merl.com/"
            class="hover:underline hover:cursor-pointer"
            target="_blank"
          ><sup>2</sup>Mitsubishi Electric Research Laboratories (MERL)</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

import GridCell from '@/components/grid-cell.vue'

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
