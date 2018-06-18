<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns">
          <aside class="column is-3">
            <div class="logo has-text-centered is-inline-block-touch">
              <nuxt-link to="/" exact><img src="/img/m-logo.png"></nuxt-link>
              <div class="slogan is-hidden-touch">Praktiškas verslo planavimas</div>
            </div>

            <div class="navbar-burger burger is-pulled-right" v-on:click="isSideMenuHidden = !isSideMenuHidden">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <hr class="is-hidden-touch">
            <sidebarMenu v-bind:class="{ 'is-hidden-touch' : isSideMenuHidden }" v-on:click.native="isSideMenuHidden = !isSideMenuHidden"/>
          </aside>
          <main class="column is-9">
            <div class="columns is-centered">
              <div class="column is-10 main-content-container">
                <nuxt/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    <defaultFooter/>
  </div>
</template>

<script>
import sidebarMenu from '~/components/SidebarMenu'
import defaultFooter from '~/components/DefaultFooter'

export default {
  data () {
    return {
      isSideMenuHidden: true
    }
  },
  components: {
    sidebarMenu,
    defaultFooter
  }
}
</script>
