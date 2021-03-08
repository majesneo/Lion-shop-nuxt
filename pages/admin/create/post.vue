<template>
  <div class="create-post mt-3  d-flex flex-column justify-content-center">
    <h4 class="text-center">
      Create Post
    </h4>
    <div class="d-flex align-items-center justify-content-between mt-4">
      <div>
        <span
          v-if="$v.tagPost.$dirty &&
            !$v.tagPost.required"
          class="text-danger"
        >Tag is required
        </span>
        <div class="d-flex">
          <span class="mr-2">
            Tag:
          </span>
          <b-form-select v-model="$v.tagPost.$model" :options="options" />
        </div>
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
          class="ml-auto mb-2"
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
        class="text-center mb-2"
      />
      <span
        v-if="$v.image.$dirty &&
          !$v.image.required"
        class="text-danger"
      >Image is required
      </span>
      <div class="d-flex align-items-center justify-content-center">
        <b-form-file
          v-model="$v.image.$model"
          accept=".jpg, .png, .gif"
          :state="Boolean(image)"
          placeholder="Choose a poster image or drop it here..."
          drop-placeholder="Drop file here..."
        />
      </div>
    </div>

    <app-editor-tip-tap
      :method="'Create'"
      :title="titlePost"
      :description="descriptionPost"
      @checkDescrValid="isValid"
    />
    <div />
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
      authorPost: '',
      image: null,
      busy: false,
      tagPost: null,
      options: [
        { value: null, text: 'Select tag' },
        { value: 'shopping', text: 'Shopping' },
        { value: 'fashion', text: 'Fashion' },
        { value: 'lifestyle', text: 'Lifestyle' },
        { value: 'travel', text: 'Travel' },
        { value: 'hobbies', text: 'Hobbies' }
      ]
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
        await this.$router.push('/admin/list/posts')
      } catch (e) {

      } finally {
        this.busy = false
      }
    },
    getFormData (description) {
      return {
        title: this.titlePost.toLowerCase(),
        tag: this.tagPost,
        author: this.authorPost.toLowerCase(),
        image: this.image,
        content: description
      }
    },
    cleaningForm () {
      this.$v.$reset()
      this.titlePost = ''
      this.descriptionPost = ''
      this.authorPost = ''
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
    },
    image: {
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
