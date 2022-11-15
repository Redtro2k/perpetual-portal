<template>
  <modal-with-button :show="props.show_user" :roles="props.roles" />
  <user-layout no-content title="Manage User">
    <template #content>
      <div class="min-h-full">
        <div class="mt-8">
        <layout-card :cards="navigation" label="Overview" />
        </div>
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <with-keyboard class="w-full lg:w-64" v-model="search" />
        </div>

        <table-sortable
          :sort="sorted"
          @toggle="(value) => (sorted = value)"
          :items="props.users.data"
          :viewable="true"
          viewlink="mange-user.show"
          :not-sortable="['roles', 'image']"
          routes="manage-user.index"
        />
        <paginate
          v-if="props.users.data.length !== 0"
          class="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8"
          :links="props.users.links"
          :from="props.users.from"
          :to="props.users.to"
          :result="props.users.total"
          :responsiveNext="props.users.next_page_url"
          :responsivePrevious="props.users.first_page_url"
        />
      </div>
    </template>
  </user-layout>
</template>
<script setup>
import { defineAsyncComponent, ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";
import UserLayout from "@/Layouts/UserLayout.vue";
import WithKeyboard from "@/Custom/Forms/InputGroups/WithKeyboard.vue";
import Paginate from "@/Custom/Navigation/Paginate/WithPageButton.vue";
import LayoutCard from "@/Custom/List/GridList/LayoutCard.vue";
import loader from "@/Custom/Loading.vue";
import ModalWithButton from "@/Custom/Overlays/Modals/CenteredWithWideButton.vue";
import WarningAlert from "@/Custom/FeedBack/Alert/WithDescription.vue";
import { ScaleIcon } from "@heroicons/vue/outline";

const props = defineProps({
  users: Object,
  filters: String,
  show_user: Object,
  roles: Object,
});
const TableSortable = defineAsyncComponent({
  loader: () => import("@/Custom/List/Tables/SortableTable/WithSortHeading.vue"),
  loadingComponent: loader,
  delay: 200,
  errorComponent: "Error Somthings wrong",
  timeout: 3000,
});
//navigator
const navigation = [
  { name: "Teachers", href: "#", icon: ScaleIcon, records: "0" },
  { name: "Students", href: "#", icon: ScaleIcon, records: "0" },
  { name: "Courses", href: "#", icon: ScaleIcon, records: "0" },
];
//search field
const search = ref(props.filters);

//sorting
const sorted = ref(null);

//submit to backend
watch(
  () => [search.value, sorted.value],
  debounce((value) => {
    Inertia.get(
      "manage-user",
      { "filter[name]": value[0], sort: value[1] },
      { replace: true, preserveState: true }
    );
  })
);
</script>
