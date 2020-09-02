<template>
  <layout-container class="py-6">
    <layout-input class="mt-8"
                  name="amount"
                  label="Label"

                  description="Hello world">
    </layout-input>
  </layout-container>
</template>

<script>
import LayoutInput from '@/components/LayoutInput'
import LayoutContainer from '@/components/LayoutContainer'

export default {
  name: 'input',
  components: { LayoutContainer, LayoutInput },
  data() {
    return {
      amount: '16'
    }
  }
}
</script>

<style scoped>

</style>
