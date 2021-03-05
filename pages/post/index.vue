<template>
  <div class="page-content">
    <app-main-title />
    <app-breadcrumb />
    <app-post />
  </div>
</template>

<script>
import AppPost from '@/components/Post/Post'
import AppMainTitle from '@/components/Title'
import AppBreadcrumb from '@/components/Breadcrumb'

export default {
  name: 'Index',
  components: {
    AppMainTitle,
    AppBreadcrumb,
    AppPost
  }
}
</script>

<style scoped>

</style>
