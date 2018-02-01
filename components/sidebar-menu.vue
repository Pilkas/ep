<template>
  <nav class="menu">
    <p class="menu-label">Paslaugos</p>
    <ul class="menu-list">
      <li><a>Verslo plano rengimas</a></li>
      <li><a>ES paramos projektų rengimas</a></li>
      <li><a>Marketingo strategijos kūrimas</a></li>
    </ul>
    <p class="menu-label">Apie mus</p>
    <ul class="menu-list">
      <li><nuxt-link to="/about" active-class="is-active" @click="emitBle">Komanda</nuxt-link></li>
      <li><nuxt-link to="/contacts" active-class="is-active" @click="emitBle">Kontaktai</nuxt-link></li>
      <li><nuxt-link to="/apie" active-class="is-active" @click="emitBle">API Apie</nuxt-link></li>
      <li><nuxt-link to="/musu-kontaktai" active-class="is-active" @click="emitBle">API Kontaktai</nuxt-link></li>
    </ul>
    <p class="menu-label">Naudinga informacija</p>
    <ul class="menu-list">
      <li><a>Verslo finansavimas Lietuvoje</a></li>
      <li><a>D.U.K.</a></li>
    </ul>
  </nav>
</template>

<script>
// export default {
//   name: 'home',
//   components: {
//     Product
//   },
//   computed: {
//     products () {
//       return this.$store.state.products
//     }
//   }
// }
export default {
  methods: {
    emitBle: function () { this.$emit('ble') }
  }
}
</script>

<style>

</style>
