<template>
  <div>
    <SiteNav/>
    <Nuxt/>
    <PreviewEdition class="my-20"/>
  </div>
</template>

<script>
import SiteNav from '../components/SiteNav'
import PreviewEdition from '@/components/PreviewEdition'

export default {
  name: 'completed',
  components: { PreviewEdition, SiteNav }
}

</script>

<style scoped>

</style>
