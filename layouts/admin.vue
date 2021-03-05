<template>
  <b-row>
    <b-col md="2">
      <app-aside />
    </b-col>
    <b-col md="10">
      <nuxt />
    </b-col>
  </b-row>
</template>

<script>
import AppAside from '@/components/Admin/Aside'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'Admin',

  components: {
    AppAside
  },
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
