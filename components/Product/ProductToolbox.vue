<template>
  <div class="toolbox">
    <div class="toolbox-left">
      <div class="toolbox-info">
        Showing <span>9 of 56</span> Products
      </div>
    </div>
    <div class="toolbox-right">
      <div class="toolbox-sort">
        <label for="sortby">Sort by:</label>
        <div class="select-custom">
          <select id="sortby" name="sortby" class="form-control">
            <option value="popularity" selected="selected">
              Most Popular
            </option>
            <option value="rating">
              Most Rated
            </option>
            <option value="date">
              Date
            </option>
          </select>
        </div>
      </div>
      <div class="toolbox-layout">
        <a href="category-list.html" class="btn-layout active">
          <svg width="16" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="10" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="10" height="4" />
          </svg>
        </a>

        <a href="category-2cols.html" class="btn-layout">
          <svg width="10" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="4" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="4" height="4" />
          </svg>
        </a>

        <a href="category.html" class="btn-layout">
          <svg width="16" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="4" height="4" />
            <rect x="12" y="0" width="4" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="4" height="4" />
            <rect x="12" y="6" width="4" height="4" />
          </svg>
        </a>

        <a href="category-4cols.html" class="btn-layout">
          <svg width="22" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="4" height="4" />
            <rect x="12" y="0" width="4" height="4" />
            <rect x="18" y="0" width="4" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="4" height="4" />
            <rect x="12" y="6" width="4" height="4" />
            <rect x="18" y="6" width="4" height="4" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductToolbox'
}
</script>

<style scoped>

</style>
