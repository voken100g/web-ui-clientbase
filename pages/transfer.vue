<template>
  <div class="py-6">
    <div class="bg-gray-800 max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="lg:flex lg:items-center">
        <div class="lg:w-0 lg:flex-1">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Transfer
          </h2>
          <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Send transaction on vnCHAIN.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-6 py-12 px-4 md:px-6 bg-gray-50">
      <div class="wallet-icon-wrap" :class="{ 'success': toAddressSuccess, 'error': toAddressError }">
        <fa :icon="['fas', 'paper-plane']"/>
      </div>

      <!-- To Address -->
      <div class="mt-6">
        <label for="to-address" :class="{ 'success': toAddressSuccess, 'error': toAddressError }">
          To address
        </label>

        <div class="mt-4 relative">
          <input id="to-address"
                 ref="to-address"
                 class="form-input ipt"
                 :class="{ 'success': toAddressSuccess, 'error': toAddressError }"
                 v-model="toAddress"
                 placeholder="Recipient VOKEN address"/>

          <div v-show="toAddressSuccess" class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <ident-icon :value="toAddress" class="w-10 h-10 rounded-full border-2 border-green-50 shadow-md"/>
          </div>
        </div>

        <p v-show="toAddressError" class="ipt-p error">
          Not a valid VOKEN wallet address.
        </p>
      </div>

      <!-- Amount -->
      <div class="mt-8">
        <label for="amount" :class="{ 'success': amountSuccess, 'error': amountError }">
          Amount
        </label>

        <div class="mt-4">
          <input id="amount"
                 ref="amount"
                 class="form-input ipt"
                 :class="{ 'success': amountSuccess, 'error': amountError }"
                 type="tel"
                 v-model="amount"
                 :placeholder="amountPlaceHolder"/>
        </div>

        <p v-show="amountError" class="ipt-p error">
          Not enough VOKEN to send.
        </p>
      </div>

      <div class="mt-12 text-right">
        <button class="btn">
          <div class="py-1 px-4 text-base">
            Send
          </div>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import IdentIcon from '~/components/IdentIcon'
import vokenAddress from '../utils/voken-address'

export default {
  name: 'transfer',
  components: { IdentIcon },
  layout: 'completed',
  data() {
    return {
      toAddress: '',
      amount: ''
    }
  },
  watch: {
    amount() {
      if (this.amount) {
        let amount = ('' + this.amount)
          .replace(/[^\d.]/g, '')
          .replace(/\.{2,}/g, '.')
          .replace('.', '#')
          .replace(/\./g, '')
          .replace('#', '.')
          .replace(/^(\d+)\.(\d{0,6}).*$/, '$1.$2')

        if (amount === '') {
          this.amount = amount
        } else if (amount.slice(-1) === '.') {
          this.amount = parseFloat(amount) + '.'
        } else {
          this.amount = parseFloat(amount)
        }
      }
    }
  },
  mounted: async function() {
  },
  computed: {
    toAddressSuccess() {
      return vokenAddress.isAddress(this.toAddress)
    },
    toAddressError() {
      return this.toAddress && !this.toAddressSuccess
    },
    amountPlaceHolder() {
      return 'Maximum: ' + this.$store.state.balance / 1000000 + ' VOKEN'
    },
    amountAffordable() {
      return this.amount * 1000000 <= this.$store.state.balance
    },
    amountSuccess() {
      return this.amount && this.amountAffordable
    },
    amountError() {
      return this.amount && !this.amountAffordable
    }
  }
}
</script>

<style scoped>
.wallet-icon-wrap {
  @apply text-center text-4xl text-gray-800;
}

.wallet-icon-wrap.success {
  @apply text-green-800;
}

.wallet-icon-wrap.error {
  @apply text-red-800;
}

label {
  @apply block text-xl font-medium leading-5;
}

.ipt {
  @apply block w-full px-4 py-4;
}

.ipt-p {
  @apply mt-2 ml-2 text-base leading-5;
}
</style>
