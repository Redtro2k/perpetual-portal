<template>
    <user-layout title="School Year" no-content :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup vertical>
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
                                            Academic Year
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{selected}">
                                        <button :class="[
                                        selected
                                        ? 'bg-gray-50 text-jvdgreen hover:bg-white'
                                        : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                        'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                                        ]">
                                            <PlusIcon :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Create/Edit Academic Year
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form-description title="List of Academic Year"
                                        description="all of the table sections display all of the record Academic Year that admins created..."
                                        :havFooter="false">
                                        <template #main>
                                            <WithAccentBorder v-if="$page.props.flash.warning"
                                                :label="$page.props.flash.warning" />
                                            <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success"
                                                :label="$page.props.flash.success" />
                                            <div class="px-4 sm:px-6 lg:px-8">
                                                <div class="mt-8 flex flex-col">
                                                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div
                                                            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <inner-table v-if="props.academicyear.length !== 0"
                                                                :items="props.academicyear"
                                                                dash_error="No Record, Create New Academic Year"
                                                                edit_link="academic-year.destroy" :post="false"
                                                                :isDeleteData="{}" />

                                                            <WithDashBorder v-else
                                                                label="Empty Academic Year, create new" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Create of Academic Year"
                                            description="Create a new Academic Year" haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <div class="mt-6 grid grid-cols-4 gap-6 pb-4">
                                                    <form-input label="Start Year" v-model.number="form.start" />
                                                </div>
                                                <div class="mt-6 grid grid-cols-4 gap-6 pb-4">
                                                    <form-input label="End Year" v-model.number="form.end" disabled />
                                                </div>
                                            </template>
                                            <template #footer>
                                                <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                    :disabled="form.processing">Add</JetButton>
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
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { CollectionIcon, PlusIcon } from '@heroicons/vue/outline'
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import { useForm } from "@inertiajs/inertia-vue3";
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import JetButton from '@/Components/Button.vue';
import { computed, ref, watch } from "@vue/runtime-core";
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import debounce from "lodash/debounce";


const props = defineProps({
    academicyear: Object
});
const form = useForm({
    start: null,
    end: null
});
watch(
    () => form.start,
    debounce((value) => {
        form.end = value + 1
        form.end == 1 ? form.end = null : false
    }, 1500)
);

let submit = () => {
    form.post(route('academic-year.store'), {
        preserveState: false,
        preserveScroll: true,
        onBefore: () => confirm('Are you sure to you want to insert a new Academic year'),
        onFinish: () => form.reset('start', 'end'),
        onSuccess: () => form.reset('end', 'end')
    });
};

</script>
