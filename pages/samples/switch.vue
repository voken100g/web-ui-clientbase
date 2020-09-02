<template>
  <layout-container class="py-6">
    <layout-switch :is-on.sync="on">
      <template #textOn>
        Text ON
      </template>

      <template #textOff>
        Text OFF
      </template>
    </layout-switch>

    <div class="mt-12">
      {{ on }}
    </div>
  </layout-container>
</template>

<script>
import LayoutSwitch from '@/components/LayoutSwitch'
import LayoutContainer from '@/components/LayoutContainer'

export default {
  name: 'switch',
  components: { LayoutContainer, LayoutSwitch },
  data() {
    return {
      on: false
    }
  }
}
</script>

<style scoped>

</style>
