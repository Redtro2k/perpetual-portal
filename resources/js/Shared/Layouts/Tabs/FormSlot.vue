<template>
    <div class="col-span-4 sm:col-span-2">
        <label for="first-name" class="block text-sm font-medium text-gray-700">{{label}}</label>
        <slot name="main"></slot>
    </div>
</template>
<script setup>
defineProps({
    label: String,
});
</script>
