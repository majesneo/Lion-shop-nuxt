export default {
  methods: {
    makeToast (toaster, variant = null, message) {
      this.$bvToast.toast([message], {
        toaster,
        title: `${variant}`,
        variant,
        solid: true
      })
    }
  }
}
