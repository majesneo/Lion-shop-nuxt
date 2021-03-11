<template>
  <section class="form-box mt-9">
    <div class="form-tab">
      <ul class="nav nav-pills nav-fill" role="tablist">
        <li class="nav-item">
          <h3 style="margin-bottom: 0" class="nav-link active">
            Login to admin panel
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
            v-model="$v.username.$model"
            type="text"
            class="form-control"
            name="singin-email"
            @blur="$v.username.$touch"
          >
        </div>

        <div class="form-group mb-3">
          <span
            v-if="$v.password.$dirty
              && !$v.password.required"
            class="text-danger"
          >
            Password is required</span>
          <label for="singin-password-2">Password *</label>
          <input
            id="singin-password-2"
            v-model="$v.password.$model"
            type="password"
            class="form-control"
            name="singin-password"
            @blur="$v.password.$touch"
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
              :disabled="$v.$anyError"
              type="submit"
              class="btn btn-outline-primary-2"
            >
              <span>LOG IN</span>
              <i class="icon-long-arrow-right" />
            </b-button>
            <nuxt-link to="/">
              Home
            </nuxt-link>
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
  name: 'Login',
  layout: 'empty',
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
  mounted () {
    const { message } = this.$route.query
    this.checkQuery(message)
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.busy = true
        try {
          const dataForm = this.getFormData()
          await this.$store.dispatch('auth-admin/login', dataForm)
          await this.$router.push('/admin')
        } catch (e) {

        } finally {
          this.cleaningForm()
          this.busy = false
        }
      }
    },
    getFormData () {
      return {
        login: this.username,
        password: this.password
      }
    },
    cleaningForm () {
      this.$v.$reset()
      this.username = ''
      this.password = ''
    },
    checkQuery (query) {
      switch (query) {
        case 'login':
          return this.makeToast(
            'b-toaster-top-center',
            'info',
            'Login to admin panel'
          )
        case 'logout':
          return this.makeToast(
            'b-toaster-top-center',
            'success',
            'You got out of admin panel'
          )
        case 'session':
          return this.makeToast(
            'b-toaster-top-center',
            'danger',
            'Session timed out, login to admin panel'
          )
      }
    }

  }
}
</script>

<style scoped>

</style>
