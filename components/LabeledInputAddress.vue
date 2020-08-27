<template>
  <div>
    <label v-show="label"
           :for="name"
           class="block text-sm font-medium leading-5 label"
           :class="[labelClass, statusClass]"
    >
      {{ label }}
    </label>

    <div class="mt-1 relative rounded-md shadow-sm"
         :class="inputWrapClass"
    >
      <input :id="name"
             type="text"
             class="form-input w-full py-4 ipt"
             :class="[inputClass, statusClass]"
             v-model="inputValue"
             :placeholder="inputPlaceholder">

      <div v-show="statusClass==='success'" class="ipt-ident-icon">
        <ident-icon :value="inputValue" class="w-10 h-10 rounded-full border-2 border-green-50 shadow-md"/>
      </div>
      <div v-show="statusClass==='error'" class="ipt-icon">
        <svg-error class="h-5 w-5 text-red-600"/>
      </div>
    </div>

    <p v-show="statusClass==='error'"
       class="mt-1 ml-1 text-sm ipt-p"
       :class="[descriptionClass, statusClass]">
      Not a valid VOKEN wallet address
    </p>
  </div>
</template>

<script>
import IdentIcon from '~/components/IdentIcon'
import vokenAddress from '../utils/voken-address'
import SvgError from '@/components/SvgError'

export default {
  name: 'LabeledInputAddress',
  components: { SvgError, IdentIcon },
  props: {
    name: String,
    label: String,

    value: {},
    placeholder: String,

    labelClass: {},
    inputClass: {},
    inputWrapClass: {},
    descriptionClass: {}
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  watch: {
    inputValue() {
      this.$emit('update:value', this.inputValue)
      this.$emit('update:isAddressSuccess', this.inputValue && this.isAddressSuccess)
      this.$emit('update:isAddressError', this.inputValue && !this.isAddressSuccess)
    }
  },
  computed: {
    inputPlaceholder() {
      if (!this.placeholder) {
        return 'VOKEN address'
      }

      return this.placeholder
    },
    isAddressSuccess() {
      return vokenAddress.isAddress(this.inputValue)
    },
    statusClass() {
      if (this.inputValue) {
        return this.isAddressSuccess ? 'success' : 'error'
      }
    }
  }
}
</script>
