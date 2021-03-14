<template>
  <nuxt />
</template>

<script>
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'Empty',
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

<style scoped>

</style>
