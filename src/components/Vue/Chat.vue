<script setup lang="ts">
import { ref } from 'vue';
import { Info } from 'lucide-vue-next';

const messages = ref<string[]>([]);
const userInput = ref<string>('');
const chatContainer = ref<HTMLDivElement | null>(null);
const defaultAvatar = 'https://randomuser.me/api/portraits/men/9.jpg';
const headerAvatar = 'https://randomuser.me/api/portraits/women/9.jpg';

const sendMessage = () => {
  const trimmedMessage = userInput.value.trim();
  if (trimmedMessage !== '') {
    messages.value.push(trimmedMessage);
    userInput.value = '';

    // Scroll to the bottom after adding a message
    nextTickScroll();
  }
};

const nextTickScroll = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};
</script>

<template>
  <div
    class="flex justify-center flex-col h-[500px] w-[600px] border border-gray-300 rounded-2xl overflow-hidden bg-white"
  >
    <div class="flex items-center p-4 border-b border-gray-300 bg-neutral-100">
      <img :src="headerAvatar" alt="Avatar" class="mr-3 w-8 h-8 rounded-full" />
      <div class="flex-1 text-lg font-semibold">Emma Watson</div>
      <button class="text-neutral-500 hover:text-neutral-700">
        <Info />
      </button>
    </div>

    <div
      ref="chatContainer"
      class="flex overflow-y-auto flex-col-reverse flex-1 p-4"
    >
      <div
        v-for="(message, index) in [...messages].reverse()"
        :key="index"
        class="flex justify-end items-center my-1 space-x-2"
      >
        <div
          class="px-5 py-2 rounded-full max-w-[80%] break-words shadow-sm bg-neutral-800 text-neutral-100"
        >
          {{ message }}
        </div>
        <img
          :src="defaultAvatar"
          alt="User Avatar"
          class="w-8 h-8 rounded-full"
        />
      </div>
    </div>

    <div class="flex items-center p-4 border-t border-gray-300 bg-neutral-100">
      <input
        v-model="userInput"
        type="text"
        placeholder="Type a message..."
        @keydown.enter="sendMessage"
        class="flex-1 p-3 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500"
      />
      <button
        @click="sendMessage"
        class="px-4 py-2 ml-3 text-white rounded-lg transition-colors bg-neutral-800 hover:bg-neutral-700"
      >
        Send
      </button>
    </div>
  </div>
</template>
