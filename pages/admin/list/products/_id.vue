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
        <app-edit-product
          :colors-product="colorsProduct"
          :photos-product="photosProduct"
          :product="product"
          :product-details="productDetails"
          @setNewPhoto="setNewPhoto"
          @deletePhoto="deletePhoto"
          @deleteAllPhoto="deleteAllPhoto"
        />
        <app-edit-product-add-color
          @setNewPhoto="setNewPhoto"
          @deletePhoto="deletePhoto"
          @deleteAllPhoto="deleteAllPhoto"
        />
      </b-tabs>
    </b-card>
  </section>
</template>

<script>
import AppEditProduct from '@/components/Admin/product/EditProduct'
import AppEditProductAddColor from '@/components/Admin/product/EditProductAddColor'

export default {
  name: 'Id',
  layout: 'admin',
  middleware: 'auth-admin',
  components: {
    AppEditProduct,
    AppEditProductAddColor
  },
  async asyncData ({ store, params }) {
    const product = await store.dispatch('products/getProductById', params.id)
    const productDetails = await store.dispatch('products/getProductDetailsById', params.id)
    return {
      productDetails,
      product,
      photosProduct: productDetails.photo,
      colorsProduct: productDetails.color
    }
  },
  methods: {
    setNewPhoto (e, images) {
      e.target.files.forEach((file) => {
        images.push({ location: URL.createObjectURL(file) })
      })
    },
    deleteAllPhoto (images) {
      images.splice(0, images.length)
    },
    deletePhoto (image, images, textBrowse) {
      try {
        images.splice(image, 1)
        textBrowse.splice(image, 1)
      } catch (e) {

      }
    },
    getEventData (value) {
      console.log(321)
      console.log(value)
    }
  }

}
</script>

<style scoped>

</style>
