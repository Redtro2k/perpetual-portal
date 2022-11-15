<template>
    <div class="py-4 sm:py-5 w-full sm:grid sm:grid-cols-3 sm:gap-4">
        <dt class="text-sm flex font-medium text-gray-500">{{label}}</dt>
        <dd class="mt-1 pl-4 flex flex-row text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span class="grow">{{value}}</span>
        </dd>
    </div>
</template>
<script setup>
    defineProps({
        label: String,
        value: String
    });
</script>
