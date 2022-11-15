<template>
    <user-layout no-content title="Manage User" :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup vertical>
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <TabList>
                                    <Tab as="template" v-slot="{selected}">
                                        <button
                                            :class="[selected ? 'bg-gray-50 text-indigo-600 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']">
                                            <UserIcon
                                                :class="[selected ?  'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" />
                                            Profile Information
                                        </button>

                                    </Tab>
                                    <Tab as="template" v-slot="{selected}">
                                        <button
                                            :class="[selected ? 'bg-white text-indigo-600 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']">Tab
                                            2</button>
                                    </Tab>
                                    <Tab as="template" v-slot="{selected}">
                                        <button
                                            :class="[selected ? 'bg-gray-50 text-indigo-600 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']">Tab
                                            3</button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form-description title="User Information"
                                        description="This information will be displayed publicly so be careful what you share.">
                                        <template #main>
                                            <div class="mt-6 grid grid-cols-4 gap-6">
                                                <dl class="divide-y divide-gray-200">
                                                    <form-span label="Name" value="Chelsea Hagon" />
                                                    <form-photo />
                                                    <form-span label="Email" value="example@example.com" />
                                                    <form-span label="Gender" value="Male" />
                                                    <form-span label="BirthDate" value="1/2/2022" />
                                                </dl>
                                            </div>
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <TabPanel>Content 2</TabPanel>
                                <TabPanel>Content 3</TabPanel>
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
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { UserIcon } from "@heroicons/vue/outline";
import FormSpan from '@/Shared/Layouts/Tabs/FormSpan.vue';
import FormPhoto from '@/Shared/Layouts/Tabs/FormPhoto.vue';
import FormDescription from '@/Shared/Layouts/Tabs/FormDescription.vue';
</script>
