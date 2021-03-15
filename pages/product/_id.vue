<template>
  <div class="page-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="product-details-top">
            <div class="row">
              <div class="col-md-6">
                <div class="product-gallery">
                  <figure class="product-main-image">
                    <span class="product-label label-top">Top</span>
                    <img id="product-zoom" :src="mainPhoto[0].location" data-zoom-image="assets/images/products/single/sidebar-gallery/1-big.jpg" alt="product image">

                    <a id="btn-product-gallery" href="#" class="btn-product-gallery">
                      <i class="icon-arrows" />
                    </a>
                  </figure>

                  <div id="product-zoom-gallery" class="product-image-gallery">
                    <a
                      v-for="photo in mainPhoto"
                      :key="photo.key"
                      class="product-gallery-item active"
                      href="#"
                      data-image="assets/images/products/single/sidebar-gallery/1.jpg"
                      data-zoom-image="assets/images/products/single/sidebar-gallery/1-big.jpg"
                    >
                      <img :src="photo.location " alt="product side">
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-details product-details-sidebar">
                  <h1 style="text-transform: capitalize" class="product-title">
                    {{ product.title }}
                  </h1>

                  <div class="ratings-container">
                    <div class="ratings">
                      <div class="ratings-val" style="width: 80%;" />
                    </div>
                    <a id="review-link" class="ratings-text" href="#product-review-link">( 2 Reviews )</a>
                  </div>

                  <div class="product-price">
                    ${{ product.price }}
                  </div>

                  <div class="product-content">
                    <p>Sed egestas, ante et vulputate volutpat, eros semper est, vitae luctus metus libero eu augue.</p>
                  </div>

                  <div class="details-filter-row details-row-size">
                    <label>Color:</label>

                    <div class="product-nav product-nav-dots">
                      <a
                        href="#"
                        class="active"
                        style="background: #333333;"
                      ><span class="sr-only">Color nasdasdame</span></a>
                    </div><!-- End .product-nav -->
                  </div><!-- End .details-filter-row -->

                  <div class="details-filter-row details-row-size">
                    <label for="size">Size:</label>
                    <div class="select-custom">
                      <select id="size" name="size" class="form-control">
                        <option value="#" selected="selected">
                          Select a size
                        </option>
                        <option value="s">
                          Small
                        </option>
                        <option value="m">
                          Medium
                        </option>
                        <option value="l">
                          Large
                        </option>
                        <option value="xl">
                          Extra Large
                        </option>
                      </select>
                    </div>

                    <a href="#" class="size-guide"><i class="icon-th-list" />size guide</a>
                  </div>

                  <div class="product-details-action">
                    <div class="details-action-col">
                      <label for="qty">Qty:</label>
                      <div class="product-details-quantity">
                        <input
                          id="qty"
                          type="number"
                          class="form-control"
                          value="1"
                          min="1"
                          max="10"
                          step="1"
                          data-decimals="0"
                          required
                        >
                      </div>

                      <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                    </div>

                    <div class="details-action-wrapper">
                      <a href="#" class="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                      <a href="#" class="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                    </div>
                  </div>

                  <div class="product-details-footer details-footer-col">
                    <div class="product-cat">
                      <span>Category:</span>
                      <a href="#">Women</a>,
                      <a href="#">Dresses</a>,
                      <a href="#">Yellow</a>
                    </div>

                    <div class="social-icons social-icons-sm">
                      <span class="social-label">Share:</span>
                      <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f" /></a>
                      <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter" /></a>
                      <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram" /></a>
                      <a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-details-tab">
            <ul class="nav nav-pills justify-content-center" role="tablist">
              <li class="nav-item">
                <a
                  id="product-desc-link"
                  class="nav-link active"
                  data-toggle="tab"
                  href="#product-desc-tab"
                  role="tab"
                  aria-controls="product-desc-tab"
                  aria-selected="true"
                >Description</a>
              </li>
              <li class="nav-item">
                <a
                  id="product-info-link"
                  class="nav-link"
                  data-toggle="tab"
                  href="#product-info-tab"
                  role="tab"
                  aria-controls="product-info-tab"
                  aria-selected="false"
                >Additional information</a>
              </li>
              <li class="nav-item">
                <a
                  id="product-shipping-link"
                  class="nav-link"
                  data-toggle="tab"
                  href="#product-shipping-tab"
                  role="tab"
                  aria-controls="product-shipping-tab"
                  aria-selected="false"
                >Shipping & Returns</a>
              </li>
              <li class="nav-item">
                <a
                  id="product-review-link"
                  class="nav-link"
                  data-toggle="tab"
                  href="#product-review-tab"
                  role="tab"
                  aria-controls="product-review-tab"
                  aria-selected="false"
                >Reviews (2)</a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="product-desc-tab" class="tab-pane fade show active" role="tabpanel" aria-labelledby="product-desc-link">
                <div class="product-desc-content">
                  <h3>Product Information</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                  <ul>
                    <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                    <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                  </ul>

                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                </div><!-- End .product-desc-content -->
              </div><!-- .End .tab-pane -->
              <div id="product-info-tab" class="tab-pane fade" role="tabpanel" aria-labelledby="product-info-link">
                <div class="product-desc-content">
                  <h3>Information</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                  <h3>Fabric & care</h3>
                  <ul>
                    <li>Faux suede fabric</li>
                    <li>Gold tone metal hoop handles.</li>
                    <li>RI branding</li>
                    <li>Snake print trim interior </li>
                    <li>Adjustable cross body strap</li>
                    <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                  </ul>

                  <h3>Size</h3>
                  <p>one size</p>
                </div><!-- End .product-desc-content -->
              </div><!-- .End .tab-pane -->
              <div id="product-shipping-tab" class="tab-pane fade" role="tabpanel" aria-labelledby="product-shipping-link">
                <div class="product-desc-content">
                  <h3>Delivery & returns</h3>
                  <p>
                    We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br>
                    We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a>
                  </p>
                </div><!-- End .product-desc-content -->
              </div><!-- .End .tab-pane -->
              <div id="product-review-tab" class="tab-pane fade" role="tabpanel" aria-labelledby="product-review-link">
                <div class="reviews">
                  <h3>Reviews (2)</h3>
                  <div class="review">
                    <div class="row no-gutters">
                      <div class="col-auto">
                        <h4><a href="#">Samanta J.</a></h4>
                        <div class="ratings-container">
                          <div class="ratings">
                            <div class="ratings-val" style="width: 80%;" /><!-- End .ratings-val -->
                          </div><!-- End .ratings -->
                        </div><!-- End .rating-container -->
                        <span class="review-date">6 days ago</span>
                      </div><!-- End .col -->
                      <div class="col">
                        <h4>Good, perfect size</h4>

                        <div class="review-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                        </div><!-- End .review-content -->

                        <div class="review-action">
                          <a href="#"><i class="icon-thumbs-up" />Helpful (2)</a>
                          <a href="#"><i class="icon-thumbs-down" />Unhelpful (0)</a>
                        </div><!-- End .review-action -->
                      </div><!-- End .col-auto -->
                    </div><!-- End .row -->
                  </div><!-- End .review -->

                  <div class="review">
                    <div class="row no-gutters">
                      <div class="col-auto">
                        <h4><a href="#">John Doe</a></h4>
                        <div class="ratings-container">
                          <div class="ratings">
                            <div class="ratings-val" style="width: 100%;" /><!-- End .ratings-val -->
                          </div><!-- End .ratings -->
                        </div><!-- End .rating-container -->
                        <span class="review-date">5 days ago</span>
                      </div><!-- End .col -->
                      <div class="col">
                        <h4>Very good</h4>

                        <div class="review-content">
                          <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                        </div><!-- End .review-content -->

                        <div class="review-action">
                          <a href="#"><i class="icon-thumbs-up" />Helpful (0)</a>
                          <a href="#"><i class="icon-thumbs-down" />Unhelpful (0)</a>
                        </div><!-- End .review-action -->
                      </div><!-- End .col-auto -->
                    </div><!-- End .row -->
                  </div><!-- End .review -->
                </div><!-- End .reviews -->
              </div><!-- .End .tab-pane -->
            </div><!-- End .tab-content -->
          </div><!-- End .product-details-tab -->

          <h2 class="title text-center mb-4">
            You May Also Like
          </h2><!-- End .title text-center -->

          <client-only>
            <carousel>
              <div class="product product-7">
                <figure class="product-media">
                  <span class="product-label label-new">New</span>
                  <a href="product.html">
                    <img src="assets/images/products/product-4.jpg" alt="Product image" class="product-image">
                  </a>

                  <div class="product-action-vertical">
                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                  </div><!-- End .product-action-vertical -->

                  <div class="product-action">
                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                  </div><!-- End .product-action -->
                </figure><!-- End .product-media -->

                <div class="product-body">
                  <div class="product-cat">
                    <a href="#">Women</a>
                  </div><!-- End .product-cat -->
                  <h3 class="product-title">
                    <a href="product.html">Brown paperbag waist <br>pencil skirt</a>
                  </h3>
                  <!-- End .product-title -->
                  <div class="product-price">
                    $60.00
                  </div><!-- End .product-price -->
                  <div class="ratings-container">
                    <div class="ratings">
                      <div class="ratings-val" style="width: 20%;" /><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <span class="ratings-text">( 2 Reviews )</span>
                  </div><!-- End .rating-container -->

                  <div class="product-nav product-nav-dots">
                    <a href="#" class="active" style="background: #cc9966;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #7fc5ed;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #e8c97a;"><span class="sr-only">Color name</span></a>
                  </div><!-- End .product-nav -->
                </div><!-- End .product-body -->
              </div><!-- End .product -->

              <div class="product product-7">
                <figure class="product-media">
                  <span class="product-label label-out">Out of Stock</span>
                  <a href="product.html">
                    <img src="assets/images/products/product-6.jpg" alt="Product image" class="product-image">
                  </a>

                  <div class="product-action-vertical">
                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                  </div><!-- End .product-action-vertical -->

                  <div class="product-action">
                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                  </div><!-- End .product-action -->
                </figure><!-- End .product-media -->

                <div class="product-body">
                  <div class="product-cat">
                    <a href="#">Jackets</a>
                  </div><!-- End .product-cat -->
                  <h3 class="product-title">
                    <a href="product.html">Khaki utility boiler jumpsuit</a>
                  </h3>
                  <!-- End .product-title -->
                  <div class="product-price">
                    <span class="out-price">$120.00</span>
                  </div><!-- End .product-price -->
                  <div class="ratings-container">
                    <div class="ratings">
                      <div class="ratings-val" style="width: 80%;" /><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <span class="ratings-text">( 6 Reviews )</span>
                  </div><!-- End .rating-container -->
                </div><!-- End .product-body -->
              </div><!-- End .product -->

              <div class="product product-7">
                <figure class="product-media">
                  <span class="product-label label-top">Top</span>
                  <a href="product.html">
                    <img src="assets/images/products/product-11.jpg" alt="Product image" class="product-image">
                  </a>

                  <div class="product-action-vertical">
                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                  </div><!-- End .product-action-vertical -->

                  <div class="product-action">
                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                  </div><!-- End .product-action -->
                </figure><!-- End .product-media -->

                <div class="product-body">
                  <div class="product-cat">
                    <a href="#">Shoes</a>
                  </div><!-- End .product-cat -->
                  <h3 class="product-title">
                    <a href="product.html">Light brown studded Wide fit wedges</a>
                  </h3>
                  <!-- End .product-title -->
                  <div class="product-price">
                    $110.00
                  </div><!-- End .product-price -->
                  <div class="ratings-container">
                    <div class="ratings">
                      <div class="ratings-val" style="width: 80%;" /><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <span class="ratings-text">( 1 Reviews )</span>
                  </div><!-- End .rating-container -->

                  <div class="product-nav product-nav-dots">
                    <a href="#" class="active" style="background: #8b513d;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                    <a href="#" style="background: #d2b99a;"><span class="sr-only">Color name</span></a>
                  </div><!-- End .product-nav -->
                </div><!-- End .product-body -->
              </div><!-- End .product -->

              <div class="product product-7">
                <figure class="product-media">
                  <a href="product.html">
                    <img src="assets/images/products/product-10.jpg" alt="Product image" class="product-image">
                  </a>

                  <div class="product-action-vertical">
                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                  </div><!-- End .product-action-vertical -->

                  <div class="product-action">
                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                  </div><!-- End .product-action -->
                </figure><!-- End .product-media -->

                <div class="product-body">
                  <div class="product-cat">
                    <a href="#">Jumpers</a>
                  </div><!-- End .product-cat -->
                  <h3 class="product-title">
                    <a href="product.html">Yellow button front tea top</a>
                  </h3>
                  <!-- End .product-title -->
                  <div class="product-price">
                    $56.00
                  </div><!-- End .product-price -->
                  <div class="ratings-container">
                    <div class="ratings">
                      <div class="ratings-val" style="width: 0%;" /><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <span class="ratings-text">( 0 Reviews )</span>
                  </div><!-- End .rating-container -->
                </div><!-- End .product-body -->
              </div><!-- End .product -->

              <div class="product product-7">
                <figure class="product-media">
                  <a href="product.html">
                    <img src="assets/images/products/product-7.jpg" alt="Product image" class="product-image">
                  </a>

                  <div class="product-action-vertical">
                    <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                    <a href="#" class="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                  </div><!-- End .product-action-vertical -->

                  <div class="product-action">
                    <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                  </div><!-- End .product-action -->
                </figure><!-- End .product-media -->

                <div class="product-body">
                  <div class="product-cat">
                    <a href="#">Jeans</a>
                  </div><!-- End .product-cat -->
                  <h3 class="product-title">
                    <a href="product.html">Blue utility pinafore denim dress</a>
                  </h3>
                  <!-- End .product-title -->
                  <div class="product-price">
                    $76.00
                  </div><!-- End .product-price -->
                  <div class="ratings-container">
                    <div class="ratings">
                      <div class="ratings-val" style="width: 20%;" /><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <span class="ratings-text">( 2 Reviews )</span>
                  </div><!-- End .rating-container -->
                </div><!-- End .product-body -->
              </div><!-- End .product -->
            </carousel>
          </client-only>
        </div>

        <aside class="col-lg-3">
          <div class="sidebar sidebar-product">
            <div class="widget widget-products">
              <h4 class="widget-title">
                Related Product
              </h4><!-- End .widget-title -->

              <div class="products">
                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="assets/images/products/single/sidebar/1.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title">
                      <a href="product.html">Light brown studded Wide fit wedges</a>
                    </h5><!-- End .product-title -->
                    <div class="product-price">
                      <span class="new-price">$50.00</span>
                      <span class="old-price">$110.00</span>
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->

                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="assets/images/products/single/sidebar/2.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title">
                      <a href="product.html">Yellow button front tea top</a>
                    </h5><!-- End .product-title -->
                    <div class="product-price">
                      $56.00
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->

                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="assets/images/products/single/sidebar/3.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title">
                      <a href="product.html">Beige metal hoop tote bag</a>
                    </h5><!-- End .product-title -->
                    <div class="product-price">
                      $50.00
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->

                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="assets/images/products/single/sidebar/4.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title">
                      <a href="product.html">Black soft RI weekend travel bag</a>
                    </h5><!-- End .product-title -->
                    <div class="product-price">
                      $75.00
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->
              </div><!-- End .products -->

              <a href="category.html" class="btn btn-outline-dark-3"><span>View More Products</span><i class="icon-long-arrow-right" /></a>
            </div><!-- End .widget widget-products -->

            <div class="widget widget-banner-sidebar">
              <div class="banner-sidebar-title">
                ad box 280 x 280
              </div><!-- End .ad-title -->

              <div class="banner-sidebar banner-overlay">
                <a href="#">
                  <img src="assets/images/blog/sidebar/banner.jpg" alt="banner">
                </a>
              </div><!-- End .banner-ad -->
            </div><!-- End .widget -->
          </div><!-- End .sidebar sidebar-product -->
        </aside><!-- End .col-lg-3 -->
      </div><!-- End .row -->
    </div><!-- End .container -->
  </div>
</template>

<script>
export default {
  name: 'Id',

  async asyncData ({ store, params }) {
    const product = await store.dispatch('products/getProductById', params.id)
    return { product, mainPhoto: product.details[0].photo }
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.mainPhoto)
  },

  validate ({ params }) {
    return Boolean(params.id)
  }
}
</script>

<style scoped>

</style>
