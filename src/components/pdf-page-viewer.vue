<template>
  <div class="relative">
    <canvas ref="canvas" class="w-full" style="height: 600px"></canvas>
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center text-3xl font-bold backdrop-blur">
      Loading...
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, onMounted, watch, onUnmounted } from "vue"
import * as pdfjs from "pdfjs-dist"
import "pdfjs-dist/build/pdf.worker.entry.js"

pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.entry.js"

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  annotation: {
    type: Object,
    required: false,
  },
})

const { src, annotation } = toRefs(props)

let pdf

const IMAGE_WIDTH = 1241
const IMAGE_HEIGHT = 1754
const canvas = ref()
const CANVAS_WIDTH = 1241
let CANVAS_HEIGHT = 0
let viewport
const loading = ref(true)

const draw = async () => {
  loading.value = true

  // clear canvas
  const ctx = canvas.value.getContext("2d")
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  // draw page
  const page = await pdf.getPage(annotation.value.page + 1)
  const scale = CANVAS_HEIGHT / page.getViewport({ scale: 1 }).height
  viewport = page.getViewport({ scale })

  const renderContext = {
    canvasContext: ctx,
    viewport: viewport,
  }
  await page.render(renderContext).promise

  // draw annotation
  const { x, y, width, height, color } = annotation.value
  const scaleX = viewport.width / IMAGE_WIDTH
  const scaleY = viewport.height / IMAGE_HEIGHT

  ctx.strokeStyle = color
  ctx.lineWidth = 10
  ctx.strokeRect(x * scaleX, y * scaleY, width * scaleX, height * scaleY)

  loading.value = false
}

const resizeCanvas = () => {
  CANVAS_HEIGHT = (CANVAS_WIDTH / canvas.value.clientWidth) * 600
  canvas.value.width = CANVAS_WIDTH
  canvas.value.height = CANVAS_HEIGHT
}

const handleCanvasResize = async () => {
  resizeCanvas()
  await draw()
}

const loadPdf = async () => {
  loading.value = true
  const loadingTask = pdfjs.getDocument(src.value.replace("www.ikea.com", "iaw.davidz.cn/pdf"))
  pdf = await loadingTask.promise
}

onMounted(async () => {
  await loadPdf()
  resizeCanvas()
  await draw()
  window.addEventListener("resize", handleCanvasResize, {})
})

onUnmounted(() => {
  window.removeEventListener("resize", handleCanvasResize)
})

watch([src, annotation], async (newVal, oldVal) => {
  if (newVal[0] && newVal[0] !== oldVal[0]) {
    await loadPdf()
    resizeCanvas()
    await draw()
  } else {
    await draw()
  }
})
</script>
