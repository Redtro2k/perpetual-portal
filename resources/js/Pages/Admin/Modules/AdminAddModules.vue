<script setup>
import UserLayout from '@/Layouts/UserLayout.vue'
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { PlusIcon, DocumentAddIcon } from '@heroicons/vue/outline'
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { useForm } from '@inertiajs/inertia-vue3';
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import SimpleCustom from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import FormSlot from '@/Shared/Layouts/Tabs/FormSlot.vue';
import JetButton from '@/Components/Button.vue';


const props = defineProps({
    selected: Object
})

const form = useForm({
    name: '',
    grading: '',
    description: '',
    subject_id: props.selected.id
});

const options = [
    { id: 1, name: 'prelim' },
    { id: 2, name: 'midterm' },
    { id: 3, name: 'prefinal' },
    { id: 4, name: 'final' },
];

let submit = () => {
    form.post(route('modules.store'), {
        preserveState: true,
        onFinish: () => form.reset('name','description','grading')
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
                                            Creating Modules
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Creating Modules"
                                            description="fill up all of validation to proceed the next step" haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success" :label="$page.props.flash.success"/>

                                                <div class="mt-6 grid grid-cols-4 gap-4">
                                                    <form-input label="Title" v-model="form.name" />
                                                    <form-slot label="Grading">
                                                        <template #main>
                                                            <simple-custom :options="options" v-model="form.grading" />
                                                        </template>
                                                    </form-slot>
                                                </div>
                                                <div class="mt-4">
                                                    <label for="first-name"
                                                        class="block text-sm font-medium text-gray-700">Description</label>
                                                    <QuillEditor v-model:content="form.description" contentType="html"
                                                        placeholder="description about School" toolbar="essential"
                                                        theme="snow" />
                                                </div>
                                            </template>
                                            <template #footer>
                                                <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                    :disabled="form.processing">
                                                    Create
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
        </template>
    </user-layout>
</template>
