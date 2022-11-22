<script setup>
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid";
import { Link } from "@inertiajs/inertia-vue3";
import loader from "@/Custom/Loading.vue";
import EmptyState from "@/Custom/FeedBack/EmptyStates/Simple.vue";
import { computed } from "@vue/runtime-core";
import { ref } from "vue";

const props = defineProps({
    routes: String,
    viewable: {
        type: Boolean,
        default: () => false,
    },
    viewlink: String,
    items: Object,
    sort: String,
    notSortable: Array,
    unselectable_table: {
        type: Boolean,
        default: () => true,
    },
});
const limitText = (value) => {
    return value > 50 ? value.substring(0, 50) + "..." : value;
};
const capitalizeText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
const headings = computed(() => {
    let $arr = props.items[0];
    if ($arr) {
        return Object.getOwnPropertyNames($arr);
    } else {
        return false;
    }
});
const check = ref();
const emit = defineEmits(["toggle"]);
const sort = (value) => {
    emit("toggle", (check.value = check.value === value ? `-${value}` : value));
};

const ifExists = (value) => {
    let index = props.notSortable.findIndex((notsorted) => notsorted === value);
    return props.notSortable[index];
};
const isNull = (value) => {
    return value.length == 0 ? "none" : value;
};
</script>
<template>
    <Suspense>
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table v-if="headings" class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th v-for="(heading, index) in headings" :key="index" scope="col"
                                            class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <span @click="heading != ifExists(heading) ? sort(heading) : null"
                                                class="group inline-flex">
                                                {{ capitalizeText(heading) }}
                                                <component
                                                    :is="check === `-${heading}` ? ChevronUpIcon : ChevronDownIcon"
                                                    :class="
                                                      heading != ifExists(heading) ? 'cursor-pointer' : 'hidden'
                                                    " class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                                    aria-hidden="true" />
                                            </span>
                                        </th>
                                        <th v-if="props.unselectable_table" scope="col"
                                            class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span class="sr-only">
                                                <Link>Edit</Link>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr v-for="(item, index) in items" :key="index">
                                        <td v-for="id in Object.keys(headings)" :key="id"
                                            class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600"
                                            :class="id == 0 ? 'sm:pl-6 font-semibold text-gray-700' : ''">
                                            <component :is="Object.keys(item)[id] === 'image' ? 'img' : 'span'" :src="Object.keys(item)[id] === 'image'? Object.values(item)[id]: null" :class=" Object.keys(item)[id] === 'image' ? 'h-10 w-10 rounded-full' : null">
                                                {{
                                                Object.keys(item)[id] === "image"
                                                ? null
                                                : `${isNull(Object.values(item)[id])}`
                                                }}
                                            </component>
                                        </td>
                                        <td
                                            class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <div class="flex space-x-2">
                                            <Link v-if="props.viewable" :href="route(props.viewlink, Object.values(item)[0])" class="text-jvgreen hover:text-jvdgreen">View <span class="sr-only">, {{Object.values(item)[0] }}</span></Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <span v-else>
                                <empty-state class="p-2 bg-gray-50" label="No Records"
                                    description="There's not found in our database..." />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template #fallback>
            <loader />
        </template>
    </Suspense>
    <!-- <Link :href="route(props.routes, {show_user: Object.values(item)[0],})" class="text-jvgreen hover:text-jvdgreen" preserve-state>Edit<span class="sr-only">, {{Object.values(item)[0] }}</span></Link> -->

</template>
