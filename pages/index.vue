<template>
  <main>
      <!-- main visual -->
      <section class="inner section">
          <div class="inner-section main-section">
          <div id="main-visual">
            <div class="main-title">
                <h1 :class="{ 'h1': true }">{{ $store.state.nowStatus.title }}</h1>
            </div>
            <div class="main-text" @click="showDegree()">
                <p class="p1">三日坊主のあなたへ</p>
                <p class="p2">アプリを通じてあなたの運動モチベーションを維持します。 あなたが当たり前のように運動をするその日まで、いつもそばから怠惰なあなたを刺激させていただきます。</p>
            </div>
          </div>
          </div>
          <AppDownloadButton />
      </section>
      
      

      <!-- app's introduction -->
      <section class="motivation-section inner section">
          <div class="inner-section">
          
              <div class="common-title">
                  <h2>モチベ維持の3大要素<span>「共通・通知・競争」</span></h2>
              </div>
              <div class="motivation-content">
                  <div class="motivation-item">
                      <div class="motivation-left">
                        <div class="motivation-item-title">
                          共有
                        </div>
                        <div class="motivation-img-sp">
                            <img src="~assets/top/top1.png" alt="">
                        </div>
                        <p class="motivation-item-text">
                          達成感は人に共有することで初めて感じられるものです。みんなに共有して「がんばったね！」と声をかけてもらうことでモチベーションを維持しましょう。
                        </p>
                      </div>
                      <div class="motivation-right">
                          <img src="~assets/top/top1.png" alt="">
                      </div>
                  </div>
                  <div class="motivation-item">
                      <div class="motivation-left">
                        <div class="motivation-item-title">
                          通知
                        </div>
                        <div class="motivation-img-sp">
                            <img src="~assets/top/top2.png" alt="">
                        </div>
                        <p class="motivation-item-text">
                          人は怠惰です。当たり前の生活はそう簡単には変わりません。当たり前の生活の中で通知を受けることでモチベーションを維持しましょう。
                        </p>
                      </div>
                      <div class="motivation-right">
                         <img src="~assets/top/top2.png" alt="">
                      </div>
                  </div>
                  <div class="motivation-item">
                      <div class="motivation-left">
                        <div class="motivation-item-title">
                          競争
                        </div>
                        <div class="motivation-img-sp">
                            <img src="~assets/top/top3.png" alt="">
                        </div>
                        <p class="motivation-item-text">
                          「負けたくない」その想いは強力です。友達だけでなく、不特定多数のFitpoiユーザーと競争することでモチベーションを維持しましょう。
                        </p>
                      </div>
                      <div class="motivation-right">
                          <img src="~assets/top/top3.png" alt="">
                      </div>
                  </div>
              </div>
            </div>
              <div class="app-btn"><AppDownloadButton /></div>       
      </section>
      
    　

    <section class="news-section inner section">
        <div class="inner-section">
            <div class="common-title">
                <h2>ニュース<span>Fitpoiの最新情報</span></h2>
            </div>
            <div>
                <News
                    :news="news"
                />
                <!-- <div v-for="(post, key) in news" :key="key" :class='{"news-wrap": true}'>
                    <nuxt-link :to="`/news/${post.fields.slug}`">
                        <p class="news-date">{{ post.fields.createdAt }}</p><p class="news-heading">{{ post.fields.title }}</p>
                    </nuxt-link>
                </div> -->
                <!-- <div class="news-wrap">
                    <p class="news-date">2020/11/11</p><p class="news-heading">ニュースが入ります</p>
                </div>
                <div class="news-wrap">
                    <p class="news-date">2020/11/11</p><p class="news-heading">ニュースが入ります</p>
                </div>
                <div class="news-wrap">
                    <p class="news-date">2020/11/11</p><p class="news-heading">ニュースが入ります</p>
                </div> -->
                <div class="news-wrap news-all"><a href="/news/" class="news-link">全てのニュースを見る</a></div>

            </div>
        </div>
        <div class="app-btn"><AppDownloadButton /></div>
    </section>
      
      <!-- instagram section -->
      <!-- <section class="news-section inner" id="insta-section">
          
          <div id="insta-hashtag">
              <p class="p4">#fitpoi</p>
          </div>
          <div id="insta-images-wrap">
              <span class="insta-images-wrap-arrow arrow-left tap-arrow" attr="left"></span>
              <span class="insta-images-wrap-arrow arrow-right tap-arrow" attr="right"></span>
              <ul id="insta-images">
                  <li id="first-insta-image"><a href="https://www.instagram.com/fitpoi_app/"><img src="~/assets/insta/insta1.jpg" width="100%"></a></li>
                  <li><a href="https://www.instagram.com/fitpoi_app/"><img src="~/assets/insta/insta2.jpg" width="100%"></a></li>
                  <li><a href="https://www.instagram.com/fitpoi_app/"><img src="~/assets/insta/insta3.jpg" width="100%"></a></li>
              </ul>
          </div>
          <ul class="sns-icon">
              <li><a href="https://www.instagram.com/fitpoi_app/" class="insta"></a></li>
              <li><a href="https://www.facebook.com/fitpoi" class="fb"></a></li>
              <li><a href="https://twitter.com/Fitpoi1" class="twitter"></a></li>
          </ul>
          <div class="app-btn"><AppDownloadButton /></div>
      </section> -->
