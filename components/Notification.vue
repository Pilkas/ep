<template>
  <div class="modal" :class="{'is-active': notificationData.isActive}">
    <div class="modal-background" @click="notificationData.isActive=!notificationData.isActive"></div>
    <div class="modal-content box">
      {{ notificationData.text }}
    </div>
    <button class="modal-close is-large" aria-label="close" @click="notificationData.isActive=!notificationData.isActive"></button>
  </div>
</template>
<script>
export default {
  props: {
    notificationData: Object
  },
  data () {
    return {

    }
  }
}
</script>
<style>

</style>
