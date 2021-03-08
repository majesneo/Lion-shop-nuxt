<template>
  <div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
    <div class="container">
      <h1 style="text-transform: capitalize" class="page-title">
        {{ title }}<span>Shop</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
      default: 'TITLE'
    }
  }
}
</script>

<style scoped>

</style>
