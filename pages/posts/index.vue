<template>

  <main class="main-blogs">
    <div class="heading-box">
        <h1 class="h1">Blog</h1>
    </div>
    <ul class="blogs-box">
      <li v-for="post in posts" class="blog-box">
        <nuxt-link :to="`/posts/${post.fields.slug}`">
          <div class="blog-image">
            <img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.description">
          </div>
          <div class="blog-content">
            <h2 class="h2">{{ post.fields.title }}</h2>
            <p class="createdAt">{{ post.fields.publishDate }}</p>
            <p class="description">{{ post.fields.description }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<style>
ul {list-style: none;}
a {color: #010000;}
.h1::after {content:"Fitpoi運営チームの心の声"; font-size: 0.8rem; color: #969594;padding-left: 10px;font-weight: 400;}

.heading-box {margin: 0 30px 30px;}
.blog-box {margin-bottom: 50px;}
.createdAt {color:#969594;font-size: 0.9rem;text-align: right;margin-bottom: 5px;}
.description {display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; overflow: hidden;}
.blog-image {position: relative; width: 100%; height: calc(100vw * 0.55); overflow:hidden;margin-bottom: 20px;}
.blog-image img {width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
.blog-content {margin: 0 30px;}
@media screen and (min-width: 720px) {
h2 {font-size: 1.1rem}
.heading-box {margin-left: 0;}
.main-blogs {max-width: 700px;margin: 0 auto;}
.blogs-box {display: flex; justify-content: flex-start; flex-wrap: wrap;}
.blogs-box li {width: 30%; margin-right: 5%;}
.blogs-box li:nth-child(3n) {margin-right: 0;}
.blog-image {height: 150px;}
.blog-content {margin: 0;}
}
</style>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        for (var post of posts.items) {
        　var date = new Date(post.fields.publishDate);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          post.fields.publishDate = `${year}/${month}/${day}`

        }
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>