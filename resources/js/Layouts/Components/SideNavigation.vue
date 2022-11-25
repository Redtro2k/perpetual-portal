<template>
        <div class="hidden w-28 bg-jvgreen overflow-y-auto md:block">
            <div class="w-full py-6 flex flex-col items-center">
                <div class="flex-shrink-0 flex items-center">
                    <img class="h-14 w-auto" src="storage/CutieImages/PHAPI_logo.png"
                        alt="Workflow" />
                </div>
                <div class="flex-1 mt-6 w-full px-2 space-y-1">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                        :class="[item.name == props.isActive ? 'bg-jvdgreen text-white' : 'text-indigo-100 hover:bg-jvdreen hover:text-jvgreen-500', 'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium']"
                        :aria-current="item.name == props.isActive ? 'page' : undefined">
                        <component :is="item.icon"
                            :class="[item.name == props.isActive ? 'text-white' : 'text-white group-hover:text-white', 'h-6 w-6']"
                            aria-hidden="true" />
                        <span class="mt-2">{{ item.name }}</span>
                    </a>
                </div>
            </div>
        </div>
</template>
<script setup>
import { HomeIcon, InboxInIcon, SearchIcon } from '@heroicons/vue/outline';
const props = defineProps({
    isActive: String
})
const navigation = [
    { name: 'Home', href: route('dashboard'), icon: HomeIcon},
    { name: 'Inbox', href: route('inbox'), icon: InboxInIcon},
    { name: 'Find', href: route('find-people'), icon: SearchIcon}
]
</script>
