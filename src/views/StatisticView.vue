<template>
  <div>
    <section-divider name="STATISTICS">
      <ChartPieIcon />
    </section-divider>
    <div class="page-padding flex flex-wrap items-start">
      <div class="w-full md:w-1/3 p-2 md:p-8 flex flex-wrap">
        <div class="md:pb-2">
          <img width="100%" src="/img/table1.png" />
          <p class="md:py-2 text-sm">
            <span class="font-bold">Table 1.</span>
            Statistics of assembly manuals categorized by each furniture category.
          </p>
        </div>
        <div class="md:pb-2">
          <img width="100%" src="/img/table2.png" />
          <p class="md:py-2 text-sm">
            <span class="font-bold">Table 2.</span>
            Statistics of assembly videos categorized by each furniture category. Annotated duration denotes the total
            duration of video segments that have labels.
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-2 md:p-8 flex flex-wrap">
        <div class="w-full md:pb-2">
          <img width="100%" src="/img/video_boxplot.svg" />
          <p class="md:py-2 text-sm">
            <span class="font-bold">Figure 1.</span>
            Distribution of video duration and the number of actions per video. Video duration: (max: 4763, min: 40,
            mean: 655, median: 520); Number of actions: (max: 63, min: 1, mean: 16, median: 12).
          </p>
        </div>
        <div class="flex md:pb-2">
          <div class="w-1/2">
            <img width="100%" src="/img/video_duration_pie.svg" />
            <p class="md:pt-2 text-sm">
              <span class="font-bold">(a)</span>
              Duration of video.
            </p>
          </div>
          <div class="w-1/2">
            <img width="100%" src="/img/video_fps_pie.svg" />
            <p class="md:pt-2 text-sm">
              <span class="font-bold">(b)</span>
              Frame Per Second (FPS) of video.
            </p>
          </div>
        </div>
        <p class="md:py-2 text-sm">
          <span class="font-bold">Figure 2.</span>
          Proportion of two video attributes.
        </p>
      </div>
      <div class="w-full md:w-1/3 p-2 md:p-8 flex flex-wrap">
        <div class="flex flex-wrap md:pb-2">
          <div class="w-1/2">
            <img width="100%" src="/img/video_people_count_pie.svg" />
            <p class="md:py-2 text-sm">
              <span class="font-bold">(a)</span>
              How many people are involved during assembling.
            </p>
          </div>
          <div class="w-1/2">
            <img width="100%" src="/img/video_person_view_pie.svg" />
            <p class="md:py-2 text-sm">
              <span class="font-bold">(b)</span>
              Is it first-person view, third-person view or both occurred.
            </p>
          </div>
          <div class="w-1/2">
            <img width="100%" src="/img/video_is_fixed_pie.svg" />
            <p class="md:pt-2 text-sm">
              <span class="font-bold">(c)</span>
              Is the camera fixed, not-fixed or both occurred.
            </p>
          </div>
          <div class="w-1/2">
            <img width="100%" src="/img/video_is_indoor_pie.svg" />
            <p class="md:pt-2 text-sm">
              <span class="font-bold">(d)</span>
              Is the assembly happened indoor or outdoor.
            </p>
          </div>
        </div>
        <p class="md:py-2 text-sm">
          <span class="font-bold">Figure 3.</span>
          Proportion of the four attributes.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { ChartPieIcon } from "@heroicons/vue/24/solid"
</script>
