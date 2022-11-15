<template>
<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
    <dt class="text-sm font-medium text-gray-500">Photo</dt>
    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
    <span class="flex-grow">
        <img class="h-8 w-8 rounded-full" :src="props.src" alt="" />
    </span>
    </dd>
</div>
</template>
<script setup>
    const props = defineProps({
        src: String
    });

</script>
