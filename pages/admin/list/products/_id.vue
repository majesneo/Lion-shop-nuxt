<template>
  <section>
    <b-breadcrumb class="breadcrumb-nav mt-2 mb-1">
      <b-breadcrumb-item class="breadcrumb-item" to="/admin/analytics">
        Admin
      </b-breadcrumb-item>
      <b-breadcrumb-item class="breadcrumb-item" to="/admin/list/products">
        Products
      </b-breadcrumb-item>
      <b-breadcrumb-item class="breadcrumb-item" active>
        {{ product.title }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h4 class="text-center mt-2">
      Edit Product
    </h4>
    <b-icon icon="calendar-date" />
    <span>Last data update: {{ product.date | date }}</span>

    <b-card class="mt-2 text-center" no-body>
      <b-tabs card>
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
            :placeholder="`Change title: ${product.title}`"
            class="text-center mt-1 ml-auto mr-auto"
          />
          <b-card-img
            v-for="photo in photosProduct"
            :key="photo.key"
            :src="photo.location"
            class="d-inline text-center close"
            alt="Add Photo"
            style="width: 250px;height: 400px;float: none;cursor: pointer"
            @click="deletePhoto(photo.location,photosProduct,newPhoto)"
          />
          <b-form @submit.prevent="onSubmit">
            <b-card-footer class="mt-1 d-flex flex-column justify-content-center align-items-center">
              <div class="d-flex">
                <p
                  v-if="$v.newSize.$dirty && !$v.newSize.required"
                  class="text-danger"
                >
                  Size is required
                </p>
                <b-form-input
                  v-model="$v.newSize.$model"
                  :placeholder="`Change Size: ${productDetails.size}`"
                  type="number"
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
                  :placeholder="`Change quantity: ${productDetails.quantity}`"
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
                  :placeholder="`Change brand: ${product.brand}`"
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
                  :placeholder="`Change Price: ${product.price}`"
                  type="number"
                  class="text-center"
                />
              </div>
              <div style="width: 40%">
                <b-form-textarea
                  id="textarea"
                  v-model="product.description"
                  placeholder="Enter something..."
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
                  @change="deleteAllPhoto(photosProduct),setNewPhoto($event,photosProduct)"
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
        <b-tab no-body title="add color">
          <b-card-img
            v-for="image in preview"
            :key="image"
            class="d-inline text-center close"
            style="width: 250px;height: 400px;cursor: pointer; float: none"
            bottom
            :src="image.location"
            alt="add photo"
            @click="deletePhoto(image,preview,addPhoto)"
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
                type="number"
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
              @change="deleteAllPhoto(preview),setNewPhoto($event,preview)"
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
        </b-tab>
      </b-tabs>
    </b-card>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'

export default {
  name: 'Id',
  layout: 'admin',
  middleware: 'auth-admin',
  mixins: [mixinToast],

  async asyncData ({ store, params }) {
    const product = await store.dispatch('products/getProductById', params.id)
    const productDetails = await store.dispatch('products/getProductDetailsById', params.id)
    console.log('product', product)
    console.log('productDetails', productDetails)
    return { productDetails, product, photosProduct: productDetails.photo, colorsProduct: productDetails.color }
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
      addPhoto: [],
      addColor: null,
      addSize: null,
      addQuantity: null,
      preview: [],
      busy: false,
      updatePhoto: []
    }
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        const message = 'The form is not valid'
        this.makeToast('b-toaster-top-center', 'danger', message)
      } else {
        this.busy = true
        try {
          const updatedData = this.getUpdatedData()
          await this.$store.dispatch('products/updateProduct', updatedData)
          const message = `Product ${this.title} updated`
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
        title: this.newTitle,
        price: this.newPrice,
        quantity: this.newQuantity,
        brand: this.newBrand,
        size: this.newSize,
        photo: this.newPhoto
      }
    },
    setNewPhoto (e, images) {
      e.target.files.forEach((file) => {
        images.push({ location: URL.createObjectURL(file) })
      })
    },
    deleteAllPhoto (images) {
      images.splice(0, images.length)
    },
    deletePhoto (image, images, textBrowse) {
      images.splice(image, 1)
      textBrowse.splice(image, 1)
    }
  },
  validations: {
    newQuantity: {
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
    },
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
