<template>
  <section class="page-content">
    <app-main-title :title="$route.name" />
    <the-post-nav class="mt-2" :posts="posts" @handlerTags="handlerTags" />
    <div class="page-content">
      <div class="container">
        <div class="entry-container" data-layout="fitRows">
          <app-post v-for="post in posts" :key="post._id" :post="post" />

          <h6 v-if="posts.length === 0" class="text-center mt-3">
            No posts
          </h6>
        </div>
      </div>
    </div>
    <app-pagination />
  </section>
</template>

<script>
import AppPost from '@/components/Post/Post'
import AppMainTitle from '@/components/Title'
import ThePostNav from '@/components/Post/PostNav'
import AppPagination from '@/components/Pagination'
export default {
  name: 'Index',
  title: 'Posts',
  components: {
    AppMainTitle,
    ThePostNav,
    AppPagination,
    AppPost

  },
  async asyncData ({ store }) {
    const posts = await store.dispatch('posts/getPosts')

    return { posts }
  },
  data () {
    return {
      list: null
    }
  },
  methods: {
    handlerTags (eventTag) {
    }
  }
}
</script>

<style scoped>

</style>
