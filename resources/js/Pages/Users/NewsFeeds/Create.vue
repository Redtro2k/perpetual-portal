<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="show = false">
    <form @submit.prevent="submit">
<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div class="mt-3 sm:mt-5">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 text-bold"> Create Post </DialogTitle>

            <div class="col-span-6 sm:col-span-3 py-2">
                <label class="block text-sm font-medium text-gray-700">Title</label>
                <input-text v-model="form.title"/>
                <div v-if="form.errors.title" v-text="form.errors.title" class="text-red-500 text-xs mt-1"></div>
            </div>

                <div class="py-2">
                <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
                <div class="mt-1">
                    <!-- v-model:content="form.description" -->
                  <QuillEditor
                  v-model:content="form.description"
                  contentType="html"
                  placeholder="content here"
                  toolbar="essential"
                  theme="snow"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">Brief description of your Post. URLs are hyperlinked.</p>
                <div v-if="form.errors.description" v-text="form.errors.description" class="text-red-500 text-xs mt-1"></div>
                </div>

                <fieldset>
              <legend class="contents text-base font-medium text-gray-900">Post Privacy</legend>
              <p class="text-sm text-gray-500">These are setting to filter who will see your post.</p>
              <div class="mt-4 space-y-4">
                <div class="flex items-center" v-for="privacy in privacies" :key="privacy">
                  <input type="radio" name="privacy" v-model="form.audience" class="focus:ring-jvgreen h-4 w-4 text-jvdgreen border-gray-300" :value="privacy.value"/>
                  <label class="ml-3 block text-sm font-medium text-gray-700"> {{privacy.label}} </label>
                </div>
                <div v-if="form.errors.audience" v-text="form.errors.audience" class="text-red-500 text-xs mt-1"></div>
              </div>
            </fieldset>
                <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                    {{ form.progress.percentage }}%
                </progress>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button type="submit" :disabled="form.processing" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-jvgreen text-base font-medium text-white hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:col-start-2 sm:text-sm"  @click="$emit('close')">Publish Post</button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:mt-0 sm:col-start-1 sm:text-sm" @click="$emit('close')">Cancel</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </form>

    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
import { useForm } from '@inertiajs/inertia-vue3';
import InputText from '@/Custom/Forms/InputGroups/InputText.vue'

const props = defineProps({
    show: Boolean
})


const privacies =[
    {label: 'anyone can see', value: 'public'},
    {label: 'for teachers', value: 'for_teachers'},
    {label: 'for students', value: 'for_student'},
]
const form = useForm({
    title: null,
    description: null,
    audience: null
})

let submit = () => {
    form.post(route('post.store'), {
      preserveScroll: true
    })
}



</script>

<style>
.ql-editor{
    height: 22vh;
}
</style>
