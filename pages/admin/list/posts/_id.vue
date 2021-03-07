<template>
  <section class="list-post">
    <div>
      <b-breadcrumb class="breadcrumb-nav mt-2 mb-1">
        <b-breadcrumb-item class="breadcrumb-item" to="/admin/analytics">
          Admin
        </b-breadcrumb-item>
        <b-breadcrumb-item class="breadcrumb-item" to="/admin/list/posts">
          Posts
        </b-breadcrumb-item>
        <b-breadcrumb-item class="breadcrumb-item" active>
          {{ post.title }}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <div class="edit">
      <h4 class="mt-2 text-center">
        Edit post
      </h4>
      <div class="post-detail">
        <div>
          <div>
            <span class="ml-auto">{{ post.tag }}</span>
          </div>
          <b-icon icon="person" />
          <span class="ml-2">{{ post.author }}</span>
        </div>
        <div>
          <div class="text-right">
            <span>{{ post.views }}</span>
            <b-icon icon="eye" />
          </div>
          <b-icon icon="calendar-date" />
          <span>{{ post.date }}</span>
        </div>
      </div>

      <b-form-input
        v-model="$v.title.$model"
        style="margin: 0"
        placeholder="Enter post title"
        class="mt-3 text-center"
      />

      <span
        v-if="$v.title.$dirty &&
          !$v.title.required"
        class="text-danger"
      >Title is required
      </span>

      <div />

      <app-editor-tip-tap :method="'Refresh'" :description="description" />
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'
import AppEditorTipTap from '@/components/EditorTipTap'

export default {
  name: 'Id',
  layout: 'admin',
  middleware: 'auth-admin',
  components: {
    AppEditorTipTap
  },
  mixins: [mixinToast],
  async asyncData ({ store, params }) {
    const { data } = await store.dispatch('posts/getPostById', params.id)
    const post = data
    return { post }
  },
  data () {
    return {
      title: '',
      description: '',
      tag: '',
      busy: false
    }
  },
  beforeMount () {
    this.title = this.post.title
    this.description = this.post.content
    this.tag = this.post.tag
  },

  methods: {
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.busy = true
        const formData = {
          title: this.title,
          description: this.description
        }
        try {
          await this.$store.dispatch('posts/updatePost', formData)
          const message = 'Post updated'
          this.makeToast('b-toaster-top-center', 'success', message)
        } catch (e) {

        } finally {
          this.busy = false
        }
      }
    }
  },
  validations: {
    title: {
      required
    },
    description: {
      required
    },
    tag: {
      required
    }
  }
}
</script>

<style scoped>
.size-form {
  width: 50%;
}

.data-posts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-post{
  width: 60%;
}
.post-detail{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
