<template>
    <user-layout no-content title="Manage User" :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup vertical>
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <TabList>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button :class="[
                                          selected
                                            ? 'bg-gray-50 text-jvdgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                          'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <UserIcon :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Profile Information
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button :class="[
                                          selected
                                            ? 'bg-white text-jvdgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                          'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <ShieldCheckIcon :class="[
                                                selected ? 'text-jvgreen' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                            ]" />
                                            Profile Roles
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button :class="[
                                          selected
                                            ? 'bg-gray-50 text-jvdgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                          'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <CogIcon :class="[
                                                selected ? 'text-jvgreen' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                            ]" />
                                            {{checkRole}}
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <!-- user information -->
                                <TabPanel>
                                    <form-description title="User Information"
                                        description="This information will be displayed publicly so be careful what you share.">
                                        <template #main>
                                            <div class="mt-6 grid grid-cols-4 gap-6">
                                                <dl class="divide-y divide-gray-200">
                                                    <form-span label="Name" :value="users.name" />
                                                    <form-photo :src="users.profile_photo_url" />
                                                    <form-span label="Email" :value="users.email" />
                                                    <form-span label="Gender" :value="users.gender" />
                                                    <form-span label="BirthDate" :value="datetime" />
                                                    <form-span label="Created" :value="moment(users.created_at).format('ll')" />
                                                </dl>
                                            </div>
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <!-- add role/entrolled -->
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Add Roles" description="add user roles"
                                            :haveFooter="!$page.props.can.school_existed.allowed">
                                            <template #main>
                                                <div class="z-index-0 mt-6 grid grid-cols-4 gap-6">
                                                    <dl class="divide-y divide-gray-200">
                                                        <simple-custom class="pb-20" label="add roles"
                                                            :options="props.roles" v-model="addRole.roles" />
                                                        <!-- content here -->
                                                    </dl>
                                                </div>
                                                <with-list :labels="listOfError" v-if="props.selected_role" />
                                                <template v-if="props.user_roles.hasOwnProperty('teacher')">
                                                    <div class="pt-2">
                                                        <label for="first-name" class="block text-sm font-medium text-gray-700">Handle Section & Subjects</label>
                                                        <inner-table v-if="props.user_roles.teacher.length != 0" :items="props.user_roles.teacher"/>
                                                        <WithDashBorder v-else label="No currently assigned"/>
                                                    </div>
                                                </template>
                                                <template v-if="props.user_roles.hasOwnProperty('student')">
                                                    <div class="py-2">
                                                        <label for="first-name" class="block text-sm font-medium text-gray-700">Handle Section & Subjects</label>
                                                    <template v-if="props.user_roles.student != null">
                                                        <inner-table :items="[props.user_roles.student]" />
                                                    </template>
                                                    <WithDashBorder v-else label="No currently assigned"/>
                                                    </div>
                                                </template>
                                            </template>
                                            <template v-if="!$page.props.can.school_existed.allowed" #footer>
                                                <jet-button v-if="props.selected_role" isSecondary>Demote</jet-button>
                                                <jet-button v-if="!props.selected_role">submit</jet-button>
                                            </template>
                                        </form-description>
                                    </form>

                                </TabPanel>
                                <!-- setuping roles -->
                                <TabPanel>
                                    <form-description title="Setting as super-administrator/Admin"
                                        description="this all of control all our system, including backup routine,schedule, for maintenance mode">
                                        <template #main>
                                            <form-switch label="Maintenance Mode" v-model="isOpen"/>
                                            <form-button label="Maintenance Mode" href="post.store" />
                                        </template>
                                    </form-description>
                                </TabPanel>
                            </TabPanels>
                        </div>
                    </TabGroup>
                </div>
            </main>
        </template>
    </user-layout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { UserIcon, ShieldCheckIcon, CogIcon } from "@heroicons/vue/outline";
import FormSpan from "@/Shared/Layouts/Tabs/FormSpan.vue";
import FormPhoto from "@/Shared/Layouts/Tabs/FormPhoto.vue";
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import FormSwitch from "@/Shared/Layouts/Tabs/FormSwitch.vue";
import FormButton from "@/Shared/Layouts/Tabs/FormButton.vue";
import SimpleCustom from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import { usePage, useForm } from "@inertiajs/inertia-vue3";
import JetButton from "@/Components/Button.vue";
import AlertWarning from "@/Custom/Feedback/Alert/WithAccentBorder.vue";
import WithList from '@/Custom/Feedback/Alert/WithList.vue';
import moment from "moment";
import { computed, onMounted, ref } from "@vue/runtime-core";
const props = defineProps({
    users: Object,
    roles: Object,
    selected_role: String,
    user_roles: Object,
});
console.log(props.selected_role)
//temporary form for toggle button
const isOpen = ref(false)

const datetime = computed(() => {
    if (props.users.birthdate != null) {
        moment(props.users.birthdate).format("LL");
    } else {
        return "no birthdate";
    }
});

//get errors
const checkRole = computed(() => usePage().props.value.user.roles[0].name);
const addRole = useForm({
    id: props.users.id,
    roles: props.selected_role
});

//check warnings
const listOfError = [];

let submit = () => {
    addRole.post(route('add-role'), {
        onBefore: () => confirm('Are you sure you wanna assign this user?')
    })
}
onMounted(() => {
    if (props.selected_role)
        listOfError.push('This user already exists in roles.')
    if (usePage().props.value.can.school_existed.allowed)
        listOfError.push('No currently, the school you need to add school first...')
});
</script>
