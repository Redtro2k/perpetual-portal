<script setup>
import UserLayout from '@/Layouts/UserLayout.vue'
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { PlusIcon, DocumentAddIcon, CogIcon, UserIcon } from '@heroicons/vue/outline'
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { useForm, Link } from '@inertiajs/inertia-vue3';
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import SimpleCustom from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import FormSlot from '@/Shared/Layouts/Tabs/FormSlot.vue';
import JetButton from '@/Components/Button.vue';
import { ref, onMounted } from 'vue';
import ButtonPrimary from '@/Custom/Elements/Buttons/StackCardLayout/ButtonPrimary.vue';
import RadioButton from '@/Custom/Forms/RadioGroups/RadioButton.vue';
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import Radio from '@/Custom/Forms/Toggle/WithLeftLabelAndDescription.vue';


const props = defineProps({
    questions: Object,
    selected_activities: Object,
    students_answer: Object
})

const typeQuestion = ref('')

const possibleAnswer = ref('')

const form = useForm({
    question: '',
    answer: [],
    correct_answer: '',
    activity_id: props.selected_activities.id
});

const qae = useForm({
    current_id: props.selected_activities.activiteable.id,
    title: props.selected_activities.title,
    dates: null,
    questions: props.questions,
});

onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            qae.dates = [startDate, endDate];
    })

let repost = () => {
    qae.post(route('migrate-activity'), {
        preserveScroll: true
    })
}

let add = () => {
    if (possibleAnswer.value.length != 0) {
        form.answer.push(possibleAnswer.value)
        if (form.answer.length == 1) {
            form.correct_answer = possibleAnswer.value
        }
        possibleAnswer.value = ''
    }
    else {
        alert("Possible Answer field is Empty")
    }

}
let remove = () => {
    form.answer.pop()
    if (form.answer.length == 0) {
        form.reset('correct_answer')
    }
}

let inEnabled = useForm({
    given: props.selected_activities.given == 0 ? false : true,
})

let enableSave = () => {
    inEnabled.put(route('question-answer.update', props.selected_activities.id), {
        preserveScroll: true,
        preserveState: true
    })
}

let trueOrFalse = () => {
    form.answer.push('true');
    form.answer.push('false');
}


let submit = () => {
    form.post(route('question-answer.store'), {
        preserveScroll: true,
        preserveState: false,
        onFinish: () => form.reset('question', 'answer', 'correct_answer'),
        onSuccess: () => form.reset('question', 'answer', 'correct_answer')
    })
};

