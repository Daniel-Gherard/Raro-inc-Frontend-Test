<template lang="pug">
#consultingBanner
  #banner
    .subtitle Vida toda
    .title Bem Estar
    .subtitle.bottom-text Soluções completas para viver mais e melhor

  #button
    button.orange-button Quero uma consultoria
</template>

<script>
export default {
  name: 'ConsultingBanner',
}
</script>

<style scoped lang="scss">
#consultingBanner {
  padding: 20px 10px;
  border: 3px solid #323469;
  max-width: min-content;
  max-height: 500px;
  margin-top: -50px;
}

#banner {
  color: #323469;
  text-align: left;
  font-family: system-ui;
}

.title {
  font-size: 60px;
  font-weight: bolder;
  text-transform: uppercase;
  margin-left: -5px;
}

.subtitle {
  font-size: 12px;
  font-weight: bold;
}

.bottom-text {
  margin-top: 35px;
  margin-bottom: 30px;
}

</style>
