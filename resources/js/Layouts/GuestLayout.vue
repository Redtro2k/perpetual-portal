<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="relative bg-gray-50">
      <Popover class="relative bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            class="
              flex
              justify-between
              items-center
              py-6
              md:justify-start md:space-x-10
            "
          >
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span class="sr-only">LMSFPH Palmera</span>
                <img
                  class="h-20 w-24 sm:h-20"
                  src="storage/CutieImages/PHAPI_logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <PopoverButton
                class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-jvgreen
                "
              >
                <span class="sr-only">Open menu</span>
                <MenuIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
            <PopoverGroup as="nav" class="hidden md:flex space-x-10">


              <Popover class="relative" v-slot="{ open }">
                <PopoverButton
                  :class="[
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen',
                  ]"
                >
                  <span>More</span>
                  <ChevronDownIcon
                    :class="[
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500',
                    ]"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    class="
                      absolute
                      left-1/2
                      z-10
                      transform
                      -translate-x-1/2
                      mt-3
                      px-2
                      w-screen
                      max-w-md
                      sm:px-0
                    "
                  >
                    <div
                      class="
                        rounded-lg
                        shadow-lg
                        ring-1 ring-black ring-opacity-5
                        overflow-hidden
                      "
                    >
                      <div
                        class="
                          relative
                          grid
                          gap-6
                          bg-white
                          px-5
                          py-6
                          sm:gap-8 sm:p-8
                        "
                      >
                        <a
                          v-for="item in resources"
                          :key="item.name"
                          :href="item.href"
                          class="
                            -m-3
                            p-3
                            flex
                            items-start
                            rounded-lg
                            hover:bg-gray-50
                          "
                        >
                          <component
                            :is="item.icon"
                            class="flex-shrink-0 h-6 w-6 text-jvdgreen"
                            aria-hidden="true"
                          />
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ item.description }}
                            </p>
                          </div>
                        </a>
                      </div>
                      <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                          <h3
                            class="
                              text-sm
                              tracking-wide
                              font-medium
                              text-gray-500
                              uppercase
                            "
                          >
                            Recent Posts
                          </h3>
                          <ul role="list" class="mt-4 space-y-4">
                            <li
                              v-for="item in recentPosts"
                              :key="item.id"
                              class="text-base truncate"
                            >
                              <a
                                :href="item.href"
                                class="
                                  font-medium
                                  text-gray-900
                                  hover:text-gray-700
                                "
                              >
                                {{ item.name }}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="mt-5 text-sm">
                          <a
                            href="#"
                            class="
                              font-medium
                              text-jvdgreen
                              hover:text-jvgreen
                            "
                          >
                            View all posts
                            <span aria-hidden="true">&rarr;</span></a
                          >
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </PopoverGroup>
            <div
              v-if="canLogin"
              class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"
            >
              <NavButtonVue
                v-if="$page.props.user"
                :href="route('dashboard')"
                value="Dashboard"
              />
              <template v-else>
                <NavButtonVue
                  :href="route('login')"
                  is-primary
                  value="Login"
                />
                <NavButtonVue
                  v-if="canRegister"
                  :href="route('register')"
                  value="Register"
                />
              </template>
            </div>
          </div>
        </div>

        <transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="
              absolute
              top-0
              inset-x-0
              z-10
              p-2
              transition
              transform
              origin-top-right
              md:hidden
            "
          >
            <div
              class="
                rounded-lg
                shadow-lg
                ring-1 ring-black ring-opacity-5
                bg-white
                divide-y-2 divide-gray-50
              "
            >
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="
                        bg-white
                        rounded-md
                        p-2
                        inline-flex
                        items-center
                        justify-center
                        text-gray-400
                        hover:text-gray-500 hover:bg-gray-100
                        focus:outline-none
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-jvgreen
                      "
                    >
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid gap-y-8">
                    <a
                      v-for="item in features"
                      :key="item.name"
                      :href="item.href"
                      class="
                        -m-3
                        p-3
                        flex
                        items-center
                        rounded-md
                        hover:bg-gray-50
                      "
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-jvdgreen"
                        aria-hidden="true"
                      />
                      <span class="ml-3 text-base font-medium text-gray-900">
                        {{ item.name }}
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5 space-y-6">
                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    class="
                      text-base
                      font-medium
                      text-gray-900
                      hover:text-gray-700
                    "
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    class="
                      text-base
                      font-medium
                      text-gray-900
                      hover:text-gray-700
                    "
                  >
                    Docs
                  </a>
                  <a
                    v-for="item in resources"
                    :key="item.name"
                    :href="item.href"
                    class="
                      text-base
                      font-medium
                      text-gray-900
                      hover:text-gray-700
                    "
                  >
                    {{ item.name }}
                  </a>
                </div>
                <div v-if="$page.props.user">
                  <p class="mt-6 text-center text-base font-medium text-gray-500">
                    <Link
                      :href="route('dashboard')"
                      class="text-jvdgreen hover:text-jvgreen"
                    >
                      Dashboard
                    </Link>
                  </p>
                </div>
                <div v-else>
                  <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="
                      w-full
                      flex
                      items-center
                      justify-center
                      px-4
                      py-2
                      border border-transparent
                      rounded-md
                      shadow-sm
                      text-base
                      font-medium
                      text-white
                      bg-jvgreen
                      hover:bg-jvdgreen
                    "
                  >
                    Register
                  </Link>
                  <p class="mt-6 text-center text-base font-medium text-gray-500">
                    <Link
                      :href="route('login')"
                      class="text-jvdgreen hover:text-jvgreen"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="lg:relative">
        <slot name="content"></slot>
      </main>
    </div>
    <OverlappingCardsVue />
    <ColumnFooterVue />
  </template>

  <script setup>
  import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from "@headlessui/vue";
  import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    InformationCircleIcon,
    XIcon,
  } from "@heroicons/vue/outline";
  import { ChevronDownIcon } from "@heroicons/vue/solid";
  import NavButtonVue from "@/Custom/Elements/Buttons/NavButton.vue";
  import OverlappingCardsVue from "@/Custom/Sections/Header/OverlappingCards.vue";
  import ColumnFooterVue from "@/Custom/Sections/Footer/ColumnFooter.vue";
  import { Link } from "@inertiajs/inertia-vue3";

  defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
  });

  const resources = [
    {
      name: "About Us",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: route('about'),
      icon: SupportIcon,
    },
    {
      name: "Contact",
      description:
        "contact our support center.",
      href: route('contact_us'),
      icon: InformationCircleIcon,
    },
    {
      name: "School Information",
      description:
        "Learn how to maximize our platform to get the most out of it.",
      href: route('school_information'),
      icon: InformationCircleIcon,
    },
  ];
  const recentPosts = [
    { id: 1, name: "wear face mask, covid is everywhare", href: "#" },
  ];
  </script>
