<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <SwitchGroup as="div" class="flex items-center justify-between">
        <span class="flex-grow flex flex-col">
            <SwitchLabel as="span" class="text-sm font-medium text-gray-900" passive>{{label}}</SwitchLabel>
            <SwitchDescription as="span" class="text-sm text-gray-500">{{body}}</SwitchDescription>
        </span>
        <Switch @update:model-value="(value) => emits('update:modelValue', value)" :modelValue="props.modelValue"
            :class="[props.modelValue ? 'bg-jvdgreen' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen']">
            <span aria-hidden="true"
                :class="[props.modelValue ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </Switch>
    </SwitchGroup>
</template>

<script setup>
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const props = defineProps({
    label: String,
    body: String,
    modelValue: [Boolean]
})
const emits = defineEmits(['update:modelValue'])


</script>
