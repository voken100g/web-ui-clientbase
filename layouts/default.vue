<template>
  <div>
    <SiteNav/>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Nuxt/>
    </div>
  </div>

</template>

<script>
import SiteNav from '../components/SiteNav'

export default {
  name: 'completed',
  components: { SiteNav }
}

</script>

<style scoped>

</style>
