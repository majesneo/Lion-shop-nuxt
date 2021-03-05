export default {
  methods: {
    async confirm (title, message) {
      await this.$bvModal.msgBoxConfirm(message, {
        title,
        size: 'sm',
        buttonSize: 'sm',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
    }
  }
}
