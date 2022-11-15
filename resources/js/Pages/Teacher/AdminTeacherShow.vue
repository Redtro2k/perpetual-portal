<template>
    <user-layout no-content :title="`${user.name} as Teacher`">
    <!-- https://github.com/Redtro2k/tailwindscratch/blob/main/application-ui/page-examples/settings-screens/with_tiered_sidebar_navigation.vue -->
        <template #content>
            testing
        </template>
    </user-layout>
</template>
<script setup>
import UserLayout from '@/Layouts/UserLayout.vue';
defineProps({
    user: Object
});
</script>
