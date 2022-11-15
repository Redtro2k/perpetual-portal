<script setup>
import UserLayout from '@/Layouts/UserLayout.vue';
import OverlayList from '@/Custom/List/GridList/OverlayList.vue';
import { ChartBarIcon, ExclamationCircleIcon, UserIcon } from '@heroicons/vue/outline';
const props = defineProps({
    profile: Object
});
const option = [
    {icon: UserIcon, label: `Adviser Name: ${props.profile != null ? props.profile.adviser : 'no adviser'}`},
    {icon: ChartBarIcon, label: props.profile ? props.profile.yearlevel : 'no Year Level'},
    {icon: ExclamationCircleIcon, label: props.profile ? props.profile.academicyear : 'No School Year'},
];
</script>
<template>
    <user-layout title="Year Level" no-content :showSideNav="false">
        <template #content>
            <overlay-list v-if="props.profile" :heading_option="option" label="Student profile" :items="props.profile.subjects"/>
            <template v-else>
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <WithDashBorder label="Your account as a Student will be processing..."/>
                    </div>
                </div>
            </template>
        </template>
    </user-layout>
</template>
