export default {
  methods: {
    makeToast: function (toaster, variant = null, message) {
      this.$bvToast.toast([message], {
        toaster,
        title: `${variant}`,
        variant: variant,
        solid: true
      })
    },
  }
}


