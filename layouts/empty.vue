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
      console.log(message.response.data.message)
      console.log(message)
      this.makeToast('b-toaster-top-center', 'danger', message.response.data.message)
    }
  }

}
</script>

<style scoped>

</style>
