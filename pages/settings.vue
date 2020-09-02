<template>
  <div class="bg-gray-50">
    <layout-container class="py-6">
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

                <!-- identify icon -->
                <div v-show="$store.state.address" class="flex justify-center">
                  <ident-icon :value="$store.state.address"
                              class="mt-2 w-12 h-12 rounded-full border border-gray-100 shadow-md"/>
                </div>


                <!-- address -->
                <layout-input :class="{ 'mt-6': address }"
                              name="address"
                              label="Address"

                              :value.sync="address"
                              input-class="bg-gray-50 text-sm text-gray-400"
                              :readonly="true"/>

                <!-- private key -->
                <layout-input v-show="showPrivateKey"
                              class="mt-6"
                              name="private-key"
                              label="Private key"

                              :value.sync="privateKey"
                              input-class="text-sm"
                              description="Private key description"/>

              </div>

              <div class="px-4 py-3 flex items-center justify-between bg-gray-50 text-right sm:px-6">
                <layout-switch :is-on.sync="showPrivateKey">
                  <template #textOn>
                    Show private key option
                  </template>

                  <template #textOff>
                    Hide private key option
                  </template>
                </layout-switch>

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
                <layout-input name="socks5-port"
                              label="Socks5 port"

                              :value.sync="socks5Port"
                              input-class="text-sm"

                              placeholder="1 - 65535, default: 5678"
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
    </layout-container>
  </div>
</template>

<script>
import LineBetween from '@/components/LineBetween'
import IdentIcon from '@/components/IdentIcon'
import LayoutSwitch from '@/components/LayoutSwitch'
import LayoutContainer from '@/components/LayoutContainer'
import LayoutInput from '@/components/LayoutInput'

export default {
  name: 'settings',
  components: { LayoutInput, LayoutContainer, LayoutSwitch, IdentIcon, LineBetween },
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
