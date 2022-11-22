<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { CollectionIcon, PlusIcon, EyeIcon } from "@heroicons/vue/outline";
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import FormSlot from '@/Shared/Layouts/Tabs/FormSlot.vue';
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import { useForm, Link, usePage } from "@inertiajs/inertia-vue3";
import JetButton from '@/Components/Button.vue';
import ButtonLink from '@/Components/ButtonLink.vue';
import ButtonLinkSecondary from '@/Components/ButtonLinkSecondary.vue';
import RadioCard from '@/Custom/Forms/RadioGroups/RadioCard.vue';
import Paginate from "@/Custom/Navigation/Paginate/WithPageButton.vue";
import { computed } from "@vue/reactivity";
import WithWarning from '@/Custom/Feedback/Alert/WithAccentBorder.vue';
import WithDashBorder from '@/Custom/Feedback/EmptyStates/WithDashBorder.vue';

const props = defineProps({
    subjects: Object,
    selected_subject: Object,
    selected_image: String,
    teachers: Object,
    selected_modules: Object
});

const form = useForm({
    _method: !props.selected_subject ? 'POST' : 'PUT',
    name: props.selected_subject ? props.selected_subject.name : '',
    value_units: props.selected_subject ? props.selected_subject.value_units.toString() : '0',
    images: [],
    description: props.selected_subject ? props.selected_subject.description.toString() : ''
});

