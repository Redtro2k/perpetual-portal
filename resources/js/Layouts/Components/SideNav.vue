<template>
  <post-area :show="showModal" @close.once="showModal = false" />
  <Popover as="template" v-slot="{ open }">
    <header
      :class="[
        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
        'bg-white shadow-sm lg:static lg:overflow-y-visible',
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
          <div class="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
            <div class="flex-shrink-0 flex items-center">
              <Link :href="route('dashboard')">
                <img
                  class="block p-2 h-20 w-20"
                  src="/storage/CutieImages/PHAPI_logo.png"
                  alt="Workflow"
                />
              </Link>
            </div>
          </div>
          <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div
              class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0"
            >
              <div class="w-full">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                  >
                    <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-jvgreen focus:border-jvgreen sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
            <!-- Mobile menu button -->
            <PopoverButton
              class="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jvgreen"
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
            <Link
              :href="route('find-people')"
              class="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"
            >
              <span class="sr-only">View notifications</span>
              <MailIcon class="h-6 w-6" aria-hidden="true" />
            </Link>

            <!-- Profile dropdown -->
            <Menu as="div" class="flex-shrink-0 relative ml-5">
              <div>
                <MenuButton
                  class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="$page.props.user.profile_photo_url"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                >
                  <MenuItem
                    v-once
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <Link
                      :href="item.href"
                      :method="item.method"
                      :as="item.as"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block py-2 px-4 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</Link
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
            <button
              @click="showModal = true"
              v-if="$page.props.can.manage_super_admin"
              class="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"
            >
              New Post
            </button>
          </div>
        </div>
      </div>

      <PopoverPanel as="nav" class="lg:hidden" aria-label="Global">
        <div class="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
          <Link
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :aria-current="item.current ? 'page' : undefined"
            :class="[
              item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
              'block rounded-md py-2 px-3 text-base font-medium',
            ]"
          >
            <div class="flex justify-between">
              <span class="truncate">
                {{ item.name }}
              </span>
              <span
                v-show="item.notify"
                class="ml-2 inline-flex items-center px-2 rounded text-xs font-medium bg-indigo-100 text-jvgreen"
              >
                <svg
                  class="h-2 w-2 text-jvgreen"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                New
              </span>
            </div>
          </Link>
        </div>
        <div class="border-t border-gray-200 pt-4">
          <div class="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                :src="$page.props.user.profile_photo_url"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">
                {{ $page.props.user.name }}
              </div>
              <div class="text-sm font-medium text-gray-500">
                {{ $page.props.user.email }}
              </div>
            </div>
            <Link
              class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"
            >
              <span class="sr-only">View notifications</span>
              <MailIcon class="h-6 w-6" aria-hidden="true" />
        </Link>
          </div>
          <div class="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
            <Link
              v-for="item in userNavigation"
              :method="item.method"
              :key="item.name"
              :as="item.as"
              :href="item.href"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >{{ item.name }}</Link
            >
          </div>
        </div>

        <div class="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
          <button
            v-if="$page.props.can.manage_super_admin"
            @click="open = true"
            class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen"
          >
            New Post
          </button>
        </div>
      </PopoverPanel>
    </header>
  </Popover>
</template>
<script setup>
import { defineAsyncComponent, ref } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import { MenuIcon, XIcon, MailIcon } from "@heroicons/vue/outline";
import loading from "@/Custom/Loading.vue";
defineProps({
  navigation: Object,
});

const PostArea = defineAsyncComponent({
  loader: () => import("@/Pages/Users/NewsFeeds/Create.vue"),
  delay: 200,
  loadingComponent: loading,
  timeout: 3000,
  errorComponent: "error...",
});
const showModal = ref(false);
const userNavigation = [
  { name: "Your Profile", href: `${route("profile.show")}` },
  { name: "Settings", href: "#" },
  {
    name: "Sign out",
    href: `${route("logout")}`,
    method: "post",
    as: "button",
    type: "button",
  },
];
</script>
