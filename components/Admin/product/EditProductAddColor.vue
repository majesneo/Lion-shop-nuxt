<template>
  <b-tab no-body title="+ add color">
    <b-form @submit.prevent="addColorProduct">
      <div v-if="preview.length === 0">
        <b-spinner type="grow" label="Add photo..." />
        Add a photo
      </div>
      <b-card-img
        v-for="image in preview"
        :key="image"
        class="d-inline text-center close"
        style="width: 250px;height: 400px;cursor: pointer; float: none"
        bottom
        :src="image.location"
        alt="add photo"
        @click="$emit('deletePhoto', image,preview,addPhoto)"
      />
      <b-card-footer class="mt-1 d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex">
          <p
            v-if="$v.addColor.$dirty && !$v.addColor.required"
            class="text-danger"
          >
            Color is required
          </p>
          <b-form-input
            v-model="$v.addColor.$model"
            placeholder="Enter color"
            class="text-center"
          />
          <p
            v-if="$v.addSize.$dirty && !$v.addSize.required"
            class="text-danger"
          >
            Size is required
          </p>
          <b-form-input
            v-model="$v.addSize.$model"
            placeholder="Enter size"
            class="text-center"
          />
          <p
            v-if="$v.addQuantity.$dirty && !$v.addQuantity.required"
            class="text-danger"
          >
            Quantity is required
          </p>
          <b-form-input
            v-model="$v.addQuantity.$model"
            placeholder="Enter quantity"
            type="number"
            class="text-center"
          />
        </div>
        <p
          v-if="$v.addPhoto.$dirty && !$v.addPhoto.required"
          class="text-danger"
        >
          Photo is required
        </p>
        <b-form-file
          v-model="$v.addPhoto.$model"
          style="width: 40%"
          multiple
          accept=".jpg, .png, .gif"
          :state="Boolean(addPhoto)"
          placeholder="Add a new photos or drop it here..."
          drop-placeholder="Drop file here..."
          @change="dropFileHandler"
        />
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
            type="submit"
            class="btn btn-outline-primary-2 mt-2 mb-3"
          >
            <span>Add color</span>
            <i class="icon-long-arrow-right" />
          </b-button>
        </b-overlay>
      </b-card-footer>
    </b-form>
  </b-tab>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'EditProductAddColor',
  layout: 'admin',
  middleware: 'auth-admin',
  mixins: [mixinToast],
  data () {
    return {
      addPhoto: [],
      addColor: null,
      addSize: null,
      addQuantity: null,
      busy: false,
      preview: []
    }
  },
  methods: {
    async addColorProduct () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        const message = 'The form is not valid'
        this.makeToast('b-toaster-top-center', 'danger', message)
      } else {
        this.busy = true
        try {
          const color = this.getDataAddColor()
          await this.$store.dispatch('products/addColorProduct', color)
          const message = `Color ${this.addColor} added`
          this.makeToast('b-toaster-top-center', 'success', message)
          await this.$router.push('/admin/list/products')
        } catch (e) {

        } finally {
          this.busy = false
        }
      }
    },
    getDataAddColor () {
      return {
        productId: this.productDetails.productId,
        color: this.addColor,
        photo: this.addPhoto,
        size: this.addSize,
        quantity: this.addQuantity
      }
    },
    dropFileHandler (e) {
      this.$emit('deleteAllPhoto', this.preview)
      this.$emit('setNewPhoto', e, this.preview)
    }
  },
  validations: {
    addPhoto: {
      required
    },
    addColor: {
      required
    },
    addSize: {
      required
    },
    addQuantity: {
      required
    }
  }
}
</script>

<style scoped>

</style>
