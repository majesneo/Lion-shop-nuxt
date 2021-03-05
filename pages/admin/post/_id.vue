<template>
  <div>
    <b-breadcrumb class="breadcrumb-nav mt-2 mb-1">
      <b-breadcrumb-item class="breadcrumb-item" to="/admin">
        Admin
      </b-breadcrumb-item>
      <b-breadcrumb-item class="breadcrumb-item" to="/admin/list/post">
        Posts
      </b-breadcrumb-item>
      <b-breadcrumb-item class="breadcrumb-item" active>
        {{ post.title }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h5 class="mt-2">
      Edit post
    </h5>
    <b-form class="size-form mt-2" @submit.prevent="onSubmit">
      <p>Title</p>

      <b-form-input
        v-model="$v.title.$model"
        style="margin: 0"
        placeholder="Enter post title"
      />
      <span
        v-if="$v.title.$dirty &&
          !$v.title.required"
        class="text-danger"
      >Title is required
      </span>

      <b-container fluid class="p-4 bg-dark mt-1">
        <p class="text-white mb-1">
          Choose a image or drop it here...
        </p>
        <b-row>
          <b-col>
            <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
          </b-col>
        </b-row>
        <b-form-file class="mt-2" multiple>
          <template slot="file-name" slot-scope="{ names }">
            <b-badge variant="dark">
              {{ names[0] }}
            </b-badge>
            <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
              + {{ names.length - 1 }} More files
            </b-badge>
          </template>
        </b-form-file>
      </b-container>

      <p class="mt-1">
        Description
      </p>
      <b-form-textarea
        id="textarea"
        v-model="$v.description.$model"
        style="margin: 0"
        placeholder="Enter description..."
        rows="3"
        max-rows="6"
      />

      <span
        v-if="$v.description.$dirty && !$v.description.required"
        class="text-danger"
      >Description is required</span>

      <div class="data-posts">
        <div>
          <b-icon icon="eye" />
          <span>
            {{ post.views }}
          </span>
        </div>
        <div>
          <b-icon icon="clock-history" />
          <span>
            {{ post.date }}
          </span>
        </div>
      </div>
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
    </b-form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'Id',
  layout: 'admin',
  middleware: 'auth-admin',
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
  mounted () {
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
