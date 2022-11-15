<template>
<!-- warning popup -->
    <div class="bg-yellow-50 border-1-4 border-yellow-400 p-4">
        <div class="flex">
            <div class="flex-shrink-0">
                <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true"/>
            </div>
            <div class="ml-3">
                <p class="text-sm text-yellow-700">
                    {{label}}
                    {{''}}
                    <Link v-show="withLink" :href="link" class="font-medium underline text-yellow-700 hover:text-yellow-600">{{content}}</Link>
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ExclamationIcon} from '@heroicons/vue/solid'
import {Link} from '@inertiajs/inertia-vue3'
defineProps({
    label: String,
    withLink: {
        type: Boolean,
        default: () => false
    },
    link: {
        type: String,
        default: () => null
    },
    content: {
        type: String,
        default: () => null
    }
});
</script>
