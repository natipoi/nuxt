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

h1 {margin-bottom:0;font-size: 1.5rem;}
.hero-image {position: relative; margin-bottom: 30px !important; overflow: hidden; height: calc(100vw * 0.6);}
.hero-image img {width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
 
.main-body {margin: 30px;}
.main-body h2 {margin-bottom: 30px;margin-top: 80px;font-size: 1.3rem;}
.main-body h3 {margin-bottom: 30px;margin-top: 60px;font-size: 1.2rem; font-weight: 900;}
.createdat {color: #969594; font-size: 1.0rem; text-align: right;margin-bottom: 5px;}
 @media screen and (min-width: 720px) {
     h1 {margin-bottom:0;font-size: 2.0rem;}
 .hero-image {height: 400px;overflow: hidden;}
    .h1-box, .hero-image,.main-body,.createdat   {max-width: 800px; margin: 0 auto;}
    .h1-box {margin-top: 50px}
    .createdat {margin-bottom: 30px;}

}
</style>

<script>
import { createClient } from '~/plugins/contentful.js'
import marked from 'marked';
import hljs from 'highlight.js';

const client = createClient()
export default {
  asyncData({ params, error, payload }) {
        if(payload) return {post: payload}
        return client
            .getEntries({
                'content_type': "blogPost",
                'fields.slug': params.slug
            })
            .then(entries => {

                var date = new Date(entries.items[0].fields.publishDate);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                entries.items[0].fields.publishDate = `${year}/${month}/${day}`

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
                { hid: 'og:url', property: 'og:url', content: `https://fitpoi.com/posts/${this.post.fields.slug}/` },
                { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://fitpoi.com/posts/${this.post.fields.slug}/` }
            ]
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