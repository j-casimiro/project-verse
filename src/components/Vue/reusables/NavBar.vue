<script setup lang="ts">
const navigateToHome = () => {
  window.location.href = '/';
};
</script>

<template>
  <nav class="border-b shadow-lg bg-neutral-800 dark:border-neutral-700">
    <div class="p-3 px-7 w-full md:flex md:items-center md:justify-between">
      <button
        @click="navigateToHome"
        class="py-2 text-sm font-semibold text-neutral-300 hover:text-neutral-50"
      >
        Menu
      </button>

      <div class="text-2xl font-bold text-center text-green-400">Vue</div>

      <a
        href="https://github.com/j-casimiro"
        target="_blank"
        rel="noopener noreferrer"
        class="flex gap-2 items-center text-sm font-medium transition-colors text-neutral-300 sm:mt-0 hover:text-white"
      >
        @j-casimiro
      </a>
    </div>
  </nav>
</template>
