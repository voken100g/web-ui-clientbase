<template>
  <div>
    <input type="text" class="form-input" v-model:value="inputValue">
  </div>
</template>

<script>
export default {
  name: 'BindTest',
  props: {
    value: String
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value() {
      this.inputValue = this.value
    },
    inputValue() {
      this.$emit('update:value', this.inputValue)
    }
  }

}
</script>

<style scoped>

</style>
