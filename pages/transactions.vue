<template>
  <div class="container mx-auto sm:px-6 lg:px-8 py-6">
    <h1>
      Transactions
    </h1>

    <div class="mt-6 flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-4">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 truncate">
              <thead>
              <tr>
                <th>
                  Txn Hash
                </th>
                <th>
                  Value
                </th>
                <th>
                </th>
                <th>
                  Address
                </th>
                <th>
                  Fee
                </th>
                <th>
                  Block
                </th>
                <th>
                  Age
                </th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="txn in transactions">
                <td class="font-mono">
                  {{ txn.hash.slice(0, 20) }}...
                </td>
                <td>
                  {{ txn.value / 1000000 }}
                </td>
                <td class="text-center uppercase">
                  {{ txn.type }}
                </td>
                <td class="font-mono">
                  {{ txn.address }}
                </td>
                <td>
                  {{ (txn.fee / 1000000).toFixed(6) }}
                </td>
                <td>
                  {{ txn.block }}
                </td>
                <td>
                  {{ $moment(txn.timestamp).fromNow() }}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!--    <h1 class="text-2xl text-gray-500">Get mountains via axios:</h1>-->

    <!--    <div class="mt-4">-->
    <!--      <div v-for="mountain in mountains">-->
    <!--        {{ mountain.title }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import * as bip39 from 'bip39'
import * as HDKey from 'hdkey'
import * as crypto from 'crypto'
import vokenAddress from '../utils/voken-address'
import * as client from '../utils/client'
import * as fn from '../utils/functions'

export default {
  name: 'transactions',
  data() {
    return {
      transactions: [],

      mnemonic: null,
      masterSeed: null,
      hdKey: null,
      root_path: 'm/44\'/678\'/0\'/0/',

      mountains: []
    }
  },
  mounted: async function() {
    this.mnemonic = bip39.generateMnemonic(192)

    await bip39.mnemonicToSeed(this.mnemonic).then(seed => {
      this.masterSeed = seed
      this.hdKey = HDKey.fromMasterSeed(seed)
    })

    let block = 30000 + fn.randomInt(10000)
    let m = this.$moment()

    for (let i = 0; i < 20; i++) {
      let _id = this.transactions.length
      let _path = this.root_path + _id
      let _hdKey = this.hdKey.derive(_path)
      let _pubKey = _hdKey.publicKey

      block -= fn.randomInt(100)
      m = m.subtract(fn.randomInt(30), 'minutes')

      let value = fn.randomInt(20000000)

      this.transactions.push({
        hash: crypto.createHash('sha256').update(_pubKey).digest('hex'),
        block: block,
        timestamp: m.valueOf(),
        type: fn.randomInt(1) ? 'to' : 'from',
        address: vokenAddress.pubToAddress(_pubKey),
        value: value,
        fee: Math.min(10000, Math.max(1000, value / 1000))
      })
    }

    await this.fetchSomething()
  },
  methods: {
    async fetchSomething() {

      await client.getMountains()
        .then(({ data }) => {
          this.mountains = data
        })

      console.log('>>> this.mountains', this.mountains)

      // await client.get404()
      //   .then(({ data }) => {
      //     console.log('data', data)
      //   })
      //   .catch(err => {
      //     console.error(err)
      //   })
    }
  }
}
</script>

<style scoped>


table thead tr {
  @apply bg-gray-50;
}

table thead th {
  @apply px-4 py-3 text-sm text-left leading-4 font-medium text-gray-500 tracking-wider;
}

table tbody tr:nth-child(odd) {
  @apply bg-white;
}

table tbody tr:nth-child(even) {
  @apply bg-gray-50;
}

table tbody tr:hover {
  @apply bg-indigo-50;
}

table tbody td {
  @apply px-4 py-3 text-xs leading-5 text-gray-500 truncate;
}
</style>
