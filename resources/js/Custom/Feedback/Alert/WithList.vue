<template>
    <!-- error validation -->
    <div class="rounded-md bg-red-50 p-4">
        <div class="flex">
            <div class="flex-shrink-0">
                <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">There {{countLatest}} were errors with our submission</h3>
                <div class="mt-2 text-sm text-red-700">
                    <ul role="list" class="list-dic pl-5 space-y-1" v-for="label in labels" :key="label">
                        <li>{{label}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { XCircleIcon } from '@heroicons/vue/outline';
import { computed } from '@vue/runtime-core';
const props = defineProps({
    labels: Object,
});

const countLatest = computed(() => {
    return Object.keys(props.labels).length
});
</script>
