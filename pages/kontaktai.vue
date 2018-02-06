<template>
  <div class="content">
    <h1>Kontaktai</h1>

    <Notification :notification-data="notificationData"/>

    <p>
      Susisiekite su mumis žemiau pateikta kontaktų forma.
    </p>
    <p>
      Nors stengiamės atsakyti kaip įmanoma greičiau, atsakymas gali užtrukti, peržiūrėkite Dažniausiai užduodamų klausimų skiltį, gal ten rasite atsakymą į savo klausimą.
    </p>
    <form action="http://appetite.ahost.lt/a/cform/" method="post" v-on:submit.prevent="sendEmail">
      <label class="label">Kontaktiniai duomenys</label>
      <div class="field is-grouped is-grouped-multiline">
        <div class="control is-expanded">
          <input class="input" type="text" v-model="name" name="name" placeholder="Vardas, pavardė" required>
        </div>
        <div class="control is-expanded">
          <input class="input" type="email"  v-model="email" name="email" placeholder="El. paštas" required>
        </div>
        <div class="control is-expanded">
          <input class="input" type="tel"  v-model="phone" name="phone" placeholder="Telefono numeris">
        </div>
      </div>
      <div class="field">
        <label class="label">Užklausos tekstas</label>
        <div class="control">
          <textarea class="textarea"  v-model="msg" name="message" placeholder="Trumpas veiklos pristatymas" required></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link" type="submit">Siųsti užklausą</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// export default {
//   layout: 'default'
// }
import axios from 'axios'
import Notification from '~/components/Notification.vue'

export default {
  data () {
    return {
      title: 'Contacts | EP',
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
    sendEmail (e) {
      let vm = this
      axios.post('http://appetite.ahost.lt/a/cform/', {
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
  mounted () {

  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
  // layout: 'default'
}
</script>


<style>

</style>
