<script setup lang="ts">
import { elements } from './utils/elements';
</script>

<template>
  <div class="p-4 mx-auto max-w-screen-xl">
    <!-- Periodic Table Grid -->
    <div class="grid relative gap-1 grid-cols-18">
      <div
        v-for="element in elements"
        :key="element.atomicNumber"
        :style="{
          gridColumnStart: element.colStart,
          gridRowStart: element.rowStart,
        }"
        :class="[
          'border rounded p-4 text-center text-xs relative',
          element.group === 'nonmetal'
            ? 'bg-blue-500 hover:bg-blue-600 transition-all text-white'
            : element.group === 'alkaliMetal'
            ? 'bg-green-500 hover:bg-green-600 transition-all text-white'
            : element.group === 'alkalineEarth'
            ? 'bg-purple-500 hover:bg-purple-600 transition-all text-white'
            : element.group === 'metalloid'
            ? 'bg-yellow-500 hover:bg-yellow-600 transition-all text-black'
            : element.group === 'halogen'
            ? 'bg-pink-500 hover:bg-pink-600 transition-all text-white'
            : element.group === 'nobleGas'
            ? 'bg-orange-500 hover:bg-orange-600 transition-all text-white'
            : 'bg-gray-200 hover:bg-gray-300 transition-all',
        ]"
      >
        <div class="absolute top-0 left-1 text-[10px] font-bold">
          {{ element.atomicNumber }}
        </div>

        <div class="flex justify-center items-center h-full text-lg font-bold">
          {{ element.symbol }}
        </div>

        <div
          class="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[7px] font-semibold w-full text-center break-words"
        >
          {{ element.name }}
        </div>
      </div>
    </div>
  </div>
</template>
