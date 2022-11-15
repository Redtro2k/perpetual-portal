<template>
    <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="bg-white py-6 px-4 sm:p-6">
            <div>
                <h2 id="payment-details-heading" class="text-lg leading-6 font-medium text-gray-900">{{title}}</h2>
                <p class="mt-1 text-sm text-gray-500">{{description}}</p>
            </div>
            <slot name="main">
            </slot>
        </div>
        <div v-if="haveFooter" class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <slot name="footer">
          </slot>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    description: String,
    haveFooter: {
        type: Boolean,
        default: () => false
    }
});
</script>
