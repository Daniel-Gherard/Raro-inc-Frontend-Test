<template lang="pug">
#home
  header-banner

  v-container
    v-row#descriptionRow
      v-col(cols="12" md="4" sm="4")
        .orange-title Pense nisso...

        .subtitle O quanto o diagnóstico de uma doença grave, internação ou cirurgia inesperada pode afetar, hoje, sua vida pessoal e financeira?

    v-row#blogRow
      blog
</template>

<script>
import headerBanner from '@/components/shared/header.vue'
import blog from '@/components/news/blog.vue'

export default {
  name: 'Home',
  components: {
    headerBanner,
    blog
  }
}
</script>

<style scoped lang="scss">
#home {
  .orange-title {
    font-size: 16px;
    font-weight: bolder;
    color: #FF9B23;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 11px;
    font-weight: 600;
    color: #2c3e50;
  }

  #descriptionRow {
    padding: 0 130px;
    text-align: left;
  }

  @media (min-width: 520px) {
    #descriptionRow {
      padding-top: 110px;
    }
  }

  @media (max-width: 520px) {
    #descriptionRow {
      padding: 390px 80px 0;
    }
  }

  #blogRow {

  }
}
</style>
