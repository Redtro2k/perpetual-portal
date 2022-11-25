<template>
<Head title="Find People" />
    <div class="h-full flex">
        <side-navigation isActive="Find"/>
        <!-- Mobile menu -->
        <TransitionRoot as="template" :show="mobileMenuOpen">
            <Dialog as="div" class="fixed inset-0 z-40 flex md:hidden" @close="mobileMenuOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </TransitionChild>
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                    enter-from="-translate-x-full" enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                    leave-to="-translate-x-full">
                    <div class="relative max-w-xs w-full bg-jvdgreen pt-5 pb-4 flex-1 flex flex-col">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                            enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100"
                            leave-to="opacity-0">
                            <div class="absolute top-1 right-0 -mr-14 p-1">
                                <button type="button"
                                    class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                                    @click="mobileMenuOpen = false">
                                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                    <span class="sr-only">Close sidebar</span>
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex-shrink-0 px-4 flex items-center">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                                alt="Workflow" />
                        </div>
                        <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                            <nav class="h-full flex flex-col">
                                <div class="space-y-1">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        :class="[item.current ? 'bg-jvdgreen text-white' : 'text-indigo-100 hover:bg-jvdgreen hover:text-white', 'group py-2 px-3 rounded-md flex items-center text-sm font-medium']"
                                        :aria-current="item.current ? 'page' : undefined">
                                        <component :is="item.icon"
                                            :class="[item.current ? 'text-white' : 'text-jvgreen group-hover:text-white', 'mr-3 h-6 w-6']"
                                            aria-hidden="true" />
                                        <span>{{ item.name }}</span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </TransitionChild>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Content area -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <header class="w-full">
                <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                    <button type="button"
                        class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open sidebar</span>
                        <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div class="flex-1 flex justify-between px-4 sm:px-6">
                        <div class="flex-1 flex">
                            <form class="w-full flex md:ml-0" action="#" method="GET">
                                <label for="desktop-search-field" class="sr-only">Search People</label>
                                <label for="mobile-search-field" class="sr-only">Search People</label>
                                <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                        <SearchIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input v-model="search"
                                        class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                                        placeholder="Search" type="search" />
                                    <input v-model="search"
                                        class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                                        placeholder="Search People" type="search" />
                                </div>
                            </form>
                        </div>
                        <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative flex-shrink-0">
                                <div>
                                    <MenuButton
                                        class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full"
                                            :src="$page.props.user.profile_photo_url"
                                            alt="" />
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <a :href="item.href"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
                                                    item.name
                                            }}</a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main content -->
            <div class="flex-1 flex items-stretch overflow-hidden">
                <main class="flex-1 overflow-y-auto">
                    <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex">
                            <h1 class="flex-1 text-2xl font-bold text-gray-900">Find People</h1>
                            <div class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                                <button type="button"
                                    class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jvgreen">
                                    <ViewListIcon class="h-5 w-5" aria-hidden="true" />
                                    <span class="sr-only">Use list view</span>
                                </button>
                                <button type="button"
                                    class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jvgreen">
                                    <ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
                                    <span class="sr-only">Use grid view</span>
                                </button>
                            </div>
                        </div>

                        <!-- Tabs -->
                        <div class="mt-3 sm:mt-2">
                            <div class="sm:hidden">
                                <label for="tabs" class="sr-only">Select a tab</label>
                                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                                <select id="tabs" name="tabs"
                                    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm rounded-md">
                                    <option selected="">Recently Viewed</option>
                                </select>
                            </div>
                            <div class="hidden sm:block">
                                <div class="flex items-center border-b border-gray-200">
                                    <nav class="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
                                        <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                                            :aria-current="tab.current ? 'page' : undefined"
                                            :class="[tab.current ? 'border-jvgreen text-jvdgreen' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
                                            {{ tab.name }}
                                        </a>
                                    </nav>
                                    <div class="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
                                        <button type="button"
                                            class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jvgreen">
                                            <ViewListIcon class="h-5 w-5" aria-hidden="true" />
                                            <span class="sr-only">Use list view</span>
                                        </button>
                                        <button type="button"
                                            class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jvgreen">
                                            <ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
                                            <span class="sr-only">Use grid view</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Gallery -->
                        <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
                            <h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
                            <ul role="list"
                                class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                <li v-for="user in props.users.data" :key="user.name" class="relative">
                                    <Link :href="route('find-people', user.id)">
                                    <div
                                        :class="[props.current_user != null && props.current_user.id == user.id ? 'ring-2 ring-offset-2 ring-jvgreen' : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-jvgreen', 'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden']">
                                        <img :src="user.image" alt=""
                                            :class="[props.current_user != null && props.current_user.id == user.id ? '' : 'group-hover:opacity-75', 'object-cover pointer-events-none']" />
                                        <button type="button" class="absolute inset-0 focus:outline-none">
                                            <span class="sr-only">View details for {{ user.name }}</span>
                                        </button>
                                    </div>
                                    <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                                        {{ user.name }}</p>
                                    <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ user.roles
                                        }}</p>
                                    </Link>
                                </li>
                            </ul>
                            <Paginate v-show="users.data.length > 8" v-if="props.users.data.length != 0" class="mt-4"
                        :links="props.users.links"
                        :from="props.users.from"
                        :to="props.users.to"
                        :result="props.users.result"
                        :responsiveNext="props.users.next_page_url"
                        :responsivePrevious="props.users.first_page_url" />
                        </section>

                    </div>
                </main>

                <!-- Details sidebar -->
                <aside class="h-screen hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
                    <div v-show="props.current_user != null ? true : false" class="pb-16 space-y-6">
                        <div>
                            <div class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                                <img v-if="props.current_user != null" :src="props.current_user.profile_photo_url" alt="" class="object-cover" />
                            </div>
                            <div class="mt-4 flex items-start justify-between">
                                <div>
                                    <h2 v-if="props.current_user != null" class="text-lg font-medium text-gray-900"><span class="sr-only">Details for
                                        </span>{{ current_user.name }}</h2>
                                    <p class="text-sm font-medium text-gray-500" v-if="props.current_user != null">{{ current_user.roles[0].name }}</p>
                                </div>
                                <button type="button"
                                    class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-jvgreen">
                                    <HeartIcon class="h-6 w-6" aria-hidden="true" />
                                    <span class="sr-only">Favorite</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-medium text-gray-900">Information</h3>
                            <dl class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                                <div v-for="key in Object.keys(currentUser.information)" :key="key"
                                    class="py-3 flex justify-between text-sm font-medium">
                                    <dt class="text-gray-500">{{ key }}</dt>
                                    <dd class="text-gray-900">{{ currentUser.information[key] }}</dd>
                                </div>
                            </dl>
                        </div>
                        <!-- {find_user?}/{selected_user?} -->
                        <!-- ['find_user' => props.current_user.id, 'selected_user' => true]// -->
                        <div class="flex">
                            <Link :href="props.current_user != null ? `/create-conversation/${props.current_user.id}/${true}` : route('inbox')"  class="flex-1 text-center bg-jvdgreen py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen">Compose</Link>
                            <Link :href="route('find-people')" class="flex-1 ml-3 text-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen">Reset</Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import { ref, watch } from 'vue'
