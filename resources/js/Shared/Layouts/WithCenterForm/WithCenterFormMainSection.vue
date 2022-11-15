<template>
  <main
    class="max-w-xl mx-auto pt-2 pb-4 lg:pb-8 bg-white overflow-hidden shadow sm:rounded-lg"
  >
    <slot name="header"></slot>
    <div class="px-4 py-5 sm:p-6">
      <div class="space-y-6 pt-2">
        <div>
          <div class="flex justify-between">
            <div v-if="props.user" class="text-gray-800">
              <h1 class="text-xl leading-tight font-bold">
                {{ Abbreviations }}. {{ labelName }},
              </h1>
              <p class="font-tight text-sm flex pl-2">
                <IdentificationIcon class="h-4 w-4 text-gray-600" />
                {{ props.user.email }} | {{ moment(props.user.created_at).format("LL") }}
              </p>
            </div>
            <div v-else>
              <h1 class="text-lg leading-6 font-bold text-gray-900">{{ label }}</h1>
            </div>
            <slot name="right"></slot>
          </div>

          <p :class="props.user ? 'mt-3' : 'mt-1'" class="mt-3 text-sm text-gray-500">
            {{ props.description }}
          </p>
        </div>
        <slot name="content"></slot>
      </div>
    </div>
  </main>
</template>
<script setup>
import { IdentificationIcon } from "@heroicons/vue/solid";
import { computed } from "@vue/runtime-core";
import moment from "moment";

const props = defineProps({
  user: {
    type: Object,
    default: () => null,
  },
  label: {
    type: String,
    default: () => "No label",
  },
  description: String,
});

const Abbreviations = computed(() => {
  let gender = props.user.gender;
  if (gender == "male") return "Mr";
  else return "Ms";
});

const labelName = computed(() => {
  let name = props.user.name;
  if (name > 17) return name.substring(0, 17) + "...";
  else return name;
});
</script>
