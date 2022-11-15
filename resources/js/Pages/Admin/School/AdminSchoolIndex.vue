<template>
  <user-layout title="Schools" no-content>
    <template #content>
      <main>
        <div class="px-6">
          <with-dismiss
            v-if="$page.props.flash.success"
            :label="$page.props.flash.success"
          />
          <with-accent-border
            v-if="$page.props.flash.warning"
            :label="$page.props.flash.warning"
          />
        </div>
        <div
          class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
        >
          <div class="flex items-center space-x-5">
            <div class="flex-shrink-0">
              <div class="relative">
                <img class="h-16 w-16 rounded-full" :src="props.school_image" alt="" />
                <span
                  class="absolute inset-0 shadow-inner rounded-full"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">{{ props.school.name }}</h1>
              <p class="text-sm font-medium text-gray-500">
                Establish on
                <time class="text-gray-900 font-semibold" :datetime="diffForHumans">{{
                  diffForHumans
                }}</time>
              </p>
            </div>
          </div>
          <div
            class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
          >
            <Link
              v-if="$page.props.can.manage_super_admin"
              :href="route('school.edit', props.school.id)"
              class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-jvgreen"
              >Edit</Link
            >
            <Link
              v-if="$page.props.can.manage_super_admin"
              :href="route('school.destroy', props.school.id)"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500"
              method="DELETE"
              as="button"
              type="button"
              >Remove School</Link
            >
          </div>
        </div>

        <div
          class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
        >
          <div class="space-y-6 lg:col-start-1 lg:col-span-2">
            <section aria-labelledby="applicant-information-title">
              <div class="bg-white shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="applicant-information-title"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    School Information
                  </h2>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    the full details of our school registered by the administrator
                  </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-2">
                      <dt class="text-sm font-medium text-gray-500">About</dt>
                      <dd class="mt-1 text-sm text-gray-900">{{ stripDescription }}</dd>
                      <!-- <dd class="mt-1 text-sm text-gray-900">{{props.school.description}}</dd> -->
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Address</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ props.school.address }}
                      </dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Contact Number</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ props.school.contact }}
                      </dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Region</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ props.school.region }}
                      </dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Province</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ props.school.province }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
          <section v-if="$page.props.can.manage_super_admin" aria-labelledby="timeline-title" class="lg:col-start-3 lg:col-span-1">
            <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
                Activity
              </h2>

              <!-- Activity Feed -->
              <div class="mt-6 flow-root">
                <ul role="list" class="-mb-8">
                  <li v-for="item in props.activity" :key="item">
                    <div class="relative pb-8">
                      <div class="relative flex space-x-3">
                        <div>
                          <span
                            :class="[
                              eventType(item.event).bgColorClass,
                              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                            ]"
                          >
                            <component
                              :is="eventType(item.event).icon"
                              class="w-5 h-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-500">
                              {{ item.description }}
                              <!-- <a href="#" class="font-medium text-gray-900">{{ item.target }}</a> -->
                            </p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time :datetime="item.updated_at">{{
                              moment(item.updated_at).format("ll")

                   }}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6 flex flex-col justify-stretch">
                <button
                  type="button"
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"
                >
                  View Logs
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </template>
  </user-layout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import WithDismiss from "@/Custom/Feedback/Alert/WithDismiss.vue";
import WithAccentBorder from "@/Custom/Feedback/Alert/WithAccentBorder.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { computed } from "@vue/runtime-core";
import moment from "moment";
import { PlusIcon, PencilAltIcon, XIcon } from "@heroicons/vue/solid";
import phil from 'phil-reg-prov-mun-brgy'

const props = defineProps({
  school: Object,
  school_image: String,
  activity: Array,
});

const diffForHumans = computed(() => {
  return moment(props.school.created_at).format("LL");
});

const stripDescription = computed(() => {
  return props.school.description
    .toString()
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/\&nbsp;/g, "");
});

const options = [
  { name: "Graph API", initials: "GA", href: "#", members: 16, bgColor: "bg-pink-600" },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  { name: "Templates", initials: "T", href: "#", members: 16, bgColor: "bg-yellow-500" },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

const eventType = (value) => {
  if (value == "created") {
    return { icon: PlusIcon, bgColorClass: "bg-green-500" };
  } else if (value == "updated") {
    return { icon: PencilAltIcon, bgColorClass: "bg-blue-400" };
  } else if (value == "deleted") {
    return { icon: XIcon, bgColorClass: "bg-red-500" };
  }
};
</script>
