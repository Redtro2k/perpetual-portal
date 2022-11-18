<template>
    <GuestLayoutVue :canLogin="$page.props.checkLogged.canLogin" :canRegister="$page.props.checkLogged.canRegister">
        <!--School slogan-->
    <template #content>
        <section class="h-screen w-auto pt-24 mb-10 p-10 sm:flex-1 lg:flex sm:justify-between shadow-lg">
            <div class="sm:w-auto lg:w-1/2 pl-20">
                <h1 class="lg:text-7xl sm:text-2xl text-lg font-bold mb-5 text-jvgreen  ">Perpetual Help Academy of Palmera INC.</h1>
                <p class="text-gray-500 text-lg">A school learning management system aims to provide a web-based management system. The system includes different functionalities for both teachers and students. Features for the teachers are interacting, Assigning/uploading activities, modules and assignments as well as receiving the progress of their students.</p>

            </div>
            <div class="sm:w-auto lg:w-1/2">
                <div>
                    <img class="w-11/12 h-72 rounded-lg shadow-lg m-10 bg-cover" src="storage/CutieImages/students.jpg" alt="students img">
                </div>

            </div>
        </section>

        <main>
            <section class="lg:min-h-screen sm:h-auto w-auto ">
                <!--School History-->
            <div class=" px-20 py-20 ">
                <div class=" lg:h-screen max-w-7xl p-10 lg:flex justify-between">
                    <div class="h-2xl w-2/4 mr-10 flex-auto py-10">
                        <img src="storage/CutieImages/school.jpg" class="rounded-tr-3xl" alt="">
                    </div>
                    <div class="w-2/5 flex-auto pt-5">
                        <hr class=" bg-jvgreen w-2/4 h-1 rounded-md mb-5">
                        <h1 class="text-4xl text-jvgreen font-bold">You're In Good Hands</h1>
                    <p class="mt-5 text-96 text-gray-500"> The founder of Perpetual Help Academy of Palmera Inc. is Mrs. Estelita G. Antolin, the school was first located at Quezon City around the year 1990 and branched out to Bulacan at the year 1994. The school is located at Block 5 Lot 1 Phase 3B Palmera Homes Brgy. Kaypian San Jose Del Monte Bulacan.
Mrs. Antolin founded the school in Bulacan out of public demand, through the encouragement of the Homeowners Association, it was conceptualized. It is said that students there need to travel far just to attend school. So as a response to that scarcity they built the first private school in Palmera, mainly it only facilitates pre-school up to kindergarten, but as time goes by, they added grade level or elementary level to their curriculum.
Perpetual Help Academy of Palmera, Inc, have envisioned to provide the community with a healthy institution which will nurture and enhance the capabilities of the children living in the vicinity.</p>
                    </div>

                </div>
            </div>
            </section>
          <!---  <div class="h-56 w-auto bg-gray-200 text-gray-500 text-2xl text-center p-20">
                    <p>" HElLo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias possimus non nesciunt omnis magni libero quis officia, reiciendis minima quidem, ipsam dolorum dolore praesentium, doloremque excepturi? Dolorum obcaecati alias voluptatum."</p>
                </div> -->
        </main>
        <!-- Clients Basic Information -->
        <div class="h-56 w-auto bg-black text-gray-300 text-2xl text-center p-20">
                    <p>"Head Officers of Perpetual Help Academy of Palmera Incorporated"</p>
                </div>
        <section class="h-auto bg-black p-10 lg:flex justify-evenly">

            <div class="text-white w-64">
                <div class="">
                    <img src="storage/CutieImages/founder.jpg" alt="" class="rounded-full h-40 w-40 m-auto bg-cover">
                </div>
                <div class=" text-center">
                    <h3 class=" text-2xl">Mrs. Estelita Guevarra Antolin</h3>
                    <p class="text-jvgreen font-bold underline">FOUNDER</p>
                    <br>

                </div>
            </div>


            <div class="text-white w-64">

                <div>
                    <img class="rounded-full bg-white h-40 w-40 m-auto" src="storage/CutieImages/ceo.jpg" alt="">
                </div>
                <div class=" text-center">
                    <h3 class=" text-2xl">Mrs. Emily Rose Guevarra Antolin</h3>
                    <p class="text-jvgreen font-bold underline">CEO</p>
                    <br>

                </div>
            </div>


            <div class="text-white w-64">
                <div>
                    <img  class="rounded-full bg-white h-40 w-40 m-auto" src=storage/CutieImages/principal.jpg alt="Principal images">
                </div>
                <div class=" text-center">
                    <h3 class=" text-2xl">Mrs. Vivian G. Perez</h3>
                    <p class="text-jvgreen font-bold underline">PRINCIPAL</p>
                    <br>

                </div>
            </div>

        </section>
    </template>

</GuestLayoutVue>
</template>
<script setup>
     import GuestLayoutVue from '@/Layouts/GuestLayout.vue';
</script>
