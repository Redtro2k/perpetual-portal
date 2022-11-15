<template>
    <template v-if="!items || Object.keys(items[0])  != null">

        <table class="min-w-full divide-y divide-gray-300">
            <thead>
                <tr>
                    <th scope="col" v-for="(item, index) in Object.keys(items[0])" v-show="index != 0"
                        :class="[index == 1 ? 'pl-4 pr-3 sm:pl-6 md:pl-0' :'px-3','py-3.5 text-left text-sm font-semibold text-gray-900']"
                        v-html="item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')">
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                        <span class="sr-only">{{link_label}}</span>
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr v-for="(item, key) in items" :key="item.index">
                    <td v-if="item.length == 0" class="text-indigo-500 text-md">No Records
                    </td>
                    <td v-else v-for="(col, index) in Object.values(item)" :key="col"
                        :class="[index == 1 ? 'font-medium text-gray-900 sm:pl-6 md:pl-0' : 'text-gray-500' , 'whitespace-nowrap py-4 px-3 text-sm']"
                        v-show="index != 0">
                        <template v-if="getObjectKey(props.items[key], col) == 'images' || getObjectKey(props.items[key], col) == 'image'">
                            <div class="flex items-center">
                                <div class="h-10 w-10 flex-shrink-0">
                                    <img class="h-10 w-10 rounded-full" :src="col">
                                </div>
                            </div>
                        </template>
                        <template v-else-if="getObjectKey(props.items[key], col) == 'content' || getObjectKey(props.items[key], col) == 'title'">
                            <span v-html="limitStr(col, 25)"></span>
                        </template>
                        <template v-else-if="getObjectKey(props.items[key], col) == 'question'">
                            <span v-html="col"></span>
                        </template>
                        <template v-else-if="getObjectKey(props.items[key], col) == 'url'">
                            <a :href="col"
                                class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">
                                <EyeIcon class="h-4 w-4" /> &nbsp; Open<span class="sr-only">, {{col}}</span>
                            </a>
                        </template>
                        <template v-else>
                            <span>{{col}}</span>
                        </template>
                    </td>
                    <template v-if="items.length != 0">
                        <td v-if="edit_link != null" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                            <Link v-if="!props.post && props.isDeleteData == null && edit_link_with_request == null" :href="route(edit_link, item.id)" class="text-indigo-600 hover:text-indigo-900">{{link_label}}<span class="sr-only">,
                                {{item.id}}</span>
                            </Link>
                            <template v-else-if="props.edit_link_with_request != null"
                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                                <Link :href="route(edit_link, item.id)" method="get" as="button" type="button" :data="edit_link_with_request" class="text-indigo-600 hover:text-indigo-900">{{link_label}}</Link>
                            </template>
                            <template v-else-if="props.isDeleteData != null">
                                <div class="flex space-x-2">
                                    <Link v-if="isEditData || isEditData != null" :href="route(props.isEditData, item.id)" class="text-indigo-600 hover:text-indigo-600">{{link_label}}
                                    </Link>
                                    <Link :href="route(props.edit_link, item.id)" method="DELETE" as="button" type="button" :data="props.isDeleteData"
                                        class="text-red-600 hover:text-red-600">
                                    Remove<span class="sr-only">{{item.id}}</span>
                                    </Link>
                                </div>
                            </template>
                            <Link v-else :href="route(edit_link)" method="get" as="button" type="button" class="text-indigo-600 hover:text-indigo-600" :data="{id: item.id}">{{link_label}}<span
                                class="sr-only">{{item.id}}</span>
                            </Link>
                        </td>
                        <td v-else-if="props.isAddData != null" class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                            <!-- :isAddData="{links: 'add-student.add', current_id: props.selected_section}" -->
                            <Link :href="route(props.isAddData.links)" type="button" as="button" method="POST" :data="{item_current_id: item.id, current_id: props.isAddData.current_id}" class="text-indigo-600 hover:text-indigo-600">Add</Link>
                        </td>

                    </template>
                </tr>
            </tbody>
        </table>
    </template>
    <template v-else>
        <div>
            <WithDashBorder :label="dash_error" />
        </div>
    </template>

</template>
<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import { EyeIcon } from '@heroicons/vue/solid'
const props = defineProps({
    items: Object,
    dash_error: String,
    edit_link: String,
    post: {
        type: Boolean,
        default: () => false
    },
    isDeleteData: {
        type: Object,
        default: () => null
    },
    isEditData: String,
    link_label: {
        type: String,
        default: () => 'Edit'
    },
    isAddData: Object,
    edit_link_with_request: {
        type: Object,
        default: () => null
    }
});

const getObjectKey = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value)
};

const limitStr = (string, limit) => {
    let str = string
    if (typeof str == 'string' && str.length > limit) {
        return str.slice(0, limit) + '...'
    }
    return str;
};
</script>
