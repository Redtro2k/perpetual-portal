<template>
     <div class="mt-4">
              <h1 class="sr-only">Recent posts</h1>
              <ul role="list" class="space-y-4">
                <li
                  v-for="post in posts.data"
                  :key="post.post_id"
                  class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
                >
                  <article :aria-labelledby="'question-title-' + post.id">
                    <div>
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="post.author_image"
                            alt=""
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-medium text-gray-900">
                            <Link
                              :href="post.author_name"
                              class="hover:underline"
                              >{{ post.author_name }} <span v-if="post.author_name === $page.props.user.name" class="font-bold">(You)</span></Link
                            >
                          </p>
                          <p class="text-sm text-gray-500">
                            <Link :href="post.post_created_at" class="hover:underline">
                              <time :datetime="post.post_created_at">{{
                               moment(post.post_created_at).format('LLLL')
                              }}</time>
                            </Link>
                          </p>
                        </div>
                        <div class="flex-shrink-0 self-center flex">
                          <Menu
                            as="div"
                            class="relative inline-block text-left"
                          >
                            <div>
                              <MenuButton
                                class="
                                  -m-2
                                  p-2
                                  rounded-full
                                  flex
                                  items-center
                                  text-gray-400
                                  hover:text-gray-600
                                "
                              >
                                <span class="sr-only">Open options</span>
                                <DotsVerticalIcon
                                  class="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </MenuButton>
                            </div>

                            <transition
                              enter-active-class="transition ease-out duration-100"
                              enter-from-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-from-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95"
                            >
                              <MenuItems
                                class="
                                  origin-top-right
                                  absolute
                                  right-0
                                  mt-2
                                  w-56
                                  rounded-md
                                  shadow-lg
                                  bg-white
                                  ring-1 ring-black ring-opacity-5
                                  focus:outline-none
                                "
                              >
                                <div class="py-1">
                                  <MenuItem v-slot="{ active }">
                                    <Link
                                      href="#"
                                      :class="[
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'flex px-4 py-2 text-sm',
                                      ]"
                                    >
                                      <StarIcon
                                        class="mr-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span>Add to Achieve</span>
                                    </Link>
                                  </MenuItem>
                                  <MenuItem v-slot="{ active }" v-show="post.post_from == $page.props.user.id">
                                    <Link
                                    method="DELETE"
                                    as="Link"
                                      :href="route('post.destroy',post.post_id)"
                                      :class="[
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'flex px-4 py-2 text-sm',
                                      ]"
                                      preserve-scroll
                                    >
                                      <TrashIcon
                                        class="mr-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span>Delete</span>
                                    </Link>
                                  </MenuItem>
                                </div>
                              </MenuItems>
                            </transition>
                          </Menu>
                        </div>
                      </div>
                      <h2
                        :id="'question-title-' + post.id"
                        class="mt-4 text-base font-medium text-gray-900"
                      >
                        {{ post.title }}
                      </h2>
                    </div>
                    <div
                      class="mt-2 text-sm text-gray-700 space-y-4"
                      v-html="post.description"
                    />
                    <div class="mt-6 flex justify-between space-x-8">
                      <div class="flex space-x-6">
                        <span class="inline-flex items-center text-sm">
                          <Link
                            as="button"
                            :href="CheckLike(post.like, $page.props.user.id) ? route('like.destroy', CheckLike(post.like, $page.props.user.id).like_id) : route('like.store')"
                            class="
                              inline-flex
                              space-x-2
                            "
                            :method="CheckLike(post.like, $page.props.user.id) ? 'DELETE' : 'POST'"
                            :class="CheckLike(post.like, $page.props.user.id) ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-500'"
                            :data="CheckLike(post.like, $page.props.user.id) ? { id: null} : { id: post.post_id}"
                            preserve-scroll
                            >

                            <ThumbUpIcon class="h-5 w-5" aria-hidden="true" />
                            <span class="font-medium text-gray-900" v-if="post.like.length > 0">{{
                              post.like.length
                            }}</span>
                            <span class="sr-only">likes</span>
                          </Link>
                        </span>
                        <span class="inline-flex items-center text-sm">
                            <Link :href="route('comment.show', post.token)" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatAltIcon class="h-5 w-5" aria-hidden="true" />
                                <span class="font-medium text-gray-900">{{ post.comments }}</span>
                                <span class="sr-only">replies</span>
                            </Link>
                      </span>
                      </div>
                        <div class="flex text-sm">
                      <span class="inline-flex items-center text-sm">
                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <ShareIcon class="h-5 w-5" aria-hidden="true" />
                          <span class="font-medium text-gray-900">Share</span>
                        </button>
                      </span>
                    </div>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
</template>
<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { DotsVerticalIcon, StarIcon, ThumbUpIcon, ChatAltIcon, ShareIcon, TrashIcon } from "@heroicons/vue/solid";
import moment from 'moment'
defineProps({
    posts: Object
})
const CheckLike = ((value, id) => {
  let checkValue = value.map(l => l.by).indexOf(id);
  return checkValue != -1 ? value[checkValue] : false;
})
</script>
