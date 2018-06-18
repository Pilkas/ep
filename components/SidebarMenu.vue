<template>
  <nav class="menu">
    <p class="menu-label">Paslaugos</p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/projektu-rengimas-es-paramai-gauti" active-class="is-active">ES paramos projektų rengimas</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/verslo-plano-rengimas" active-class="is-active">Verslo plano rengimas</nuxt-link>
      </li>
    </ul>
    <p class="menu-label">Apie mus</p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/apie" active-class="is-active">Apie mus</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/kontaktai" active-class="is-active">Kontaktai</nuxt-link>
      </li>
    </ul>
    <p class="menu-label">Naudinga informacija</p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/finansavimo-galimybes-lietuvoje" active-class="is-active">Finansavimo galimybės</nuxt-link>
      </li>
      <li><nuxt-link to="/duk" active-class="is-active">D.U.K.</nuxt-link></li>
    </ul>
  </nav>
</template>