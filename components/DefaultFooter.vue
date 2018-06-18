<template>
  <footer class="footer">
    <div class="container">
      <div class="columns menu">
        <div class="column is-4 ">
          <ul class="menu-list">
            <li>
              <nuxt-link to="/verslo-plano-rengimas">Verslo plano rengimas</nuxt-link>
              <ul>
                <li><a :href= "url + '/verslo-plano-rengimas#procesas'">Procesas</a></li>
                <li><a :href= "url + '/verslo-plano-rengimas#kainos'">Kainos</a></li>
                <li><nuxt-link to="/verslo-plano-rengimo-tikslai">Plano rengimo tikslai</nuxt-link></li>
                <li><nuxt-link to="/gero-verslo-plano-savybes">Gero verslo plano savybės</nuxt-link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="column is-4">
          <ul class="menu-list">
            <li>
              <nuxt-link to="/projektu-rengimas-es-paramai-gauti">ES paramos projektų rengimas</nuxt-link>
              <ul>
                <li><a :href= "url + '/projektu-rengimas-es-paramai-gauti#etapai'">Projekto paramai gauti rengimo etapai</a></li>
                <li><a :href= "url + '/projektu-rengimas-es-paramai-gauti#ypatybes'">Projektų rengimo ypatybės</a></li>
                <li><nuxt-link to="/paramos-skyrimo-tvarka">Paramos skyrimo tvarka</nuxt-link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="column is-4">
          <ul class="menu-list">
            <li>
              <nuxt-link to="/finansavimo-galimybes-lietuvoje">Finansavimo galimybės Lietuvoje</nuxt-link>
              <ul>
                <li><a :href= "url + '/finansavimo-galimybes-lietuvoje#paskolos'">Paskolos</a></li>
                <li><a :href= "url + '/finansavimo-galimybes-lietuvoje#paskolu-garantijos'">Paskolų garantijos</a></li>
                <li><a :href= "url + '/finansavimo-galimybes-lietuvoje#parama'">Subsidijos (parama)</a></li>                
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="content has-text-centered">
        <p>2018 © MB "SVV Sprendimai"</p>
        <p class="is-size-7">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      // temporary hack for anchor tags
      url: 'http://efektyvusplanas.lt'
    }
  }
}
</script>
