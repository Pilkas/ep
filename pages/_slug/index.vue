<template>
  <div class="content">
    <h1>{{ pageContent.title }}</h1>
    <div v-html="pageContent.body"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: 'About Us | EP'
    }
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
