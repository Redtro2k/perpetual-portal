<template>
  <Link
    :class="
      isPrimary
        ? 'ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
        : 'whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
    "
    >{{ value }}</Link
  >
</template>
<script setup>
import { Link } from "@inertiajs/inertia-vue3";
defineProps({
  value: String,
  isPrimary: {
    type: Boolean,
    default: () => true,
  },
});
</script>
