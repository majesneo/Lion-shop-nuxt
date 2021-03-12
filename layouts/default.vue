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
      this.makeToast('b-toaster-top-center', 'danger', message.response.data.error.message || message)
    }
  }
}
</script>
<style>

</style>
