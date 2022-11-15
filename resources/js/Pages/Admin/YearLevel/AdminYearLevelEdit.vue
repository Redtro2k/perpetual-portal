<script setup>
import UserLayout from '@/Layouts/UserLayout.vue'
import { Link, useForm } from '@inertiajs/inertia-vue3'
import { CheckCircleIcon, EyeIcon, UserGroupIcon, TrashIcon, CollectionIcon, PlusIcon } from '@heroicons/vue/solid';
import { StarIcon, CalendarIcon, UserIcon } from '@heroicons/vue/outline';
import PageHeading from '@/Custom/Headings/PageHeading.vue'
import Paginate from '@/Shared/Paginate/Paginate.vue';
import moment from 'moment';
import Loading from "@/Custom/Loading.vue";
import WithDashBorder from "@/Custom/Feedback/EmptyStates/WithDashBorder.vue";
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import RadioCard from '@/Custom/Forms/RadioGroups/RadioCard.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import JetButton from '@/Components/Button.vue';
import WithWarning from '@/Custom/Feedback/Alert/WithAccentBorder.vue';
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import {onMounted} from 'vue'



const props = defineProps({
    subjects: Object,
    yearlevel: Object,
    year_created_by: String,
    teacher: Object,
    sections: Object
});
let check = () => confirm('Are you sure you want to add this subject?');
const options = [
    { icon: StarIcon, label: props.yearlevel.type },
    { icon: CalendarIcon, label: moment(props.yearlevel.date_created).format('LL').toString() },
    { icon: UserIcon, label: "Created by " + props.year_created_by }
];

const more = [
    { icon: TrashIcon, label: 'Delete', href: route('yearlevel.destroy', props.yearlevel.id), isPrimary: true, isDelete: true, method: 'DELETE' },
    { icon: EyeIcon, label: 'View Own Subject', href: route('owned-subject.show', props.yearlevel.id), isPrimary: true, method: 'GET'},
];

const addSection = useForm({
    yearlevel_id: props.yearlevel.id,
    name: null,
    adviser_id: null
});

let submitSection = () => {
    addSection.post(route('enrolled-student.store'), {
        preserveScroll: false,
        onFinish: () => addSection.reset('name', 'adviser_id'),
        onSuccess: () => addSection.reset('name', 'adviser_id'),
    })
};
let errors = [];

onMounted(() => {
    if (props.sections.length == 0)
        errors.push('Sections')
    if (props.subjects.data.length == 0)
        errors.push('Subject');
});

</script>
<template>
    <user-layout title="Year Level" no-content :showSideNav="false">
        <template #content>
            <main class="max-w-7xl h-full mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup>
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <TabList>
                                    <Tab as="template" v-slot="{selected}">
                                        <button :class="[
                                            selected
                                            ? 'bg-gray-50 text-jvdgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <CollectionIcon :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            List Of Sections
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{selected}">
                                        <button :class="[
                                            selected
                                            ? 'bg-gray-50 text-jvdgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <PlusIcon :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Create Section
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form-description title="List Sections" description="these are all section that created">
                                        <template #main>
                                            <WithAccentBorder v-if="errors.length != 0" :label="`No ${errors.join(', ')} Please create new ${errors.join(', ')} before you proceed`"/>
                                            <WithAccentBorder v-if="$page.props.flash.warning" :label="$page.props.flash.warning"/>
                                            <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                                            <template v-if="props.sections.length != 0">
                                                <inner-table :items="props.sections" edit_link="enrolled-student.destroy" isEditData="enrolled-student.edit" :isDeleteData="{current_yearlevel: props.yearlevel.id}" post/>
                                            </template>
                                            <template v-else>
                                                    <div class="py-6">
                                                        <with-dash-border label="No Available Section, Please create one"/>
                                                    </div>
                                                </template>
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <TabPanel>
                                    <form @submit.prevent="submitSection">
                                        <form-description title="Creating Section"
                                            description="add new section for this year level" haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                    <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                                                    <with-warning v-if="$page.props.flash.warning" :label="$page.props.flash.warning"/>
                                                <div class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Section Name" v-model="addSection.name" />
                                                </div>
                                                <template v-if="props.teacher.data.length != 0">
                                                    <div class="py-6">
                                                        <radio-card :items="teacher.data" label="Available Teachers" v-model="addSection.adviser_id" />
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <div class="py-6">
                                                        <with-dash-border label="No Available teacher, try to assigining teacher"/>
                                                    </div>
                                                </template>
                                            </template>
                                            <template #footer>
                                                <JetButton v-show="addSection.adviser_id" class="ml-4" :class="{'opacity-25': addSection.processing}" :disable="addSection.processing">
                                                add Adviser
                                                </JetButton>
                                            </template>
                                        </form-description>
                                    </form>
                                </TabPanel>

                            </TabPanels>
                        </div>
                    </TabGroup>
                </div>
            </main>
            <div class="bg-white">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Suspense>
                        <div class="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <page-heading :option="options" :more="more" :label="yearlevel.name" />

                            <h2 class="pt-12 text-xl font-bold text-gray-900 font-sans">Add Subjects</h2>
                            <WithAccentBorder v-if="$page.props.flash.warning" :label="$page.props.flash.warning"/>

                            <div class="mt-8 grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 gap-x-8 gap-y-2">
                                <div v-for="item in props.subjects.data" :key="item.id" class="mb-4">
                                    <div class="relative">
                                        <div class="relative w-full h-72 rounded-lg overflow-hidden">
                                            <img :src="item.images" class="w-full h-full object-center object-cover" />
                                        </div>
                                        <div class="relative mt-4">
                                            <h3 class="text-sm font-medium text-gray-900">{{ item.name }}</h3>
                                            <p class="mt-1 text-sm text-gray-500">Unit: {{ item.value_units }}</p>
                                            <p class="mt-1 text-sm text-gray-500">Term: {{ item.term }}</p>
                                        </div>
                                        <div v-if="item.already_added"
                                            class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                                            <p class="relative text-lg font-semibold text-white">
                                                <CheckCircleIcon
                                                    class="h-5 w-5 text-jvgreen border-2 border-jvdgreen rounded-full" />
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <Link :href="!item.already_added ? route('add-subject') : route('subject.index')" :method="!item.already_added ? 'post' : 'get'"
                                            :data="!item.already_added ? {yearlevel_id: props.yearlevel.id, subject_id: item.id} : {id: item.id}"
                                            as="button" type="button"
                                            :class="[item.already_added ? 'bg-jvgreen text-white hover:bg-jvdgreen' : 'bg-gray-200 text-gray-900 hover:bg-gray-100', 'relative flex w-full border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium']"
                                            v-on:before="!item.already_added ? check : null">{{item.already_added ? 'View' : 'Add'}} Modules<span
                                            class="sr-only">, {{ item.name }}</span></Link>
                                    </div>
                                </div>
                            </div>
                            <WithDashBorder v-if="props.subjects.data.length == 0" label="No Subject, Please add Subjects" />
                            <Paginate :links="props.subjects.links" :from="props.subjects.from" :to="props.subjects.to"
                                :result="props.subjects.result" :responsiveNext="props.subjects.next_page_url"
                                :responsivePrevious="props.subjects.first_page_url" />
                        </div>
                        <template #fallback>
                            <loading />
                        </template>
                    </Suspense>
                </div>
            </div>
        </template>
    </user-layout>
</template>
