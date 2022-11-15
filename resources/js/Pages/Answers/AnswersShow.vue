<template>
    <user-layout title="Answering..." no-content :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup>
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <TabList>
                                    <Tab as="template" v-slot="{selected}">
                                        <button
                                        :class="[selected
                                            ? 'bg-gray-50 text-jvgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]"
                                        >
                                        <AdjustmentsIcon
                                        :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                        ]"
                                        />
                                        Open
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{selected}" v-show="check_already_taken" v-for="(items, index) in props.questions" :key="items">
                                        <button :class="[selected
                                            ? 'bg-gray-50 text-jvdgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]" @click="answers.reset('response')">
                                        <component :is="!items.answer? QuestionMarkCircleIcon : CheckCircleIcon" :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                        ]"/>
                                        Question {{index + 1}}
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form-description title="Summary" description="after you answer of all question you will submit to the teachers">
                                        <template #main>
                                            <div class="mt-5 border-t border-gray-200">
                                                <dl class="divide-y divide-gray-200">
                                                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                        <dt class="text-sm font-medium text-gray-500">Score</dt>
                                                        <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                            <span class="flex-grow" v-html="is_completed != null ? [is_completed.is_complete == 1 ? is_completed.scores : 'waiting'] : 'waiting'"></span>
                                                            <span class="ml-4 flex-shrink-0">
                                                                <Link :href="route('compute')" method="post" type="button" as="button" :data="{activities_id: current_id}" class="bg-white rounded-md font-medium text-jvdgreen hover:text-jvgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen">Finish</Link>
                                                            </span>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                            <Link v-if="!check_already_taken" :href="route('start-activity')" as="button" type="button" method="post" :data="{activities_id: current_id}" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-jvgreen">Start</Link>
                                            <with-right class="mt-2" v-else label="Now you can start now answering question..." />
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <TabPanel v-for="(qt, index) in props.questions" :key="qt">
                                        <form-description :title="`Question #${index + 1}`" :description="qt.question" haveFooter>
                                        <template #main>
                                            <div v-show="!qt.answer">
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <QuillEditor v-if="qt.available_answer.includes('Essay')" v-model:content="answers.response" contentType="html"/>
                                                <div v-else-if="qt.available_answer.length == 1 && !qt.available_answer.includes('Essay')" class="mt-6 grid grid-cols-4 gap-6 pb-4">
                                                    <form-input label="Your Answer" v-model="answers.response" />
                                                </div>
                                                <radio-button v-else-if="qt.available_answer.length >= 2" :items="qt.available_answer" v-model="answers.response" label="Note" description="Select which is the correct answer?" />
                                            </div>
                                            <with-right class="mt-2" v-if="qt.answer" :label="qt.answer" />
                                        </template>
                                        <template #footer>
                                            <Link v-if="is_completed.is_complete != 1" v-show="!qt.answer && qt.available_answer" :href="route('student-taking-activities.store')" method="post" as="button" type="button" :data="{ responses: answers.response, user_id: $page.props.user.id, question_id: qt.id, activities_id: current_id }" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-jvgreen" v-on:finish="answers.reset('response')" v-on:success="answers.reset('response')">Save</Link>
                                            <with-right v-else class="mt-2" label="your quiz will be submitted" />
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
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import UserLayout from '@/Layouts/UserLayout.vue'
import { QuestionMarkCircleIcon, CheckCircleIcon, AdjustmentsIcon } from "@heroicons/vue/solid";
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import JetButton from '@/Components/Button.vue';
import RadioButton from '@/Custom/Forms/RadioGroups/RadioButton.vue';
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";


const answers = useForm({
    response: '',
})

const props = defineProps({
    questions: Object,
    current_id: [String, Number],
    check_already_taken: Boolean,
    is_completed: [Object, Boolean]
})
</script>