</script>
<template>
    <user-layout title="Modules" no-content :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <WithAccentBorder class="my-4" label="once you created a question will not be editable, you delete then make a new"/>

                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup>
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <TabList>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button  @click="form.reset('answer', 'correct_answer', 'question')" :class="[
                                            selected
                                                ? 'bg-gray-50 text-jvgreen-200 hover:bg-white'
                                                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <PlusIcon :class="[
                                                selected
                                                    ? 'text-jvgreen-100'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Multiple Choices / True or False
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button  @click="form.reset('answer', 'correct_answer', 'question')" :class="[
                                            selected
                                                ? 'bg-gray-50 text-jvgreen-200 hover:bg-white'
                                                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <PlusIcon :class="[
                                                selected
                                                    ? 'text-jvgreen-100'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Essay
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button @click="form.reset('answer', 'correct_answer', 'question')" :class="[
                                            selected
                                                ? 'bg-gray-50 text-jvgreen-200 hover:bg-white'
                                                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <PlusIcon :class="[
                                                selected
                                                    ? 'text-jvgreen-100'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Fill in the blanks
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button @click="form.reset('answer', 'correct_answer', 'question')" :class="[
                                            selected
                                                ? 'bg-gray-50 text-jvgreen-200 hover:bg-white'
                                                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <CogIcon :class="[
                                                selected
                                                    ? 'text-jvgreen-100'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                           Option
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button @click="form.reset('answer', 'correct_answer', 'question')" :class="[
                                            selected
                                                ? 'bg-gray-50 text-jvgreen-200 hover:bg-white'
                                                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <UserIcon :class="[
                                                selected
                                                    ? 'text-jvgreen-100'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                           Students
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Creating Quizzes"
                                            description="fill up all of validation to proceed the next step" haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success"
                                                    :label="$page.props.flash.success" />
                                                    <WithAccentBorder class="my-2" v-if="$page.props.flash.warning"  :label="$page.props.flash.warning"/>
                                                <div class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Question" v-model="form.question" />
                                                    <div class="flex space-x-2">
                                                        <form-input label="Add Possible Answer"
                                                            v-model="possibleAnswer" />
                                                    </div>
                                                </div>
                                                <radio-button :items="form.answer" v-model="form.correct_answer"
                                                    label="Note" description="Select which is the correct answer?" />
                                                    <button-primary v-show="!form.answer.includes('true') && !form.answer.includes('false')" label="true or false" @click="trueOrFalse" />

                                            </template>
                                            <template #footer>
                                                <div class="flex justify-between">
                                                    <div class="flex space-x-2">
                                                        <button-primary label="Add Answer" @click="add" />
                                                        <button-primary label="Remove Answer" v-show="form.answer.length == 0 ? false : true" @click="remove" />
                                                    </div>
                                                    <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                        :disabled="form.processing">Add</JetButton>
                                                </div>
                                            </template>
                                        </form-description>
                                    </form>

                                </TabPanel>
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Creating Quizzes"
                                            description="fill up all of validation to proceed the next step" haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success"
                                                    :label="$page.props.flash.success" />
                                                    <WithAccentBorder class="my-2" v-if="$page.props.flash.warning"  :label="$page.props.flash.warning"/>
                                                    <QuillEditor v-model:content="form.question" contentType="html"
                                                        placeholder="Create Essay" toolbar="essential"
                                                        theme="snow" />
                                                <div class="mt-6 grid grid-cols-4 gap-4" v-show="false">
                                                    {{form.answer = ['Essay']}} - {{form.correct_answer = 'none'}}
                                                </div>
                                            </template>
                                            <template #footer>
                                                    <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                        :disabled="form.processing">Add</JetButton>
                                            </template>
                                        </form-description>
                                    </form>

                                </TabPanel>
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Creating Quizzes"
                                            description="fill up all of validation to proceed the next step" haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success"
                                                    :label="$page.props.flash.success" />
                                                    <WithAccentBorder class="my-2" v-if="$page.props.flash.warning"  :label="$page.props.flash.warning"/>
                                                <WithAccentBorder class="my-4" label="Use underline '____' for the missing answer,"/>
                                                <div class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Question" v-model="form.question" />
                                                    <div class="flex space-x-2">
                                                        <form-input label="Answer"
                                                            v-model="possibleAnswer" />
                                                    </div>
                                                </div>
                                                <radio-button :items="form.answer" v-model="form.correct_answer"
                                                    label="Note" description="Final Answer" />
                                            </template>
                                            <template #footer>
                                                <div class="flex justify-between">
                                                    <div class="flex space-x-2">
                                                        <button-primary label="Add Answer" v-show="form.answer.length >= 1 ? false : true" @click="add" />
                                                        <button-primary label="Remove Answer" v-show="form.answer.length == 0 ? false : true" @click="remove" />
                                                    </div>
                                                    <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                        :disabled="form.processing">Add</JetButton>
                                                </div>
                                            </template>
                                        </form-description>
                                    </form>

                                </TabPanel>
                                <TabPanel>
                                        <form-description title="Option"
                                            description="all controls including given to student, and repost quiz with schedule" haveFooter>
                                            <template #main>
                                                <template v-if="props.selected_activities.section_id != null && $page.props.can.manage_teacher">
                                                    <WithAccentBorder class="mt-4" v-if="props.questions.length == 0" label="Empty Question"/>
                                                    <Radio class="pt-4" label="Deploy activities" body="if you one this activities, will notify who taken this subjects." v-model="inEnabled.given" v-show="props.questions.length != 0"/>
                                                </template>
                                                <template v-else-if="props.selected_activities.section_id == null && $page.props.can.manage_teacher">
                                                    <with-dismiss v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                                                    <with-accent-border v-if="$page.props.flash.warning" :label="$page.props.flash.warning" />
                                                    <div class="mt-6 grid grid-cols-4 gap-4">
                                                        <form-input :disabled="true" label="Title" v-model="qae.title" />
                                                        <form-slot label="Start - Due">
                                                            <template #main>
                                                                <Datepicker v-model="qae.dates" :is-24="false" range utc />
                                                            </template>
                                                        </form-slot>
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <WithRight class="mt-4" label="No Current Options available"/>
                                                </template>
                                            </template>
                                            <template #footer>
                                                <JetButton @click.prevent="enableSave" v-show="props.questions.length != 0" v-if="props.selected_activities.section_id != null && $page.props.can.manage_teacher" class="ml-4" :class="{ 'opacity-25': enableSave.processing }"
                                                        :disabled="enableSave.processing">save</JetButton>
                                                <JetButton v-else-if="props.selected_activities.section_id == null && $page.props.can.manage_teacher" class="ml-4" :class="{ 'opacity-25': qae.processing }"
                                                :disabled="qae.processing" @click.prevent="repost">Add Schedule</JetButton>
                                            </template>
                                        </form-description>
                                </TabPanel>
                                <TabPanel>
                                    <form-description title="All Students"
                                            description="list of all student who answering this activities" haveFooter>
                                            <template #main>
                                                <WithAccentBorder class="my-4" v-if="props.questions.length == 0" label="No Students"/>
                                                <inner-table v-if="props.students_answer.length != 0" :items="props.students_answer" edit_link="view-student" :edit_link_with_request="{selected_activity_id: props.selected_activities.id}"/>
                                                <WithDashBorder v-else label="No Student taken this quizz"/>
                                                <a v-if="props.students_answer.length != 0" :href="route('activities-result.result', props.selected_activities.id)"  class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Export Excel</a>
                                            </template>
                                        </form-description>
                                </TabPanel>
                            </TabPanels>
                        </div>
                    </TabGroup>
                </div>
        <form-description class="mt-8 " title="Question" description="list of all question that your created">
        <template #main>
            <inner-table v-if="props.questions.length != 0" :items="props.questions" edit_link="question-answer.destroy"
                :isDeleteData="{ current_id: props.selected_activities.id }" />
            <WithDashBorder v-else label="No Question" />
        </template>
    </form-description>
            </main>
        </template>
    </user-layout>
</template>
