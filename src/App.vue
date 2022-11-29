<template>
  <header class="fixed z-20 bg-primary w-screen">
    <div class="py-6 px-6 md:px-40 flex">
      <a
        href="/"
        class="font-bold text-2xl md:text-3xl text-white hover:text-secondary flex items-center"
        :class="{'text-secondary': $route.hash === ''}"
      >IAW DATASET</a>
      <div class="flex-grow"/>
      <button
        class="flex items-center lg:hidden text-lg text-white font-bold align-middle hover:text-secondary p-2 border-2 hover:border-secondary border-white rounded-2xl"
        @click="isDrawerOpen = !isDrawerOpen"
      >
        MENU
        <Bars3Icon class="h-6"/>
      </button>
      <div class="hidden lg:flex gap-x-6 font-bold text-1xl text-white flex items-center">
        <a
          href="/#introduction"
          class="hover:text-secondary"
          :class="{'text-secondary': $route.hash === '#introduction'}"
        >INTRODUCTION</a>
        <a
          href="/#cite"
          class="hover:text-secondary"
          :class="{'text-secondary': $route.hash === '#cite'}"
        >CITE</a>
        <a
          href="/#download"
          class="hover:text-secondary"
          :class="{'text-secondary': $route.hash === '#download'}"
        >DOWNLOAD</a>
        <a
          href="/#people"
          class="hover:text-secondary"
          :class="{'text-secondary': $route.hash === '#people'}"
        >PEOPLE</a>
        <a
          href="/#license"
          class="hover:text-secondary"
          :class="{'text-secondary': $route.hash === '#license'}"
        >LICENSE</a>
      </div>
    </div>
  </header>
  <transition>
    <div
      v-if="isDrawerOpen"
      class="pt-[84px] fixed z-10 bg-primary w-screen font-bold text-1xl text-white"
    >
      <a
        href="/#introduction"
        class="px-6 py-4 block hover:text-secondary"
        :class="{'text-secondary': $route.hash === '#introduction'}"
        @click="isDrawerOpen = false"
      >INTRODUCTION</a>
      <a
        href="/#cite"
        class="px-6 py-4 block hover:text-secondary"
        :class="{'text-secondary': $route.hash === '#cite'}"
        @click="isDrawerOpen = false"
      >CITE</a>
      <a
        href="/#download"
        class="px-6 py-4 block hover:text-secondary"
        :class="{'text-secondary': $route.hash === '#download'}"
        @click="isDrawerOpen = false"
      >DOWNLOAD</a>
      <a
        href="/#people"
        class="px-6 py-4 block hover:text-secondary"
        :class="{'text-secondary': $route.hash === '#people'}"
        @click="isDrawerOpen = false"
      >PEOPLE</a>
      <a
        href="/#license"
        class="px-6 py-4 block hover:text-secondary"
        :class="{'text-secondary': $route.hash === '#license'}"
        @click="isDrawerOpen = false"
      >LICENSE</a>
    </div>
  </transition>
  <full-page :options="full_page_options">
    <head-view class="section pt-[84px] px-6 md:px-40  bg-secondary"/>
    <introduction-view class="section pt-[84px] px-6 md:px-40 "/>
    <cite-view class="section pt-[84px] px-6 md:px-40  bg-secondary"/>
    <download-view class="section pt-[84px] px-6 md:px-40 "/>
    <people-view class="section pt-[84px] px-6 md:px-40  bg-secondary"/>
    <license-view class="section pt-[84px] px-6 md:px-40 "/>
    <footer class="section fp-auto-height py-6 text-white text-center text-sm bg-tertiary w-screen">
      <div>
        This dataset and website is not sponsored or affiliated in any way with IKEA the Furniture retail company
      </div>
      <a href="https://alvarotrigo.com/fullPage/">Made with fullPage.js</a>
      <div>Copyright © ANU, MERL 2022</div>
    </footer>
  </full-page>
</template>

<script setup>
import CiteView from '@/views/CiteView.vue'
import DownloadView from '@/views/DownloadView.vue'
import HeadView from '@/views/HeadView.vue'
import IntroductionView from '@/views/IntroductionView.vue'
import LicenseView from '@/views/LicenseView.vue'
import PeopleView from '@/views/PeopleView.vue'
import { Bars3Icon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const full_page_options = ref({
  licenseKey: 'gplv3-license',
  anchors: [
    '',
    'introduction',
    'cite',
    'download',
    'people',
    'license',
    'footer',
  ],
  navigation: true,
  showActiveTooltip: true,
  credits: { enabled: false },
})

const isDrawerOpen = ref(false)
</script>

<style scoped>
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
</style>

@click=isDrawerOpen = false
