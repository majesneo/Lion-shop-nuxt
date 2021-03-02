<template>
  <div>
    <b-table striped hover :items="posts" :fields="fields">
      <template #cell(edit)="row">
        <b-button v-b-tooltip.hover
                  title="Edit post"
                  size="sm" pill
                  variant="outline-success">
          <b-icon @click="openPost(row.item._id)" icon="pencil-square"></b-icon>
        </b-button>
        <b-button v-b-tooltip.hover
                  title="Remove post"
                  @click="removePost(row.item._id)"
                  size="sm" pill
                  variant="outline-danger">
          <b-icon icon="x-square-fill"></b-icon>
        </b-button>
      </template>
      <template #cell(comments)="data">
        {{ data.item.comments.length }}
      </template>
      <template #cell(tag)="data">
        <div v-for="tag in data.item.tag">
          {{ tag }}
        </div>
      </template>
    </b-table>

  </div>
</template>

<script>
export default {
  name: "post",
  layout: "admin",
  middleware: "auth-admin",
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'author',
        },
        {
          key: 'title',
        },
        {
          key: 'views',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
        {
          key: 'date',
          sortable: true
        },
        {
          key: 'tag',
        },
        {
          key: 'comments',
          sortable: true
        },
        {
          key: 'edit',
          // Variant applies to the whole column, including the header and footer
        }
      ],
    }
  },
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetchAdminPosts')
    return {posts}
  },
  methods: {
    openPost(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    removePost(id) {
      console.log(id)
    }
  }

}
</script>
<style scoped>
.btn {
  min-width: 0;
}

</style>
