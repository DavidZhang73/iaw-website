<template>
  <div>
    <section-divider name="LICENCE" color="tertiary">
      <ScaleIcon />
    </section-divider>
    <div class="page-padding flex justify-center items-center">
      <div class="text-tertiary md:text-xl font-bold">
        <p class="max-w-7xl">
          The dataset and benchmarks provided on this page are published under the Creative Commons
          Attribution-NonCommercial 4.0 International License . This means you can use it for research and educational
          purposes but you must give appropriate credit, provide a link to the license, and indicate if changes were
          made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or
          your use. We make no representations or warranties. You may not use the material for commercial purposes, for
          commercial licensing please contact us at anu.ikea.dataset[at]gmail.com. The code is provided under the MIT
          license.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { ScaleIcon } from "@heroicons/vue/24/solid"
</script>
