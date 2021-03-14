<template>
  <div class="products mb-3">
    <div v-for="product in products" :key="product._id" class="product product-list">
      <div class="row">
        <div class="col-6 col-lg-3">
          <figure class="product-media">
            <span class="product-label label-new">New</span>
            <a href="#" @click.prevent="showProduct">
              <img
                :src="product.details[0].photo[0].location"
                alt="Product image"
                class="product-image"
              >
            </a>
          </figure>
        </div>

        <div class="col-6 col-lg-3 order-lg-last">
          <div class="product-list-action">
            <div class="product-price">
              {{ product.price }}
            </div>
            <div class="ratings-container">
              <div class="ratings">
                <div class="ratings-val" style="width: 20%;" />
              </div>
              <span class="ratings-text">( 2 Reviews )</span>
            </div>

            <div class="product-action">
              <a
                href="#"
                class="btn-product btn-quickview"
                title="Quick view"
              ><span>quick view</span></a>
              <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
            </div>

            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="product-body product-action-inner">
            <a href="#" class="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
            <div v-for="category in product.category" :key="category._id" class="product-cat">
              <a style="text-transform: capitalize" href="#">{{ category.title }}</a>
            </div>
            <h3 class="product-title">
              <a style="text-transform: capitalize" href="#">{{ product.title }}</a>
            </h3>

            <div class="product-content">
              <p>{{ product.description }}</p>
            </div>

            <div class="product-nav product-nav-thumbs">
              <a v-for="details in product.details" :key="details._id" class="active">
                <img
                  style="width: 40px; height: 40px;object-fit: cover;cursor: pointer"
                  :src="details.photo[0].location"
                  alt="product desc"
                  @click="previewPhoto(details.photo[0],product.details[0].photo[0])"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  mounted () {
    console.log(this.products)
  },
  methods: {
    showProduct () {
      const id = 'test-id'
      this.$router.push(`/product/${id}`)
    },
    previewPhoto (clickPhoto, preview) {
      const originalPreview = preview.location
      preview.location = clickPhoto.location
      clickPhoto.location = originalPreview
    }
  }
}
</script>

<style scoped>

</style>
