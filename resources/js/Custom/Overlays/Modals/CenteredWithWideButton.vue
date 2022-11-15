<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-3 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-3"
          >
            <div>
              <div class="mt-1">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-semibold text-gray-900"
                >
                  {{ Abbreviations }}. {{ labelName }}
                </DialogTitle>

                <p class="font-tight text-sm flex pl-2">
                  <IdentificationIcon class="h-4 w-4 text-gray-600" />
                  {{ props.show.email }} |
                  {{ moment(props.show.created_at).format("LL") }}
                </p>
                <div class="space-y-6 pt-2 h-80">
                  <div class="mt-1">
                <warning-alert v-if="$page.props.flash.warning" :label="$page.props.flash.warning"/>

                    <img
                      :src="props.show.profile_photo_url"
                      class="inline-block h-20 w-20 rounded-full p-2"
                    />
                    {{ hasRoles }}
                  </div>
                  <div class="mt-1">
                    <dropdown-simple
                      v-model="form.roles"
                      label="Approve as"
                      :options="props.roles"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
            >
              <Link
                :href="route('manage-user.store')"
                method="post"
                :data="form"
                as="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                preserve-state
              >
                Update
              </Link>
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                @click="closeModal"
                ref="cancelButtonRef"
              >
                Cancel
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, watch } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { IdentificationIcon } from "@heroicons/vue/outline";
import { Inertia } from "@inertiajs/inertia";
import moment from "moment";
import DropdownSimple from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import WarningAlert from "@/Custom/FeedBack/Alert/WithDescription.vue";


const props = defineProps({
  show: Object,
  roles: Object,
});
const open = computed(() => !!props.show);
const closeModal = () => {
  Inertia.get(route("manage-user.index"), {}, {
  });
};
watch(
  () => props.show,
  (show) => {
    if (show) {
      form.id = props.show.id;
    }
    console.log(form);
  }
);

const form = useForm({
  id: props.show?.id,
  roles: null,
});

const hasRoles = computed(() => {
  let role = props.show.roles[0];
  return !role ? "No Roles" : role.name;
});

const Abbreviations = computed(() => {
  let gender = props.show.gender;
  if (gender == "male") return "Mr";
  else return "Ms";
});

const labelName = computed(() => {
  let name = props.show.name;
  if (name > 17) return name.substring(0, 17) + "...";
  else return name;
});
</script>
