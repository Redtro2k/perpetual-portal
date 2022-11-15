<template>
  <main
    class="max-w-xl mx-auto pt-2 pb-8 lg:pb-16 bg-white overflow-hidden shadow sm:rounded-lg"
  >
    <with-list v-show="hasError" :labels="labelErrors" />
    <with-dismiss v-if="$page.props.flash.success" :label="$page.props.flash.success" />
    <slot class="px-4 py-5 sm:p-6" name="main"></slot>
  </main>
</template>
<script setup>
import WithList from "@/Custom/Feedback/Alert/WithList.vue";
import WithDismiss from "@/Custom/Feedback/Alert/WithDismiss.vue";

const props = defineProps({
  hasError: Boolean,
  labelErrors: Object,
});
</script>
