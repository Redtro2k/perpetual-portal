<template>
    <UserLayout title="Post">
        <template #content>
            <div class="bg-gray-200">
                <div class="bg-white overflow-hidden sm:rounded-lg">
                    <div class="container mx-auto sm:px-6 lg:px-8">
                        <div class="border-b border-gray-200 py-5">
                           <div class="flex justify-between">
                             <h3 class="text-lg font-bold leading-6 text-gray-900">{{contents.title}}</h3>
                             <small>{{contents.audience}}</small>
                           </div>
                            <div class="mt-2 max-w-4xl text-sm text-gray-500"><span v-html="contents.description"></span></div>
                            <ul class="flex space-x-4 pt-4">
                                <li><ThumbUpIcon class="h-5 w-5 inline-block"/>{{contents.likes}}</li>
                                <li><AnnotationIcon class="h-5 w-5 inline-block"/> {{contents.comment}}</li>
                            </ul>
                        </div>

                        <div class="bg-white shadow sm:rounded-lg">
                <div class="px-4 py-3 sm:p-6">
                    <div class="mt-2 max-w-xl text-sm text-gray-500">
                        <p>Comment your reaction about this post.</p>
                    </div>
                        <form class="mt-3 space-x-2 sm:flex sm:items-center" @submit.prevent="submit">
                                <img class="hidden h-10 w-10 rounded-full sm:inline-block" :src="$page.props.user.profile_photo_url" alt="" />
                            <div class="w-full">
                                <label for="comment" class="sr-only">Comment</label>
                                <input type="text" v-model="form.comment" placeholder="comment here" class="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 sm:text-sm" />
                                <p class="text-sm text-red-500">{{ form.errors.comment }}</p>
                            </div>
                            <progress v-if="form.progress" :value="form.progress.percentage" max="100">{{ form.progress.percentage }}%</progress>
                            <button type="submit" :disabled="form.processing" class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                <PaperAirplaneIcon class="h-5 w-5"/>
                            </button>
                        </form>
                    </div>
                </div>

                       <the-comments :items="contents.comments.data" />
                       <Paginate v-show="contents.comments.data != 0"
                        :links="contents.comments.links"
                        :from="contents.comments.form"
                        :to="contents.comments.to"
                        :result="contents.comments.total"
                        :responsiveNext="contents.comments.next_page_url"
                        :responsivePrevious="contents.comments.first_page_url"
                       />
                    </div>
                </div>
                </div>

        </template>
    </UserLayout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import Loading from '@/Custom/Loading.vue'
import { useForm } from "@inertiajs/inertia-vue3";
import { defineAsyncComponent } from "@vue/runtime-core";
import { AnnotationIcon, ThumbUpIcon,PaperAirplaneIcon } from "@heroicons/vue/outline";
import Paginate from '@/Shared/Paginate/Paginate.vue';
const props = defineProps({
    contents: Object,
});

const TheComments = defineAsyncComponent({
    loader: () => import("@/Shared/Post/TheComments.vue"),
    loadingComponent: Loading,
    delay: 200,
    errorComponent: 'error',
    timeout: 3000
})

const form = useForm({
    comment: null,
    token: props.contents.post_id,
});

let submit = () => {
    form.post(route('comment.store'), {
        preserveScroll: true,
        onSuccess: () => form.reset("comment"),
    });
};
</script>
