<template>
    <div class="mt-6 grid grid-cols-4 gap-6">
        <div class="col-span-4 sm:col-span-2">
            <label for="first-name" class="block text-sm font-medium text-gray-700">Back up Routine</label>
            <Link :href="route(href)" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen">Upload</Link>
        </div>
    </div>
</template>
<script setup>
    import {Link} from '@inertiajs/inertia-vue3'
    const props = defineProps({
        href: String,
    });
</script>
