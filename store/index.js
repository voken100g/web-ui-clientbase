export const state = () => ({
  address: null,
  balance: null,
  proxies: [],
  connected: {
    downSpeed: 0,
    upSpeed: 0,
    unpaidTraffic: 0,
    updateInterval: null
  }
})


export const mutations = {
  SET_ADDRESS(state, address) {
    state.address = address
  },
  SET_BALANCE(state, balance) {
    state.balance = balance
  },
  SET_PROXIES(state, proxies) {
    state.proxies = proxies
  },
  SET_PROXY_CONNECTED(state, proxyId) {
    let proxyIndex = null
    state.proxies.forEach(function(proxy, index) {
      if (proxyId === proxy.id) {
        proxyIndex = index
        return false
      }
    })

    if (proxyIndex || proxyIndex === 0) {
      state.proxies.forEach(function(proxy, index) {
        if (proxyId !== proxy.id) {
          state.proxies[index].connected = false
        }
      })

      state.proxies[proxyIndex].connected = true
    }
  },
  SET_PROXY_DISCONNECTED(state) {
    state.proxies.forEach(function(proxy, index) {
      state.proxies[index].connected = false
    })
  },
  SET_CONNECTED_DOWN_SPEED(state, downSpeed) {
    state.connected.downSpeed = downSpeed
  },
  SET_CONNECTED_UP_SPEED(state, upSpeed) {
    state.connected.upSpeed = upSpeed
  },
  SET_CONNECTED_UNPAID_TRAFFIC(state, unpaidTraffic) {
    state.connected.unpaidTraffic = unpaidTraffic
  },
  SET_CONNECTED_INTERVAL(state, updateInterval) {
    state.connected.updateInterval = updateInterval
  },
  CLEAR_CONNECTED_INTERVAL(state) {
    clearInterval(state.connected.updateInterval)
    state.connected.updateInterval = null
  }
}


export const actions = {
  SET_ADDRESS({ commit }, address) {
    commit('SET_ADDRESS', address)
  },
  SET_BALANCE({ commit }, balance) {
    commit('SET_BALANCE', balance)
  },
  SET_PROXIES({ commit }, proxies) {
    commit('SET_PROXIES', proxies)
  },
  SET_PROXY_CONNECTED({ commit }, proxyId) {
    commit('SET_PROXY_CONNECTED', proxyId)
  },
  SET_PROXY_DISCONNECTED({ commit }) {
    commit('SET_PROXY_DISCONNECTED')
  },
  SET_CONNECTED_DOWN_SPEED({ commit }, downSpeed) {
    commit('SET_CONNECTED_DOWN_SPEED', downSpeed)
  },
  SET_CONNECTED_UP_SPEED({ commit }, upSpeed) {
    commit('SET_CONNECTED_UP_SPEED', upSpeed)
  },
  SET_CONNECTED_UNPAID_TRAFFIC({ commit }, unpaidTraffic) {
    commit('SET_CONNECTED_UNPAID_TRAFFIC', unpaidTraffic)
  },
  SET_CONNECTED_INTERVAL({ commit }, updateInterval) {
    commit('SET_CONNECTED_INTERVAL', updateInterval)
  },
  CLEAR_CONNECTED_INTERVAL({ commit }) {
    commit('CLEAR_CONNECTED_INTERVAL')
  }
}
