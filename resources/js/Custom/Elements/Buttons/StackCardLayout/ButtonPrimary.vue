<template>
    <Link
        :href="route"
        class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
    >
        {{label}}
    </Link>
</template>
<script setup>
import {Link} from '@inertiajs/inertia-vue3'
defineProps({
    label: String,
    route: String,
    isPost: {
        type: Boolean,
        default: () => false
    }
})
</script>
