<template>
  <div>
    <section-divider name="STATISTICS">
      <ChartPieIcon />
    </section-divider>
    <div class="flex flex-wrap items-start">
      <div class="w-full md:w-1/3 p-2 md:p-8 flex flex-wrap">
        <div><img width="100%" src="/img/table1.png" /></div>
        <div><img width="100%" src="/img/table2.png" /></div>
      </div>
      <div class="w-full md:w-1/3 p-2 md:p-8 flex flex-wrap">
        <div class="w-full"><img width="100%" src="/img/video_boxplot.svg" /></div>
        <div class="w-1/2"><img width="100%" src="/img/video_duration_pie.svg" /></div>
        <div class="w-1/2"><img width="100%" src="/img/video_fps_pie.svg" /></div>
      </div>
      <div class="w-full md:w-1/3 p-2 md:p-8 flex flex-wrap">
        <div class="w-full"><img width="100%" src="/img/attribute.svg" /></div>
        <div class="w-1/2"><img width="100%" src="/img/video_is_fixed_pie.svg" /></div>
        <div class="w-1/2"><img width="100%" src="/img/video_is_indoor_pie.svg" /></div>
        <div class="w-1/2"><img width="100%" src="/img/video_people_count_pie.svg" /></div>
        <div class="w-1/2"><img width="100%" src="/img/video_person_view_pie.svg" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { ChartPieIcon } from "@heroicons/vue/24/solid"
</script>
