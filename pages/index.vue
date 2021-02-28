<template>
  <div>
    <app-main-title/>
    <app-breadcrumb/>
    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <app-toolbox/>
            <app-product/>
            <app-pagination/>
          </div>
          <aside class="col-lg-3 order-lg-first">
            <product-filter/>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppMainTitle from "@/components/MainTitle";
import AppBreadcrumb from "@/components/Breadcrumb";
import AppToolbox from "@/components/Toolbox";
import AppProduct from "@/components/Product";
import AppPagination from "@/components/Pagination";


export default {
  components: {
    AppMainTitle,
    AppBreadcrumb,
    AppToolbox,
    AppProduct,
    AppPagination,
  }
}
</script>

<style>

</style>
