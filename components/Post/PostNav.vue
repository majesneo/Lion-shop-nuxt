<template>
  <nav class="blog-nav">
    <ul class="menu-cat entry-filter justify-content-center">
      <li class="active">
        <a href="#" @click="$emit('handlerTags', 'allPosts')">All Blog Posts<span>{{ allPosts }}</span></a>
      </li>
      <li><a href="#" @click="$emit('handlerTags', 'lifestyle')">Lifestyle<span>{{ tags.lifestyle }}</span></a></li>
      <li><a href="#" @click="$emit('handlerTags', 'shopping')">Shopping<span>{{ tags.shopping }}</span></a></li>
      <li><a href="#" @click="$emit('handlerTags', 'fashion')">Fashion<span>{{ tags.fashion }}</span></a></li>
      <li><a href="#" @click="$emit('handlerTags', 'travel')">Travel<span>{{ tags.travel }}</span></a></li>
      <li><a href="#" @click="$emit('handlerTags', 'hobbies')">Hobbies<span>{{ tags.hobbies }}</span></a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PostNav',

  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      allPosts: 0,
      tags: {
        lifestyle: 0,
        shopping: 0,
        fashion: 0,
        travel: 0,
        hobbies: 0
      }
    }
  },
  mounted () {
    this.calcQuantityTag()
  },
  methods: {
    calcQuantityTag () {
      for (const tagsKey in this.tags) {
        this.posts.forEach((post, index) => {
          this.allPosts = index + 1
          if (post.tag.includes(tagsKey)) {
            ++this.tags[tagsKey]
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
