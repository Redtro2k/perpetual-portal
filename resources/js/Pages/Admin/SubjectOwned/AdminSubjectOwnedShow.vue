<script setup>
import UserLayout from '@/Layouts/UserLayout.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import { CollectionIcon } from '@heroicons/vue/solid'
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
const props = defineProps({
    owned_subject: Object,
    yearlevel: Object
})
</script>
<template>
    <user-layout title="Owned Subjects" no-content :showSideNav="false">
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
                                            Owned Section
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <TabPanel>
                                    <form-description title="Owned Section"
                                        description="these are all owned section that added">
                                        <template #main>
                                            <WithAccentBorder v-if="$page.props.flash.warning"
                                                :label="$page.props.flash.warning" />
                                            <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success"
                                                :label="$page.props.flash.success" />
                                            <template v-if="props.owned_subject.data.length != 0">
                                                <inner-table :items="props.owned_subject.data"
                                                    edit_link="owned-subject.destroy"
                                                    :isDeleteData="{current_yearlevel: props.yearlevel.id}" post />
                                                <Paginate v-if="props.owned_subject.data != 0" class="mt-4"
                                                    :links="props.owned_subject.links" :from="props.owned_subject.from"
                                                    :to="props.owned_subject.to" :result="props.owned_subject.result"
                                                    :responsiveNext="props.owned_subject.next_page_url"
                                                    :responsivePrevious="props.owned_subject.first_page_url" />
                                            </template>
                                            <template v-else>
                                                <div class="py-6">
                                                    <with-dash-border label="No Available Section, Please create one" />
                                                </div>
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
