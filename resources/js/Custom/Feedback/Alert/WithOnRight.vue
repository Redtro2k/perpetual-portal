<template>
    <div class="rounded-md bg-blue-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <InformationCircleIcon class="h-5 w-5 text-jvgreen" aria-hidden="true" />
        </div>
        <div class="ml-3 flex-1 md:flex md:justify-between">
          <p class="text-sm text-jvdgreen" v-html="label"></p>

        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { InformationCircleIcon } from '@heroicons/vue/solid'
  defineProps({
    label: String
  });
  </script>
