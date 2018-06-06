<template>
  <div>
    <div class="content">
      <h1>{{ pageContent.title }}</h1>
      <div v-html="pageContent.body"></div>
    </div>
    <FAQ  v-if="$route.path === '/duk'"/>
    <Testimonials v-if="$route.path === '/apie'"/>
    <ContactForm v-if="$route.path === '/kontaktai'"/>
  </div>
</template>
<script>
  import axios from 'axios'
  import FAQ from '~/components/FAQ'
  import Testimonials from '~/components/Testimonials'
  import ContactForm from '~/components/ContactForm'

  export default {
    data () {
      return {

      }
    },
    methods: {
      //   handleFaqClicks () {
      //     const kls = this.$el.querySelectorAll('.faq-question')
      //     if (kls) {
      //       for (let i = 0; i < kls.length; i++) {
      //         kls[i].addEventListener('click', (e) => { this.toggleCardContent(e) })
      //       }
      //     }
      //   },
      //   toggleCardContent (e) {
      //     const ats = e.currentTarget.nextElementSibling
      //     const icon = e.currentTarget.children[1].querySelector('.icon')
      //     if (icon.classList.contains('turn')) {
      //       icon.classList.remove('turn')
      //       console.log(ats.scrollHeight)
      //     } else {
      //       icon.classList.add('turn')
      //       console.log(ats.scrollHeight)
      //     }
      //     if (ats.style.maxHeight) {
      //       ats.style.maxHeight = null
      //     } else {
      //       ats.style.maxHeight = ats.scrollHeight + 'px'
      //     }
      //   }
    },
    mounted () {
      // this.handleFaqClicks()
      // bulmaCarousel.attach()
    },
    async asyncData ({env, route, error}) {
      return axios.get(`${env.cockpit.apiUrl}/collections/get/page?token=${env.cockpit.apiToken}`)
        .then((response) => {
          let page = response.data.entries.find((page) => page.URL === route.path)
          if (page) {
            return {pageContent: page}
          } else {
            error({ statusCode: 404, message: 'Page not found' })
          }
          //  let post = posts.find(post => post.id === parseInt(params.id))
        })
        .catch((error) => {
          console.log(error)
        })
    },
    head () {
      return {
        title: this.pageContent.title + ' | EP',
        meta: [
          { hid: 'description', name: 'description', content: this.pageContent.description }
        ]
      }
    },
    components: {
      FAQ,
      Testimonials,
      ContactForm
    }
  }
</script>
<style>

</style>
