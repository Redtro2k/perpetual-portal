<template>
    <user-layout title="Register New Account" no-content :showSideNav="false">
        <template #content>
            <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow" />
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create New User</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                        Creating new user will be directly to our database
                        {{ ' ' }}
                    </p>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form class="space-y-6" @submit.prevent="submit">
                            <JetValidationErrors class="mb-4" />
                            <with-dismiss
          v-if="$page.props.flash.success"
          :label="$page.props.flash.success"
        />
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Role
                                </label>
                                <div class="mt-1">
                                    <simple-dropdown v-model="form.roles" :options="props.roles" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Name
                                </label>
                                <div class="mt-1">
                                    <input type="text"
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm"
                                        v-model="form.name"
                                        />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Gender
                                </label>
                                <div class="mt-1">
                                    <simple-dropdown v-model="form.gender" :options="gender" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Email address
                                </label>
                                <div class="mt-1">
                                    <input type="email"
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm"
                                        v-model="form.email"
                                        />
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                                <div class="mt-1">
                                    <input type="password"
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm"
                                        v-model="form.password" />
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen">
                                    Create New
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </user-layout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import SimpleDropdown from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import WithDismiss from "@/Custom/Feedback/Alert/WithDismiss.vue";

const props = defineProps({
    roles: Object
})
const gender = [
    { id: 1, name: "male" },
    { id: 2, name: "female" },
];

const form = useForm({
    name: "",
    email: "",
    password: "",
    gender: "",
    roles: ""
});
let submit = () => {
    form.post(route('new-account.store'), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => form.reset('password','name', 'password', 'email', 'gender','roles'),
        onFinish: () => form.reset('password','name', 'password', 'email', 'gender','roles')
    })
};
</script>
