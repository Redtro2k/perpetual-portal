<script setup>
defineProps({
    type: {
        type: String,
        default: "submit",
    },
    fullWidth: Boolean,
    loading: {
        type: Boolean,
        Default: () => false
    }
});
</script>

<template>
    <button :type="type" :disabled="loading" :class=" fullWidth ? 'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500': 'inline-flex items-center px-4 py-2 bg-indigo-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-800 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring focus:ring-indigo-300 disabled:opacity-25 transition'">
    <div v-if="loading" class="btn-spinner mr-2"></div>
        <slot />
    </button>
</template>
