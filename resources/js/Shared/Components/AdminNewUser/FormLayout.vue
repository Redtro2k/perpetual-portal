<template>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <logo class="mx-auto h-12 w-auto"/>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create New User</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Creating new user will be directly to our database
                {{ ' ' }}
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <slot name="content">
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import logo from '@/Components/ApplicationLogo.vue'
defineProps({
    title: String,
    label: String
})
</script>
