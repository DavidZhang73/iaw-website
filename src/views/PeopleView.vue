<template>
  <div>
    <section-divider name="PEOPLE">
      <UserCircleIcon />
    </section-divider>
    <div class="pb-10 flex flex-wrap justify-center items-center">
      <template v-for="person in peopleList" :key="person.name">
        <a :href="person.link" target="_blank" class="p-3 sm:p-8 flex flex-col items-center group">
          <img
            class="w-28 h-28 sm:w-48 sm:h-48 rounded-full border-8 border-secondary group-hover:border-primary"
            :src="person.avatar"
            alt="avatar"
          />
          <div class="py-3 sm:py-6 text-center">
            <span class="text-md sm:text-xl text-primary font-bold group-hover:font-extrabold">{{ person.name }}</span>
          </div>
        </a></template
      >
    </div>
  </div>
</template>

<script setup>
import SectionDivider from "@/components/section-divider.vue"
import { UserCircleIcon } from "@heroicons/vue/24/solid"

const peopleList = [
  {
    name: "Jiahao Zhang",
    avatar: "https://avatars.githubusercontent.com/u/33928385",
    link: "https://academic.davidz.cn/",
  },
  {
    name: "Anoop Cherian",
    avatar: "https://avatars.githubusercontent.com/u/8115600",
    link: "https://users.cecs.anu.edu.au/~cherian/",
  },
  {
    name: "Yanbin Liu",
    avatar: "https://csyanbin.github.io/img/yanbin.jpg",
    link: "https://csyanbin.github.io/",
  },
  {
    name: "Yizhak Ben-Shabat",
    avatar: "https://avatars.githubusercontent.com/u/13794171",
    link: "https://www.itzikbs.com/",
  },
  {
    name: "Cristian Rodriguez",
    avatar: "https://avatars.githubusercontent.com/u/3124475",
    link: "https://crodriguezo.github.io/",
  },
  {
    name: "Stephen Gould",
    avatar: "https://avatars.githubusercontent.com/u/1948931",
    link: "https://users.cecs.anu.edu.au/~sgould/",
  },
]
</script>
