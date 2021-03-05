<template>
  <div>
    <b-table striped hover :items="posts" :fields="fields">
      <template #cell(edit)="row">
        <b-button
          v-b-tooltip.hover
          title="Edit post"
          pill
          variant="outline-success"
        >
          <b-icon icon="pencil-square" @click="openPost(row.item._id)" />
        </b-button>
        <b-button
          v-b-tooltip.hover
          title="Remove post"
          pill
          variant="outline-danger"
          @click="removePost(row.item._id)"
        >
          <b-icon icon="x-square-fill" />
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
import mixinConfirm from '@/mixins/mixinConfirm'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'Post',
  layout: 'admin',
  middleware: 'auth-admin',
  mixins: [mixinConfirm, mixinToast],
  async asyncData ({ store }) {
    const posts = await store.dispatch('posts/getPosts')
    return { posts }
  },
  data () {
    return {
      fields: [
        {
          key: 'author'
        },
        {
          key: 'title'
        },
        {
          key: 'views',
          sortable: true
        },
        {
          key: 'date',
          sortable: true
        },
        {
          key: 'tag'
        },
        {
          key: 'comments',
          sortable: true
        },
        {
          key: 'edit'
        }
      ]
    }
  },
  methods: {
    openPost (id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async removePost (id) {
      try {
        await this.confirm('Attention', 'Are you sure you want to delete the post?')
        await this.$store.dispatch('posts/removePost', id)
        this.posts = this.posts.filter(post => post._id !== id)
        const message = 'Post deleted'
        this.makeToast('b-toaster-top-center', 'success', message)
      } catch (e) {
        const message = 'Something went wrong'
        this.makeToast('b-toaster-top-center', 'danger', message)
        throw e
      }
    }
  }

}
</script>
<style scoped>
.btn {
  min-width: 50px;
}

</style>