<Degree />
  </main>

</template>
<style>
/* 松原追記分CSS */
#main-visual{width: 100%; display: flex; justify-content: space-around;position: absolute; left: 50%; transform: translate(-50%, -50%);top: 70%;align-items: center;}
.main-section { position: relative;height: 50vh;}
.main-title{width: 60%; padding-right: 40px;}
.main-title h1{font-size: 5.0em;text-align:center;}
.main-text{flex: 1.0;text-align: left;}
.main-text .p1{margin-bottom: 30px; font-size: 24px;}
.main-text .p2{color: #000000;}
.app-btn{text-align: right;}
.motivation-item{display: flex; justify-content: space-between; padding-bottom: 50px;}
.motivation-left{width: 50%; margin-right: 50px;}
.motivation-right {flex: 1;}
.motivation-img-sp{display: none;}
.motivation-item-title{font-size:11vw;color:rgb(150 149 148);font-weight: bold;}
.motivation-right img{width:100%; max-width: 100%; height: auto;}
.news-section{margin-bottom: 50px;}

/* 元々あったCSSなので一応残しておきます */
/* .app-feature {display: flex; width: 100%; align-items:center; margin: 60px 0;}
.app-image {width: 50%; padding: 0 30px;}
.app-description {flex: 1; padding-right: 30px;}
.app-description p {margin: 0;}
.app-description ul {margin: 10px 0;}
.positive-button-wrap {text-align: right; margin: 0 auto 20px;}

#insta-hashtag {padding: 20px; margin: 0 auto;}
#insta-section {background-color: #fff; }
#insta-images-wrap {position: relative; white-space: nowrap; overflow: hidden; }
#insta-images {display: flex; flex-wrap: nowrap;height: 250px; margin-bottom: 0; list-style: none; transform: translateX(calc((100% - 250px)/2)); transition: transform 0.5s; overflow-x:visible}
#insta-images li {width: 250px;height: 250px;flex-shrink: 0;flex-grow: 0;}
.insta-images-wrap-arrow {position: absolute;top:0;bottom:0; width: calc((100% - 250px)/2); background: rgba(255, 255, 255, 0.8);z-index: 100;}
.insta-images-wrap-arrow:hover {cursor: pointer;}
#insta-section .sns-icon {display: flex; justify-content:center;padding: 30px 0; font-size: 1.8rem;  }
#insta-section .sns-icon li a {width: 100px;}
.arrow-left {left:0; opacity: 0.0;}
.arrow-right {right: 0;}
.arrow-left::before, .arrow-right::before{font-family: "Font Awesome 5 Free"; font-weight: 900; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30px; color: #969594}
.arrow-left::before {content: "\f104"; }
.arrow-right::before {content: "\f105"; } */
.news-all:after {content:""}
.news-all a {text-align: center;color: #FF4B00; font-weight: 600; font-size: 1.2rem;display: block}

/* 松原追記分CSS */
@media screen and (max-width: 768px){
    .main-title{    padding-right: 0; width: 100%;}
.main-title h1{margin-bottom: 10px;text-align: left;}
#main-visual{display: block;top: 50%;}
.main-section { position: relative;padding-bottom:0;margin-bottom: 20px;height: 65vh;}
.main-title h1{font-size: 3.0em;}
.main-text{width: 100%; }
.main-app-btn{margin-top: 180px;}
.motivation-item{display: block; }
.motivation-left{width: 100%;}
.motivation-img-sp{display: block;}
.motivation-img-sp img{width:100%; max-width: 100%; height: auto; margin-bottom: 30px;} 
.motivation-item-title{font-size: 130px; }
.motivation-right img{display: none;}
/* .news-wrap {margin-right: -20px;}
.news-wrap p {display: block;} */
}

</style>

<script>
import Vuex from 'vuex'
import News from '~/components/News.vue'
import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  

  export default {
    // `env` is available in the context object
    components: {
      News
    },
    
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': 'news',
           order: 'sys.createdAt'
        })
      ]).then(([entries, news]) => {
        // return data that should be available
        // in the template
        for (var each_news of news.items) {
        　var date = new Date(each_news.fields.createdAt);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          each_news.fields.createdAt = `${year}/${month}/${day}`
        }
        return {
          news: news.items
        }
      }).catch(console.error)
    }

  }

