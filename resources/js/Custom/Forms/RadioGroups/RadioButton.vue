<template>
    <div>
        <RadioGroup class="py-2 mt-2" @update:model-value="(value) => emits('update:modelValue', value)"
            :model-value="props.modelValue">
            <RadioGroupLabel>
                <label class="text-base font-medium text-gray-900">{{props.label}}</label>
                <p class="text-sm leading-5 text-gray-500">{{props.description}}</p>
            </RadioGroupLabel>
            <div class="grid grid-cols-3 gap-3 sm:grid-cols-6 mt-2">
                <template v-for="item in props.items" :key="item">
                    <RadioGroupOption v-slot="{ checked }" :value="item">
                        <span :class="[checked ? 'cursor-pointer focus:outline-none ring-2 ring-offset-2 ring-jvgreen bg-jvdgreen border-transparent text-white hover:bg-jvdgreen' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50', 'border rounded-md p-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1']">{{item}}</span>
                    </RadioGroupOption>
                </template>
            </div>
        </RadioGroup>
    </div>

</template>

<script setup>
import { ref } from '@vue/reactivity'
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue'
const props = defineProps({
    items: Object,
    modelValue: [String],
    label: String,
    description: String
})
const emits = defineEmits(['update:modelValue'])
const plan = ref('startup')
</script>
