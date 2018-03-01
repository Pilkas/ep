<template>
  <div class="content">
    <h1>Kontaktai</h1>
    <Notification :notification-data="notificationData"/>
    <p>Nors stengiamės atsakyti kaip įmanoma greičiau, atsakymas gali užtrukti, peržiūrėkite Dažniausiai užduodamų klausimų skiltį, gal ten rasite atsakymą į savo klausimą.</p>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child">
          <br>
          <p class="has-text-centered"><img src="//www.appetite.ahost.lt/cockpitCMS/storage/uploads/2018/02/22/5a8eb69c46cf1tomas.png" width="275" height="275"></p>
          <p><strong>Tomas Birkantas</strong><br><em>Konsultacijos dėl verslo plano, ES paramos</em><br>
            El. paštas: tomas@efektyvusplanas.lt<br />
            Mob. tel. nr.: +370 607 69498<br />
          </p>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child">
          <br>
          <p class="has-text-centered"><img src="//www.appetite.ahost.lt/cockpitCMS/storage/uploads/2018/02/22/5a8eb69b6ecafgediminas.png" width="275" height="275"></p>
          <p><strong>Gediminas Kašėta</strong><br><em>Finansų planavimas</em><br>
            El. paštas: gediminas@efektyvusplanas.lt<br />
            Mob. tel. nr.: +370 641 15668<br /></p>
          </div>
        </div>
    </div>
    <p>Susisiekite su mumis žemiau pateikta kontaktų forma.</p>

    <form action="/" method="POST" @submit="validateForm" novalidate>

      <label class="label">Kontaktiniai duomenys</label>
      <div class="field is-grouped is-grouped-multiline">
        <div class="control is-expanded">
          <input class="input" type="text" v-model="name" name="name" placeholder="Vardas, pavardė*" required @blur="validateField">
        </div>
        <div class="control is-expanded">
          <input class="input" type="email" v-model="email" name="email" placeholder="El. paštas*" required @blur="validateField">
        </div>
        <div class="control is-expanded">
          <input class="input" type="tel" v-model="phone" name="phone" placeholder="Telefono numeris">
        </div>
      </div>
      <div class="field">
        <label class="label">Užklausos tekstas</label>
        <div class="control">
          <textarea class="textarea" v-model="msg" name="message" placeholder="Trumpas veiklos pristatymas*" required  @blur="validateField"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link" type="submit">Siųsti užklausą</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link" @click="testModal">Test Modal</button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Notification from '~/components/Notification.vue'

export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      msg: '',
      notificationData: {
        text: 'Žinutė išsiųsta.',
        isActive: false
      }
    }
  },
  methods: {
    sendEmail () {
      let vm = this
      axios.post('/cform/', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.msg
      })
        .then(function (response) {
          vm.notificationData.isActive = true
          vm.clearForm()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    validateForm (e) {
      e.preventDefault()
      if (e.target.checkValidity()) {
        this.sendEmail()
      } else {
        e.target.querySelectorAll('input, textarea').forEach((input) => {
          if (!input.checkValidity()) {
            input.classList.add('is-danger')
          }
        })
      }
    },
    validateField (e) {
      if (e.target.checkValidity()) {
        e.target.classList.remove('is-danger')
      }
    },
    testModal () {
      this.notificationData.isActive = true
    },
    clearForm () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.msg = ''
    }
  },
  components: {
    Notification
  },
  head () {
    return {
      title: 'Kontaktai | EP',
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>
<style>
</style>
