<template>
  <user-layout no-content title="Promote Teacher">
    <template #content>
      <center-form-main-section
        :user="props.user"
        description="Required to fill up all of requirements for teachers information..."
      >
        <template #right>
          <Link :href="route('manage-user.index')">
            <ArrowLeftIcon class="h-5 w-5 text-gray-700 hover:text-gray-600" />
          </Link>
        </template>
        <template #content>
          <form class="space-y-2">
            <div class="mt-1">
              <dropdown-simple label="subjects" :options="subjects" />
            </div>
            <div class="flex justify-end pt-8">
              <button type="submit">Add as Teacher</button>
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
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import { Link } from "@inertiajs/inertia-vue3";
import DropdownSimple from "@/Custom/Forms/InputMenus/SimpleCustom.vue";

const props = defineProps({
  user: Object,
});
const subjects = [{ id: 1, name: "English" }];
</script>
