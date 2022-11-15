<template>
  <user-layout title="Create School" :showSideNav="false">
    <template #content>
      <main
        class="max-w-xl mx-auto pt-2 pb-8 lg:pb-16 bg-white overflow-hidden shadow sm:rounded-lg"
      >
        <with-list v-show="form.hasErrors" :labels="form.errors" />
        <with-dismiss
          v-if="$page.props.flash.success"
          :label="$page.props.flash.success"
        />
        <div class="px-4 py-5 sm:p-6">
          <div class="space-y-6 py-2">
            <div>
              <h1 class="text-lg leading-6 font-bold text-gray-900">School Create</h1>
              <p class="mt-1 text-sm text-gray-500">
                Let's get started by filling in the information below to create School.
              </p>
            </div>
          </div>
          <form class="space-y-4" @submit.prevent="submit">
            <div>
              <div class="mt-1">
                <label class="block text-sm font-medium text-gray-700">Name</label>
                <input-text v-model="form.name" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700"> Description </label>
              <div class="mt-1">
                <QuillEditor
                  v-model:content="form.description"
                  contentType="html"
                  placeholder="description about School"
                  toolbar="essential"
                  theme="snow"
                />
              </div>
            </div>
            <div>
              <div class="mt-1">
                <dropdown-simple
                  label="Region"
                  v-model="getregion"
                  :options="setRegion"
                />
                <dropdown-simple
                  label="Province"
                  v-model="findProvince"
                  :options="setProvince"
                />
              </div>
            </div>
            <div class="mt-1">
              <div class="mt-1">
                <label class="block text-sm font-medium text-gray-700">address</label>
                <input-text v-model="form.address" />
              </div>
            </div>
            <div>
              <div class="mt-1">
                <label class="block text-sm font-medium text-gray-700">
                  Upload Images
                </label>
                <FilePond
                  ref="file"
                  @change="onChangeFile"
                  accept="image/png, image/jpeg, image/gif"
                />
              </div>
            </div>
            <div>
              <div class="mt-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Phone Number / Contact Number</label
                >
                <input-text placeholder="Phone number" v-model="form.contact" />
              </div>
            </div>
            <div class="flex justify-end pt-8">
              <button
                type="submit"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                :disabled="form.processing"
              >
                Create School
              </button>
            </div>
          </form>
        </div>
      </main>
    </template>
  </user-layout>
</template>
<script setup>
import UserLayout from "@/Layouts/UserLayout.vue";
import WithList from "@/Custom/Feedback/Alert/WithList.vue";
import WithDismiss from "@/Custom/Feedback/Alert/WithDismiss.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { computed, ref, watchEffect } from "vue";
import InputText from "@/Custom/Forms/InputGroups/InputText.vue";
import DropdownLeft from "@/Custom/Forms/InputMenus/CustomWithCheckOnLeft.vue";
import DropdownSimple from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import phil from 'phil-reg-prov-mun-brgy'

const getregion = ref();
const getprovince = ref();
const findProvince = ref();
//validation
const form = useForm({
  name: null,
  description: null,
  region: null,
  province: null,
  address: null,
  contact: null,
  image: [],
});

//location
const setRegion = computed(() => {
  return phil.regions.map(function (obj) {
    delete Object.assign(obj, { id: obj.reg_code })["reg_code"];
    return obj;
  });
});
const setProvince = computed(() => {
  const checkundefined =
    typeof getprovince.value == "undefined" ? "01" : getprovince.value;
  return phil.getProvincesByRegion(checkundefined).map(function (obj) {
    delete Object.assign(obj, { id: obj.prov_code })["prov_code"];
    return obj;
  });
});

const arr = setRegion.value;
watchEffect(() => {
  var setRegion = arr.find((e) => e.name === getregion.value)?.id;
  getprovince.value = setRegion;
  form.region = getregion.value;
  form.province = findProvince.value;
});
//images upload
const onChangeFile = (e) => {
  let selectedFiles = e.target.files;
  for (let i = 0; i < selectedFiles.length; i++) {
    form.image.push(selectedFiles[i]);
  }
};
//submits
let submit = () => {
  form.post(route("school.store"), {
    _method: "PUT",
    preserveScroll: true,
    forceFormData: true,
  });
};
</script>
<style scoped>
.ql-editor {
  height: 14vh;
  background-color: white;
}
</style>
