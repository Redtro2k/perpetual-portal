<template>
  <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: () => "",
  },
  modelValue: String,
  placeholder: {
    type: String,
    default: () => "",
  },
});
</script>
