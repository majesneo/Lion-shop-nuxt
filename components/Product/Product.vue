<template>
  <div class="products mb-3">
    <div v-for="product in products" :key="product._id" class="product product-list">
      <div class="row">
        <div class="col-6 col-lg-3">
          <figure class="product-media">
            <span class="product-label label-new">New</span>
            <a style="cursor: pointer" @click="showProduct(product._id)">
              <img

                :src="product.details[0].photo[0].location"
                class="product-image"
                alt="image"
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
              <a style="text-transform: capitalize">{{ category.title }}</a>
            </div>
            <h3 class="product-title">
              <a
                style="text-transform: capitalize; cursor: pointer"
                @click="showProduct(product._id)"
              >{{ product.title }}</a>
            </h3>

            <div class="product-content">
              <p>{{ product.description }}</p>
            </div>

            <div class="product-nav product-nav-thumbs">
              <div v-for="details in product.details" :key="details._id">
                <a v-if="details.photo[1]" class="active">
                  <img
                    style="width: 40px; height: 40px;object-fit: cover;cursor: pointer"
                    :src="details.photo[1].location"
                    alt="product desc"
                    @click="setPreview(details.photo[1].location,product.details[0].photo[0])"
                  >
                </a>
              </div>
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

  data () {
    return {
      previewPhoto: []
    }
  },

  mounted () {
    this.products.forEach((product) => {
      this.previewPhoto.push(product.details[0].photo[0].location)
    })
    this.products.forEach((prod) => {
      prod.details.unshift({ photo: [{ location: this.previewPhoto.shift() }] })
    })
  },

  methods: {
    setPreview (photo, preview) {
      preview.location = photo
    },

    showProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
