<template>
<div>
    <div v-for="(post, key) in news" :key="key" :class='{"news-wrap": true}'>
        <nuxt-link :to="`/news/${post.fields.slug}`" class="news-link">
            <p class="news-date">{{ post.fields.createdAt }}</p><p class="news-heading">{{ post.fields.title }}</p>
        </nuxt-link>
    </div>
</div>
</template>

<style>

.news-wrap {position: relative;background: #fff;border-radius: 10px;width: 90%;margin: 0 auto 30px;}
.news-wrap:after{ content: "\f105"; font-family: "Font Awesome 5 Free"; color: #FF4B00; font-weight: 600; display: block;text-align: center; position: absolute; top: 50%; right: 50px; transform: translateY(-50%);font-size: 25px;}
.news-wrap p {display: inline-block;margin-bottom: 0;}
.news-link {display: block;padding: 25px 50px;}
.news-date {font-weight: 600;margin-right: 40px;}

@media screen and (max-width: 768px){
    .news-wrap:after { right: 20px;}
.news-wrap {margin-right: -20px;}
.news-wrap p {display: block;}
}
</style>

<script>
export default {
    props: {
        news: {
            type: Array,
            default: []
        }
    }
}
</script>