<template>
    <ul
        class="divide-y divide-gray-200"
        v-for="item in items"
        :key="item"
    >
        <li class="py-4">
            <div class="flex space-x-3">
                <img
                    class="h-8 w-8 rounded-full"
                    :src="item.person_name.profile_photo_url"
                    alt=""
                />
                <div class="flex-1 space-y-1">
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium">
                            {{ item.person_name.name }}
                        </h3>
                        <p class="text-sm text-gray-500">{{moment(item.person_created).fromNow()}}</p>
                    </div>
                    <p class="text-mb text-gray-500 pl-1 pb-2">
                        {{ item.person_comment }}
                    </p>
                    <span v-show="item.person_name.id === $page.props.user.id">
                        <Link
                            class="text-red-500 text-xs mt-3 hover:text-red-700"
                            :href="route('comment.destroy',item.person_id)"
                            as="button"
                            method="DELETE" preserve-state><TrashIcon class="h-5 w-5"/></Link>
                    </span>
                </div>
            </div>
        </li>
    </ul>
</template>
<script setup>
import {Link} from '@inertiajs/inertia-vue3'
import { TrashIcon } from '@heroicons/vue/outline'
import moment from 'moment'
defineProps({
    items: Object
})

const privacy = []
</script>
