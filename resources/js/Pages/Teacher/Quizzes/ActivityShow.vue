<template>
    <user-layout title="Activities" no-content :showSideNav="false">
        <template #content>
            <div class="px-4 sm:px-6 lg:px-8">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                        <h1 class="text-xl font-semibold text-gray-900">Summary</h1>
                        <p class="mt-2 text-sm text-gray-700">Name: {{user_score.name}}, the final score is {{user_score.pivot.scores}} Total</p>
                    </div>
                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button type="button"
                            class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Back</button>
                    </div>
                </div>

                <div v-if="form.selected_question" class="my-4 bg-white shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 flex space-x-2"><span><PlusCircleIcon class="h-5 w-5 leading-3 text-indigo-500"/></span>Add Points</h3>
                        <div class="mt-2 max-w-xl text-sm text-gray-500">
                            <p v-html="selected_number"></p>
                        </div>
                        <form @submit.prevent="submit" class="mt-3 sm:flex sm:items-center">
                            <div class="w-full sm:max-w-xs">
                                <label for="email" class="sr-only">Email</label>
                                <input type="number"
                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="points" v-model="form.points_value" />
                            </div>
                            <button type="submit"
                                class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Save</button>
                        </form>
                        <p class="text-xs pl-1 text-gray-500">this is for essay type, you can decide points</p>

                    </div>
                </div>
                <div class="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0" v-if="answers.length  != 0">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th v-for="(item, index) in removeId" :key="item" scope="col"
                                    :class="[index == 0 ? 'text-left sm:pr-6 md:pr-0' : 'text-right sm:table-cell','py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900']"
                                    >
                                    {{item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, key) in answers" :key="item" class="border-b border-gray-200">
                              <td v-for="(col, index) in Object.values(item)" :key="col" v-show="index != 0" :class="[index == 1 ? 'text-left':'text-right', 'hidden py-4 px-3 w-2 text-sm text-gray-500 sm:table-cell']">
                                <template v-if="getObjectKey(props.answers[key], col) == 'is_correct'">
                                    <template v-if="col == 'not graded'">
                                        <button @click.prevent="form.selected_question = item.id; selected_number = item.question" class="text-indigo-500 font-semibold hover:text-indigo-700">Click to Add points</button>
                                    </template>
                                    <span v-else>{{col}}</span>
                                </template>
                                <template v-else-if="getObjectKey(props.answers[key], col) == 'question'">
                                  <span v-html="`${key+1}.${col}`"></span>
                                </template>
                                <span v-else v-html="col"></span>
                              </td>
                            </tr>
                            <!-- <tr v-for="project in projects" :key="project.id" class="border-b border-gray-200">
                                <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                    <div class="font-medium text-gray-900">{{ project.name }}</div>
                                    <div class="mt-0.5 text-gray-500 sm:hidden">{{ project.hours }} hours at {{
                                            project.rate
                                    }}</div>
                                </td>
                                <td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">{{
                                        project.hours
                                }}</td>
                                <td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">{{
                                        project.rate
                                }}</td>
                                <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">{{
                                        project.price
                                }}</td>
                            </tr> -->
                        </tbody>
                    </table>
                    </div>
                </div>
        </template>
    </user-layout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import InnerTable from '@/Custom/List/Tables/SortableTable/InnerTable.vue';
import { computed } from "@vue/runtime-core";
import { useForm } from "@inertiajs/inertia-vue3";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import {ref} from '@vue/reactivity'
import moment from 'moment'


const selected_number = ref()

const props = defineProps({
    answers: Object,
    user_score: Object,
    activity_id: [Number, String],
    user_id: [Number, String]
});

const form = useForm({
    points_value: '',
    selected_question: '',
    activity_id: props.activity_id,
    user_id: props.user_id
})

let submit = () => {
    form.post(route('add-points'), {
        onBefore: () => confirm('Are you sure about this? if you submit it will not change it'),
        onSuccess: () => form.reset('selected_question', 'points_value'),
        onFinish: () => form.reset('selected_question', 'points_value'),
    })
}

const removeId = computed(() => {
    let arr =  Object.keys(props.answers[0]);
    arr.shift();
    return arr;
});

const getObjectKey = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value)
};
</script>
