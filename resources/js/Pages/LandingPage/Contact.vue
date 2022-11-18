<template>
    <GuestLayoutVue :canLogin="$page.props.checkLogged.canLogin" :canRegister="$page.props.checkLogged.canRegister">
        <template #content>
            <div class="w-auto bg-slate-900 text-white">
        <div>
            <h1 class="text-center py-20 text-7xl font-bold">Contact Us</h1>
        </div>
        <div class="px-32 py-10 flex justify-between">
            <div class="w-52 text-center">
                <img src="storage/CutieImages/addressW.png" alt="address icon" class="m-auto pb-5">
                <h1 class="font-bold text-xl">ADDRESS</h1>
                <div class="text-gray-300 mt-5">
                <p>San jose del monte bulacan</p>
                <p>6950 S.Jordan Road centenial, CO 80112</p>
                </div>

            </div>

            <div class="w-52 text-center">
                <img src="storage/CutieImages/phoneW.png" alt="address icon" class="m-auto pb-5">
                <h1 class="font-bold text-xl">PHONE</h1>
                <div class="text-gray-300 mt-5">
                <p>School phone number</p>
                <p>09055482427</p>
                </div>

            </div>

            <div class="w-52 text-center">
                <img src="storage/CutieImages/emailW.png" alt="address icon" class="m-auto pb-5">
                <h1 class="font-bold text-xl">EMAIL</h1>
                <div class="text-gray-300 mt-5">
                <p>School Email Address</p>
                <p>Phapi3000@gmail.com</p>
                </div>

            </div>
        </div>
    </div>
        <section class=" p-20 flex justify-between">
            <div class="w-2/4">
                <h1 class="text-6xl font-bold">Message Us</h1>
                <p class="pt-10">Feel free to ask questions and express your concerns. Rest assured we'll address it right away!</p>
            </div>
            <div class="w-2/4 pl-10">
                <form>
                    <label>Name: </label>
                    <input type="text" class="w-80 rounded-md border-gray-400">
                    <br>
                    <label>Email: </label>
                    <input type="email" class="w-80 mt-10 rounded-md border-gray-400">
                    <br>

                    <textarea class="h-44 w-full mt-10" name="" id="" cols="30" rows="10"></textarea>
                    <button type="button" class="bg-jvgreen text-white font-bold h-10 w-28 rounded-md border-2 border-jvdgreen ">Submit</button>
                </form>
            </div>
        </section>
        </template>
    </GuestLayoutVue>
</template>
<script setup>
import GuestLayoutVue from '@/Layouts/GuestLayout.vue';
</script>
