<template>
  <h1>admin page</h1>
</template>

<script>
export default {
  name: "index",
  layout: "admin",
  middleware: "auth-admin"
}
</script>

<style scoped>

</style>
