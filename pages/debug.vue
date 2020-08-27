<template>
  <div>
    <div>
      <field-input v-model="value"/>
    </div>
    <div>
      {{ value }}
    </div>
    <div>
      <input type="text" class="form-input" v-model:value="value">
    </div>
  </div>
</template>

<script>
import FieldInput from '@/components/FieldInput'
export default {
  name: 'debug',
  components: { FieldInput },
  data() {
    return {
      value: '123'
    }
  },
  watch: {
    value() {
      this.value = this.value.toUpperCase()
    }
  }
}
</script>

<style scoped>

</style>
