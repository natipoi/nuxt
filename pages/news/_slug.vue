<template>
  <section class="section">
      <div class="inner-section">
        <div class="h1-box">
            <h1>{{ post.fields.title }}</h1>
            <p class="createdat">{{ post.fields.createdAt }}</p>
        </div>
        <!-- <div class="hero-image">
        <img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.description">
        </div> -->
        <div v-html="toHtmlString(post.fields.body)" class="main-body"></div>
    </div>
  </section>
</template>

<style>

p {margin-bottom: 0 !important;min-height: 28px;}
h1 {margin-bottom:0;}
.hero-image {position: relative; margin-bottom: 30px !important; overflow: hidden; height: calc(100vw * 0.6);}
.hero-image img {width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
 
.main-body {margin: 30px 0;}
.main-body h2 {margin-bottom: 30px;margin-top: 80px;font-size: 1.3rem;}
.main-body h3 {margin-bottom: 30px;margin-top: 60px;font-size: 1.2rem; font-weight: 900;}
.createdat {color: #969594; font-size: 1.0rem; text-align: right;margin-bottom: 5px;}
 @media screen and (min-width: 768px) {
 .hero-image {height: 400px;overflow: hidden;}
    .h1-box, .hero-image,.main-body,.createdat   {max-width: 800px; margin: 0 auto;}
    .h1-box {margin-top: 50px}
    .createdat {margin-bottom: 30px;}

}
</style>

<script>
import { createClient } from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import marked from 'marked';

const client = createClient()
export default {
  asyncData({ params, error, payload }) {
        if(payload) return {post: payload}
        return client
            .getEntries({
                'content_type': "news",
                'fields.slug': params.slug
            })
            .then(entries => {
                for (var post of entries.items) {
                　var date = new Date(post.fields.createdAt);
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    post.fields.createdAt = `${year}/${month}/${day}`

                }
                return {post: entries.items[0] };
            })
            .catch( e => { console.log(e) })
    },
    head () {
        return {
            title: this.post.fields.title,
            meta: [
                { hid: 'description', name: 'description', content: this.post.fields.description },
                { hid: 'og:type', property: 'og:type', content: 'article' },
                { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
                { hid: 'og:description', property: 'og:description', content: this.post.fields.description },
                { hid: 'og:url', property: 'og:url', content: `https://fitpoi.com/news/${this.post.sys.id}/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ]
        }
    },
    methods: {
      toHtmlString(obj) {
        return documentToHtmlString(obj)
      }
    }
}
</script>