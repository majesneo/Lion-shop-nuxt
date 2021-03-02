<template>
  <nuxt/>
</template>

<script>
export default {
  name: "empty",
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.makeToast('b-toaster-top-center', 'danger', value)
    }
  },
  methods: {
    makeToast(toaster, variant = null, message) {
      this.$bvToast.toast([message], {
        toaster,
        title: `${variant}`,
        variant: variant,
        solid: true
      })
    }
  }
}
</script>

<style scoped>

</style>
