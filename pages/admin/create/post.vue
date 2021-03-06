<template>
  <div class="create-post mt-3">
    <h4 class="text-center">
      Create Post
    </h4>

    <div class="d-flex align-items-center justify-content-between mt-4">
      <div>
        <span
          v-if="$v.tagPost.$dirty &&
            !$v.tagPost.required"
          class="text-danger d-block"
        >Tag is required
        </span>
        <b-form-input
          v-model.trim="$v.tagPost.$model"
          class=""
          style="margin: 0; width: 350px;"
          placeholder="Enter tag title eg: Fashion, Lifestyle, Travel..."
        />
      </div>
      <div>
        <span
          v-if="$v.authorPost.$dirty &&
            !$v.authorPost.required"
          class="text-danger"
        >Name is required
        </span>
        <b-form-input
          v-model.trim="$v.authorPost.$model"
          class="ml-auto"
          style="margin: 0; width: 350px;"
          placeholder="Enter your name"
        />
      </div>
    </div>
    <div class="text-center">
      <span
        v-if="$v.titlePost.$dirty &&
          !$v.titlePost.required"
        class="text-danger"
      >Title is required
      </span>
      <b-form-input
        v-model="$v.titlePost.$model"
        style="margin: 0"
        placeholder="Enter post title"
        class="text-center mt-2"
      />
    </div>

    <app-editor-tip-tap
      :method="'Create'"
      :title="titlePost"
      :description="descriptionPost"
      @checkDescrValid="isValid"
    />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'
import AppEditorTipTap from '@/components/EditorTipTap'

export default {
  name: 'Post',
  layout: 'admin',
  middleware: 'auth-admin',
  components: {
    AppEditorTipTap
  },
  mixins: [mixinToast],
  data () {
    return {
      titlePost: '',
      descriptionPost: '',
      tagPost: '',
      authorPost: '',
      busy: false
    }
  },
  methods: {
    isValid (description) {
      this.$v.$touch()
      if (description && !this.$v.$invalid) {
        this.onSubmit(description)
      } else {
        this.$v.$touch()
        const message = 'The form is not valid'
        this.makeToast('b-toaster-top-center', 'danger', message)
        this.busy = false
      }
    },

    async onSubmit (description) {
      try {
        const formData = this.getFormData(description)
        console.log(formData)
        await this.$store.dispatch('posts/createPost', formData)
        this.cleaningForm()
        const message = 'Post created'
        this.makeToast('b-toaster-top-center', 'success', message)
      } catch (e) {

      } finally {
        this.busy = false
      }
    },
    getFormData (description) {
      return {
        title: this.titlePost,
        tag: this.tagPost,
        author: this.authorPost,
        description
      }
    },
    cleaningForm () {
      this.$v.$reset()
      this.titlePost = ''
      this.descriptionPost = ''
    },
    isLowerCase (text) {

    }
  },
  validations: {
    titlePost: {
      required
    },
    tagPost: {
      required
    },
    authorPost: {
      required
    }
  }
}
</script>

<style scoped>
.size-form {
  width: 50%;
}
.create-post{
  width: 60%;
}

</style>
