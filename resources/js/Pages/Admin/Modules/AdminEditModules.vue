<script setup>
import UserLayout from '@/Layouts/UserLayout.vue'
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { PlusIcon, DocumentAddIcon, PencilAltIcon } from '@heroicons/vue/solid'
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { useForm } from '@inertiajs/inertia-vue3';
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import SimpleCustom from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import FormSlot from '@/Shared/Layouts/Tabs/FormSlot.vue';
import ButtonLink from '@/Components/ButtonLink.vue';
import JetButton from '@/Components/Button.vue';
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import WithDashBorder from '@/Custom/Feedback/EmptyStates/WithDashBorder.vue';
import { onMounted, ref } from 'vue'
import WithAccentBorder from "@/Custom/Feedback/Alert/WithAccentBorder.vue";
import Radio from '@/Custom/Forms/Toggle/WithLeftLabelAndDescription.vue';



const props = defineProps({
    selected: Object,
    activities: Object
})
const date = ref();

const form = useForm({
    name: props.selected.title,
    grading: props.selected.quarter,
    description: props.selected.description,
    module_id: props.selected.id,
});

const options = [
    { id: 1, name: 'prelim' },
    { id: 2, name: 'midterm' },
    { id: 3, name: 'prefinal' },
    { id: 4, name: 'final' },
];
const files = useForm({
    id: props.selected.id,
    content: null,
    name: null
})
const qae = useForm({
    module_id: props.selected.id,
    title: '',
    dates: null,
    isCentrilized: false

})
// For demo purposes assign range from the current date
onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            qae.dates = [startDate, endDate];
    })
let addFiles = () => {
    files.post(route('files.store'), {
        onFinish: () => files.reset('content', 'name'),
        onSuccess: () => files.reset('content', 'name'),
        preserveState: true
    })
}
let qaeSubmit = () => {
    qae.post(route('qae.store'), {
        onFinish: () => qae.reset('title'),
        onSuccess: () => qae.reset('title'),
        preserveState: true
    })
}

let submit = () => {
    form.put(route('modules.update', props.selected.id), {
        preserveState: true,
    })
};