if (process.client) {
    window.onload = function() {
        
        const imageNum = $("#insta-images").children().length
        var windowWidth = $(window).width()
        var now = 1
        var beforeresize = $(window).width()
        $(window).resize(function(){
            windowWidth = $(window).width()
            if (windowWidth >= 720 && beforeresize < 720) {
                $("#insta-images").css("transform", "translateX(87.5px)");
                now = 1
                $('.arrow-left').css("opacity", "0.0");
                $('.arrow-right').css("opacity", "1.0");
            } else if (windowWidth < 720 && beforeresize >= 720)  {
                $("#insta-images").css("transform", "translateX(calc((100% - 250px)/2))");
                now = 1
                $('.arrow-left').css("opacity", "0.0");
                $('.arrow-right').css("opacity", "1.0");
            }
            beforeresize = windowWidth
        })

        $(".tap-arrow").on("click", function(){
            console.log(now)
            var attr = $(this).attr("attr")
            

            var nowPosi = $("#insta-images").css("transform")
            nowPosi = nowPosi.split('(')[1];
            nowPosi = nowPosi.split(')')[0];
            var x = nowPosi.split(', ')[4];
            var instaWidth = $("#first-insta-image").width()

            x = attr === "right" ? - (instaWidth - parseInt(x)): instaWidth + parseInt(x);
            var slide = true

            if (attr === "right" && 
            ((windowWidth >= 720 && now === imageNum - 2) || 
            (windowWidth < 720 && now === imageNum))) {
                slide = false
            } else if (attr === "left" &&  now === 1) {
                slide = false
            }
            if (slide) {
                $("#insta-images").css({
                    transform: `translateX(${x}px)`
                })
                if (attr === "right"){
                    now = windowWidth >= 720 ? now + 3 : now + 1;
                    if ((windowWidth >= 720 && now === imageNum * 3 + 1) || (windowWidth < 720 && now === imageNum)){
                        $('.arrow-right').css("opacity", "0.0");
                    }
                    if (now !== 1 ){
                        $('.arrow-left').css("opacity", "1.0");
                    }
                } else {
                    now = windowWidth >= 720 ? now - 3 : now - 1;
                    if (now === 1 ){
                        $('.arrow-left').css("opacity", "0.0");
                    }
                    if ((windowWidth >= 720 && now !== imageNum * 3 + 1) || 
                    (windowWidth < 720 && now !== imageNum)){
                        $('.arrow-right').css("opacity", "1.0")
                    }
                }
                
            }
        })
    }
}


</script>

