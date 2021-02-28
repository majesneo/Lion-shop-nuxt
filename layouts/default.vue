<template>
  <div class="page-wrapper">
    <app-head-navigation/>
    <main class="main">
      <nuxt/>
    </main>
    <app-footer/>
  </div>
</template>

<script>


import AppHeadNavigation from "@/components/HeadNavigation";
import AppFooter from "@/components/Footer";

export default {
  components: {
    AppHeadNavigation,
    AppFooter
  }
}
</script>
<style>

</style>

