<template>
  <section class="form-box mt-9">
    <div class="form-tab">
      <ul class="nav nav-pills nav-fill" role="tablist">
        <li class="nav-item">
          <h3 style="margin-bottom: 0" class="nav-link active">
            Create admin panel user
          </h3>
        </li>
      </ul>

      <form class="mt-3" action="#" @submit.prevent="onSubmit">
        <div class="form-group">
          <span
            v-if="$v.username.$dirty && !$v.username.required"
            class="text-danger"
          >Username is required</span>
          <label for="singin-email-2">Username *</label>
          <input
            id="singin-email-2"
            v-model.trim="$v.username.$model"
            type="text"
            class="form-control"
            name="singin-email"
          >
        </div>

        <div class="form-group mb-3">
          <span
            v-if="$v.password.$dirty && !$v.password.required"
            class="text-danger"
          >Password is required</span>
          <label for="singin-password-2">Password *</label>
          <input
            id="singin-password-2"
            v-model.trim="$v.password.$model"
            type="password"
            class="form-control"
            name="singin-password"
          >
        </div>

        <div class="form-footer">
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
              <span>Create</span>
              <i class="icon-long-arrow-right" />
            </b-button>
          </b-overlay>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'Users',
  layout: 'admin',
  middleware: 'auth-admin',
  mixins: [mixinToast],
  data () {
    return {
      username: '',
      password: '',
      busy: false
    }
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    async onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.busy = true
      } else {
        this.busy = true
        const formData = this.getFormData()
        try {
          await this.$store.dispatch('auth-admin/createUser', formData)
          this.cleaningForm()
          const message = 'User created'
          this.makeToast('b-toaster-top-center', 'success', message)
        } catch (e) {

        } finally {
          this.busy = false
        }
      }
    },
    getFormData () {
      return {
        username: this.username,
        password: this.password
      }
    },
    cleaningForm () {
      this.$v.$reset()
      this.username = ''
      this.password = ''
    }

  }

}
</script>

<style scoped>
.form-box {
  margin-left: inherit;
}
</style>
