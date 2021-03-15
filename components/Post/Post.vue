<template>
  <div class="entry-item col-sm-6 col-lg-4">
    <article class="entry entry-mask">
      <figure class="entry-media">
        <a href="#" @click.prevent="showPost">
          <img class="entry-img" :src="post.imageURL.location" alt="image desc">
        </a>
      </figure>
      <div class="entry-body">
        <div class="entry-meta">
          <a href="#">{{ post.date | date }}</a>
          <span class="meta-separator">|</span>
          <a href="#">{{ post.comments.length }} Comments</a>
        </div>
        <h2 class="entry-title">
          <a style="text-transform: capitalize" href="#" @click.prevent="showPost">{{ post.title }}</a>
        </h2>
        <div class="entry-cats">
          in <a href="#">{{ post.tag }}</a>
        </div>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  name: 'Post',

  props: {
    post: {
      type: Object,
      required: true

    }
  },

  methods: {
    showPost () {
      this.$router.push(`/posts/${this.post._id}`)
    }
  }
}
</script>

<style scoped>
.entry-img{
  width: 376px;
  height: 376px;
 object-fit: cover;
}
</style>
