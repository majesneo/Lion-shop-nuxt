<template>
  <section>
    <b-tab
      v-for="color in colorsProduct"
      :key="color"
      no-body
      :title="color"
    >
      <p
        v-if="$v.newTitle.$dirty && !$v.newTitle.required"
        class="text-danger"
      >
        Title is required
      </p>
      <b-form-input
        v-model="$v.newTitle.$model"
        style="width: 30%;text-transform: capitalize"
        :placeholder="`Title: ${product.title}`"
        class="text-center mt-1 ml-auto mr-auto"
      />
      <div v-if="photosProduct.length === 0">
        <b-spinner type="grow" label="Add photo..." />
        Add a photo
      </div>
      <b-card-img
        v-for="photo in photosProduct"
        :key="photo.key"
        :src="photo.location"
        class="d-inline text-center close"
        alt="Add Photo"
        style="width: 250px;height: 400px;float: none;cursor: pointer"
        @click="$emit('deletePhoto', photo.location,photosProduct,newPhoto)"
      />
      <b-form @submit.prevent="updateProduct">
        <b-card-footer class="mt-1 d-flex flex-column justify-content-center align-items-center">
          <div class="d-flex">
            <p
              v-if="$v.newSize.$dirty && !$v.newSize.required"
              class="text-danger d-block"
            >
              Size is required
            </p>
            <b-form-input
              v-model="$v.newSize.$model"
              :placeholder="`Size: ${productDetails.size}`"
              class="text-center"
            />

            <p
              v-if="$v.newQuantity.$dirty && !$v.newQuantity.required"
              class="text-danger"
            >
              Quantity is required
            </p>
            <b-form-input
              v-model="$v.newQuantity.$model"
              :placeholder="`Quantity: ${productDetails.quantity}`"
              type="number"
              class="text-center"
            />
            <p
              v-if="$v.newBrand.$dirty && !$v.newBrand.required"
              class="text-danger"
            >
              Brand is required
            </p>
            <b-form-input
              v-model="$v.newBrand.$model"
              :placeholder="`Brand: ${product.brand}`"
              class="text-center"
              style="text-transform: capitalize"
            />
            <p
              v-if="$v.newPrice.$dirty && !$v.newPrice.required"
              class="text-danger"
            >
              Price is required
            </p>
            <b-form-input
              v-model="$v.newPrice.$model"
              :placeholder="`Price: ${product.price}`"
              type="number"
              class="text-center"
            />
          </div>
          <div style="width: 40%">
            <b-form-textarea
              id="textarea"
              v-model="$v.newDescription.$model"
              :placeholder="product.description"
              no-resize
            />
            <p
              v-if="$v.newPhoto.$dirty && !$v.newPhoto.required"
              class="text-danger"
            >
              Photo is required
            </p>
            <b-form-file
              v-model="$v.newPhoto.$model"
              multiple
              accept=".jpg, .png, .gif"
              :state="Boolean(newPhoto)"
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
                <span>Update product</span>
                <i class="icon-long-arrow-right" />
              </b-button>
            </b-overlay>
          </div>
        </b-card-footer>
      </b-form>
    </b-tab>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'EditProduct',
  layout: 'admin',
  middleware: 'auth-admin',
  mixins: [mixinToast],
  props: {
    photosProduct: {
      type: Array,
      required: true
    },
    colorsProduct: {
      type: Array,
      required: true
    },
    product: {
      type: Object,
      required: true
    },
    productDetails: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      newPrice: null,
      newPhoto: null,
      newSize: null,
      newQuantity: null,
      newBrand: null,
      newColor: null,
      newTitle: null,
      newDescription: null,
      busy: false,
      updatePhoto: []
    }
  },

  methods: {
    async updateProduct () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        const message = 'The form is not valid'
        this.makeToast('b-toaster-top-center', 'danger', message)
      } else {
        this.busy = true
        try {
          const updatedData = this.getUpdatedData()
          await this.$store.dispatch('products/updateProduct', updatedData)
          const updatedDataDetails = this.getUpdatedDataDetails()
          await this.$store.dispatch('products/updateProductDetails', updatedDataDetails)
          const message = `Product ${this.newTitle} updated`
          this.makeToast('b-toaster-top-center', 'success', message)
          await this.$router.push('/admin/list/products')
        } catch (e) {

        } finally {
          this.busy = false
        }
      }
    },
    getUpdatedData () {
      return {
        id: this.product._id,
        title: this.newTitle,
        price: this.newPrice,
        brand: this.newBrand,
        description: this.newDescription
      }
    },
    getUpdatedDataDetails () {
      return {
        id: this.productDetails._id,
        photo: this.newPhoto,
        size: this.newSize,
        quantity: this.newQuantity
      }
    },
    dropFileHandler (e) {
      this.$emit('deleteAllPhoto', this.photosProduct)
      this.$emit('setNewPhoto', e, this.photosProduct)
    }
  },
  validations: {
    newQuantity: {
      required
    },
    newDescription: {
      required
    },
    newPrice: {
      required
    },
    newPhoto: {
      required
    },
    newSize: {
      required
    },
    newBrand: {
      required
    },
    newTitle: {
      required
    }

  }
}
</script>

<style scoped>

</style>
