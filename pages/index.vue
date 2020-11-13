<template>
  <main>
      <!-- main visual -->
      <section class="inner section">
          <div class="inner-section main-section">
          <div id="main-visual">
            <div class="main-title">
                <h1> 運動しよう。</h1>
            </div>
            <div class="main-text">
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
                            <img src="../entry1.png" alt="">
                        </div>
                        <p class="motivation-item-text">
                          達成感は人に共有することで初めて感じられるものです。みんなに共有して「がんばったね！」と声をかけてもらうことでモチベーションを維持しましょう。
                        </p>
                      </div>
                      <div class="motivation-right">
                          <img src="../entry1.png" alt="">
                      </div>
                  </div>
                  <div class="motivation-item">
                      <div class="motivation-left">
                        <div class="motivation-item-title">
                          通知
                        </div>
                        <div class="motivation-img-sp">
                            <img src="../entry1.png" alt="">
                        </div>
                        <p class="motivation-item-text">
                          人は怠惰です。当たり前の生活はそう簡単には変わりません。当たり前の生活の中で通知を受けることでモチベーションを維持しましょう。
                        </p>
                      </div>
                      <div class="motivation-right">
                         <img src="../entry1.png" alt="">
                      </div>
                  </div>
                  <div class="motivation-item">
                      <div class="motivation-left">
                        <div class="motivation-item-title">
                          競争
                        </div>
                        <div class="motivation-img-sp">
                            <img src="../entry1.png" alt="">
                        </div>
                        <p class="motivation-item-text">
                          「負けたくない」その想いは強力です。友達だけでなく、不特定多数のFitpoiユーザーと競争することでモチベーションを維持しましょう。
                        </p>
                      </div>
                      <div class="motivation-right">
                          <img src="../entry1.png" alt="">
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
                <div class="news-wrap">
                    <p class="news-date">2020/11/11</p><p class="news-heading">ニュースが入ります</p>
                </div>
                <div class="news-wrap">
                    <p class="news-date">2020/11/11</p><p class="news-heading">ニュースが入ります</p>
                </div>
                <div class="news-wrap">
                    <p class="news-date">2020/11/11</p><p class="news-heading">ニュースが入ります</p>
                </div>
                <div class="news-wrap">
                    <p class="news-date">2020/11/11</p><p class="news-heading">ニュースが入ります</p>
                </div>
                <div class="news-wrap"><a class="news-all" href="">全てのニュースを見る</a></div>

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

  </main>

</template>
<style>
/* 松原追記分CSS */
/* .inner{margin: 0 80px;} */
#main-visual{width: 100%; display: flex; justify-content: space-around;position: absolute; left: 50%; transform: translate(-50%, -50%);top: 70%;}
.main-section { position: relative;height: 50vh;}
.main-title{width: 50%;}
.main-title h1{font-size: 5.0em;}
.main-text{flex: 1.0;text-align: left;}
.main-text .p1{margin-bottom: 30px; font-size: 24px;}
.main-text .p2{color: #000000;}
.app-btn{text-align: right;}
/* .motivation-section{margin-top: 100px;} */
.motivation-item{display: flex; justify-content: space-between; padding-bottom: 50px;}
.motivation-left{width: 70%; margin-right: 20px;}
.motivation-img-sp{display: none;}
.motivation-item-title{font-size:11vw;color:rgb(150 149 148);font-weight: bold;}
.motivation-right img{width:100%; max-width: 100%; height: auto;}
/* .news-section{margin-top: 100px;} */
.news-section{margin-bottom: 50px;}
/* .main-app-btn{position: absolute; bottom: 0; right: 0;} */

/* 元々あったCSSなので一応残しておきます */
.app-feature {display: flex; width: 100%; align-items:center; margin: 60px 0;}
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
.arrow-right::before {content: "\f105"; }
.news-all {text-align: center;color: #FF4B00; font-weight: 600; font-size: 1.2rem;display: block}

.news-wrap {
    position: relative;
    background: #fff;
    padding: 25px 50px;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto 30px;
}
.news-wrap:after{ content: "\f105"; font-family: "Font Awesome 5 Free"; color: #FF4B00; font-weight: 600; display: block;text-align: center; position: absolute; top: 50%; right: 50px; transform: translateY(-50%);font-size: 25px;}
.news-wrap p {
    display: inline-block;
    margin-bottom: 0;
}
.news-date {
    font-weight: 600;
    margin-right: 40px;
}
.news-wrap:last-child:after {
    content: "";
}

/* @media screen and (max-width: 720px) {
    .app-image {width: 40%;}
    .app-description {padding-left: 50px}
    .main-section { position: relative;height: 50vh;}
    #insta-hashtag{ padding-left: 87.5px;padding-right: 87.5px;}
    #insta-images {transform: translateX(87.5px);height: 175px;}
    #insta-section .sns-icon {font-size: 1.5rem;}
    .insta-images-wrap-arrow {width: 87.5px}
    #insta-images li {width: 175px;}
    .main-section { margin: 0 auto;}
    #main-visual {background-color: transparent;max-height: 550px;}
    .main-visual-caution {display: none;}
    .break-span {display:block;}
} */

/* 松原追記分CSS */
@media screen and (max-width: 768px){
/* .inner{margin: 0 15px;} */
.main-title h1{margin-bottom: 10px;}
 #main-visual{display: block;top: 50%;}
 .main-section { position: relative;padding-bottom:0;margin-bottom: 20px;height: 65vh;}
.main-title{width: 100%;}
.main-title h1{font-size: 3.0em;}
.main-text{width: 100%; }
.main-app-btn{margin-top: 180px;}
.motivation-item{display: block; }
.motivation-left{width: 100%;}
.motivation-img-sp{display: block;}
.motivation-img-sp img{width:100%;　max-width: 100%;　height: auto; margin-bottom: 30px;} 
.motivation-item-title{font-size: 130px; }
.motivation-right img{display: none;}
.news-wrap {margin-right: -20px;}
.news-wrap p {display: block;}
}

</style>

<script>
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
