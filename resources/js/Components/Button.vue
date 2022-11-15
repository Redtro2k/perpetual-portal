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
    },
    isSecondary: {
        type: Boolean,
        default: () => false
    }
});
</script>

<template>
    <button :type="type" :disabled="loading"
        :class=" [
        isSecondary ? 'text-black bg-white border-gray-300 shadow hover:bg-gray-50 focus:ring-jvdgreen' : 'text-white bg-jvdgreen hover:bg-jvgreen active:bg-jvdgreen focus:outline-none focus:border-jvdgreen focus:ring focus:ring-jvgreen',
        fullWidth ? 'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  hover:bg-jvgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvdgreen': 'inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest disabled:opacity-25 transition']">
        <div v-if="loading" class="btn-spinner mr-2"></div>
        <slot />
    </button>
</template>
