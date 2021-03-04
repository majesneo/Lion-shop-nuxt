<template>
  <div>
    <h5 class="mt-2">Create post</h5>
    <b-form class="size-form mt-2" @submit.prevent="onSubmit">
      <p>Title</p>

      <b-form-input style="margin: 0"
                    v-model="$v.title.$model"
                    placeholder="Enter post title">

      </b-form-input>
      <p class="text-danger"
         v-if="$v.title.$dirty &&
            !$v.title.required">Title is required
      </p>

      <b-container fluid class="p-4 bg-dark mt-1">
        <p class="text-white">Choose a image or drop it here...</p>
        <b-row>
          <b-col>
            <!-- <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>-->
          </b-col>
        </b-row>
        <b-form-file ref="file-input"
                     v-model="images"
                     accept=".jpg, .png, .gif"
                     class="mt-2" multiple>
          <template slot="file-name" slot-scope="{ names }">
            <b-badge variant="dark">{{ names[0] }}</b-badge>
            <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
              + {{ names.length - 1 }} More files
            </b-badge>
          </template>
        </b-form-file>
      </b-container>

      <p class="mt-1">Description</p>
      <b-form-textarea
        style="margin: 0"
        id="textarea"
        v-model="$v.description.$model"
        placeholder="Enter description..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>

      <p class="text-danger"
         v-if="$v.description.$dirty && !$v.description.required">Description is required</p>

      <b-overlay :show="busy"
                 rounded
                 opacity="0.6"
                 spinner-small
                 spinner-variant="primary"
                 class="d-inline-block">
        <b-button
          variant="primary"
          :disabled="$v.$anyError"
          type="submit"
          class="btn btn-outline-primary-2 mt-2">
          <span>Create</span>
          <i class="icon-long-arrow-right"></i>
        </b-button>
      </b-overlay>
      <b-button class="mt-2" v-b-modal.modal-1>Post preview</b-button>

      <b-modal id="modal-1" title="Post preview">
        {{ title }}
        {{ description }}

      </b-modal>
    </b-form>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators";
import mixinToast from "@/mixins/mixinToast";

export default {
  name: "post",
  layout: "admin",
  middleware: "auth-admin",
  mixins: [mixinToast],
  data() {
    return {
      title: '',
      description: '',
      busy: false,
      images: null
    }
  },
  methods: {
    async onSubmit() {
      if (!this.$v.$invalid && this.images.length !== 0) {
        this.busy = true
        try {
          const formData = new FormData()
          formData.append('title', this.title)
          formData.append('description', this.description)
          Object.values(this.images).forEach(function (file, index) {
            index = file.name
            formData.append(index, file);
          });
          await this.$store.dispatch('posts/createPost', formData)
          this.$v.$reset()
          this.$refs['file-input'].reset()
          this.title = ''
          this.description = ''
          const message = "Post created"
          this.makeToast('b-toaster-top-center', 'success', message)

        } catch (e) {
          console.log(e)
        } finally {
          this.busy = false
        }
      } else {
        this.$v.$touch()
        const message = "The form is not valid"
        this.makeToast('b-toaster-top-center', 'danger', message)
      }
    },
    handleImageChange(files) {
      files.forEach(file => {
        this.images.push(file)

      })
    }
  },
  validations: {
    title: {
      required,
    }
    ,
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

</style>
