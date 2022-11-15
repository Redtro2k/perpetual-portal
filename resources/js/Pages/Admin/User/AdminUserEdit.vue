<template>
  <user-layout no-content title="Manage User">
    <template #content>
      <center-form-main-section
        :user="props.users"
        description="edit roles, or some other information about information"
      >
        <template #right>
          <Link :href="route('manage-user.index')">
            <ArrowLeftIcon class="h-5 w-5 text-gray-700 hover:text-gray-600" />
          </Link>
        </template>
        <template #content>
          <form class="space-x-2">
            <div class="mt-1">
              <dropdown-simple label="Approve as" :options="roles" />
            </div>
            <div class="mt-1">
              <label class="block text-sm font-medium text-gray-700">
                promotted by
              </label>
              <div class="pt-1">
                <span class="pr-3 bg-jvgreen text-white rounded-r-sm">
                  <p class="bg-black px-2 inline font-semibold">#</p>
                  Superadministrator
                </span>
              </div>
            </div>
            <div class="flex justify-end pt-8">
              <button
                type="submit"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"
              >
                Create School
              </button>
            </div>
          </form>
        </template>
      </center-form-main-section>
    </template>
  </user-layout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import CenterFormMainSection from "@/Shared/Layouts/WithCenterForm/WithCenterFormMainSection.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import DropdownSimple from "@/Custom/Forms/InputMenus/SimpleCustom.vue";


const roles = [
  { id: 1, name: "administrator" },
  { id: 2, name: "Teacher" },
  { id: 3, name: "Student" },
];
const props = defineProps({
  users: Object,
});
</script>
