<template>
  <div>
    <section-divider name="INTRODUCTION" color="tertiary">
      <StarIcon />
    </section-divider>
    <div class="flex flex-wrap justify-center text-lg">
      <div class="p-8 w-full lg:w-3/5">
        <p class="text-xl font-bold">What is Ikea Assembly In The Wild (IAW) Dataset:</p>
        <br />
        <p>
          The IAW dataset contains <strong>420</strong> Ikea furniture pieces from <strong>14</strong> common categories
          e.g. sofa, bed, wardrobe, table, etc. Each piece of furniture comes with one or more user instruction manuals,
          which are first divided into pages and then further divided into independent steps cropped from each page
          (some pages contain more than one step and some pages do not contain instructions). There are
          <strong>8568</strong> pages and <strong>8263</strong> steps overall, on average 20.4 pages and 19.7 steps for
          each piece of furniture. We crawled YouTube to find videos corresponding to these instruction manuals and as
          such the conditions in the videos are diverse on many aspects e.g. duration, resolution, first- or
          third-person view, camera pose, background environment, number of assemblers, etc. The IAW dataset contains
          1005 raw videos with a length of around 183 hours in total. Among them, approximately
          <strong>114</strong> hours of content are labeled as <strong>15649</strong> actions to match the corresponding
          step in the corresponding manual.
        </p>
      </div>
      <div class="p-8 w-full lg:w-2/5">
        <p class="text-xl font-bold">Characteristics:</p>
        <br />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { StarIcon } from "@heroicons/vue/24/solid"
</script>
