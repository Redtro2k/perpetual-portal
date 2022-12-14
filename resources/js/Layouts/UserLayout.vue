<template>
  <Head :title="title" />
  <div class="min-h-full">
    <!-- When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars -->
    <SideNav :navigation="navigation" />

    <div class="py-10">
      <div
        v-if="noContent == false"
        class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid"
        :class="showSideNav ? 'lg:grid-cols-12 lg:gap-8' : 'lg:grid-cols-10 lg:gap-10'"
      >
        <CommunitiesNavVue :label="labelCommunities" :navigation="navigation" :communities="communities" />
        <main
          :class="showSideNav ? 'lg:col-span-4' : 'lg:col-span-6'"
          class="xl:col-span-6"
        >
          <slot name="content"></slot>
        </main>
        <aside v-show="showSideNav" class="xl:block xl:col-span-4 hidden">
          <div class="sticky top-4 space-y-4">
            <PeoplesNav :users="$page.props.layout.online" />
          </div>
        </aside>
      </div>
      <slot v-else name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon, OfficeBuildingIcon, UsersIcon } from "@heroicons/vue/outline";
import { Link, Head, usePage } from "@inertiajs/inertia-vue3";
import SideNav from "@/Layouts/Components/SideNav.vue";
import Loading from "@/Custom/Loading.vue";
import { computed } from "vue";
import { defineAsyncComponent, onMounted, onUpdated } from "@vue/runtime-core";
const PeoplesNav = defineAsyncComponent({
    loader: () => import('./Components/PeoplesNav.vue'),
    loadingComponent: Loading,
    delay: 200,
    errorComponent: "error...",
    timeout: 3000,
  });
const AssignmentNav = defineAsyncComponent({
    loader: () => import('./Components/AssignmentNav.vue'),
    loadingComponent: Loading,
    delay: 200,
    errorComponent: "error...",
    timeout: 3000,
  });
const CommunitiesNavVue = defineAsyncComponent({
    loader: () => import('./Components/CommunitiesNav.vue'),
    loadingComponent: Loading,
    delay: 200,
    errorComponent: "error...",
    timeout: 3000,
  });
const props = defineProps({
  noContent: {
    type: Boolean,
    default: () => false,
  },
  showSideNav: {
    type: Boolean,
    default: () => true,
  },
  title: String,
  users: Object,
});

onUpdated(() => {
  if (props.noContent == true) return (props.showSideNav = false);
});

const isAdmin = computed(
  () =>
    usePage().props.value.can.manage_super_admin ==
    usePage().props.value.systemNotification.school
);
const navigation = [
  {
    name: "Home",
    href: `${route("dashboard")}`,
    icon: HomeIcon,
    notify: false,
    public: true,
    current: route().current("dashboard"),
  },
  {
    name: "School",
    href: `${route("school.index")}`,
    icon: OfficeBuildingIcon,
    notify: isAdmin.value,
    public: true,
    current: route().current("school*"),
  },
  {
    name: "Manage User",
    href: `${route("manage-user.index")}`,
    icon: UsersIcon,
    notify: false,
    public: usePage().props.value.can.manage_super_admin,
    current: route().current("manage-user*"),
  },
];


const communities = [];
const assignments = [
  {
    id: 1,
    user: {
      name: "Floyd Miles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    body:
      "What books do you have on your bookshelf just to look smarter than you actually are?",
    due: 291,
  },
  // More posts...
];

//add new links for cummunities
const addCommunities = ((name, href, params = null) => {
    if(params == null){
        return communities.push({name: name, href: href})
    }else{
        return communities.push({name: name, href: href, route: params})
    }
});


const labelCommunities = computed(() => {
    if(usePage().props.value.can.admin_or_superadmin){
        return 'Manage';
    }else{
        return 'Options';
    }
});

onMounted(() => {
    if(usePage().props.value.can.admin_or_superadmin){
        addCommunities('Academic Year', 'academic-year.index');
        addCommunities('Year Level', 'yearlevel.index');
        addCommunities('Subjects', 'subject.index');
        addCommunities('New User', 'new-account.create');
        if(usePage().props.value.can.admin_or_superadmin){
            addCommunities('Migrate', 'sync-ay.index');
        }
    }
    if(usePage().props.value.can.manage_teacher){
        addCommunities('Subjects', 'teacher_subject.show', usePage().props.value.user.id);
    }
    if(usePage().props.value.can.manage_student){
        addCommunities('Subjects/Modules', 'student-subject.show', usePage().props.value.user.id);
    }
  });
</script>
