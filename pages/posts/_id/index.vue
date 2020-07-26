<template>
  <section class="container">
    <div class="h1-box">
    <h1>{{ post.fields.title }}</h1>
    <p class="createdat">{{ post.fields.publishDate }}</p>
    </div>
    <div class="hero-image">
    <img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.description">
    </div>
    <div v-html="mkbody" class="main-body" />
  </section>
</template>

<style>
.h1-box {margin: 0 30px;}
h1 {margin-bottom:0;}
.hero-image img {width: 100%;}
.main-body {margin: 30px;}
.createdat {color: #969594; font-size: 1.0rem; text-align: right;margin-bottom: 5px;}
 @media screen and (min-width: 720px) {

    .h1-box, .hero-image,.main-body,.createdat   {max-width: 700px; margin: 0 auto;}


}
</style>

<script>
import { createClient } from '~/plugins/contentful.js'
import marked from 'marked';
import hljs from 'highlight.js';

const client = createClient()
export default {
  async asyncData({ params, payload }) {
    // IDをキーに記事を取得
    const entry = await client.getEntry(params.id)

    console.log(entry)
    return {
      post: entry
    }
  },
  computed: {
    mkbody() {
      return marked(this.post.fields.body);
    }
  },
  created() {
    marked.setOptions({
      langPrefix: '',
      highlight: function(code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      }
    })
  }
}
</script>