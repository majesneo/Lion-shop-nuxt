<template>
  <div class="form-box mt-9">
    <div class="form-tab">
      <ul class="nav nav-pills nav-fill" role="tablist">
        <li class="nav-item">
          <h3 style="margin-bottom: 0" class="nav-link active">Login to admin panel</h3>
        </li>
      </ul>

      <form @submit.prevent="onSubmit" class="mt-3" action="#">
        <div class="form-group">

          <span class="text-danger"
                v-if="$v.username.$dirty && !$v.username.required">Username is required</span>
          <label for="singin-email-2">Username *</label>
          <input @blur="$v.username.$touch"
                 v-model="$v.username.$model"
                 type="text" class="form-control"
                 id="singin-email-2"
                 name="singin-email">
        </div>

        <div class="form-group mb-3">
          <span class="text-danger"
                v-if="$v.password.$dirty && !$v.password.required">Password is required</span>
          <label for="singin-password-2">Password *</label>
          <input @blur="$v.password.$touch"
                 v-model="$v.password.$model"
                 type="password"
                 class="form-control"
                 id="singin-password-2"
                 name="singin-password">
        </div>

        <div class="form-footer">
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
              <span>LOG IN</span>
              <i class="icon-long-arrow-right"></i>
            </b-button>
            <nuxt-link to="/">Home</nuxt-link>
          </b-overlay>
        </div>
      </form>
    </div>
  </div>

</template>

<script>

import {required} from "vuelidate/lib/validators";


export default {
  name: "login",
  layout: "empty",
  data() {
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
    async onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.busy = true
        new Promise((resolve) => setTimeout(() => {
          resolve(this.busy = false)
        }, 2000))
      } else {
        this.busy = true
        const formData = {
          username: this.username,
          password: this.password,
        }
        try {
          await this.$store.dispatch('auth-admin/login', formData)
          this.$router.push('/admin')
        } catch (e) {

        } finally {
          new Promise((resolve) => setTimeout(() => {
            resolve(this.busy = false)
          }, 2000))
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
