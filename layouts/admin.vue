<template>
  <b-row>
    <b-col md="2">
      <app-aside/>
    </b-col>
    <b-col md="10">
      <nuxt/>
    </b-col>
  </b-row>
</template>

<script>
import AppAside from "@/components/Admin/Aside";

export default {
  name: "admin",
  components: {
    AppAside,
  }
}
</script>

<style scoped>

</style>
