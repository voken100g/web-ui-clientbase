<template>
  <div class="container py-6">
    <div class="flex items-center space-x-4">
      <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
      <span role="checkbox" tabindex="0" aria-checked="false"
            :class="{ 'bg-indigo-600': showPrivateKey, 'bg-gray-200': !showPrivateKey }"
            @click="togglePrivateKey"
            class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">

        <!-- On: "translate-x-5", Off: "translate-x-0" -->
        <span :class="{ 'translate-x-5': showPrivateKey, 'translate-x-0': !showPrivateKey }"
              aria-hidden="true"
              class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200">

          <!-- On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" -->
          <span :class="{ 'opacity-0 ease-out duration-100': showPrivateKey, 'opacity-100 ease-in duration-200': !showPrivateKey }"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
            <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
              <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </span>

          <!-- On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" -->
          <span :class="{ 'opacity-100 ease-in duration-200': showPrivateKey, 'opacity-0 ease-out duration-100': !showPrivateKey }"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
            <svg class="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
              <path
                d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
            </svg>
          </span>

        </span>
      </span>

      <span v-show="showPrivateKey" class="text-gray-500">
        Show private key option
      </span>
      <span v-show="!showPrivateKey" class="text-gray-400">
        Hide private key option
      </span>
    </div>


    <div v-show="showPrivateKey" class="mt-6 ml-6 mb-10">
      <label for="private-key"
             class="block text-sm font-medium leading-5 text-gray-700"
      >
        Private key
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input id="private-key"
               class="form-input block w-full py-2 px-4 text-sm md:text-base sm:leading-5"
               placeholder="Input your private key here"
               aria-describedby="private-key-description">
      </div>
      <p id="private-key-description"
         class="mt-2 text-sm text-gray-500"
      >
        Private key description.
      </p>
    </div>


    <div class="mt-6 border-t border-gray-200 pt-6">
      <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
        Socks5 port
      </label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input id="email"
               class="form-input block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red sm:text-sm sm:leading-5"
               placeholder="7890"
               value="7890"
               aria-invalid="true"
               aria-describedby="email-error">

        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <p class="mt-2 text-sm text-red-600" id="email-error">
        Port number should be in 1-65535
      </p>
    </div>

    <div class="mt-8">
      <button class="btn">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data() {
    return {
      showPrivateKey: false
    }
  },
  methods: {
    togglePrivateKey() {
      this.showPrivateKey = !this.showPrivateKey
    }
  }
}
</script>

<style scoped>

</style>
