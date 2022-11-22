<template>
    <user-layout title="Register New Account" no-content :showSideNav="false">
        <template #content>
            <FormLayout title="Create New User" label="Creating new user will be directly to our database">
             <template #content>
                <form class="space-y-6" @submit.prevent="submit">
                            <JetValidationErrors class="mb-4" />
                            <with-dismiss v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Role
                                <small v-if="!form.roles" class="text-indigo-500 font-semibold">*required</small>
                            </label>
                                <div class="mt-1">
                                    <simple-dropdown v-model="form.roles" :options="props.roles" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> BirthDate
                                    <small v-if="!form.birthdate" class="text-indigo-500 font-semibold">*required</small>
                                </label>
                                <div class="mt-1">
                                    <Datepicker v-model="form.birthdate" utc :enableTimePicker="false"/>
                                </div>
                            </div>
                            <small>for some concern we must first fill birthdate to auto generate username and
                                password</small>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> First Name
                                    <small v-if="!form.firstname" class="text-indigo-500 font-semibold">*required</small>
                                </label>
                                <div class="mt-1">
                                    <input type="text" :disabled="form.birthdate.length != 0 ? false : true"
                                        :class="[form.birthdate.length != 0 ? '' : 'disabled:opacity-75 disabled:bg-gray-200', 'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm']"
                                        v-model="firstname" />
                                </div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Last Name
                                    <small v-if="!form.middlename" class="text-indigo-500 font-semibold">*required</small>
                                </label>
                                <div class="mt-1">
                                    <input type="text" :disabled="form.birthdate.length != 0 ? false : true"
                                        :class="[form.birthdate.length != 0 ? '' : 'disabled:opacity-75 disabled:bg-gray-200', 'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm']"
                                        v-model="middlename" />
                                </div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Middle Name
                                    <small v-if="!form.lastname" class="text-indigo-500 font-semibold">*required</small>
                                </label>
                                <div class="mt-1">
                                    <input type="text" :disabled="form.birthdate.length != 0 ? false : true"
                                        :class="[form.birthdate.length != 0 ? '' : 'disabled:opacity-75 disabled:bg-gray-200', 'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm']"
                                        v-model="lastname" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Gender
                                    <small v-if="!form.gender" class="text-indigo-500 font-semibold">*required</small>

                                </label>
                                <div class="mt-1">
                                    <simple-dropdown v-model="form.gender" :options="gender" />
                                </div>
                            </div>
                            <div v-show="false">
                                <label for="email" class="block text-sm font-medium text-gray-700"> Email address
                                </label>
                                <div class="mt-1">
                                    <input type="email"
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm"
                                        v-model="form.email" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700"> Username
                                    <small v-if="!form.username" class="text-indigo-500 font-semibold">*required</small>
                                </label>
                                <div class="mt-1">
                                    <input type="text" disabled
                                        class="disabled:opacity-75 disabled:bg-gray-100 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm"
                                        v-model="form.username" />
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700"> Password
                                    <small v-if="!form.password" class="text-indigo-500 font-semibold">*required</small>
                                </label>
                                <div class="mt-1">
                                    <input disabled type="text"
                                        class="disabled:opacity-75 disabled:bg-gray-100 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm"
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
             </template>
            </FormLayout>
        </template>
    </user-layout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import SimpleDropdown from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import WithDismiss from "@/Custom/Feedback/Alert/WithDismiss.vue";
import { watch,ref } from "@vue/runtime-core";
import moment from 'moment'

import FormLayout from '@/Shared/Components/AdminNewUser/FormLayout.vue'

const props = defineProps({
    roles: Object
})
const gender = [
    { id: 1, name: "male" },
    { id: 2, name: "female" },
];
const firstname = ref("");
const middlename = ref("");
const lastname = ref("");

const form = useForm({
    name: firstname.value + middlename.value + lastname.value,
    firstname: "",
    lastname: "",
    middlename: "",
    username: "",
    email: "",
    birthdate: "",
    password: "",
    gender: "",
    roles: ""
});
let submit = () => {
    form.post(route('new-account.store'), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => form.reset('name', 'username', 'firstname','lastname','middlename', 'password', 'email', 'gender', 'roles'),
        onFinish: () => form.reset('name', 'username', 'password','firstname','lastname','middlename', 'email', 'gender', 'roles')
    })
};

const getName = (name, birthdate, isMonth = false) => {
    let value = name.split(" ")
    var f_name = value[0]
    var m_name = value[1]
    var l_name = value[2] ? name.substr(name.indexOf(' ') + 1) : ''
    var getNameMonth = moment(birthdate).format('ll').split(" ")
    return isMonth == true
    ? value[0].charAt(0) + value[2].charAt(0) + value[1] + '000' +getNameMonth[0] + moment(birthdate).format('Y')
    : value[0].charAt(0) + value[2].charAt(0) + value[1] + '000' + moment(birthdate).format('Y');
}
watch(() => [firstname.value, middlename.value, lastname.value], (names) => {
    const name = names.join(" ")
    const trim = name.split(" ")
    form.firstname = trim[0];
    form.lastname = trim[2];
    form.middlename = trim[1];
    form.name = trim[0] + " " + trim[2] + " " + trim[1]
    form.username = getName(name.toString(), form.birthdate)
    form.password = getName(name.toString(), form.birthdate, true)
    form.email = getName(name.toString(), form.birthdate)  + "@perpetual.com"
})
</script>
