<template>
  <div>
    <section-divider name="INTRODUCTION" color="tertiary">
      <StarIcon />
    </section-divider>
    <div class="flex flex-wrap justify-center text-lg max-w-7xl mx-auto">
      <div class="p-2 md:p-8 w-full lg:w-4/5">
        <img src="/img/teaser.png" width="100%" />
        <p class="md:py-2 text-sm">
          <span class="font-bold">Figure.</span>
          An illustration of video-diagram alignment between a YouTube video (top)
          <a href="https://www.youtube.com/watch?v=He0pCeCTJQM">He0pCeCTJQM</a> and an Ikea furniture manual (bottom)
          <a href="https://www.ikea.com/au/en/p/tarva-bed-frame-pine-luroey-s49069795/">s49069795</a>.
        </p>
      </div>
      <div class="p-2 md:p-8 w-full lg:w-3/5">
        <p class="md:text-xl font-bold">What is Ikea Assembly In The Wild (IAW) Dataset:</p>
        <br class="hidden md:inline" />
        <p class="text-sm md:text-base">
          The IAW dataset contains <strong>420</strong> Ikea furniture pieces from <strong>14</strong> common categories
          e.g. sofa, bed, wardrobe, table, etc. Each piece of furniture comes with one or more user instruction manuals,
          which are first divided into pages and then further divided into independent steps cropped from each page
          (some pages contain more than one step and some pages do not contain instructions). There are
          <strong>8568</strong> pages and <strong>8263</strong> steps overall, on average 20.4 pages and 19.7 steps for
          each piece of furniture. We crawled YouTube to find videos corresponding to these instruction manuals and as
          such the conditions in the videos are diverse on many aspects e.g. duration, resolution, first- or
          third-person view, camera pose, background environment, number of assemblers, etc. The IAW dataset contains
          <strong>1005</strong> raw videos with a length of around <strong>183</strong> hours in total. Among them,
          approximately <strong>114</strong> hours of content are labeled as <strong>15649</strong> actions to match the
          corresponding step in the corresponding manual.
        </p>
      </div>
      <div class="p-2 md:p-8 w-full lg:w-2/5">
        <p class="md:text-xl font-bold">Characteristics:</p>
        <br class="hidden md:inline" />
        <ul class="pl-4 text-sm md:text-base list-disc">
          <li>
            420 Ikea furniture
            <ul class="pl-4 list-disc">
              <li>From IKEA website</li>
              <li>14 categories</li>
            </ul>
          </li>
          <li>
            1005 videos
            <ul class="pl-4 list-disc">
              <li>From YouTube</li>
              <li>~183 hours</li>
              <li>
                4 attributes (first- or third-person view, camera fixed or not, indoor or outdoor, number of
                assemblers).
              </li>
            </ul>
          </li>
          <li>
            8263 assembly step images
            <ul class="pl-4 list-disc">
              <li>8568 manual page images</li>
            </ul>
          </li>
          <li>
            15649 pairs of video clips and steps
            <ul class="pl-4 list-disc">
              <li>~114 hours of video</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { StarIcon } from "@heroicons/vue/24/solid"
</script>
