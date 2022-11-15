<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Listbox as="div" :multiple="props.multiple" @update:modelValue="value => emit('update:modelValue', value)" :modelValue="props.modelValue">
    <ListboxLabel class="block text-sm font-medium text-gray-700"> {{title}} </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-jvgreen focus:border-jvgreen sm:text-sm">
        <span v-if="label" class="block truncate">{{ label }}</span>
        <span v-else class="text-gray-500">{{props.placeholder}}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="option in props.options" :key="option.id" :value="option.id" v-slot="{ active, selectedOption }">
            <li :class="[active ? 'text-white bg-jvdgreen' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <span :class="[selectedOption ? 'font-semibold' : 'font-normal', 'block truncate']">
                {{ option.label }}
              </span>

              <span v-if="selectedOption" :class="[active ? 'text-white' : 'text-jvdgreen', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
      <div class="text-xs text-red-400 mt-1" v-if="props.error">{{props.error}}</div>
    </div>
  </Listbox>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
const props = defineProps({
    options: Array,
    title: String,
    modelValue: [String, Number, Array],
    placeholder: {
        type: String,
        default: () => 'Select Option',
        error: String
    },
    multiple: Boolean
})

const emit = defineEmits(['update:modelValue'])
const label = computed(() => {
    return props.options.filter(option => {
        if(Array.isArray(props.modelValue)){
            return props.modelValue.includes(option.id)
        }
        return props.modelValue === option.id
    }).map(option => option.label).join(', ');
})


</script>