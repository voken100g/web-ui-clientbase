<template>
  <div>
    <label v-show="label" :for="name"
           class="block text-sm font-medium leading-5 label" :class="[labelClass, status]">{{ label }}</label>

    <div class="relative rounded-md shadow-sm" :class="[{'mt-1':label}, wrapClass]">
      <input class="form-input w-full ipt" :class="[inputClass, status]"

             :id="name"
             :type="type"

             :value="value"
             :placeholder="inputPlaceholder"
             :readonly="readonly"
             @input="input">

      <div v-show="withIcon && status==='success'" class="ipt-icon" :class="[status]">
        <svg-success/>
      </div>

      <div v-show="withIcon && status==='warning'" class="ipt-icon" :class="[status]">
        <svg-warning/>
      </div>

      <div v-show="withIcon && status==='error'" class="ipt-icon" :class="[status]">
        <svg-error/>
      </div>
    </div>

    <p v-show="description"
       class="mt-1 ml-1 text-sm ipt-p" :class="[descriptionClass, status]">{{ description }}</p>
  </div>
</template>

<script>

import SvgSuccess from '@/components/SvgSuccess'
import SvgWarning from '@/components/SvgWarning'
import SvgError from '@/components/SvgError'

export default {
  name: 'LayoutInput',
  components: { SvgSuccess, SvgWarning, SvgError },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    label: String,
    labelClass: {},
    value: String,
    placeholder: String,
    inputClass: {},
    wrapClass: {},
    description: String,
    descriptionClass: {},

    withIcon: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    status: String
  },
  data() {
    return {
      //
    }
  },
  watch: {
    //
  },
  computed: {
    inputPlaceholder() {
      if (!this.placeholder) {
        return this.label
      }

      return this.placeholder
    }
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
