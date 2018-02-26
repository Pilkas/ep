<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical">
      <div class="tile">
        <div class="tile is-8 is-parent">
          <nuxt-link class="tile is-child box projects-bg" to="/projektu-rengimas-es-paramai-gauti">
            <p class="title">Projektų rengimas ES paramai gauti</p>
            <div class="content is-medium">
              <p>Padedame pasinaudoti parama investiciniams projektams</p>
            </div>
          </nuxt-link>
        </div>
        <div class="tile is-parent">
          <nuxt-link class="tile is-child box wheat-bg" to="/projektu-rengimas-zemes-ukiui">
            <p class="title">Projektų rengimas žemės ūkiui</p>
            <div class="content is-medium">
              <p>Rengiame paraiškas NMA administruojamai paramai gauti</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="tile">
        <div class="tile is-8 is-parent">
          <nuxt-link class="tile is-child box plan-bg" to="/verslo-plano-rengimas">
            <p class="title">Verslo plano rengimas</p>
            <div class="content is-medium">
              <p>Rengiame verslo planus kredito įstaigoms, investuotojams</p>
            </div>
          </nuxt-link>
        </div>
        <div class="tile is-parent">
          <nuxt-link class="tile is-child box startup-bg" to="/verslo-planas-kredito-unijai">
            <p class="title">Planas kredito unijai</p>
            <div class="content is-medium">
              <p>Siūlome parengti verslo planą lengvatinei paskolai iš VSF gauti</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="tile">
        <div class="tile is-8 is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <nuxt-link class="tile is-child box team-bg" to="/apie">
                  <p class="title">Apie mus</p>
                  <div class="content is-medium">
                    <p>Esame daugiau nei 5 metų darbo patirtį turintys ekonomistai</p>
                  </div>
                </nuxt-link>
            </div>
            <div class="tile is-parent">
              <nuxt-link class="tile is-child box contacts-bg" to="/kontaktai">
                  <p class="title">Kontaktai</p>
                  <div class="content is-medium">
                    <p>Konsultuojame dėl finansavimo galimybių ir investicinių projektų rengimo</p>
                  </div>
                </nuxt-link>
            </div>
          </div>
          <div class="tile is-parent">
            <nuxt-link class="tile is-child box finance-bg" to="/finansavimo-galimybes-lietuvoje">
                <p class="title">Finansavimo galimybės Lietuvoje</p>
                <div class="content is-medium">
                  <p>Informacija apie populiariausius materialinių investicijų finansavimo šaltinius šalyje</p>
                  </div>
                </nuxt-link>
          </div>
        </div>
        <div class="tile is-parent">
          <nuxt-link class="tile is-child box faq-bg" to="/duk">
              <p class="title">Dažniausiai užduodami klausimai</p>
              <div class="content is-medium">
                <p>Taupydami jūsų laiką surinkome atsakymus į dažniausiai užduodamus klausimus apie teikiamas paslaugas, finansavimą ir kt.</p>
              </div>
            </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'front',
  data () {
    return {
      title: 'Investicijų planavimo paslaugos | EP'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Rengiame projektus paramai gauti, taip pat verslo planus bankams ir investuotojams.' }
      ],
      htmlAttrs: { class: 'front' }
    }
  }
}
</script>
<style>

</style>
