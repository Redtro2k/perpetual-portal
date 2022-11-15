<template>
  <div
    class="rounded-md shadow"
    :class="isPrimary ? '' : 'mt-3 sm:mt-0 sm:ml-3'"
  >
    <Link
      :href="link"
      class="
        w-full
        flex
        items-center
        justify-center
        px-8
        py-3
        border border-transparent
        text-base
        font-medium
        rounded-md
        md:py-4 md:text-lg md:px-10
      "
      :class="
        isPrimary
          ? 'text-white bg-indigo-600 hover:bg-indigo-700'
          : 'text-indigo-600 bg-white hover:bg-gray-50'
      "
    >
      {{ value }}
    </Link>
  </div>
</template>
<script setup>
import { Link } from "@inertiajs/inertia-vue3";

defineProps({
  isPrimary: {
    type: Boolean,
    default: () => true,
  },
  value: String,
  link: String,
});
</script>