</script>
<template>
    <user-layout title="Modules" no-content :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup>
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <TabList>
                                    <Tab as="template" v-slot="{selected}">
                                        <button :class="[
                                            selected
                                            ? 'bg-gray-50 text-jvgreen-300 hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <PlusIcon :class="[
                                              selected
                                                ? 'text-jvgreen-100'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            {{$page.props.can.manage_student ? 'Module Description' : 'Update Modules'}}
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{selected}">
                                        <button :class="[
                                            selected
                                            ? 'bg-gray-50 text-jvgreen-300 hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <DocumentAddIcon :class="[
                                              selected
                                                ? 'text-jvgreen-100'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            {{$page.props.can.manage_student ? 'Files' : 'Add Files'}}
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{selected}">
                                        <button :class="[
                                            selected
                                            ? 'bg-gray-50 text-jvgreen-300 hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <PencilAltIcon :class="[
                                              selected
                                                ? 'text-jvgreen-100'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            {{$page.props.can.manage_student ? 'Activities' : 'Set Up Quizzes, Activities, Essay'}}

                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description :title="$page.props.can.manage_student ? 'Modules Description' : 'Update Modules'"
                                            :description="$page.props.can.manage_student ? 'Please read all Information about this topic' : 'fill up all of validation to proceed the next step'" :haveFooter="!$page.props.can.manage_student">
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <with-dismiss v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                                                <div class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Title" v-model="form.name" :disabled="$page.props.can.manage_student ? true : false"/>
                                                    <form-slot label="Grading">
                                                        <template #main>
                                                            <simple-custom :options="options" v-model="form.grading" :disabled="$page.props.can.manage_student ? true : false" :class="[$page.props.can.manage_student ? 'opacity-50' : '']"/>
                                                        </template>
                                                    </form-slot>
                                                </div>
                                                <div class="mt-4">
                                                    <label for="first-name"
                                                        class="block text-sm font-medium text-gray-700">Description</label>
                                                <template v-if="!$page.props.can.manage_student">
                                                    <QuillEditor v-model:content="form.description" contentType="html" placeholder="description about School"
                                                        toolbar="essential" theme="snow" />
                                                </template>
                                                <template v-else>
                                                    <span class="text-sm pl-2" v-html="form.description"></span>
                                                </template>
                                                </div>
                                            </template>
                                            <template #footer>
                                                <button-link routes="modules.destroy" :id="props.selected.id"
                                                    label="REMOVE" method="DELETE" isShow />

                                                <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                    :disabled="form.processing">
                                                    Update
                                                </JetButton>
                                            </template>
                                        </form-description>
                                    </form>
                                </TabPanel>
                                <TabPanel>
                                    <form @submit.prevent="addFiles">
                                        <form-description v-show="$page.props.can.manage_student ? false : true" title="Add Files"
                                            description="add content about this modules link pdf" haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <with-dismiss v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                                                <div class="mt-6 grid grid-cols-1 gap-4">
                                                    <form-input label="Title" v-model="files.name" />
                                                    <input type="file" @input="files.content = $event.target.files[0]" />
                                                </div>
                                            </template>
                                            <template #footer>
                                                <JetButton class="ml-4" :class="{ 'opacity-25': files.processing }"
                                                    :disabled="files.processing">
                                                    Upload
                                                </JetButton>
                                            </template>
                                        </form-description>
                                    </form>
                                    <form-description class="mt-4" title="All Files"
                                        description="list of all uploaded recarding this topic">
                                        <template #main>
                                            <template v-if="props.selected.files.length != 0">
                                                <inner-table v-if="!$page.props.can.manage_student"
                                                :items="props.selected.files" edit_link="files.destroy"
                                                :isDeleteData="{current_modules: props.selected.id}" />
                                                <inner-table v-else :items="props.selected.files"/>
                                            </template>
                                            <WithDashBorder class="mt-2" v-else
                                                label="No Modules, please Add modules this Subject" />
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <TabPanel>
                                    <form @submit.prevent="qaeSubmit">
                                        <form-description v-show="$page.props.can.admin_or_superadmin || $page.props.can.manage_teacher" title="Add Activities"
                                            description="adding Quizzes, and Activity" have-footer>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <with-dismiss v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                                                <with-accent-border v-if="$page.props.flash.warning" :label="$page.props.flash.warning" />
                                                <div class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Title" v-model="qae.title" />
                                                    <form-slot label="Start - Due">
                                                        <template #main>
                                                            <Datepicker v-model="qae.dates" :is-24="false" range utc/>
                                                        </template>
                                                    </form-slot>
                                                </div>
                                                    <Radio class="pt-4" label="Not Centrilized" body="If you turn on it will post only to your handle sections" v-model="qae.isCentrilized" />
                                            </template>
                                            <template #footer>
                                                <JetButton class="ml-4" :class="{ 'opacity-25': qae.processing }"
                                                    :disabled="qae.processing">
                                                    Create
                                                </JetButton>
                                            </template>
                                        </form-description>
                                    </form>
                                    <form-description class="mt-4" title="Quizzes, Activities, Essay" description="list of all created quizzes, activities, Essay recarding this topic"
                                    :haveFooter="$page.props.can.admin_or_superadmin || $page.props.can.manage_teacher"
                                    >
                                        <template #main>
                                            <template v-if="props.activities != 0">
                                                 <inner-table v-if="$page.props.can.admin_or_superadmin || $page.props.can.manage_teacher"
                                                :items="props.activities" edit_link="qae.destroy"
                                                :isDeleteData="{current_modules: props.selected.id}" isEditData="question-answer.show"/>
                                                <inner-table v-else
                                                    :items="props.activities"
                                                    link_label="Answer it"
                                                    edit_link="student-taking-activities.show"
                                                />
                                            </template>
                                            <WithDashBorder class="mt-2" v-else
                                                label="No Activities, please Add Activities on this lesson" />
                                        </template>
                                        <template #footer>
                                            <a :href="route('view-all-activities', props.selected.id)"  class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Export Excel</a>
                                        </template>
                                    </form-description>
                                </TabPanel>
                            </TabPanels>
                        </div>
                    </TabGroup>
                </div>
            </main>
        </template>
        <!-- <Radio class="pt-4" label="Deploy activities" body="if you one this activities, will notify who taken this subjects." v-model="inEnabled.given" v-show="props.questions.length != 0"/> -->
    </user-layout>
</template>