let rand = () => {
    return Math.random().toString(36).substring(2);
}
const addTeacher = useForm({
    user_id: null,
    token: rand() + rand() + rand(),
    subject_id: props.selected_subject ? props.selected_subject.id : ''
});
const errorsExisted = computed(() => usePage().props.value.errors ? true : false)
let assign = () => {
    addTeacher.post(route('assign_teacher.store'), {
        preserveState: true,
        preserveScroll: true,
        onBefore: () => confirm('Are you sure you wanna assign this teacher ?')
    })
}
let submit = () => {
    if (!props.selected_subject) {
        form.post(route('subject.store'), {
            preserveState: !errorsExisted.value ? true : false,
            preserveScroll: true,
            onSuccess: () => form.reset('id', 'name', 'value_units', 'term', 'images', 'description')
        })
    } else {
        form.post(route("subject.update", props.selected_subject.id), {
            preserveState: false,
            preserveScroll: true
        })
    }
};
</script>
<style scoped>
.ql-editor {
    height: 14vh;
    background-color: white;
}
</style>
<template>
    <user-layout title="Subjects" no-content :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup :defaultIndex="selected_subject ? 1 : 0">
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <Tab as="template" v-show="$page.props.can.admin_or_superadmin" v-slot="{selected}">
                                    <button
                                        :class="[selected ? 'bg-gray-50 text-jvdgreen hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']">
                                        <CollectionIcon :class="[
                                            selected ? 'text-jvgreen'
                                            : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                        ]" />
                                        Subjects
                                    </button>
                                </Tab>
                                <Tab as="template" v-slot="{selected}">
                                    <button
                                        :class="[selected ? 'bg-gray-50 text-djvgreen hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']">
                                        <component
                                            :is="$page.props.can.admin_or_superadmin || $page.props.can.manage_teacher ? PlusIcon : EyeIcon"
                                            :class="[
                                            selected ? 'text-jvgreen'
                                            : 'text-gray-400 group-hover:text-jvgreen',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                        ]">
                                        </component>
                                        {{$page.props.can.admin_or_superadmin || $page.props.can.manage_teacher ?
                                        'Add/Edit Subject' : `${props.selected_subject.name} Subject`}}
                                    </button>
                                </Tab>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <!-- list of all subjects -->
                                <TabPanel v-show="$page.props.can.admin_or_superadmin">
                                    <form-description title="List of all Subjects"
                                        description="these are all of records subjects from the database">
                                        <template #main>
                                            <div class="px-4 sm:px-6 lg:px-8">
                                                <div class="mt-8 flex flex-col">
                                                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div
                                                            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <inner-table v-if="props.subjects.data.length != 0"
                                                                :items="props.subjects.data" edit_link="subject.index"
                                                                post />
                                                            <WithDashBorder v-else
                                                                label="No Record, Create a new Subjects" />
                                                        </div>
                                                        <Paginate v-if="props.subjects.data != 0" class="mt-4"
                                                            :links="props.subjects.links" :from="props.subjects.from"
                                                            :to="props.subjects.to" :result="props.subjects.result"
                                                            :responsiveNext="props.subjects.next_page_url"
                                                            :responsivePrevious="props.subjects.first_page_url" />
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <TabPanel>
                                    <!-- create new or updates subjects -->
                                    <form @submit.prevent="submit">
                                        <form-description title="Create Subject"
                                            description="Create a new Subjects all of field must be required"
                                            :haveFooter="$page.props.can.admin_or_superadmin">
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <div class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Subject Name" v-model="form.name"
                                                        :disabled="!$page.props.can.admin_or_superadmin" />
                                                </div>
                                                <div v-show="false" class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Value Units" v-model="form.value_units"
                                                        :disabled="!$page.props.can.admin_or_superadmin" />
                                                </div>
                                                <div class="py-4">
                                                    <template v-if="$page.props.can.admin_or_superadmin">
                                                        <label for="first-name" class="block text-sm font-medium text-gray-700">Description
                                                            <small v-if="!form.description" class="text-indigo-500 font-semibold">*required</small>
                                                        </label>
                                                        <QuillEditor v-model:content="form.description"
                                                            contentType="html"
                                                            placeholder="description About this Subjects"
                                                            toolbar="essential" theme="snow" />
                                                    </template>
                                                    <template v-else>
                                                        <label
                                                            class="block text-sm font-medium text-gray-700">Description</label>
                                                        <span class="text-sm pl-2" v-html="form.description"></span>
                                                    </template>

                                                </div>
                                                <template v-if="props.selected_subject">
                                                    <form-slot label="Images" class="mt-4">
                                                        <template #main>
                                                            <div class="flex-shrink-0">
                                                                <img :src="props.selected_image"
                                                                    class="rounded-full h-20 w-20">
                                                            </div>
                                                        </template>
                                                    </form-slot>

                                                </template>
                                                <!-- add components -->
                                                <div class="mt-6 grid grid-cols-4 gap-4"
                                                    v-show="$page.props.can.admin_or_superadmin">
                                                    <input type="file" @input="form.images = $event.target.files[0]" />
                                                </div>
                                            </template>
                                            <template #footer>
                                                <div
                                                    :class="props.selected_subject != null ? 'flex justify-between' : ''">
                                                    <button-link-secondary v-if="props.selected_subject != null"
                                                        label="Clear" routes="subject.index" />
                                                    <div>
                                                        <button-link routes="subject.destroy"
                                                            :id="props.selected_subject ? props.selected_subject.id : null"
                                                            label="REMOVE" method="DELETE"
                                                            :isShow="props.selected_subject ? true : false" />
                                                        <JetButton class="ml-4"
                                                            :class="{ 'opacity-25': form.processing }"
                                                            :disabled="form.processing">
                                                            {{props.selected_subject ? 'Edit' : 'Add'}}
                                                        </JetButton>
                                                    </div>
                                                </div>

                                            </template>
                                        </form-description>
                                    </form>
                                    <!-- assigning the teachers from the subject you selected -->
                                    <form @submit.prevent="assign">
                                        <form-description v-show="$page.props.can.admin_or_superadmin"
                                            v-if="props.selected_subject" class="mt-4" title="Teachers"
                                            description="Select Only 1 teacher, if you trying to demote the one of the teachers, go to user management and select view"
                                            haveFooter>
                                            <template #main>
                                                <template v-if="props.teachers.data.length != 0">
                                                    <div class="py-6">
                                                        <with-warning v-if="$page.props.flash.warning"
                                                            :label="$page.props.flash.warning" />
                                                        <radio-card :items="props.teachers.data"
                                                            label="Available Teachers" v-model="addTeacher.user_id"
                                                            isActive="Available" />
                                                        <Paginate v-if="props.teachers.data != 0" class="mt-4"
                                                            :links="props.teachers.links" :from="props.teachers.from"
                                                            :to="props.teachers.to" :result="props.teachers.result"
                                                            :responsiveNext="props.teachers.next_page_url"
                                                            :responsivePrevious="props.teachers.first_page_url" />
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <div class="py-6">
                                                        <with-dash-border
                                                            label="No available Teacher, try to assigning teacher" />
                                                    </div>
                                                </template>
                                            </template>
                                            <template #footer>
                                                <JetButton v-show="addTeacher.user_id" class="ml-4"
                                                    :class="{ 'opacity-25': addTeacher.processing }"
                                                    :disabled="addTeacher.processing">
                                                    Assign
                                                </JetButton>
                                            </template>
                                        </form-description>
                                    </form>
                                    <!-- add modules from subject that you selected -->
                                    <form-description v-if="props.selected_subject" class="mt-4" title="Modules"
                                        :description="$page.props.can.manage_student ? 'List of all topics availables' : 'Add modules from subjects that you selected'"
                                        :haveFooter="!$page.props.can.manage_student">
                                        <template #main>
                                            <inner-table v-if="selected_modules.length != 0" :items="selected_modules"
                                                link_label="View"
                                                dash_error="No Modules, please Add modules this Subject"
                                                edit_link="modules.edit" />
                                            <WithDashBorder v-else
                                                label="No Modules, please Add modules this Subject" />
                                        </template>
                                        <template #footer>
                                            <button-link-secondary v-if="props.selected_subject" label="Add Modules"
                                                routes="modules.create" :data="{id: props.selected_subject.id}" />
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

