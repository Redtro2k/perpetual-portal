<template>
     <GuestLayoutVue :canLogin="$page.props.checkLogged.canLogin" :canRegister="$page.props.checkLogged.canRegister">
        <template #content>
            <section class=" p-5">
                <div class="py-12 text-center">

                    <h1 class="pb-10 text-4xl font-bold">PHAPI Help Center</h1>
                    <p>What are you looking for?</p>

                </div>
            </section>

            <section>

            </section>
        </template>
    </GuestLayoutVue>

</template>
<script setup>
    import GuestLayoutVue from '@/Layouts/GuestLayout.vue'
</script>
