<template>
  <nav class="d-flex align-items-center justify-content-center" aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item disabled">
        <a
          class="page-link page-link-prev"
          href="#"
          aria-label="Previous"
          tabindex="-1"
          aria-disabled="true"
        >
          <span aria-hidden="true"><i class="icon-long-arrow-left" /></span>Prev
        </a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item-total">
        of 6
      </li>
      <li class="page-item">
        <a class="page-link page-link-next" href="#" aria-label="Next">
          Next <span aria-hidden="true"><i class="icon-long-arrow-right" /></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style scoped>

</style>
