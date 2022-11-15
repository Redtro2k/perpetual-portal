<template>
  <div class="text-center">
    <BanIcon class="mx-auto h-12 w-12 text-gray-400" />
    <h3 class="mt-2 text-sm font-medium text-gray-900">{{ label }}</h3>
    <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
    <div class="mt-6">
      <Link
        v-if="withLink"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        New Project
      </Link>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon, BanIcon } from "@heroicons/vue/solid";
import { Link } from "@inertiajs/inertia-vue3";
defineProps({
  withLink: {
    type: Boolean,
    default: () => false,
  },
  label: String,
  description: String,
});
</script>
