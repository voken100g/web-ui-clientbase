<template>
  <div class="my-6">
    <h1 class="text-2xl text-gray-500">Get mountains via axios:</h1>

    <div class="mt-4">
      <div v-for="mountain in mountains">
        {{ mountain.title }}
      </div>
    </div>
  </div>
</template>

<script>
import * as client from '../utils/client'

export default {
  name: 'transactions',
  data() {
    return {
      mountains: [],
    }
  },
  mounted: async function() {
    await this.fetchSomething()
  },
  methods: {
    async fetchSomething() {

      await client.getMountains()
        .then(({ data }) => {
          this.mountains = data
        })

      await client.get404()
        .then(({ data }) => {
          console.log('data', data)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
