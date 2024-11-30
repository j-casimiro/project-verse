<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './components/Vue/reusables/NavBar.vue';
import Card from './components/Vue/reusables/Card.vue';
import HelloWorld from './components/Vue/HelloWorld.vue';

const isModalOpen = ref(false);
const modalContent = ref<string | null>(null);

const openModal = (content: string) => {
  modalContent.value = content;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalContent.value = null;
};

const components = [
  {
    title: 'Drag and Drop',
    description: 'Drag and Drop',
    component: HelloWorld,
  },
];
</script>

<template>
  <div class="flex flex-col justify-center items-center bg-neutral-100">
    <!-- Navbar with sticky positioning -->
    <div class="sticky top-0 z-50 w-full">
      <Navbar />
    </div>

    <!-- Content Section -->
    <div
      class="flex flex-wrap gap-6 justify-center mt-[30px] w-full m-[50px]"
      :style="{ minHeight: 'calc(100vh - 200px)' }"
    >
      <Card
        v-for="(item, index) in components"
        :key="index"
        :title="item.title"
        :description="item.description"
        @click="openModal(item.component as any)"
      />
    </div>

    <!-- Modal or Fullscreen Panel -->
    <div
      v-if="isModalOpen"
      class="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-70"
      @click="closeModal"
    >
      <div
        class="overflow-auto relative p-6 w-full h-full bg-white rounded-lg"
        @click.stop
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 p-2 rounded-full text-neutral-800 bg-neutral-200 hover:bg-neutral-300 hover:text-neutral-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Render the dynamic component here -->
        <component :is="modalContent" />
      </div>
    </div>
  </div>
</template>
