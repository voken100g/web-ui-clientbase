<template>
  <layout-container class="py-6">
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
      <div class="transfer-icon-wrap"
           :class="{ 'success': isAddressSuccess && isAmountSuccess, 'error': isAddressError || isAmountError}">
        <fa :icon="['fas', 'paper-plane']"/>
      </div>

      <!-- To address -->
      <layout-input-address class="mt-8"
                            name="to-address"
                            label="To address"

                            :value.sync="toAddress"
                            :isAddressSuccess.sync="isAddressSuccess"
                            :isAddressError.sync="isAddressError"
                            placeholder="Recipient VOKEN address"

                            label-class="text-xl"
                            wrap-class="mt-4"
                            input-class="text-base p-4"
                            description-class="mt-2"/>

      <!-- Amount -->
      <layout-input class="mt-8"
                    name="amount"
                    label="Amount"

                    v-model="amount"
                    :placeholder="amountPlaceHolder"
                    :description="amountDescription"
                    :status="amountStatus"

                    label-class="text-xl"
                    wrap-class="mt-4"
                    input-class="text-base p-4"
                    description-class="mt-2"/>

      <div class="mt-12 text-right">
        <button class="btn">
          <div class="py-1 px-4 text-base">
            Send
          </div>
        </button>
      </div>

    </div>
  </layout-container>
</template>

<script>
import LayoutContainer from '@/components/LayoutContainer'
import LayoutInputAddress from '@/components/LayoutInputAddress'
import LayoutInput from '@/components/LayoutInput'

export default {
  name: 'transfer',
  components: { LayoutInput, LayoutInputAddress, LayoutContainer },
  data() {
    return {
      toAddress: '',
      isAddressSuccess: false,
      isAddressError: false,
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
          if (amount.length > 1) {
            this.amount = parseFloat(amount) + '.'
          }
        } else {
          this.amount = parseFloat(amount)
        }
      }
    }
  },
  mounted: async function() {
  },
  computed: {
    amountPlaceHolder() {
      return 'Maximum: ' + this.$store.state.balance / 1000000 + ' VOKEN'
    },
    amountAffordable() {
      return this.amount * 1000000 <= this.$store.state.balance
    },
    amountStatus() {
      if (this.amount) {
        if (this.amountAffordable) {
          return 'success'
        }
        return 'error'
      }
      return null
    },
    amountDescription() {
      if (this.amountStatus === 'error') {
        return 'Not enough VOKEN to send'
      }
      return ''
    },
    isAmountSuccess() {
      return this.amount && this.amountAffordable
    },
    isAmountError() {
      return this.amount && !this.amountAffordable
    }
  }
}
</script>

<style scoped>
.transfer-icon-wrap {
  @apply text-center text-4xl text-gray-800;
}

.transfer-icon-wrap.success {
  @apply text-green-800;
}

.transfer-icon-wrap.error {
  @apply text-red-800;
}

</style>
