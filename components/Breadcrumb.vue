<template>
  <b-breadcrumb>
    <b-breadcrumb-item to="/admin/list/posts">
      Post
    </b-breadcrumb-item>
    <b-breadcrumb-item to="">
      {{ $route.params.id }}
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style scoped>

</style>
