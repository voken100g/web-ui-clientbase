<template>
  <div class="lo-error">
    <h1>
      Error
      {{ error.statusCode }}
    </h1>

    <h2>
      {{ error.message }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: ['error']
}
</script>

<style scoped>
.lo-error {
  @apply font-sans text-center;
  padding-top: 10vh;
}

.lo-error h1 {
  @apply font-light tracking-wide text-gray-700 text-5xl;
}

.lo-error h2 {
  @apply font-light tracking-wider text-gray-600 text-2xl;
}
</style>
