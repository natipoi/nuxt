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
.h1 {   margin-bottom: 50px;}
.h1::after {
    content:"Fitpoiからのお知らせ";
    font-size: 0.8rem;
    color: #969594;
    padding-left: 10px;
    font-weight: 400;
 
}
.inner-section {max-width: 800px;}
.news-wrap {width: 100%!important}
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