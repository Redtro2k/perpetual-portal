<script setup>
    import { ref } from 'vue'
    import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
    import { CheckCircleIcon } from '@heroicons/vue/solid'
    import moment from 'moment';
   const props = defineProps({
      items: Object,
      label: String,
      modelValue: [Number],
      isActive: String,
      haveDisable: {
        type: Boolean,
        default: () => false
      },
      isDisabled: {
        type: Boolean,
        default: () => false
      }
   });
   const emits = defineEmits(['update:modelValue']);

   const getObjectKey = (obj, value) => {
        return Object.keys(obj).find(key => obj[key] === value)
    };
    </script>
<template>
    <RadioGroup @update:modelValue="(value) => emits('update:modelValue', value)" :modelValue="props.modelValue" :disabled="isDisabled">

      <RadioGroupLabel class="text-base font-medium text-gray-900">{{label}}</RadioGroupLabel>

      <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        <!-- disable group option -->
        <RadioGroupOption as="template" v-for="(item, key) in items" :key="item.id" :value="item.id" v-slot="{ checked, active }" :disabled="haveDisable ? [Object.values(item).pop() != isActive ? true : false] : false">
          <div :class="[checked ? 'border-transparent' : 'border-gray-300', !isActive ? [active ? 'border-jvgreen ring-2 ring-jvgreen' : ''] : [active || Object.values(item).pop() != isActive ? 'border-jvgreen ring-2 ring-jvgreen': ''], 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']">
            <div class="flex-1 flex">
              <div class="flex flex-col">
                <div v-for="(col, index) in Object.values(item)" :key="col">
                    <template v-if="getObjectKey(props.items[key], col) == 'id' || index == 1">
                        <RadioGroupLabel as="span" v-show="getObjectKey(props.items[key], col) != 'id'" class="block text-sm font-bold text-gray-900">
                            {{col}}
                        </RadioGroupLabel>
                    </template>
                    <template v-else-if="getObjectKey(props.items[key], col) == Object.keys(item).pop()">
                        <RadioGroupDescription as="span" class="mt-6 text-sm font-semibold text-gray-500 flex">
                            {{col}}
                        </RadioGroupDescription>
                    </template>
                    <template v-else-if="getObjectKey(props.items[key], col) == 'image'">
                        <div class="flex relative py-2">
                            <img :src="col" class="h-12 w-12 rounded-full"/>
                        </div>
                    </template>
                    <template v-else>
                        <RadioGroupDescription as="span" class="mt-6 text-sm font-medium text-gray-900">
                            {{col}}
                        </RadioGroupDescription>
                    </template>
                </div>
              </div>
            </div>
            <!-- invisible -->
            <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-jvdgreen']" aria-hidden="true" />
            <div :class="[active ? 'border' : 'border-2', checked ? 'border-jvgreen' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']" aria-hidden="true" />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </template>
