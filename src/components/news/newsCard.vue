<template lang="pug">
v-col#newsCard(cols="12" sm="3" md="3")
  .card-wrapper
    .image
    .news-wrapper
      .title {{ title }}
      .description {{ body }}

  .card-actions
    button.orange-button.round-button Continuar
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.card-wrapper {
  border: 3px solid #323469;
  width: 100%;
  height: 300px;
}

.image {
  background: url(https://picsum.photos/650);
  background-color: rgba(255,155,35,.7);
  background-size: 100%;
  background-blend-mode: overlay;
  min-height: 130px;
  width: 100%;
}

.title {
  font-size: 12px;
  font-weight: bolder;
  color: #323469;
  margin-bottom: 10px;
}

.news-wrapper {
  padding: 15px;
  text-align: left;
}

.description {
  font-size: 11px;
  font-weight: 500;
  color: #323469;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
}

.card-actions {
  background-color: #323469;
  padding: 5px 0 20px 0px;

  .round-button {
    height: 22px;
  }
}
</style>
