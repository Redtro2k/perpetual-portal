<template>
    <div class="col-span-4 sm:col-span-2">
        <label for="first-name" class="block text-sm font-medium text-gray-700">{{label}}</label>
        <input ref="input" type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        :class="[disabled ? 'bg-gray-300': '', 'mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm']" :disabled="disabled"/>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    defineProps({
        label: String,
        modelValue: [String,Number],
        message: String,
        disabled: {
            type: Boolean,
            default: () => false
        }
    });
    defineEmits(['update:modelValue']);
    const input = ref(null);
</script>
