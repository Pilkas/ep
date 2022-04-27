<template>
  <div class="content">
    <h1 v-if="error.statusCode === 404">Puslapio, kurio ieškote nėra</h1>
    <h1 v-else>Įvyko klaida, atsiprašome už nepatogumus</h1>
    <NuxtLink to="/">Grįžti į pradinį puslapį</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>