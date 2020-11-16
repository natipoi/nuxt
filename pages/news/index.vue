<template>
  <section class="section">
    
    <div class="inner-section">
        <div class="heading-box">
        <h1 class="h1">News</h1>
    </div>
        <div>
            <News
                :news="news"
            />
        </div>
    </div>
  </section>
</template>

<style>
.heading-box {padding: 100px 0 80px;}
.h1::after {
    content:"Fitpoiからのお知らせ";
    font-size: 1.0rem;
    padding-left: 10px;
    font-weight: 400;
 
}
.inner-section {max-width: 800px;}
.news-wrap {width: 100%!important}
@media screen and (max-width: 768px) {
  .heading-box {padding: 40px 0;}
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

        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': "news",
          order: 'sys.createdAt'
        })
      ]).then(([news]) => {
        // return data that should be available
        // in the template
        for (var post of news.items) {
        　var date = new Date(post.fields.createdAt);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          post.fields.createdAt = `${year}/${month}/${day}`

        }
        return {
          news: news.items
        }
      }).catch(console.error)
    }
  }
</script>