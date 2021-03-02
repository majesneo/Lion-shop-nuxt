<template>

  <div>
    <div class="reply">
      <div class="heading">
        <h3 class="title">Leave A Reply</h3>
        <p class="title-desc">Your email address will not be published. Required fields are marked *</p>
      </div>

      <form @submit.prevent="onSubmit" action="#">
        <label for="reply-message" class="sr-only">Comment</label>
        <span class="text-danger" v-if="$v.comment.$dirty && !$v.comment.required">Comment is required</span>
        <textarea @blur="$v.comment.$touch" v-model="$v.comment.$model"
                  name="reply-message"
                  id="reply-message" cols="30"
                  rows="4" class="form-control"
                  placeholder="Comment *"
        ></textarea>


        <div class="row">
          <div class="col-md-6">
            <label for="reply-name" class="sr-only">Name</label>
            <span class="text-danger"
                  v-if="$v.name.$dirty &&
                !$v.name.required">Name is required</span>
            <input
              @blur="$v.name.$touch"
              v-model="$v.name.$model"
              type="text"
              class="form-control"
              id="reply-name"
              name="reply-name"
              placeholder="Name *">
          </div>

        </div>
        <b-overlay :show="busy"
                   rounded
                   opacity="0.6"
                   spinner-small
                   spinner-variant="primary"
                   class="d-inline-block">


          <b-button
            variant="primary"
            :disabled="busy"
            type="submit"
            class="btn btn-outline-primary-2">
            <span>POST COMMENT</span>

            <i class="icon-long-arrow-right"></i>
          </b-button>
        </b-overlay>
      </form>

    </div>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  name: "BlogPostCommentForm",
  data() {
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
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.busy = true
        new Promise((resolve) => setTimeout(() => {
          resolve(this.busy = false)
        }, 2000))
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
          new Promise((resolve) => setTimeout(() => {
            resolve(this.busy = false)
          }, 2000))
        }
      }
    },
  }
}
</script>

<style scoped>

</style>
