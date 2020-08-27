<template>
  <div class="bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6">

      <!-- Account -->
      <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Account
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-600">
                VOKEN wallet information
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white sm:p-6">

                <!-- address -->
                <labeled-input name="address"
                               label="Address"

                               :value.sync="address"
                               input-class="bg-gray-50 text-sm text-gray-400"
                               :readonly="true"/>

                <!-- identify icon -->
                <div v-show="$store.state.address" class="mt-6">
                  <label class="block text-sm font-medium leading-5 label">
                    Identify icon
                  </label>

                  <ident-icon :value="$store.state.address"
                              class="mt-2 w-12 h-12 rounded-full border border-gray-100 shadow-md"/>
                </div>

                <!-- private key -->
                <labeled-input v-show="showPrivateKey"
                               class="mt-6"
                               name="private-key"
                               label="Private key"

                               :value.sync="privateKey"
                               input-class="text-sm"
                               description="Private key description"/>
              </div>

              <div class="px-4 py-3 flex items-center justify-between bg-gray-50 text-right sm:px-6">
                <div class="flex items-center space-x-4 text-sm">
                  <switch-on :isOn.sync="showPrivateKey"/>

                  <span v-show="showPrivateKey" class="text-gray-500">
                    Show private key option
                  </span>
                  <span v-show="!showPrivateKey" class="text-gray-400">
                    Hide private key option
                  </span>
                </div>

                <button class="btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <line-between/>

      <!-- proxy configuration -->
      <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Proxy
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-600">
                Proxy configuration
              </p>
            </div>
          </div>

          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white sm:p-6">

                <!-- socks5 port -->
                <labeled-input name="socks5-port"
                               label="Socks5 port"

                               :value.sync="socks5Port"
                               input-class="text-sm"

                               placeholder="1 - 65535, default: 7890"
                               description="Listening port for the Socks5 proxy"/>
              </div>

              <div class="px-4 py-3 flex items-center justify-between bg-gray-50 text-right sm:px-6">
                <div></div>

                <button class="btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import LineBetween from '@/components/LineBetween'
import IdentIcon from '@/components/IdentIcon'
import SwitchOn from '@/components/SwitchOn'
import LabeledInput from '@/components/LabeledInput'

export default {
  name: 'settings',
  components: { LabeledInput, SwitchOn, IdentIcon, LineBetween },
  data() {
    return {
      test: '123',
      address: this.$store.state.address,
      privateKey: '',
      showPrivateKey: false,
      socks5Port: ''
    }
  },
  watch: {
    test() {
      this.test = parseFloat(this.test)
      console.log('test', this.test)
    }
  },
  methods: {
    togglePrivateKey() {
      this.showPrivateKey = !this.showPrivateKey
    }
  }
}
</script>

<style scoped>
</style>
