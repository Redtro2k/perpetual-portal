<template>
    <div class="rounded-md bg-blue-50 p-4">
        <div class="flex">
            <div class="flex-shink-0">
                <InformationCircleIcon class="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div class="ml-3 flex-1 md:flex md:justify-between">
                <p class="text-sm text-blue-700">
                    {{label}}
                </p>
                <p v-show="withButton" class="mt-3 text-sm md:mt-0 md:ml-6">
                    <Link class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">Details<span aria-hidden="true">&rarr;</span></Link> 
                </p>
            </div>
        </div>
    </div>    
</template>
<script setup>
import { InformationCircleIcon } from '@heroicons/vue/outline';
import {Link} from '@inertiajs/inertia-vue3'
defineProps({
    label: String,
    withButton: {
        type: Boolean,
        default: () => false
    }
})
</script>