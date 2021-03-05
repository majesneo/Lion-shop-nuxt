<template>
  <div class="error-content text-center" style="background-image: url(assets/images/backgrounds/error-bg.jpg)">
    <div class="container">
      <h1 class="error-title">
        Error 404
      </h1>
      <p>We are sorry, the page you've requested is not available.</p>
      <nuxt-link to="/" class="btn btn-outline-primary-2 btn-minwidth-lg">
        <span>BACK TO HOMEPAGE</span>
        <i class="icon-long-arrow-right" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>

</style>