import debounce from "lodash/debounce";
import SideNavigation from '@/Layouts/Components/SideNavigation.vue';
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    CogIcon,
    CollectionIcon,
    HeartIcon,
    HomeIcon,
    MenuAlt2Icon,
    PhotographIcon,
    PlusSmIcon as PlusSmIconOutline,
    UserGroupIcon,
    ViewGridIcon as ViewGridIconOutline,
    XIcon,
    UsersIcon
} from '@heroicons/vue/outline'
import {
    PencilIcon,
    PlusSmIcon as PlusSmIconSolid,
    SearchIcon,
    ViewGridIcon as ViewGridIconSolid,
    ViewListIcon,
} from '@heroicons/vue/solid'
import { Inertia } from '@inertiajs/inertia';

const props = defineProps({
    users: Object,
    current_user: Object,
    filters: String
})
const userNavigation = [
    { name: 'Your profile', href: route("profile.show")},
]
const tabs = [
    { name: 'People', href: '/find-people', current: true },
]
const currentUser = {
    name: 'Darwin Llacuna',
    roles: 'teacher',
    photo:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    information: {
        Subject: 'June 8, 2020',
        Section: 'BT103',

    },

}
const mobileMenuOpen = ref(false)
const search = ref(props.filters)
watch(
    () => [search.value],
    debounce((value) => {
        Inertia.get(
            route('find-people'),
            {"filter[name]": value[0]},
            { replace: true, preserveState: true }
        )
    })
)
</script>
