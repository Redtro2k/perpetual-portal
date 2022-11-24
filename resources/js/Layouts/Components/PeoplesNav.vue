<template>
    <section aria-labelledby="friends-available-heading">
              <div class="bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">People's Online</h2>
                  <div class="mt-6 flow-root">
                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                      <li v-for="user in users" :key="user.id" class="flex items-center py-4 space-x-3">
                        <div class="flex-shrink-0">
                          <img class="h-8 w-8 rounded-full" :src="user.image" alt="" />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-medium text-gray-900">
                            <Link :href="user.href">{{ user.name == $page.props.user.name ? 'You' : user.name }}</Link>
                          </p>
                          <p class="text-sm text-gray-500">
                            <Link :href="user.href">{{ '@' + user.role }}</Link>
                          </p>
                        </div>
                        <div class="flex-shrink-0">
                          <button v-if="user.name != $page.props.user.name" type="button" class="inline-flex items-center px-3 py-0.5 rounded-full bg-green-50 text-sm font-medium text-jvdgreen hover:bg-indigo-100">
                            <PlusSmIcon class="-ml-1 mr-0.5 h-5 w-5 text-jvgreen" aria-hidden="true" />
                            <span> Add </span>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <Link href="#" class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> View all </Link>
                  </div>
                </div>
              </div>
            </section>
</template>
<script setup>
import {PlusSmIcon} from '@heroicons/vue/solid'
import { Link } from '@inertiajs/inertia-vue3';
defineProps({
  users: Object
})
</script>
