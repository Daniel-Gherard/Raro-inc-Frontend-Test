<template lang="pug">
#blog
  .title Blog

  v-container.news-wrapper
    v-row
      template(v-for="post in news")
        news-card(
          :key="post.id"
          :title="post.title"
          :body="post.body"
        )
</template>

<script>
import { mapGetters } from 'vuex'
import newsCard from '@/components/news/newsCard.vue'

export default {
  name: 'Blog',
  components: {
    newsCard
  },
  computed: {
    ...mapGetters('news', ['news'])
  },
  created() {
    this.$store.dispatch('news/getNews')
  }
}
</script>

<style scoped lang="scss">
#blog {
  margin-top: 40px;
  width: 100%;

  .title {
    background-color: #323469;
    color: white;
    padding: 15px;
    font-size: 25px;
    width: 300px;
    min-width: 300px;
  }

  .news-wrapper {
    padding: 30px 20px;
    max-width: 1250px !important;

    .row {
      justify-content: center;
    }
  }
}
</style>
