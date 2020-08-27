<template>
  <div class="">
    <input class="form-input" :value="value" @input="input">
  </div>
</template>

<script>
export default {
  name: 'FieldInput',
  props: {
    value: {
      default: ""
    }
  },
  data() {
    return{

    }
  },
  methods:{
    input(event){
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>
