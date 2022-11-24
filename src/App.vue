<template>
  <header class="fixed z-10 bg-primary w-screen">
    <div class="py-6 px-20 flex">
      <a
          href="/"
          class="font-bold text-3xl text-white hover:text-secondary"
          :class="{'text-secondary': $route.hash === ''}"
      >IAW DATASET</a>
      <div class="flex-grow"></div>
      <div class="gap-x-6 font-bold text-1xl text-white flex items-center">
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
  <full-page :options="full_page_options">
    <head-view class="section pt-[84px] bg-secondary"/>
    <introduction-view class="section"/>
    <cite-view class="section pt-[84px] bg-secondary"/>
    <download-view class="section pt-[84px]"/>
    <people-view class="section pt-[84px] bg-secondary"/>
    <license-view class="section pt-[84px]"/>
    <footer class="section fp-auto-height py-6 text-white text-center text-sm bg-tertiary w-screen">
      <div>This dataset and website is not sponsored or affiliated in any way with IKEA the Furniture retail company
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
</script>
