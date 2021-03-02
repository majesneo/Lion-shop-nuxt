<template>
  <b-breadcrumb class="breadcrumb-nav mt-2">
    <b-breadcrumb-item class="breadcrumb-item" to="/admin/list/post">Post</b-breadcrumb-item>
    <b-breadcrumb-item class="breadcrumb-item" active>{{ $route.params.id }}</b-breadcrumb-item>
  </b-breadcrumb>
  <!--  <nav aria-label="breadcrumb" class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <nuxt-link to="/admin/list/post">Post</nuxt-link>
          </li>
          <li class="breadcrumb-item active">
            <nuxt-link to="">{{ $route.params.id }}</nuxt-link>
          </li>
        </ol>
      </div>
    </nav>-->
</template>

<script>


export default {
  name: "id",
  layout: "admin",
  middleware: "auth-admin",

}
</script>

<style scoped>

</style>
