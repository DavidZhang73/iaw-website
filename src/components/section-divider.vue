<template>
  <div :class="`text-${props.color}`" class="pt-10">
    <div class="text-center">
      <span class="text-xl md:text-4xl font-bold">{{ props.name }}</span>
    </div>
    <div class="p-2 md:p-6 flex justify-center items-center">
      <div class="w-1/4 md:w-1/12 h-1 md:h-2 rounded" :class="`bg-${props.color}`" />
      <div class="mx-4 md:mx-8 h-6 w-6 md:h-10 md:w-10">
        <slot />
      </div>
      <div class="w-1/4 md:w-1/12 h-1 md:h-2 rounded" :class="`bg-${props.color}`" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: "primary",
  },
})
</script>
