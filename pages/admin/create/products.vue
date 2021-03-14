<template>
  <section>
    <b-form class="form-box text-center mt-2" @submit.prevent="onSubmit">
      <h6 class="title mb-2">
        Create product
      </h6>
      <label class="mb-0">Sex</label>
      <p
        v-if="$v.selectSex.$dirty && !$v.selectSex.required"
        class="text-danger"
      >
        Sex is required
      </p>
      <b-form-select v-model="$v.selectSex.$model" class="mb-2" :options="sex" />
      <label class="mb-0">Category</label>
      <p
        v-if="localError && selectCategory === ''"
        class="text-danger"
      >
        Category is required
      </p>
      <b-form-select
        v-model="selectCategory"
        class="mb-2"
      >
        <b-form-select-option
          v-for="catItem in category"
          :key="catItem._id"
          :value="{id:catItem._id, title:catItem.title}"
        >
          {{ catItem.title }}
        </b-form-select-option>
      </b-form-select>

      <label class="mb-0">Title</label>
      <p
        v-if="$v.title.$dirty && !$v.title.required"
        class="text-danger"
      >
        Title is required
      </p>
      <b-form-input
        v-model.trim="$v.title.$model"
        class="text-center"
        placeholder="Enter title"
      />
      <label class="mb-0">Quantity</label>
      <p
        v-if="$v.quantity.$dirty && !$v.quantity.required || $v.quantity.$dirty && !$v.quantity.checkNull"
        class="text-danger"
      >
        Quantity is required and not less than zero
      </p>
      <b-form-input
        v-model.number.trim="$v.quantity.$model"
        type="number"
        class="text-center"
        placeholder="Enter quantity"
      />
      <p
        v-if="$v.selectSize.$dirty && !$v.selectSize.required"
        class="text-danger"
      >
        Size is required
      </p>
      <label class="mb-0">Size</label>
      <b-form-select
        v-model="$v.selectSize.$model"
        :options="size"
        class="mb-2"
      />
      <label class="mb-0">Description</label>
      <p
        v-if="$v.description.$dirty && !$v.description.required"
        class="text-danger"
      >
        Description is required
      </p>
      <b-form-textarea
        id="textarea"
        v-model.trim="$v.description.$model"
        placeholder="Enter description..."
        rows="3"
        max-rows="6"
      />
      <label class="mb-0">Color</label>
      <p
        v-if="$v.color.$dirty && !$v.color.required"
        class="text-danger"
      >
        Color ize is required
      </p>
      <b-form-input
        v-model.trim="$v.color.$model"
        class="text-center"
        type="text"
        placeholder="Enter color"
      />
      <label class="mb-0">Price</label>
      <p
        v-if="$v.price.$dirty && !$v.price.required || $v.quantity.$dirty && !$v.price.checkNull"
        class="text-danger"
      >
        Price is required and not less than zero
      </p>
      <b-form-input
        v-model.trim="$v.price.$model"
        type="number"
        step="0.01"
        class="text-center"
        placeholder="Enter price"
      />
      <label class="mb-0">Brand</label>
      <p
        v-if="$v.brand.$dirty && !$v.brand.required"
        class="text-danger"
      >
        Brand is required
      </p>
      <b-form-input
        v-model.trim="$v.brand.$model"
        class="text-center"
        placeholder="Enter brand"
      />

      <label class="mb-0">Photos</label>
      <p
        v-if="$v.photo.$dirty && !$v.photo.required"
        class="text-danger"
      >
        Photo is required
      </p>
      <b-form-file
        v-model="$v.photo.$model"
        multiple
        accept=".jpg, .png, .gif"
        :state="Boolean(photo)"
        placeholder="Choose a photo or drop it here..."
        drop-placeholder="Drop file here..."
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
          class="btn btn-outline-primary-2 mt-4 mb-3"
        >
          <span>Create product</span>
          <i class="icon-long-arrow-right" />
        </b-button>
      </b-overlay>
    </b-form>
  </section>
</template>

<script>

import { required } from 'vuelidate/lib/validators'
import mixinToast from '@/mixins/mixinToast'

const checkNull = value => value > 0

export default {
  name: 'Products',
  layout: 'admin',
  middleware: 'auth-admin',
  mixins: [mixinToast],
  async asyncData ({ store }) {
    const category = await store.dispatch('category/getAll')
    return { category }
  },
  data () {
    return {
      busy: false,
      title: null,
      price: null,
      brand: null,
      photo: null,
      quantity: null,
      localError: false,
      color: null,
      selectSize: null,
      size: [
        { value: 'XS', text: 'XS' },
        { value: 'S', text: 'S' },
        { value: 'M', text: 'M' },
        { value: 'L', text: 'L' },
        { value: 'XL', text: 'XL' },
        { value: 'XXL', text: 'XXL' }
      ],
      selectCategory: null,
      categoryLocal: null,
      selectSex: null,
      sex: [
        { value: 'man', text: 'Man' },
        { value: 'woman', text: 'Woman' }
      ],
      description: null
    }
  },
  computed: {
    localErrorHandler () {
      return this.selectCategory === ''
    }
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid || this.localErrorHandler) {
        this.localError = true
        const message = 'The form is not valid'
        this.makeToast('b-toaster-top-center', 'danger', message)
      } else {
        this.busy = true
        try {
          this.busy = true
          const dataProduct = this.getFormDataProduct()
          const { _id } = await this.$store.dispatch('products/createProduct', dataProduct)
          const dataDetailsProduct = this.getFormDataDetailsProduct(_id)
          await this.$store.dispatch('products/createDetailsProduct', dataDetailsProduct)
          const message = `Product ${this.title} created`
          this.makeToast('b-toaster-top-center', 'success', message)
          await this.$router.push('/admin/list/products')
        } catch (e) {

        } finally {
          this.busy = false
        }
      }
    },
    getFormDataProduct () {
      return {
        sex: this.selectSex,
        categoryName: this.selectCategory.title,
        category: this.selectCategory.id,
        title: this.title.toLowerCase(),
        description: this.description,
        price: this.price,
        brand: this.brand.toLowerCase()
      }
    },
    getFormDataDetailsProduct (productId) {
      const data = new FormData()
      data.append('productId', productId)
      data.append('quantity', this.quantity)
      data.append('size', this.selectSize)
      data.append('color', String(this.color).toLowerCase())
      this.photo.forEach((image) => {
        data.append('photo', image, image.name)
      })
      return data
    }
  },
  validations: {
    selectSex: {
      required
    },
    selectSize: {
      required
    },
    title: {
      required
    },
    quantity: {
      required,
      checkNull
    },
    description: {
      required
    },
    color: {
      required
    },
    price: {
      required,
      checkNull
    },
    brand: {
      required
    },
    photo: {
      required

    }
  }
}
</script>

<style scoped>
.form-box{
  margin-left: 0;
}
</style>
