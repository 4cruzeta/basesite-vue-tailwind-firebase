<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
<div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 xl:px-0 mt-5">
  <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900 text-left">{{ t('home.title') }}</h2>
  <p class="mb-12 text-lg text-gray-500 text-left" v-html="t('home.subtitle')"></p>
  
  <!-- Service Cards Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">

    <!-- Card 1: CuReMAIn -->
    <div class="relative h-full">
      <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
      <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
        <div class="flex items-center -mt-1">
          <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 text-left" v-html="t('home.services.curemain.title')"></h3>
        </div>
        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase text-left">------------</p>
        <p class="mb-2 text-gray-600 text-left" v-html="t('home.services.curemain.description')"></p>
      </div>
    </div>

    <!-- Card 2: RAGA -->
    <div class="relative h-full">
      <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
      <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
        <div class="flex items-center -mt-1">
          <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 text-left" v-html="t('home.services.raga.title')"></h3>
        </div>
        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase text-left">------------</p>
        <p class="mb-2 text-gray-600 text-left" v-html="t('home.services.raga.description')"></p>
      </div>
    </div>

    <!-- Card 3: CybSeS -->
    <div class="relative h-full">
      <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
      <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
        <div class="flex items-center -mt-1">
          <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 text-left" v-html="t('home.services.cybses.title')"></h3>
        </div>
        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase text-left">------------</p>
        <p class="mb-2 text-gray-600 text-left" v-html="t('home.services.cybses.description')"></p>
      </div>
    </div>

    <!-- Card 4: ConSISO -->
    <div class="relative h-full">
      <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
      <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
        <div class="flex items-center -mt-1">
          <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 text-left" v-html="t('home.services.consiso.title')"></h3>
        </div>
        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase text-left">------------</p>
        <p class="mb-2 text-gray-600 text-left" v-html="t('home.services.consiso.description')"></p>
      </div>
    </div>

    <!-- Card 5: TOPS -->
    <div class="relative h-full">
      <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
      <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
        <div class="flex items-center -mt-1">
          <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 text-left" v-html="t('home.services.tops.title')"></h3>
        </div>
        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase text-left">------------</p>
        <p class="mb-2 text-gray-600 text-left" v-html="t('home.services.tops.description')"></p>
      </div>
    </div>

  </div>
</div>
</template>

<style scoped>
/* Estilos específicos do componente */
</style>
