<template lang="pug">
#header
  v-container
    v-row
      v-col.banner
        consulting-banner
      v-col.contact
        contact-card
</template>

<script>
import consultingBanner from '@/components/shared/consultingBanner.vue'
import contactCard from '@/components/shared/contactCard.vue'

export default {
  name: 'HeaderBanner',
  components: {
    consultingBanner,
    contactCard
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  min-height: 650px;
  background: url(https://picsum.photos/650);
  background-color: rgba(255,155,35,.7);
  background-size: cover;
  background-blend-mode: overlay;
}

.col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: relative;
  top: 385px;
}

.banner {
  margin-top: 0px;
}

.contact {
  margin-top: 0px;
}
</style>
