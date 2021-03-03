<template>
  <b-breadcrumb>
    <b-breadcrumb-item to="/admin/list/post">Post</b-breadcrumb-item>
    <b-breadcrumb-item to="">{{ $route.params.id }}</b-breadcrumb-item>
  </b-breadcrumb>
  <!--  <nav aria-label="breadcrumb" class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/admin/list/post">Post</nuxt-link>
          </li>
          <li class="breadcrumb-item">
            <nuxt-link to="">{{ $route.params.id }}</nuxt-link>
          </li>
        </ol>
      </div>
    </nav>-->
</template>

<script>
export default {
  name: "Breadcrumb"
}
</script>

<style scoped>

</style>
