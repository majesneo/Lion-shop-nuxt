<template>
  <div class="comments">
    <ul>
      <li>
        <div class="comment">
          <figure class="comment-media">
            <a href="#">
              <img src="../../assets/images/blog/comments/1.jpg" alt="User name">
            </a>
          </figure>

          <div class="comment-body">
            <a href="#" class="comment-reply">Reply</a>
            <div class="comment-user">
              <h4><a href="#">{{ comment.name }}</a></h4>
              <span class="comment-date">{{ comment.date | date }}</span>
            </div><!-- End .comment-user -->

            <div class="comment-content">
              <p>
                {{ comment.text }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogPostComment',
  props: {
    comment: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
