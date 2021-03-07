<template>
  <div class="page-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <article class="entry single-entry">
            <div class="entry-body">
              <div class="entry-meta">
                <span class="entry-author">
                  by <a style="text-transform: capitalize" href="#">{{ post.author }}</a>
                </span>
                <span class="meta-separator">|</span>
                <a href="#">{{ post.date | date }}</a>
                <span class="meta-separator">|</span>
                <a href="#">{{ post.comments.length }} Comments</a>
              </div>

              <h2 style="text-transform: capitalize" class="entry-title">
                {{ post.title }}
              </h2>

              <div class="entry-content editor-content" v-html="post.content" />
              <div class="entry-footer row no-gutters flex-column flex-md-row">
                <div class="col-md">
                  <div class="entry-tags">
                    <span>Tags:</span> <a href="#">{{ post.tag }}</a>
                  </div>
                </div>

                <div class="col-md-auto mt-2 mt-md-0">
                  <app-post-social />
                </div>
              </div>
            </div>

            <div class="entry-author-details">
              <figure class="author-media">
                <a href="#">
                  <img src="assets/images/blog/single/author.jpg" alt="User name">
                </a>
              </figure>

              <div class="author-body">
                <div class="author-header row no-gutters flex-column flex-md-row">
                  <div class="col">
                    <h4><a style="text-transform: capitalize" href="#">{{ post.author }}</a></h4>
                  </div>
                  <div class="col-auto mt-1 mt-md-0">
                    <a href="#" class="author-link">View all posts by John Doe <i class="icon-long-arrow-right" /></a>
                  </div>
                </div>

                <div class="author-content">
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu
                    erat. Aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <nav class="pager-nav" aria-label="Page navigation">
            <a class="pager-link pager-link-prev" href="#" aria-label="Previous" tabindex="-1">
              Previous Post
              <span class="pager-link-title">Cras iaculis ultricies nulla</span>
            </a>

            <a class="pager-link pager-link-next" href="#" aria-label="Next" tabindex="-1">
              Next Post
              <span class="pager-link-title">Praesent placerat risus</span>
            </a>
          </nav>

          <div class="related-posts">
            <h3 class="title">
              Related Posts
            </h3>

            <no-ssr>
              <carousel>
                <article class="entry entry-grid">
                  <figure class="entry-media">
                    <a href="single.html">
                      <img src="assets/images/blog/grid/3cols/post-3.jpg" alt="image desc">
                    </a>
                  </figure>

                  <div class="entry-body">
                    <div class="entry-meta">
                      <a href="#">Nov 18, 2018</a>
                      <span class="meta-separator">|</span>
                      <a href="#">3 Comments</a>
                    </div>

                    <h2 class="entry-title">
                      <a href="single.html">Utaliquam sollicitudin leo.</a>
                    </h2>

                    <div class="entry-cats">
                      in <a href="#">Fashion</a>,
                      <a href="#">Lifestyle</a>
                    </div>
                  </div>
                </article>
              </carousel>
            </no-ssr>
          </div>

          <h3 class="title">
            {{ post.comments.length }} Comments
          </h3>

          <app-post-comment v-for="comment in post.comments" :key="comment._id" :comment="comment" />
          <app-post-comment-form :post-id="post._id" @commentCreated="commentCreated" />
        </div>
        <the-post-aside />
      </div>
    </div>
  </div>
</template>

<script>
import AppPostComment from '@/components/Post/PostComment'
import AppPostCommentForm from '@/components/Post/PostCommentForm'
import ThePostAside from '@/components/Post/PostAside'
import AppPostSocial from '@/components/Post/PostSocial'

export default {
  name: 'Id',
  components: {
    AppPostComment,
    AppPostCommentForm,
    ThePostAside,
    AppPostSocial
  },
  async asyncData ({ store, params }) {
    const { data } = await store.dispatch('posts/getPostById', params.id)
    const post = data
    return { post }
  },
  validate ({ params }) {
    return Boolean(params.id)
  },
  methods: {
    commentCreated (comment) {
      this.post.comments.unshift(comment)
    }
  }

}
</script>

<style scoped>

</style>
