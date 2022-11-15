<template>
      <Link :href="params == null ? route(routes) : route(routes, params)" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">{{label}}</Link>
</template>
<script setup>
    import {Link} from '@inertiajs/inertia-vue3'
    defineProps({
        label: String,
        routes: String,
        params: {
            type: String,
            default: () => null
        }
    });
</script>
