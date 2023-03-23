<template>
  <div>
    <section-divider name="Acknowledgements">
      <TrophyIcon />
    </section-divider>
    <div class="flex justify-center items-center">
      <div class="text-tertiary text-xl font-bold">
        <ul class="list-disc">
          <li>Jiahao Zhang is supported by an ANU-MERL PhD scholarship agreement.</li>
          <li>Yizhak Ben-Shabat is Supported by the Marie Sklodowska-Curie grant agreement No. 893465.</li>
          <li>Stephen Gould is supported by an ARC Future Fellowship No. FT200100421.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { TrophyIcon } from "@heroicons/vue/24/solid"
</script>
