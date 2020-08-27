<template>
  <div>
    <label v-show="label"
           :for="name"
           class="block text-sm font-medium leading-5 label"
           :class="[labelClass, status]"
    >
      {{ label }}
    </label>

    <div class="mt-1 relative rounded-md shadow-sm"
         :class="inputWrapClass"
    >
      <input :id="name"
             :type="type"
             class="form-input w-full ipt"
             :class="[inputClass, status]"
             :value="value"
             @input="input"
             :placeholder="inputPlaceholder"
             :readonly="readonly">

      <div v-show="!noIcon && status==='success'" class="ipt-icon">
        <svg-success class="h-5 w-5 text-green-600"/>
      </div>
      <div v-show="!noIcon && status==='warning'" class="ipt-icon">
        <svg-warning class="h-5 w-5 text-yellow-600"/>
      </div>
      <div v-show="!noIcon && status==='error'" class="ipt-icon">
        <svg-error class="h-5 w-5 text-red-600"/>
      </div>
    </div>

    <p v-show="description"
       class="mt-1 ml-1 text-sm ipt-p"
       :class="[descriptionClass, status]">
      {{ description }}
    </p>
  </div>
</template>

<script>
import SvgSuccess from '@/components/SvgSuccess'
import SvgWarning from '@/components/SvgWarning'
import SvgError from '@/components/SvgError'

export default {
  name: 'LabeledInput',
  components: { SvgSuccess, SvgWarning, SvgError },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    label: String,
    labelClass: {},
    value: {
      default: ''
    },
    placeholder: String,
    inputClass: {},
    inputWrapClass: {},
    description: String,
    descriptionClass: {},

    noIcon: {
      type: Boolean,
      default: false
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
      this.$emit('input', event.target.value);
    }
  }
}
</script>
