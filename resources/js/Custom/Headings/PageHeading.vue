<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{{label}}</h2>
        <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div v-for="opt in props.option" :key="opt" class="mt-2 flex items-center text-sm text-gray-500">
            <component :is="opt.icon" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            {{opt.label}}
          </div>
        </div>
      </div>
      <div v-for="(m, index) in more" :key="m.index" class="mt-5 flex lg:mt-0 lg:ml-4">
        <span :class="[index == 0 ? 'ml-3': '','hidden sm:block']">
          <Link :href="m.href" :method="m.method" as="button" type="button" :class="[m.isPrimary ? [m.isDelete ? 'bg-red-600 hover:bg-red-700' : 'bg-jvgreen hover:bg-jvgreen','border border-transparent text-white'] : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50' , 'inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2', [m.isDelete ? 'focus:ring-red-500' : 'focus:ring-jvgreen']]">
            <component :is="m.icon" :class="[m.isPrimary ? 'text-white' : 'text-gray-500','-ml-1 mr-2 h-5 w-5']" aria-hidden="true" />
            {{m.label}}
          </Link>
        </span>

        <!-- Dropdown -->
    </div>
    <Menu v-show="more != null" as="span" class="relative sm:hidden">
      <MenuButton class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen">
        More
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
      </MenuButton>

      <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="z-40 origin-top-left absolute left-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem v-for="m in props.more" :key="m" v-slot="{ active }">
            <Link :href="m.href" :class="[active ? 'bg-gray-100' : '', 'flex space-x-2 px-4 py-2 text-sm text-gray-700']">
                <component :is="m.icon" class="mr-2 h-5 w-5 text-gray-500"/>
                {{m.label}}</Link>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
    </div>
  </template>

  <script setup>
  import {
    ChevronDownIcon
  } from '@heroicons/vue/solid'
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Link } from '@inertiajs/inertia-vue3'
  const props = defineProps({
    label: String,
    option: Object,
    testing: String,
    more: Object
});

</script>
