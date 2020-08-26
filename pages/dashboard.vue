<template>
  <div class="pt-6">
    <!-- wallet -->
    <div v-show="$store.state.address"
         class="flex flex-col lg:flex-row items-center justify-center text-center space-y-2 lg:space-y-0 space-x-8">
      <div class="flex items-center justify-center space-x-6">
        <fa :icon="['fas', 'wallet']" class="text-4xl text-gray-500"/>
        <span class="text-lg sm:text-xl lg:text-2xl text-gray-400">
          {{ $store.state.address }}
        </span>
      </div>

      <div v-show="$store.state.balance"
           class="flex items-center justify-center space-x-2">
        <div class="font-extrabold text-lg lg:text-xl text-indigo-600">
          {{ balance }}
        </div>
        <div class="text-base lg:text-lg text-gray-400">
          Voken
        </div>
      </div>
    </div>

    <!-- dashboard -->
    <div class="mt-6 flex flex-col md:flex-row">

      <!-- proxy containers -->
      <ul class="md:self-start md:w-1/2 lg:w-1/3 grid grid-cols-1 gap-y-4">
        <li v-for="proxy in this.$store.state.proxies" class="proxy-card" :class="{ 'connected': proxy.connected }">
          <div class="proxy-ident-icon-wrap">
            <ident-icon class="proxy-ident-icon" :value="proxy.address"/>
          </div>

          <div class="proxy-wrap">
            <div class="proxy-info">
              <h3 class="proxy-country">
                {{ proxy.country }}
              </h3>
              <span v-if="true" class="proxy-multiple">
                x{{ proxy.multiple }}
              </span>
            </div>

            <p class="proxy-address">
              {{ proxy.address }}
            </p>
          </div>

          <button v-show="proxy.connected"
                  class="btn-connect"
                  @click="setProxyDisconnected"
          >
            <fa :icon="['fas', 'bolt']"/>
          </button>
          <button v-show="!proxy.connected"
                  class="btn-connect"
                  @click="setProxyConnected(proxy.id)"
          >
            <fa :icon="['fas', 'bolt']"/>
          </button>

        </li>
      </ul>

      <!-- panel -->
      <div class="mt-6 md:mt-0 md:ml-4 md:self-start md:flex-grow">

        <!-- data board -->
        <div v-show="this.$store.state.connected.unpaidTraffic"
             class="bg-gray-50 pt-6 lg:pt-8">
          <div class="max-w-screen-xl mx-auto px-2 lg:px-4">
            <div class="max-w-4xl mx-auto text-center">
              <h2 class="text-2xl leading-5 font-extrabold text-gray-900 lg:text-3xl lg:leading-5">
                Data board
              </h2>
              <p class="mt-3 text-lg leading-7 text-gray-500 sm:mt-4">
                For current connection
              </p>
            </div>
          </div>
          <div class="mt-4 pb-6 bg-white lg:pb-8">
            <div class="relative">
              <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div class="relative max-w-screen-xl mx-auto px-8 md:px-4 lg:px-8">
                <div class="max-w-4xl mx-auto">
                  <dl class="rounded-lg bg-white shadow-lg lg:grid lg:grid-cols-3">
                    <div class="current-connection-grid border-b lg:border-0 lg:border-r">
                      <dt>
                        Down speed
                      </dt>
                      <dd>
                        {{ bytesDisplay(this.$store.state.connected.downSpeed) }}/s
                      </dd>
                    </div>
                    <div class="current-connection-grid border-t border-b lg:border-0 lg:border-l lg:border-r">
                      <dt>
                        Up speed
                      </dt>
                      <dd>
                        {{ bytesDisplay(this.$store.state.connected.upSpeed) }}/s
                      </dd>
                    </div>
                    <div class="current-connection-grid border-t lg:border-0 lg:border-l">
                      <dt>
                        UnPaid traffic
                      </dt>
                      <dd>
                        {{ bytesDisplay(this.$store.state.connected.unpaidTraffic) }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import IdentIcon from '~/components/IdentIcon'

export default {
  name: 'dashboard',
  components: { IdentIcon },
  data() {
    return {}
  },
  computed: {
    balance() {
      return (this.$store.state.balance / 1000000).toFixed(6)
    }
  },
  watch: {},
  mounted: async function() {
    await this.syncAddress()
    await this.syncBalance()
    await this.syncProxies()
    await this.setProxyConnected(this.randomInt(3))
  },
  methods: {
    bytesDisplay(n) {
      if (n < 1000) {
        return n + ' B'
      } else if (n < 1000000) {
        return (n / 1000).toFixed(1) + ' KB'
      } else if (n < 1000000000) {
        return (n / 1000000).toFixed(1) + ' MB'
      }
      return (n / 1000000000).toFixed(1) + 'GB'
    },
    randomInt(max) {
      return Math.floor(Math.random() * (max + 1))
    },
    async syncAddress() {
      await this.$store.dispatch('SET_ADDRESS', 'vfhs98j2y1W5u1y7Q4ap9A5f6bWu7A5rp')
    },
    async syncBalance() {
      await this.$store.dispatch('SET_BALANCE', this.randomInt(20000000000))
    },
    async syncProxies() {
      await this.$store.dispatch('SET_PROXIES', [
        {
          id: 0,
          connected: false,
          country: 'United States',
          address: 'vQrFr6k03QEC7H063WeP3hQE11DhaRQcR',
          multiple: 1
        },
        {
          id: 1,
          connected: false,
          country: 'Hong Kong',
          address: 'vxC7BbcSsVMMK8s73891smmgY24qmyVNK',
          multiple: 0.2
        },
        {
          id: 2,
          connected: false,
          country: 'United States',
          address: 'vxvyEU8DNgURkA36cxxTSqfc75f7DDS4S',
          multiple: 30
        },
        {
          id: 3,
          connected: false,
          country: 'Japan',
          address: 'vn6DEy87mm1wY5458Rj4xKWh4M6tSkbm5',
          multiple: 20
        }
      ])
    },
    async setProxyConnected(proxyId) {
      await this.$store.dispatch('SET_PROXY_CONNECTED', proxyId)
      await this.updateConnected()
      await this.keepSyncConnected()
    },
    async setProxyDisconnected() {
      // await this.$store.dispatch('SET_CONNECTED_UNPAID_TRAFFIC', 0)
      await this.$store.dispatch('SET_CONNECTED_DOWN_SPEED', 0)
      await this.$store.dispatch('SET_CONNECTED_UP_SPEED', 0)
      await this.$store.dispatch('SET_PROXY_DISCONNECTED')
      await this.$store.dispatch('CLEAR_CONNECTED_INTERVAL')
    },
    async updateConnected() {
      await this.$store.dispatch(
        'SET_CONNECTED_UNPAID_TRAFFIC',
        this.$store.state.connected.unpaidTraffic + this.$store.state.connected.downSpeed
      )
      await this.$store.dispatch('SET_CONNECTED_DOWN_SPEED', this.randomInt(300000))
      await this.$store.dispatch('SET_CONNECTED_UP_SPEED', this.randomInt(100000))
    },
    async keepSyncConnected() {
      if (!this.$store.state.connected.updateInterval) {
        await this.$store.dispatch('SET_CONNECTED_INTERVAL',
          window.setInterval(this.updateConnected, 1000)
        )
      }
    }
  }
}
</script>

<style scoped>
.proxy-card {
  @apply col-span-1 flex bg-white rounded-lg shadow;
}

.proxy-card:nth-child(even) {
  @apply bg-indigo-50;
}

.proxy-card:nth-child(odd) {
  @apply bg-teal-50;
}

.proxy-card.connected {
  @apply bg-green-500;
}

.proxy-ident-icon-wrap {
  @apply pl-4 flex-shrink-0 flex items-center;
}

.proxy-ident-icon {
  @apply w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 border-2 border-gray-200 shadow;
}

.connected .proxy-ident-icon {
  @apply border-2 border-white;
}


.proxy-wrap {
  @apply p-4 flex-grow truncate;
}

.proxy-info {
  @apply flex items-center justify-between;
}

.proxy-country {
  @apply text-gray-900 text-base leading-5 font-medium truncate;
}

.connected .proxy-country {
  @apply text-white;
}

.proxy-multiple {
  @apply flex-shrink-0 inline-block px-2 py-0 text-teal-800 text-xs leading-4 font-medium bg-teal-200 rounded-full
}

.connected .proxy-multiple {
  @apply bg-gray-50 text-green-500;
}

.proxy-address {
  @apply mt-1 text-gray-500 text-sm leading-5 truncate;
}

.connected .proxy-address {
  @apply text-gray-200;
}

.btn-connect {
  @apply px-4 border-transparent rounded-r-lg bg-indigo-500;
  @apply text-white text-xl;
@qpply transition duration-150 ease-in-out;
}

.btn-connect:hover {
  @apply bg-indigo-400;
}

.btn-connect:focus {
  @apply outline-none border-indigo-600;
}

.btn-connect:active {
  @apply bg-indigo-600;
}

.connected .btn-connect {
  @apply bg-green-600;
}

.connected .btn-connect:hover {
  @apply bg-red-500;
}

.connected .btn-connect:focus {
  @apply bg-red-600;
}

.connected .btn-connect:active {
  @apply bg-red-800;
}

.current-connection-grid {
  @apply flex flex-col border-t border-b border-gray-100 p-6 pb-4 text-center;
}

.current-connection-grid dt {
  @apply order-2 mt-2 text-sm leading-6 font-medium text-gray-500;
}

.current-connection-grid dd {
  @apply order-1 text-2xl leading-none font-extrabold text-indigo-600;
}
</style>
