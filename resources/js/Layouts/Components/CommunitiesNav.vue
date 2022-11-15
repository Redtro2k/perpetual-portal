<template>
    <div class="hidden lg:block lg:col-span-3 xl:col-span-2">
        <nav aria-label="Sidebar" class="sticky top-4 divide-y divide-gray-300">
            <div class="pb-8 space-y-1">
                <Link v-for="item in navigation" :key="item.name" v-show="item.public" :href="item.href"
                    :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
                    :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon"
                    :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                    aria-hidden="true" />
                <div class="flex">
                    <span class="truncate">
                        {{ item.name }}
                    </span>
                    <span v-show="item.notify"
                        class="ml-2  inline-flex items-center px-2 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                        <svg class="h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                        </svg>
                        &nbsp;New
                    </span>
                </div>
                </Link>
            </div>
            <div class="pt-10">
                <p class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="communities-headline">
                    My communities</p>
                <div class="mt-3 space-y-2" aria-labelledby="communities-headline">
                    <Link v-for="community in communities" :key="community.name" :href="community.href"
                        class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                    <span class="truncate">
                        {{ community.name }}
                    </span>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup>
import { Link } from "@inertiajs/inertia-vue3"
defineProps({
    navigation: Object,
    communities: Object
});
</script>
