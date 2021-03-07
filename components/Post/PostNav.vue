<template>
  <nav class="blog-nav">
    <ul class="menu-cat entry-filter justify-content-center">
      <li class="active">
        <a href="#" data-filter="*">All Blog Posts<span>9</span></a>
      </li>
      <li><a href="#" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
      <li><a href="#" data-filter=".shopping">Shopping<span>1</span></a></li>
      <li><a href="#" data-filter=".fashion">Fashion<span>2</span></a></li>
      <li><a href="#" data-filter=".travel">Travel<span>4</span></a></li>
      <li><a href="#" data-filter=".hobbies">Hobbies<span>2</span></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PostNav'
}
</script>

<style scoped>

</style>
