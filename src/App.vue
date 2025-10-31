<script setup>
import { useI18n } from 'vue-i18n';
import NewPage from './components/NewPage.vue';

const { locale } = useI18n();
</script>

<template>
  <header class="bg-gray-900 text-white shadow-lg">
    <div class="container mx-auto flex justify-between items-center p-4">
      <h1 class="text-xl font-bold">EDCAT</h1>
      <div class="flex space-x-4">
        <button @click="locale = 'pt-BR'" 
                :class="[locale === 'pt-BR' ? 'bg-indigo-500 font-bold' : 'bg-gray-700']" 
                class="px-3 py-1 rounded-md hover:bg-indigo-600 transition-colors">
          Português
        </button>
        <button @click="locale = 'en-US'" 
                :class="[locale === 'en-US' ? 'bg-indigo-500 font-bold' : 'bg-gray-700']" 
                class="px-3 py-1 rounded-md hover:bg-indigo-600 transition-colors">
          English
        </button>
      </div>
    </div>
  </header>
  <main>
    <NewPage />
  </main>
</template>

<style scoped>
</style>
