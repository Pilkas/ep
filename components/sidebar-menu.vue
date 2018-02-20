<template>
  <nav class="menu">
    <p class="menu-label">Paslaugos</p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/projektu-rengimas-es-paramai-gauti" active-class="is-active" @click="emitBle">ES paramos projektų rengimas</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/verslo-plano-rengimas" active-class="is-active" @click="emitBle">Verslo plano rengimas</nuxt-link>
      </li>
    </ul>
    <p class="menu-label">Apie mus</p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/apie" active-class="is-active" @click="emitBle">Apie mus</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/kontaktai" active-class="is-active" @click="emitBle">Kontaktai</nuxt-link>
      </li>
    </ul>
    <p class="menu-label">Naudinga informacija</p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/finansavimo-galimybes-lietuvoje" active-class="is-active" @click="emitBle">Finansavimo galimybės</nuxt-link>
      </li>
      <li><nuxt-link to="/duk" active-class="is-active" @click="emitBle">D.U.K.</nuxt-link></li>
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
