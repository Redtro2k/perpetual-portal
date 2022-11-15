<template>
  <user-layout title="School Edit" :showSideNav="false">
    <template #content>
      <main-section :has-error="form.hasErrors" :label-errors="form.errors">
        <template #main>
          <div class="px-4 py-5 sm:-6">
            <form @submit.prevent="submit">
              <div class="space-y-6 py-2">
                <div>
                  <h1 class="text-lg leading-6 font-bold text-gray-900">School Edit</h1>
                  <p class="mt-1 text-sm text-gray-500">
                    Rewrite something our School information.
                  </p>
                </div>
                <!-- name -->
                <div class="mt-1">
                  <input-text label="Name" v-model="form.name" placeholder="Name" />
                </div>
              </div>
              <!-- description -->
              <div>
                <label class="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <QuillEditor
                  v-model:content="form.description"
                  contentType="html"
                  placeholder="description about School"
                  toolbar="essential"
                  theme="snow"
                />
              </div>
              <!-- Region & Province -->
              <div>
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
              <!-- File images -->
              <div class="p-4 flex justify-center items-center">
                <img
                  class="w-5/6 mb-10 object-cover object-center rounded"
                  alt="hero"
                  :src="props.school_image"
                />
              </div>
              <!-- File upload -->
              <div>
                <div class="mt-1">
                  <label class="block text-sm font-medium text-gray-700">
                    Upload Images
                  </label>
                  <File-Pond
                    accept="image/png, image/jpeg, image/gif"
                    @addfile="handleFilePondAddFile"
                    @removefile="handleFileRemoveFile"
                  />
                </div>
              </div>
              <!-- address -->
              <div class="mt-1">
                <input-text
                  label="Address"
                  v-model="form.address"
                  placeholder="Address"
                />
              </div>
              <!-- contact -->
              <div class="mt-1">
                <input-text
                  label="Contact"
                  v-model="form.contact"
                  placeholder="Contact"
                />
              </div>
              <!-- Submit Button -->
              <div class="flex justify-end pt-8">
                <button
                  type="submit"
                  :disabled="form.processing"
                  class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Update School
                </button>
              </div>
            </form>
          </div>
        </template>
      </main-section>
    </template>
  </user-layout>
</template>
<script setup>
import MainSection from "@/Shared/Layouts/MainSection.vue";
import InputText from "@/Custom/Forms/InputGroups/InputText.vue";
import UserLayout from "@/Layouts/UserLayout.vue";
import DropdownSimple from "@/Custom/Forms/InputMenus/SimpleCustom.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref, computed, watchEffect } from "vue";
var phil = require("phil-reg-prov-mun-brgy");
const props = defineProps({
  school: Object,
  school_image: String,
});

const getregion = ref(props.school.region);
const getprovince = ref();
const findProvince = ref(props.school.province);

console.log();

//initial all of validation
const form = useForm({
  _method: "PUT",
  name: props.school.name,
  description: props.school.description,
  region: null,
  province: null,
  address: props.school.address,
  image: null,
  contact: props.school.contact,
});

// set region
const setRegion = computed(() => {
  return phil.regions.map(function (obj) {
    delete Object.assign(obj, { id: obj.reg_code })["reg_code"];
    return obj;
  });
});
//set province
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

//images add
const handleFilePondAddFile = (error, e) => {
  form.image = [];
  form.image.push(e.file);
  console.log(form.image);
};
//images remove
const handleFileRemoveFile = (error, e) => {
  form.image = null;
  console.log(form.image);
};

let submit = () => {
  form.post(route("school.update", 39), {
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
