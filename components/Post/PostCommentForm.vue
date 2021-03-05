<template>
  <div>
    <div class="reply">
      <div class="heading">
        <h3 class="title">
          Leave A Reply
        </h3>
        <p class="title-desc">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>

      <form action="#" @submit.prevent="onSubmit">
        <label for="reply-message" class="sr-only">Comment</label>
        <span v-if="$v.comment.$dirty && !$v.comment.required" class="text-danger">Comment is required</span>
        <textarea
          id="reply-message"
          v-model="$v.comment.$model"
          name="reply-message"
          cols="30"
          rows="4"
          class="form-control"
          placeholder="Comment *"
          @blur="$v.comment.$touch"
        />

        <div class="row">
          <div class="col-md-6">
            <label for="reply-name" class="sr-only">Name</label>
            <span
              v-if="$v.name.$dirty &&
                !$v.name.required"
              class="text-danger"
            >Name is required</span>
            <input
              id="reply-name"
              v-model="$v.name.$model"
              type="text"
              class="form-control"
              name="reply-name"
              placeholder="Name *"
              @blur="$v.name.$touch"
            >
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
            :disabled="busy"
            type="submit"
            class="btn btn-outline-primary-2"
          >
            <span>POST COMMENT</span>

            <i class="icon-long-arrow-right" />
          </b-button>
        </b-overlay>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'BlogPostCommentForm',
  data () {
    return {
      comment: '',
      name: '',
      busy: false,
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  validations: {
    comment: {
      required
    },
    name: {
      required
    }
  },

  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.busy = true
      } else {
        this.busy = true
        const formData = {
          name: this.name,
          comment: this.comment,
          postId: ''
        }
        try {
          this.$emit('commentCreated')
        } catch (e) {

        } finally {
          this.busy = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
