<template>
    <UserLayout title="Year Level" no-content :showSideNav="false">
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
                                            List Subjects
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
                                            Add Subjects
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <!-- list of year the we created -->
                                <TabPanel>
                                    <form-description :title="`${header}`"
                                        description="all of the table section display all of the record Subjects that admins added..."
                                        :havFooter="false">
                                        <template #main>

                                            <div class="px-4 sm:px-6 lg:px-8">
                                                <div class="mt-8 flex flex-col">
                                                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div
                                                            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <inner-table :items="props.subjects" dash_error="No Record, Add New Subject"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </form-description>
                                </TabPanel>
                                <!-- add year level -->
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Year Level" description="create a year level ..."
                                            haveFooter>
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success"
                                                    :label="$page.props.flash.success" />
                                                <div class="mt-6 grid grid-cols-4 gap-6 h-48">
                                                    <!-- year level field -->
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
    </UserLayout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { CollectionIcon, PlusIcon } from '@heroicons/vue/outline'
import SimpleCustom from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import JetButton from '@/Components/Button.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import { computed } from "@vue/runtime-core";
const people = [
    { level: 'Grade 1', type: 'Kinder' },
];
const props = defineProps({
    subjects: Object,
    selected_year_level: String

});
const form = useForm({
    title: '',

});
let submit = () => {

};
const header = computed(() => {
    return `${props.selected_year_level}'s Subjects'`;
});
</script>
