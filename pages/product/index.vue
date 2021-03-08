<template>
  <div>
    <app-title :title="$route.name" />
    <div class="page-content mt-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <app-product-toolbox />
            <app-product />
            <app-pagination />
          </div>
          <aside class="col-lg-3 order-lg-first">
            <product-filter />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/Title'
import AppProductToolbox from '@/components/Product/ProductToolbox'
import AppProduct from '@/components/Product/Product'
import AppPagination from '@/components/Pagination'

export default {
  name: 'Index',
  components: {
    AppTitle,
    AppProductToolbox,
    AppProduct,
    AppPagination
  }
}
</script>

<style scoped>

</style>
