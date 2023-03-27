<template>
  <header class="fixed z-20 bg-primary w-screen">
    <div class="py-3 xl:py-6 page-padding flex">
      <a
        href=""
        class="font-bold text-2xl xl:text-3xl hover:text-secondary flex items-center"
        :class="{ 'text-secondary': hash === '', 'text-white': hash !== '' }"
        >IAW DATASET</a
      >
      <div class="flex-grow" />
      <button
        class="flex items-center xl:hidden text-white font-bold align-middle hover:text-secondary p-2 border-2 hover:border-secondary border-white rounded-xl xl:rounded-2xl"
        @click="isDrawerOpen = !isDrawerOpen"
      >
        MENU
        <Bars3Icon class="ml-1 h-6" />
      </button>
      <div class="hidden xl:flex gap-x-6 font-bold text-1xl text-white items-center">
        <a
          v-for="view in viewList"
          :key="view.name"
          :href="'#' + view.name"
          class="hover:text-secondary"
          :class="{ 'text-secondary': hash === view.name }"
          >{{ view.name.toUpperCase() }}</a
        >
      </div>
    </div>
  </header>
  <transition>
    <div v-if="isDrawerOpen" class="pt-[67.2px] fixed z-10 bg-primary w-screen font-bold text-1xl text-white">
      <a
        v-for="view in viewList"
        :key="view.name"
        :href="'#' + view.name"
        class="px-6 py-3 block hover:text-secondary"
        :class="{ 'text-secondary': hash === view.name }"
        @click="isDrawerOpen = false"
        >{{ view.name.toUpperCase() }}</a
      >
    </div>
  </transition>
  <full-page :options="full_page_options">
    <teaser-view class="section pt-[67.2px] xl:pt-[84px] bg-secondary" />
    <introduction-view class="section pt-[67.2px] xl:pt-[84px] pb-10" />
    <statistic-view class="section pt-[67.2px] xl:pt-[84px] pb-10 bg-secondary" />
    <preview-view class="section pt-[67.2px] xl:pt-[84px] pb-10" />
    <cite-view class="section pt-[67.2px] xl:pt-[84px] pb-10 bg-secondary" />
    <download-view class="section pt-[67.2px] xl:pt-[84px] pb-10" />
    <people-view class="section pt-[67.2px] xl:pt-[84px] pb-10 bg-secondary" />
    <license-view class="section pt-[67.2px] xl:pt-[84px] pb-10" />
    <acknowledgements-view class="section pt-[67.2px] xl:pt-[84px] pb-10 bg-secondary" />
    <footer class="section fp-auto-height py-6 text-white text-center text-sm bg-tertiary">
      <div>
        This dataset and website is not sponsored or affiliated in any way with IKEA the Furniture retail company
      </div>
      <a href="https://alvarotrigo.com/fullPage/">Made with fullPage.js</a>
      <div>Copyright © <a href="https://academic.davidz.cn">DavidZ</a> 2023</div>
    </footer>
  </full-page>
</template>

<script setup>
import CiteView from "@/views/CiteView.vue"
import DownloadView from "@/views/DownloadView.vue"
import TeaserView from "@/views/TeaserView.vue"
import IntroductionView from "@/views/IntroductionView.vue"
import LicenseView from "@/views/LicenseView.vue"
import PeopleView from "@/views/PeopleView.vue"
import AcknowledgementsView from "@/views/AcknowledgementsView.vue"
import StatisticView from "./views/StatisticView.vue"
import PreviewView from "./views/PreviewView.vue"
import { Bars3Icon } from "@heroicons/vue/24/solid"
import { onMounted, onUnmounted, ref } from "vue"

const viewList = [
  {
    name: "introduction",
  },
  {
    name: "statistics",
  },
  {
    name: "preview",
  },
  {
    name: "cite",
  },
  {
    name: "download",
  },
  {
    name: "people",
  },
  {
    name: "license",
  },
  {
    name: "acknowledgements",
  },
]

const full_page_options = ref({
  licenseKey: "gplv3-license",
  anchors: ["", ...viewList.map((view) => view.name), "footer"],
  navigation: true,
  showActiveTooltip: true,
  credits: { enabled: false },
})

const isDrawerOpen = ref(false)

const hash = ref("")

const handleHashChange = (event) => (hash.value = event.newURL.split("#")[1])

onMounted(() => {
  addEventListener("hashchange", handleHashChange)
})

onUnmounted(() => {
  removeEventListener("hashchange", handleHashChange)
})
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0);
}

.page-padding {
  @apply px-6 md:px-40 xl:px-80;
}
</style>
