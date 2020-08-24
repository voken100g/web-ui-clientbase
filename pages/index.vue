<template>
  <div class="container flex justify-center items-center text-center mx-auto">
    <div class="mt-20">
      <h1 class="font-light text-6xl text-gray-700 tracking-tight">
        Proxy ClientBase
      </h1>

      <div class="mt-12">
        <div class="mt-2">
          <nuxt-link to="/dashboard">Dashboard</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
a {
  @apply ml-2;
  @apply inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600;
  @apply transition ease-in-out duration-150;
}

a:first-child {
  @apply ml-0;
}

a:hover {
  @apply bg-indigo-500;
}

a:focus {
  @apply outline-none border-indigo-700 shadow-outline-indigo;
}

a:active {
  @apply bg-indigo-700;
}
</style>
