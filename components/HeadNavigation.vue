<template>
  <header class="header header-7">
    <div class="header-top">
      <div class="container-fluid">
        <div class="header-left">
          <div class="header-dropdown">
            <a href="#">Usd</a>
            <div class="header-menu">
              <ul>
                <li><a href="#">Eur</a></li>
                <li><a href="#">Usd</a></li>
              </ul>
            </div><!-- End .header-menu -->
          </div><!-- End .header-dropdown -->

          <div class="header-dropdown">
            <a href="#">Eng</a>
            <div class="header-menu">
              <ul>
                <li><a href="#">English</a></li>
                <li><a href="#">French</a></li>
                <li><a href="#">Spanish</a></li>
              </ul>
            </div><!-- End .header-menu -->
          </div><!-- End .header-dropdown -->
        </div><!-- End .header-left -->

        <div class="header-right">
          <ul class="top-menu">
            <li>
              <a href="#">Links</a>
              <ul>
                <li><a href="tel:#"><i class="icon-phone" />Call: +0123 456 789</a></li>
                <li><a href="wishlist.html"><i class="icon-heart-o" />My Wishlist <span>(3)</span></a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="#signin-modal" data-toggle="modal"><i class="icon-user" />Login</a></li>
              </ul>
            </li>
          </ul><!-- End .top-menu -->
        </div><!-- End .header-right -->
      </div><!-- End .container-fluid -->
    </div><!-- End .header-top -->

    <div class="header-middle sticky-header">
      <div class="container-fluid">
        <div class="header-left">
          <button class="mobile-menu-toggler">
            <span class="sr-only">Toggle mobile menu</span>
            <i class="icon-bars" />
          </button>

          <a href="index.html" class="logo">
            <img src="assets/images/demos/demo-7/logo.png" alt="Molla Logo" width="105" height="25">
          </a>

          <nav class="main-nav">
            <ul class="menu sf-arrows">
              <li class="megamenu-container">
                <nuxt-link to="/" class="sf-with-ul">
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin" class="sf-with-ul">
                  Admin
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/product" class="sf-with-ul">
                  Product
                </nuxt-link>
              </li>
              <li>
                <a href="#" class="sf-with-ul">Pages</a>
              </li>
              <li>
                <nuxt-link to="/posts" class="sf-with-ul">
                  Posts
                </nuxt-link>
              </li>
              <li>
                <a href="elements-list.html" class="sf-with-ul">Elements</a>
              </li>
            </ul><!-- End .menu -->
          </nav><!-- End .main-nav -->
        </div><!-- End .header-left -->

        <div class="header-right">
          <div class="header-search header-search-extended header-search-visible">
            <a href="#" class="search-toggle" role="button"><i class="icon-search" /></a>
            <form action="#" method="get">
              <div class="header-search-wrapper search-wrapper-wide">
                <label for="q" class="sr-only">Search</label>
                <input
                  id="q"
                  type="search"
                  class="form-control"
                  name="q"
                  placeholder="Search product ..."
                  required
                >
                <button class="btn btn-primary" type="submit">
                  <i class="icon-search" />
                </button>
              </div><!-- End .header-search-wrapper -->
            </form>
          </div><!-- End .header-search -->

          <div class="dropdown cart-dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <i class="icon-shopping-cart" />
              <span class="cart-count">2</span>
            </a>

            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-cart-products">
                <div class="product">
                  <div class="product-cart-details">
                    <h4 class="product-title">
                      <a href="product.html">Beige knitted elastic runner shoes</a>
                    </h4>

                    <span class="cart-product-info">
                      <span class="cart-product-qty">1</span>
                      x $84.00
                    </span>
                  </div><!-- End .product-cart-details -->

                  <figure class="product-image-container">
                    <a href="product.html" class="product-image">
                      <img src="assets/images/products/cart/product-1.jpg" alt="product">
                    </a>
                  </figure>
                  <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close" /></a>
                </div><!-- End .product -->

                <div class="product">
                  <div class="product-cart-details">
                    <h4 class="product-title">
                      <a href="product.html">Blue utility pinafore denim dress</a>
                    </h4>

                    <span class="cart-product-info">
                      <span class="cart-product-qty">1</span>
                      x $76.00
                    </span>
                  </div><!-- End .product-cart-details -->

                  <figure class="product-image-container">
                    <a href="product.html" class="product-image">
                      <img src="assets/images/products/cart/product-2.jpg" alt="product">
                    </a>
                  </figure>
                  <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close" /></a>
                </div><!-- End .product -->
              </div><!-- End .cart-product -->

              <div class="dropdown-cart-total">
                <span>Total</span>

                <span class="cart-total-price">$160.00</span>
              </div><!-- End .dropdown-cart-total -->

              <div class="dropdown-cart-action">
                <a href="cart.html" class="btn btn-primary">View Cart</a>
                <a href="checkout.html" class="btn btn-outline-primary-2"><span>Checkout</span><i
                  class="icon-long-arrow-right"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeadNavigation'
}
</script>

<style scoped>
 a.nuxt-link-active{
  color: initial !important;
}
 a.nuxt-link-active.nuxt-link-exact-active{
   color: #c96 !important;
 }
</style>
