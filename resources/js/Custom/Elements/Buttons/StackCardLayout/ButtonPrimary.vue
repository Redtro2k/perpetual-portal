<template>
    <component :is="isLink ? 'Link' : 'button'"
        :href="isLink ? '#' : routing"
        class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-jvgreen"
        type="button">
        {{label}}
    </component>
</template>
<script setup>
import {Link} from '@inertiajs/inertia-vue3'
defineProps({
    label: String,
    routing: String,
    isPost: {
        type: Boolean,
        default: () => false
    },
    isLink: Boolean
})
</script>
