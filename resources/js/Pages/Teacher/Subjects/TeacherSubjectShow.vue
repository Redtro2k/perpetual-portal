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
                                            ? 'bg-gray-50 text-jvgreen hover:bg-white'
                                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
                                        ]">
                                            <CollectionIcon :class="[
                                              selected
                                                ? 'text-jvgreen'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                              'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            ]" />
                                            Handle Subjects
                                        </button>
                                    </Tab>

                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form-description title="Handle Subjects"
                                        description="these are all you handle subjects that assigning by the admins"
                                        :havFooter="false">
                                        <template #main>
                                            <template v-if="props.handle_subjects.length != 0">
                                                <template v-for="handle in props.handle_subjects" :key="handle">
                                                    <div class="col-span-4 sm:col-span-2 py-4">
                                                        <label class="block text-sm font-semibold text-gray-700">{{handle.name}}</label>
                                                        <inner-table :items="handle.subjects" edit_link="subject.index" post />
                                                    </div>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <WithDashBorder label="No assigning Section" />
                                            </template>
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
import { CollectionIcon, PlusIcon } from '@heroicons/vue/outline'
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import { computed, ref, watch } from "@vue/runtime-core";
const props = defineProps({
    handle_subjects: Object
})

</script>
