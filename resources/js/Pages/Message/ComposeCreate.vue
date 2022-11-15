<template>
  <div class="h-screen flex flex-col">
    <!-- Top nav-->
   <TransitionRoot as="template" :show="open">
  <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div class="relative inline-block align-bottom bg-white rounded-lg pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <form v-if="props.selected_conversation.length == 0" @submit.prevent="submit">
                <div class="pb-14 grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-6">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Subject</label>
                        <input type="text" v-model="form.subject"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    </div>
                    <div class="col-span-6 sm:col-span-6">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">To</label>
                        <span
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                            <svg class="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                            </svg>
                            {{props.current_user.email}}
                        </span>
                    </div>
                    <div class="col-span-6 sm:col-span-6">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Content</label>
                        <QuillEditor v-model:content="form.content" contentType="html" placeholder="description about School"
                            toolbar="essential" theme="snow" />
                    </div>
                </div>
                <div class="pt-7 mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button type="submit"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Send</button>
                    <button v-show="props.params != null ? false : true" type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                        @click="open = false" ref="cancelButtonRef">Cancel</button>
                </div>
            </form>
            <form v-else @submit.prevent="replies">
                <div class="pb-14 grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-6">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">To</label>
                        <span
                            class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                            <svg class="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                            </svg>
                            {{props.current_user.email}}
                        </span>
                    </div>
                    <div class="col-span-6 sm:col-span-6">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Content</label>
                        <QuillEditor v-model:content="reply.content" contentType="html" placeholder="description about School"
                            toolbar="essential" theme="snow" />
                    </div>
                </div>
                <div class="pt-7 mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button type="submit"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Send</button>
                    <button v-show="props.params != null ? false : true" type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                        @click="open = false" ref="cancelButtonRef">Cancel</button>
                </div>
            </form>
            </div>
      </TransitionChild>
    </div>
  </Dialog>
</TransitionRoot>
    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <!-- Narrow sidebar-->
      <side-navigation isActive="Inbox" />
      <!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <section aria-labelledby="message-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last">
          <!-- Top section -->
          <div class="flex-shrink-0 bg-white border-b border-gray-200">
            <!-- Toolbar-->
            <div class="h-16 flex flex-col justify-center">
              <div class="px-4 sm:px-6 lg:px-8">
                <div class="py-3 flex justify-between">
                  <!-- Left buttons -->
                  <div>
                    <span class="relative z-0 inline-flex shadow-sm rounded-md sm:shadow-none sm:space-x-3">
                      <span class="inline-flex sm:shadow-sm">
                        <button type="button" :disabled="props.current_user == null" @click="open = true" :class="[props.current_user == null ? 'disabled:opacity-75': '', 'relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600']">
                          <AnnotationIcon class="mr-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Create Message</span>
                        </button>
                        <button type="button" disabled class="hidden disabled:opacity-75 sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <ReplyIcon class="mr-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Reply</span>
                        </button>
                        <button type="button" disabled class="hidden disabled:opacity-75 sm:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <PencilIcon class="mr-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Note</span>
                        </button>

                        <button type="button" disabled class="hidden disabled:opacity-75 sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <UserAddIcon class="mr-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Assign</span>
                        </button>
                      </span>

                      <span class="hidden lg:flex space-x-3">
                        <button type="button" disabled class="hidden disabled:opacity-75 sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <ArchiveIconSolid class="mr-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Archive</span>
                        </button>
                        <button type="button" disabled class="hidden disabled:opacity-75 sm:inline-flex -ml-px relative items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <FolderDownloadIcon class="mr-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Move</span>
                        </button>
                      </span>

                      <Menu as="span" class="-ml-px relative block sm:shadow-sm lg:hidden">
                        <div>
                          <MenuButton class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3">
                            <span class="sr-only sm:hidden">More</span>
                            <span class="hidden sm:inline">More</span>
                            <ChevronDownIcon class="h-5 w-5 text-gray-400 sm:ml-2 sm:-mr-1" aria-hidden="true" />
                          </MenuButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                          <MenuItems class="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div class="py-1">
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block sm:hidden px-4 py-2 text-sm']"> Note </a>
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block sm:hidden px-4 py-2 text-sm']"> Assign </a>
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"> Archive </a>
                              </MenuItem>
                              <MenuItem v-slot="{ active }">
                                <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"> Move </a>
                              </MenuItem>
                            </div>
                          </MenuItems>
                        </transition>
                      </Menu>
                    </span>
                  </div>

                  <!-- Right buttons -->
                  <nav aria-label="Pagination">
                    <span class="relative z-0 inline-flex shadow-sm rounded-md">
                      <a href="#" disabled class="relative disabled:opacity-25 inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                        <span class="sr-only">Next</span>
                        <ChevronUpIcon class="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a href="#" disabled class="-ml-px relative disabled:opacity-25 inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                        <span class="sr-only">Previous</span>
                        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                      </a>
                    </span>
                  </nav>
                </div>
              </div>
            </div>
            <!-- Message header -->
          </div>

          <div class="min-h-0 flex-1 overflow-y-auto">
            <div class="bg-white pt-5 pb-6 shadow">
                <template v-if="props.selected_conversation.length != 0">
                    <div class="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8">
                        <div class="sm:w-0 sm:flex-1">
                            <h1 id="message-heading" class="text-lg font-medium text-gray-900">
                                {{ props.selected_conversation[0].information.subject_name }}
                            </h1>
                            <p class="mt-1 text-sm text-gray-500 truncate">
                                {{ props.selected_conversation[0].information.from_to }}
                            </p>
                        </div>
                        <div class="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
                                {{ message.status }}
                            </span>
                            <Menu as="div" class="ml-3 relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        class="-my-2 p-2 rounded-full bg-white flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                        <span class="sr-only">Open options</span>
                                        <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
                                    </MenuButton>
                                </div>

                                <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div class="py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button type="button"
                                                :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'w-full flex justify-between px-4 py-2 text-sm']">
                                                <span>Copy email address</span>
                                            </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex justify-between px-4 py-2 text-sm']">
                                                <span>Previous conversations</span>
                                            </a>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <a href="#"
                                                :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'flex justify-between px-4 py-2 text-sm']">
                                                <span>View original</span>
                                            </a>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                </template>
            </div>
            <!-- Thread section-->
            <template v-if="props.selected_conversation.length != 0">
                <ul role="list" class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
                    <li v-for="item in props.selected_conversation[0].list_message" :key="item.id" class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                        <div class="sm:flex sm:justify-between sm:items-baseline">
                            <h3 class="text-base font-medium">
                                <span class="text-gray-900">{{ item.author_name == $page.props.user.name ? 'You' : item.author_name}}</span>
                                {{ ' ' }}
                                <span class="text-gray-600">wrote</span>
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                                <time :datetime="item.datetime">{{ moment(item.author_created).fromNow() }}</time>
                            </p>
                        </div>
                        <div class="mt-4 space-y-6 text-sm text-gray-800" v-html="item.author_message" />
                    </li>
                </ul>
            </template>
            <template v-else>
                <div class="flex justify-center">
                    <div class="py-20">
                        <InboxIcon class="h-32 w-32 text-gray-300" />
                    <p class="text-center font-bold text-gray-400">Empty</p>
                    </div>
                </div>
            </template>
          </div>
        </section>
        <!-- Message list-->
        <aside class="hidden xl:block xl:flex-shrink-0 xl:order-first">
          <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
            <div class="flex-shrink-0">
              <div class="h-16 bg-white px-6 flex flex-col justify-center">
                <div class="flex items-baseline space-x-3">
                  <h2 class="text-lg font-medium text-gray-900">Inbox</h2>
                  <p class="text-sm font-medium text-gray-500">{{ list_conversation.length }} messages</p>
                </div>
              </div>
              <div class="border-t border-b border-gray-200 bg-gray-50 px-6 py-2 text-sm font-medium text-gray-500">Sorted by Created</div>
            </div>
            <nav aria-label="Message list" class="flex-1 overflow-y-auto">
              <ul role="list" class="border-b border-gray-200 divide-y divide-gray-200">
                <li v-for="message in list_conversation" :key="message.id" class="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
                  <div class="flex justify-between space-x-3">
                    <div class="min-w-0 flex-1">
                      <Link :href="`/create-conversation/${message.id}/${false}`" class="block focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true" />
                        <p class="text-sm font-medium text-gray-900 truncate">{{ message.subject }}</p>
                        <p class="text-sm text-gray-500 truncate">{{message.to}}</p>
                      </Link>
                    </div>
                    <time :datetime="message.created_at" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{{ moment(message.created_at).fromNow() }}</time>
                  </div>
                  <div class="mt-1">
                    <p class="line-clamp-2 text-sm text-gray-600" v-html="limitText(message.last_message)">
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </main>

    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { Link } from '@inertiajs/inertia-vue3'
  import SideNavigation from '@/Layouts/Components/SideNavigation.vue'
  import { ref } from 'vue'
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
    ArchiveIcon as ArchiveIconSolid,
    ChevronDownIcon,
    ChevronUpIcon,
    DotsVerticalIcon,
    FolderDownloadIcon,
    PencilIcon,
    ReplyIcon,
    SearchIcon,
    UserAddIcon,
  } from '@heroicons/vue/solid'
  import {
AnnotationIcon,
    ArchiveIcon as ArchiveIconOutline,
    BanIcon,
    BellIcon,
    FlagIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    UserCircleIcon,
    XIcon,
  } from '@heroicons/vue/outline'
