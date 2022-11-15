<script setup>
import UserLayout from '@/Layouts/UserLayout.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { CollectionIcon } from '@heroicons/vue/solid'
import SimpleDropdown from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import FormSlot from '@/Shared/Layouts/Tabs/FormSlot.vue'
import { useForm } from '@inertiajs/inertia-vue3';
import JetButton from '@/Components/Button.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";



defineProps({
    academic_year: Object
})
const form = useForm({
    from_ay: '',
    to_ay: '',
    selected: []
})
const filtering = [
    { title: 'Section', description: 'copying all year level or section on previous academic where you selected.', value: 'section' },
    { title: 'Student', description: 'copying all student on previous academic where you selected.', value: 'student' },
];

let submit = () => {
    form.post(route('sync-ay.store'), {
        preserveScroll: true,
    })
}
</script>
<template>
    <user-layout title="Year Level" no-content :showSideNav="false">
        <template #content>
            <main class="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <TabGroup vertical>
                        <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                            <nav class="space-y-1">
                                <TabList>
                                    <Tab as="template" v-slot="{ selected }">
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
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <!-- list of year the we created -->
                                <TabPanel>
                                    <form @submit.prevent="submit">
                                        <form-description title="Migrating Records"
                                            description="these are all of the records for Academic year, set up a migrating records"
                                            haveFooter>
                                            <template #main>
                                                <template v-if="academic_year.length != 0">
                                                    <JetValidationErrors class="mb-4 pt-8" />
                                                    <with-dismiss v-if="$page.props.flash.success" :label="$page.props.flash.success" />
                                                    <form-slot label="From Academic Year">
                                                        <template #main>
                                                            <div class="mt-6 grid grid-cols-4 gap-6 pb-4">
                                                                <div>
                                                                    <simple-dropdown :options="academic_year"
                                                                    v-model="form.from_ay"
                                                                    placeholder="From academic year" />
                                                                    <span class="pl-2 text-sm" v-html="form.from_ay ?  Number(form.from_ay) + 1 : ''"></span>
                                                                </div>
                                                                <div>
                                                                    <simple-dropdown :options="academic_year"
                                                                    v-model="form.to_ay" placeholder="To academic year" />
                                                                    <span class="pl-2 text-sm" v-html="form.to_ay ?  Number(form.to_ay) + 1 : ''"></span>
                                                                </div>

                                                            </div>
                                                        </template>
                                                    </form-slot>
                                                    <fieldset class="border-t border-b border-gray-200">
                                                        <legend class="sr-only">Notifications</legend>
                                                        <div class="divide-y divide-gray-200" v-for="filter in filtering"
                                                            :key="filter">
                                                            <div class="relative flex items-start py-4">
                                                                <div class="min-w-0 flex-1 text-sm">
                                                                    <label for="comments"
                                                                        class="font-medium text-gray-700">{{ filter.title }}</label>
                                                                    <p id="comments-description" class="text-gray-500">
                                                                        {{ filter.description }}</p>
                                                                </div>
                                                                <div class="ml-3 flex items-center h-5">
                                                                    <input type="checkbox" v-model="form.selected"
                                                                        :id="filter.value" :name="filter.value"
                                                                        :value="filter.value"
                                                                        class="focus:ring-jvgreen h-4 w-4 text-jvdgreen border-gray-300 rounded" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </template>
                                                <WithDashBorder v-else label="No Academic year"/>
                                            </template>
                                            <template #footer>
                                                <JetButton v-if="academic_year.length != 0" class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                    :disabled="form.processing">Migrate</JetButton>
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
