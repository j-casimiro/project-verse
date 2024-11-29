<script setup lang="ts">
const navigateToHome = () => {
  window.location.href = '/';
};
</script>

<template>
  <nav
    class="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200"
  >
    <!-- Menu Button on the Left -->
    <button
      @click="navigateToHome"
      class="px-4 py-2 text-sm font-semibold rounded-md text-neutral-700 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
    >
      Menu
    </button>

    <!-- Title Centered -->
    <div class="mx-auto text-2xl font-bold text-green-800">Vue</div>

    <!-- GitHub Link on the Right -->
    <a
      href="https://github.com/j-casimiro"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm font-medium underline transition-colors text-neutral-500 hover:text-black decoration-neutral-500"
    >
      @j-casimiro
    </a>
  </nav>
</template>
