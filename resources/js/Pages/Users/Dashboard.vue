<template>
    <UserLayout title="Dashboard">
        <template #content>

            <WithAccentBorder v-if="teachers" class="my-2" :label="teachers" />
            <WithAccentBorder v-if="$page.props.flash.warning" class="my-2" :label="$page.props.flash.warning" />
            <the-tab-nav v-once />
            <the-posts :posts="posts" />
            <Paginate :links="posts.links" :from="posts.from" :to="posts.to" :result="posts.result"
                :responsiveNext="posts.next_page_url" :responsivePrevious="posts.first_page_url" />
        </template>
    </UserLayout>
</template>
<script setup>
import TheTabNav from "./Feeds/TheTabNav.vue";
import UserLayout from "@/Layouts/UserLayout.vue";
import Loading from '@/Custom/Loading.vue'
import Paginate from '@/Shared/Paginate/Paginate.vue';
import { defineAsyncComponent } from "@vue/runtime-core";
defineProps({
    posts: Object,
    teachers: [String, Object, Boolean]
})
const ThePosts = defineAsyncComponent({
    loader: () => import('./NewsFeeds/ThePosts.vue'),
    loadingComponent: Loading,
    delay: 200,
    errorComponent: 'error',
    timeout: 3000
});
</script>
