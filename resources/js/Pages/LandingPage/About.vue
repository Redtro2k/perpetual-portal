<template>
    <GuestLayoutVue :canLogin="$page.props.checkLogged.canLogin" :canRegister="$page.props.checkLogged.canRegister">
        <template #content>
            <section class="h-screen bg-slate-900 text-white">
                <div class=" text-center pt-10">
                    <h1 class="text-6xl font-bold">Get To Know Us</h1>
                    <hr class="w-36 h-2 rounded-xl bg-white  mx-auto my-10">
                </div>

                <!-- <div class=" pt-32 flex justify-evenly">
                    <div class="w-64">
                        <div class="text-center">
                            <img src="storage/CutieImages/website.png" alt="Website icon" class="m-auto pb-5 h-20 ">
                            <h1>WEB DESIGN</h1>
                            <br>
                            <p class="text-gray-300 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum
                                atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex? </p>
                        </div>
                    </div>

                    <div class="w-64">
                        <div class="text-center">
                            <img src="storage/CutieImages/leader.png" alt="Website icon" class="m-auto pb-5 h-20">
                            <h1>LEADERSHIP</h1>
                            <br>
                            <p class="text-gray-300 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum
                                atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex? </p>
                        </div>
                    </div>

                    <div class="w-64">
                        <div class="text-center">
                            <img src="storage/CutieImages/career.png" alt="Website icon" class="m-auto pb-5 h-20">
                            <h1>CAREERS</h1>
                            <br>
                            <p class="text-gray-300 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum
                                atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex? </p>
                        </div>
                    </div>

                    <div class="w-64">
                        <div class="text-center">
                            <img src="storage/CutieImages/team.png" alt="Website icon" class="m-auto pb-5 h-20">
                            <h1>TEAM WORK</h1>
                            <br>
                            <p class="text-gray-300 text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum
                                atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex? </p>
                        </div>
                    </div>
                </div> -->
                <div class="pt-32 flex justify-evenly">
                    <div v-for="(feature, index) in features" :key="feature" class="w-64">
                        <div v-for="item in Object.values(feature)" :key="item" class="text-center">
                            <template v-if="getObjectKey(features[index], item) == 'images'">
                                <img :src="`storage/CutieImages/${item}`" alt="Website icon" class="m-auto pb-5 h-20">
                            </template>
                            <template v-else-if="getObjectKey(features[index], item) == 'label'">
                                <h1>{{item}}</h1>
                            </template>
                            <template v-else-if="getObjectKey(features[index], item) == 'description'">
                                <h1>{{item}}</h1>
                            </template>
                        </div>
                    </div>
                </div>


            </section>
            <section class="mb-8">
                <h1 class="text-6xl  font-bold text-center pt-10">IT Team</h1>
                <hr class="bg-jvgreen w-44 h-1 mx-auto mb-10 rounded-md">
                <div class="flex space-x-7 mx-4 justify-center ">
                    <span v-for="(item, key) in teams" :key="item" :class="[key == teams.length - 1 ? 'bg-red-200 py-10' : 'bg-blue-200','w-80 h-xl rounded-xl p-5 text-center  justify-center']">
                        <span v-for="team in Object.values(item)" :key="team">
                            <template v-if="getObjectKey(teams[key], team) == 'images'" class="w-80h-xl rounded-xl p-5 text-center bg-blue-200">
                                <img :src="`storage/CutieImages/${team}`" alt="" class="rounded-full h-40 w-40 mx-auto">
                            </template>
                            <template v-else-if="getObjectKey(teams[key], team) == 'name'">
                                <h1 class="font-bold text-2xl ">{{team}}</h1>
                            </template>
                            <template v-else>
                                <p class="text-gray-500">{{team}}</p>
                            </template>
                        </span>
                        <div class="flex justify-between px-10 py-5">

                            <a href="#"><img src="storage/CutieImages/fb.png" alt="facebook icon"></a>
                            <a href="#"><img src="storage/CutieImages/ig.png" alt="instagram icon"></a>
                            <a href="#"><img src="storage/CutieImages/twit.png" alt="Twitter icon"></a>

                        </div>
                </span>
                </div>
            </section>
        </template>
    </GuestLayoutVue>
</template>
<script setup>
import GuestLayoutVue from '@/Layouts/GuestLayout.vue';
const features = [
    {images: 'website.png', label: 'WEB DESIGN', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex?' },
    {images: 'leader.png', label: 'LEADERSHIP', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex?' },
    {images: 'career.png', label: 'CAREERS', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex?' },
    {images: 'team.png', label: 'TEAM WORK', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos fugiat, vitae iste laudantium consequatur incidunt! Illo cum odit earum atque! Sint officia reprehenderit assumenda mollitia quia atque sit ex?' },

]
const teams = [
    {images: 'me.jpg', name: 'Justin Vincent Cinco', title: 'Front-End Web Developer', description: 'I produce beautiful web designs, bringing our website into life, giving it a sense of user-friendly.'},
    {images: 'archie.jpg', name: 'Archie Tagaan', title: 'Project Manager', description: 'I conceptualize ideas for the development and manage everything for the team.'},
    {images: 'redtro.png', name: 'Darwin Llacuna', title: 'Full-Stack Web Developer', description: 'I am in charge of most of the development of our system. Building from scratch and producing websites for your ease.'},
    {images: 'eli.jpg', name: 'Mariel Flores', title: 'Documentation', description: 'I am in charge of dealing with clients, assessment and taking care of the documentation.'},
];
const getObjectKey = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value)
};
</script>
