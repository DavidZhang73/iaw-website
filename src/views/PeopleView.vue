<template>
  <div>
    <section-divider name="PEOPLE">
      <UserCircleIcon/>
    </section-divider>
    <div class="pb-10 flex flex-wrap justify-center items-center">
      <a
        v-for="person in peopleList"
        :key="person.name"
        :href="person.link"
        target="_blank"
        class="p-3 sm:p-8 flex flex-col items-center group"
      >
        <img
          class="w-28 h-28 sm:w-48 sm:h-48 rounded-full group-hover:border-primary group-hover:border-8"
          :src="person.avatar"
          alt="avatar"
        >
        <div class="py-3 sm:py-6 text-center">
          <span class="text-md sm:text-xl text-primary font-bold group-hover:font-extrabold">{{ person.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import SectionDivider from '@/components/section-divider.vue'
import { UserCircleIcon } from '@heroicons/vue/24/solid'

const peopleList = [
  {
    name: 'Jiahao Zhang',
    avatar: 'https://academic.davidz.cn/en/authors/admin/avatar_hu609c30d31133c7c52ede4f0e281fcb2d_226065_270x270_fill_q75_lanczos_center.jpg',
    link: 'https://academic.davidz.cn/',
  },
  {
    name: 'Anoop Cherian',
    avatar: 'https://users.cecs.anu.edu.au/~cherian/anoop_photo_2.jpg',
    link: 'https://users.cecs.anu.edu.au/~cherian/',
  },
  {
    name: 'Yanbin Liu',
    avatar: 'https://csyanbin.github.io/img/yanbin.jpg',
    link: 'https://csyanbin.github.io/',
  },
  {
    name: 'Yizhak Ben-Shabat',
    avatar: 'https://i0.wp.com/www.itzikbs.com/wp-content/uploads/2021/03/Itzik-Ben-Shabat.gif?fit=279%2C300&ssl=1',
    link: 'https://www.itzikbs.com/',
  },
  {
    name: 'Cristian Rodriguez',
    avatar: 'https://crodriguezo.github.io/authors/admin/cr_avatar_huf1d692f69e62f3ec3227cc7d242be47d_109327_250x250_fill_lanczos_center_2.png',
    link: 'https://crodriguezo.github.io/',
  },
  {
    name: 'Stephen Gould',
    avatar: 'https://users.cecs.anu.edu.au/~sgould/images/sgould8.jpg',
    link: 'https://users.cecs.anu.edu.au/~sgould/',
  },
]
</script>
