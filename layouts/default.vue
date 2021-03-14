<template>
  <div class="page-wrapper">
    <app-head-navigation />
    <main class="main">
      <nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>

import AppHeadNavigation from '@/components/HeadNavigation'
import AppFooter from '@/components/Footer'
import mixinToast from '@/mixins/mixinToast'

export default {

  components: {
    AppHeadNavigation,
    AppFooter
  },
  mixins: [mixinToast],
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (message) {
      const currentMessage = message.message || message.response.data.error.message
      try {
        this.makeToast(
          'b-toaster-top-center',
          'danger',
          currentMessage)
      } catch (e) {

      }
    }
  }
}
</script>
<style>

</style>
