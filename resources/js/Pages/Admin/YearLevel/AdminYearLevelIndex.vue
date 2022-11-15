<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import FormDescription from "@/Shared/Layouts/Tabs/FormDescription.vue";
import { CollectionIcon, PlusIcon, ExclamationIcon } from '@heroicons/vue/outline'
import FormInput from '@/Shared/Layouts/Tabs/FormInput.vue';
import FormSlot from '@/Shared/Layouts/Tabs/FormSlot.vue';
import SimpleCustom from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import JetButton from '@/Components/Button.vue';
import JetValidationErrors from "@/Components/ValidationErrors.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import WithDismiss from '@/Custom/Feedback/Alert/WithDismiss.vue';
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import RadioCard from '@/Custom/Forms/RadioGroups/RadioCard.vue';
import Paginate from '@/Shared/Paginate/Paginate.vue';
import WithDashBorder from "@/Custom/Feedback/EmptyStates/WithDashBorder.vue";
import { computed, ref } from "@vue/runtime-core";
import Toggle from '@/Custom/Forms/Toggle/WithLeftLabelAndDescription.vue';

const props = defineProps({
    yearlevel: Object,
    academicyear: Object
});
const getLastAcademicyear = props.academicyear.findLast((e) => e)
const enabled = ref(true)


const type = [
    { id: 1, name: 'Elementary' },
    { id: 2, name: 'Junior High' },
    { id: 2, name: 'Senior High' },
    { id: 3, name: 'College' }
];
const form = useForm({
    yearlevel: '',
    academicYear: getLastAcademicyear.id,
    type: null
});

let submit = () => {
    form.post(route('yearlevel.store'), {
        preserveScroll: true,
        preserveState: false,
        onSuccess: () => form.reset('academicYear', 'type', 'yearlevel'),
        onFinish: () => form.reset('academicYear', 'type', 'yearlevel'),
    });
};

</script>
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
                                            Year Level
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
                                            Add Year Level
                                        </button>
                                    </Tab>
                                </TabList>
                            </nav>
                        </aside>
                        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <TabPanels>
                                <!-- list of year the we created -->
                                <TabPanel>
                                    <form-description title="List of Year Level"
                                        description="all of the table section display all of the record year level that admins created..."
                                        :havFooter="false">
                                        <template #main>
                                            <div class="px-4 sm:px-6 lg:px-8">
                                                <div class="mt-8 flex flex-col">
                                                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div
                                                            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                            <inner-table v-if="props.yearlevel.data.length != 0"
                                                                :items="props.yearlevel.data"
                                                                dash_error="No Record, Create new Year Level"
                                                                edit_link="yearlevel.edit" :post="false" />
                                                            <WithDashBorder v-else label="No Year level" />
                                                        </div>
                                                        <Paginate v-if="props.yearlevel.data != 0" class="mt-4" :links="props.yearlevel.links" :from="props.yearlevel.from"
                                                                    :to="props.yearlevel.to" :result="props.yearlevel.result" :responsiveNext="props.yearlevel.next_page_url"
                                                                    :responsivePrevious="props.yearlevel.first_page_url" />
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
                                            :haveFooter="props.academicyear.length !== 0">
                                            <template #main>
                                                <JetValidationErrors class="mb-4 pt-8" />
                                                <WithAccentBorder v-if="props.academicyear.length == 0"
                                                    label="No Academic Year please Add academic year" />

                                                <WithDismiss class="mb-4 mt-8" v-if="$page.props.flash.success"
                                                    :label="$page.props.flash.success" />
                                                <span v-if="$page.props.flash.warning"
                                                    class="bg-yellow-300 block py-2 pl-4 rounded-lg text-gray-700 mt-2 font-semibold text-sm">
                                                    <ExclamationIcon class="h-4 w-4 inline" />
                                                    &nbsp;{{$page.props.flash.warning}}
                                                </span>
                                                <div class="mt-6 grid grid-cols-4 gap-6 pb-4">
                                                    <!-- year level field -->

                                                    <form-input label="Year Level" v-model="form.yearlevel"/>
                                                    <form-slot label="Type">
                                                        <template #main>
                                                            <simple-custom :options="type" v-model="form.type" />
                                                        </template>
                                                    </form-slot>
                                                </div>
                                                <toggle class="py-2" label="Allow Select Academic year" body="do you want create new year level on a previous academic year?" v-model="enabled"/>
                                                <radio-card label="School Year" v-if="props.academicyear != 0" :items="props.academicyear"
                                                    v-model="form.academicYear" :isDisabled="enabled"/>
                                                <with-dash-border v-else label="No School year" />
                                            </template>
                                            <template #footer>
                                                <template v-if="props.academicyear != 0">
                                                    <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }"
                                                        :disabled="form.processing">Add</JetButton>
                                                </template>
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

