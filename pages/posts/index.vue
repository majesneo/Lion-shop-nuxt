<template>
  <div class="page-content">
    <app-main-title />
    <the-post-nav />
    <div class="page-content">
      <div class="container">
        <div class="entry-container" data-layout="fitRows">
          <app-post v-for="post in posts" :key="post._id" :post="post" />
        </div>
      </div>
    </div>
    <app-pagination />
  </div>
</template>

<script>
import AppPost from '@/components/Post/Post'
import AppMainTitle from '@/components/Title'
import ThePostNav from '@/components/Post/PostNav'
import AppPagination from '@/components/Pagination'
export default {
  name: 'Index',

  components: {
    AppMainTitle,
    ThePostNav,
    AppPagination,
    AppPost

  },
  async asyncData ({ store }) {
    const posts = await store.dispatch('posts/getPosts')
    return { posts }
  }
}
</script>

<style scoped>

</style>
