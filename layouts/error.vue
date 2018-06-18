<template>
  <div class="content">
    <h1 v-if="error.statusCode === 404">Puslapio, kurio ieškote nėra</h1>
    <h1 v-else>Įvyko klaida, atsiprašome už nepatogumus</h1>
    <nuxt-link to="/">Grįžti į pradinį puslapį</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>