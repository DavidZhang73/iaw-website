<template>
  <div>
    <section-divider name="CITE">
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
        />
      </svg>
    </section-divider>
    <div class="page-padding max-w-7xl mx-auto">
      <pre
        class="line-numbers language-bibtex rounded-lg text-sm md:text-base font-bold select-all"
        style="white-space: pre-wrap !important"
        data-prismjs-copy-timeout="500"
        data-prismjs-copy="Copy"
      ><code>@inproceedings{Zhang2023Aligning,
  author    = {Zhang, Jiahao and Cherian, Anoop Liu, Yanbin and Ben-Shabat, Yizhak and Rodriguez, Cristian and Gould, Stephen},
  title     = {Aligning Step-by-Step Instructional Diagrams to Video Demonstrations},
  booktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2023},
}</code></pre>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
</script>

<style>
.copy-to-clipboard-button {
  margin: 0.5em, 0.5em, 0, 0;
  height: 2em;
}
</style>
