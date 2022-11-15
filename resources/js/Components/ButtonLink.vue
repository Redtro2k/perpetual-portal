<template>
    <Link v-if="isShow" :href="route(routes, id)" :method="method" as="button" type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" :preserve-state="false">{{label}}</Link>
</template>
<script setup>
import { Link } from '@inertiajs/inertia-vue3'
defineProps({
    label: String,
    routes: String,
    id: Number,
    method: String,
    isShow: Boolean
});
</script>
