<template>
    <user-layout title="Section" no-content :showSideNav="false">
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
                                            <UserIcon :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            All Students
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{selected}">
                                        <button :class="[
                                            selected
                                            ? 'bg-gray-50 text-jvdgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <UserAddIcon :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Enrolled Student
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form-description title="All Enrolled Student"
                                        description="these are all list of Who Enrolled on this Sections.">
                                        <template #main>
                                            <div class="px-4 sm:px-6 lg:px-8">
                                                <div class="mt-8 flex flex-col">
                                                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div
                                                            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <WithDismiss v-if="$page.props.flash.success"
                                                                :label="$page.props.flash.success" />
                                                            <inner-table v-if="props.owned_students.data.length != 0"
                                                                :items="props.owned_students.data" edit_link="remove-student.remove" :isDeleteData="{section_id: selected_section }"/>
                                                            <WithDashBorder v-else
                                                                label="No Student , Add new from the user" />
                                                        </div>
                                                        <Paginate v-if="props.owned_students.data.length != 0" class="mt-4"
                                                                :links="props.owned_students.links"
                                                                :from="props.owned_students.from"
                                                                :to="props.owned_students.to"
                                                                :result="props.owned_students.result"
                                                                :responsiveNext="props.owned_students.next_page_url"
                                                                :responsivePrevious="props.owned_students.first_page_url" />
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <TabPanel>
                                    <form-description title="Enrolled Student"
                                        description="set up a new Section, add enrolled students users">
                                        <template #main>
                                            <div class="px-4 sm:px-6 lg:px-8">
                                                <div class="mt-8 flex flex-col">
                                                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div
                                                            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <WithDismiss v-if="$page.props.flash.success"
                                                                :label="$page.props.flash.success"/>
                                                            <inner-table v-if="props.students.data.length != 0"
                                                                :items="props.students.data" :isAddData="{links: 'add-student.add', current_id: props.selected_section}"/>
                                                            <WithDashBorder v-else
                                                                label="No Student , Add new from the user" />
                                                        </div>
                                                        <Paginate v-if="props.students.data.length != 0" class="mt-4"
                                                                :links="props.students.links"
                                                                :from="props.students.from"
                                                                :to="props.students.to"
                                                                :result="props.students.result"
                                                                :responsiveNext="props.students.next_page_url"
                                                                :responsivePrevious="props.students.first_page_url" />
                                                    </div>
                                                </div>
                                            </div>
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
import UserLayout from '@/Layouts/UserLayout.vue';
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import FormDescription from '@/Shared/Layouts/Tabs/FormDescription.vue';
import { UserIcon, UserAddIcon } from '@heroicons/vue/outline'
import { Link } from '@inertiajs/inertia-vue3';
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';

const props = defineProps({
    students: Object,
    owned_students: Object,
    selected_section: [Number, String]
});
</script>
