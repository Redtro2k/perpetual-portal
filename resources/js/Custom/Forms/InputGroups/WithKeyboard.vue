<template>
  <div class="mt-4">
    <label for="search" class="block text-sm font-medium text-gray-700"
      >Quick search</label
    >
    <div class="mt-1 relative flex items-center">
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="shadow-sm focus:ring-jvgreen focus:border-jvgreen block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
      />
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd
          class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"
        >
          ⌘K
        </kbd>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  modelValue: String,
});
</script>
