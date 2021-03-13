<template>
  <section>
    <no-ssr>
      <b-table striped hover :items="products" :fields="fields">
        <template #cell(edit)="row">
          <b-button
            v-b-tooltip.hover
            title="Edit post"
            pill
            variant="outline-success"
          >
            <b-icon icon="pencil-square" @click="editProduct(row.item._id)" />
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Remove post"
            pill
            variant="outline-danger"
            @click="removeProduct(row.item._id)"
          >
            <b-icon icon="x-square-fill" />
          </b-button>
        </template>
        <template #cell(date)="data">
          {{ data.item.date | date }}
        </template>
      </b-table>
    </no-ssr>
  </section>
</template>

<script>
import mixinConfirm from '@/mixins/mixinConfirm'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'Index',
  layout: 'admin',
  middleware: 'auth-admin',
  mixins: [mixinConfirm, mixinToast],
  async asyncData ({ store }) {
    const products = await store.dispatch('products/getProducts')
    /*
    const res = await store.dispatch('category/getCategoryById')
    console.log(res) */
    return { products }
  },

  data () {
    return {
      fields: [
        {
          key: 'categoryName',
          sortable: true
        },
        {
          key: 'sex',
          sortable: true
        },
        {
          key: 'title'
        },
        {
          key: 'price',
          sortable: true
        },
        {
          key: 'brand',
          sortable: true
        },
        {
          key: 'date',
          sortable: true
        },
        {
          key: 'edit'
        }
      ],
      posts: null
    }
  },

  methods: {
    editProduct (id) {
      this.$router.push(`/admin/list/products/${id}`)
    },
    async removeProduct (id) {
      try {
        const response = await this.confirm('Attention', 'Are you sure you want to delete this post?')
        if (!response) { return }
        await this.$store.dispatch('posts/removePost', id)
        this.removeOnClient(id)
        const message = 'Post deleted'
        this.makeToast('b-toaster-top-center', 'success', message)
      } catch (e) {
        const message = 'Something went wrong'
        this.makeToast('b-toaster-top-center', 'danger', message)
        throw e
      }
    },
    removeOnClient (id) {
      this.posts = this.posts.filter(p => p._id !== id)
    }
  }
}
</script>
<style scoped>
.btn {
  min-width: 50px;
}

</style>
