<template>
    <GuestLayoutVue :canLogin="$page.props.checkLogged.canLogin" :canRegister="$page.props.checkLogged.canRegister">
        <template #content>
            <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                        <span class="block xl:inline">e-LMS</span>
                        {{ ' ' }}
                        <span class="block text-jvdgreen xl:inline">for Perpetual Help Academy of Palmera INC.</span>
                    </h1>
                    <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                    A school learning management system aims to provide a web-based management system. The system includes different functionalities for both teachers and students. Features for the teachers are interacting, Assigning/uploading activities, modules and assignments as well as receiving the progress of their students.
                    </p>
                    <div class="mt-10 sm:flex sm:justify-center lg:justify-start ">
                        <StarterButtonVue v-if="$page.props.user" :link="route('dashboard')" value="Dashboard"/>
                        <StarterButtonVue v-else :link="route('login')" value="Get Started"/>

                    </div>
                </div>
            </div>
            <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
            </div>
        </template>
    </GuestLayoutVue>
</template>
<script setup>
import GuestLayoutVue from '@/Layouts/GuestLayout.vue';
import StarterButtonVue from '@/Custom/Elements/Buttons/StarterButton.vue';
</script>
