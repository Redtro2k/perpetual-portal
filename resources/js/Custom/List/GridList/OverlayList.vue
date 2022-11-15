<script setup>
import PageHeading from '@/Custom/Headings/PageHeading.vue';
import Loading from "@/Custom/Loading.vue";
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    more: Object,
    label: String,
    heading_option: Object,
    items: Object
})
const limitText = (value) => {
    return value > 100 ? value.substring(0, 100) + "..." : value;
};
</script>
<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Suspense>
                <div class="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <page-heading :option="heading_option" :more="more" :label="label" />

                    <h2 class="pt-12 text-xl font-bold text-gray-900 font-sans">Subjects</h2>
                    <WithAccentBorder v-if="$page.props.flash.warning" :label="$page.props.flash.warning" />
                    <template v-if="items.length != 0">
                        <div class="mt-8 grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 gap-x-8 gap-y-2">
                            <div v-for="item in items" :key="item" class="mt-4">
                                <div class="relative">
                                    <div class="relative w-full h-72 rounded-lg overflow-hidden">
                                        <img :src="item.image" class="w-full h-full object-center object-cover" />
                                    </div>
                                    <div class="relative mt-4">
                                        <h3 class="text-sm font-bold text-gray-900">{{ item.name }}</h3>
                                        <p class="mt-1 text-sm text-gray-500" v-html="limitText(item.content)"></p>
                                        <p class="mt-1 text-sm text-gray-500">{{ item.topics }} available Topic</p>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <Link :href="route('subject.index')" :data="{id: item.id}" class="bg-jvgreen text-white hover:bg-jvdgreen relative flex w-full border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium">
                                        View Subjects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </template>
                    <WithDashBorder v-else label="No Subject, Please add Subjects" />
                </div>
                <template #fallback>
                    <loading />
                </template>
            </Suspense>
        </div>
    </div>
</template>
