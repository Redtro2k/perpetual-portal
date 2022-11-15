<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <!-- <component :is="item.icon" class="h-6 w-6" aria-hidden="true" /> -->
          <SocialMedia :type="item.icon" />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400">&copy; {{new Date().getFullYear()}} {{$page.props.config.appName}}, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { TrashIcon } from '@heroicons/vue/outline';
import SocialMedia  from '@/Custom/Icons/SocialMedia.vue'

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'facebook'
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'instagram'
  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'twitter'
  },
  {
    name: 'GitHub',
    href: '#',
    icon: 'github'
  },
  {
    name: 'Youtube',
    href: '#',
    icon: 'youtube'
  },
]
</script>
