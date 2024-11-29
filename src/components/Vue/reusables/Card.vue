<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
  description: string;
  onClick: () => void;
}>();
</script>

<template>
  <div
    class="flex relative flex-col p-6 w-64 h-64 bg-white rounded-lg border shadow-md transition border-neutral-200 group hover:shadow-lg"
  >
    <!-- Content wrapper to push the button down -->
    <div class="flex flex-col flex-grow">
      <h2
        class="pb-5 text-lg font-medium text-gray-800 group-hover:text-neutral-900"
      >
        {{ props.title }}
      </h2>
      <p class="text-sm text-neutral-600 group-hover:text-neutral-700">
        {{ props.description }}
      </p>
    </div>

    <!-- Button at the bottom -->
    <button
      @click="onClick"
      class="inline-flex justify-center items-center px-6 py-2 mt-4 text-sm font-medium text-white bg-green-800 rounded-md transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
    >
      View Component
    </button>
  </div>
</template>
