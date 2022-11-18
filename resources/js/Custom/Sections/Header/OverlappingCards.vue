<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
        <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Features</h1>
        <!-- <p class="mt-6 max-w-3xl text-xl text-gray-300">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.</p> -->
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-5 inline-block bg-jvdgreen rounded-xl shadow-lg transform -translate-y-1/2">
              <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { NewspaperIcon, PhoneIcon, SupportIcon,GlobeAltIcon, FolderOpenIcon } from '@heroicons/vue/outline'
const supportLinks = [
  {
    name: 'Modernized Learning Model',
    href: '#',
    description:
      'This new learning model strengthens PHAPI’s existing blended learning mode that combines independent online learning at home via this learning management system.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Easy Access to Learning Modules',
    href: '#',
    description:
      'Students can study ahead, review past lessons, and watch instructional videos with a click or a tap of a button on any gadget.',
    icon: FolderOpenIcon,
  },
  {
    name: 'Interactive Activities and Assessments',
    href: '#',
    description:
      'Students can test their knowledge and skills through interactive polls, quizzes, and debates, among others.',
    icon: NewspaperIcon,
  },
]
export default {
  setup() {
    return {
      supportLinks,
    }
  },
}
</script>
