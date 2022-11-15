<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-lg leading-6 font-semibold text-gray-900">{{ label }}</h2>
    <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Card -->
      <div
        v-for="card in cards"
        :key="card.name"
        class="bg-white overflow-hidden shadow rounded-lg"
      >
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <component
                :is="card.icon"
                class="h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">
                  {{ card.name }}
                </dt>
                <dd>
                  <div class="text-lg font-medium text-gray-900">
                    {{ card.records }}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-5 py-3">
          <div class="text-sm">
            <a :href="card.href" class="font-medium text-cyan-700 hover:text-cyan-900">
              View all
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

defineProps({
  cards: Object,
  label: {
    type: String,
    default: () => "pinned",
  },
});
</script>
