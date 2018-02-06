<template>
  <div class="notification is-primary" v-if="notificationData.isActive">
    <button class="delete"   @click="notificationData.isActive=!notificationData.isActive"></button>
    {{ notificationData.text }}
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
  },
  methods: {

  }
}
</script>

<style>

</style>
