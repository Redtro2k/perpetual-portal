<template>
    <div class="mt-6 grid grid-cols-4 gap-6">
        <div class="col-span-4 sm:col-span-2">
            <label for="first-name" class="block text-sm font-medium text-gray-700">{{label}}</label>
            <Switch as="div" @update:model-value="(value) => emits('update:modelValue', value)" :modelValue="props.modelValue" :class="modelValue ? 'bg-jvgreen' : 'bg-gray-200'"
                class="relative inline-flex h-6 w-11 items-center rounded-full">
                <span class="sr-only">Enable notifications</span>
                <span :class="modelValue ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </Switch>
        </div>
    </div>
</template>
<script setup>
import {Switch} from '@headlessui/vue'
    const props = defineProps({
        label: String,
        modelValue: [Boolean],
    });
    const emits = defineEmits(['update:modelValue']);
</script>
