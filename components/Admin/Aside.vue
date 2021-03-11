<template>
  <b-nav class="menu admin-menu">
    <b-nav-item active to="/admin/analytics">
      <b-icon icon="bar-chart" />
      Analytics
      <b-dropdown-item to="/admin/analytics/products">
        Products
      </b-dropdown-item>
      <b-dropdown-item to="/admin/analytics/posts">
        Post
      </b-dropdown-item>
    </b-nav-item>
    <b-nav-item to="/admin/create">
      <b-icon icon="tools" />
      Create
      <b-dropdown-item to="/admin/create/category">
        Category
      </b-dropdown-item>
      <b-dropdown-item to="/admin/create/products">
        Products
      </b-dropdown-item>
      <b-dropdown-item to="/admin/create/post">
        Post
      </b-dropdown-item>
    </b-nav-item>
    <b-nav-item to="/admin/list">
      <b-icon icon="bar-chart" />
      List
      <b-dropdown-item to="/admin/list/products">
        Products
      </b-dropdown-item>
      <b-dropdown-item to="/admin/list/posts">
        Post
      </b-dropdown-item>
    </b-nav-item>
    <b-nav-item to="/admin/users">
      <b-icon icon="person-plus" />
      Users
    </b-nav-item>
    <b-nav-item to="/admin/logout">
      <b-icon icon="door-open" />
      Logout
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: 'Aside',
  methods: {
  }
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
