<template>
  <b-nav class="menu admin-menu">
    <b-nav-item to="/admin">
      <b-icon icon="bar-chart"></b-icon>
      Analytics
      <b-dropdown-item to="/admin/products">Products</b-dropdown-item>
      <b-dropdown-item to="/admin/post">Post</b-dropdown-item>
    </b-nav-item>
    <b-nav-item to="/admin/create">
      <b-icon icon="tools"></b-icon>
      Create
      <b-dropdown-item to="/admin/create/products">Products</b-dropdown-item>
      <b-dropdown-item to="/admin/create/post">Post</b-dropdown-item>
    </b-nav-item>
    <b-nav-item to="/admin/list">
      <b-icon icon="card-list"></b-icon>
      List
      <b-dropdown-item to="/admin/list/products">Products</b-dropdown-item>
      <b-dropdown-item to="/admin/list/post">Post</b-dropdown-item>
    </b-nav-item>
    <b-nav-item to="/admin/users">
      <b-icon icon="person-plus"></b-icon>
      Users
    </b-nav-item>
    <b-nav-item to="/admin/logout">
      <b-icon icon="door-open"></b-icon>
      Logout
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>
.admin-menu {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
}


</style>
