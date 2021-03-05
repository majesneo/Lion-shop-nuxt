<template>
  <div>
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
    <div class="edit text-center">
      <h4 class="mt-2">
        Edit post
      </h4>

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
      <app-editor-tip-tap :description-post="description" />
      <b-overlay
        :show="busy"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
        class="d-inline-block"
      >
        <b-button
          variant="primary"
          :disabled="$v.$anyError"
          type="submit"
          class="btn btn-outline-primary-2 mt-2"
        >
          <span>Refresh</span>
          <i class="icon-long-arrow-right" />
        </b-button>
      </b-overlay>
    </div>
  </div>
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
    const post = await store.dispatch('posts/getPostById', params.id)
    return { post }
  },
  data () {
    return {
      title: '',
      description: '',
      busy: false
    }
  },
  beforeMount () {
    this.title = this.post.title
    this.description = this.post.description
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

</style>