import { useForm } from '@inertiajs/inertia-vue3'

  const props = defineProps({
    params: [Number, String],
    current_user: Object,
    list_conversation: Object,
    isOpen: [Boolean, String],
    selected_conversation: Object
  });
  const form = useForm({
    subject: '',
    to_user_id: props.current_user != null ? props.current_user.id : null,
    content: ''
  })

  let submit = () => {
    form.post(route('inbox.store'), {
        preserveScroll: true,
        preserveState: false
    })
  }

  const reply = useForm({
    content: '',
    message_id: props.params,
  })

  let replies = () => {
    reply.post(route('inbox.reply'), {
        preserveScroll: true,
        preserveState: false
    })
  }

  const user = {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const navigation = [
    {
      name: 'Inboxes',
      href: '#',
      children: [
        { name: 'Technical Support', href: '#' },
        { name: 'Sales', href: '#' },
        { name: 'General', href: '#' },
      ],
    },
    { name: 'Reporting', href: '#', children: [] },
    { name: 'Settings', href: '#', children: [] },
  ]
  const sidebarNavigation = [
    { name: 'Open', href: '#', icon: InboxIcon, current: true },
    { name: 'Archive', href: '#', icon: ArchiveIconOutline, current: false },
    { name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
    { name: 'Flagged', href: '#', icon: FlagIcon, current: false },
    { name: 'Spam', href: '#', icon: BanIcon, current: false },
    { name: 'Drafts', href: '#', icon: PencilAltIcon, current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  const message = {
    subject: 'Re: New pricing for existing customers',
    sender: 'joearmstrong@example.com',
    status: 'Open',
  }
  const limitText = (value) => {
    return value > 50 ? value.substring(0, 50) + "..." : value;
};
const open = ref(props.isOpen == 'true' ? true : false)
  </script>
<style>
  .ql-editor{
      height: 22vh;
      width: 100%;
  }
  </style>
