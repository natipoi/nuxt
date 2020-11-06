<template>
  <main>
      <!-- main visual -->
      <section class="main-section">
          <div id="main-visual">
              <h1>今、あなたに、最適な運動を。</h1>
              <p class="p1">FitpoiはAIが自動で今のあなたに最適なワークアウトメニューを<span class="break-span"></span>生成＋記録する次世代フィットネスアプリです。</p>
              <AppDownloadButton />
              <p class="p3 main-visual-caution">*Fitpoiは現在Androidには対応しておりません。</p>
          </div>
      </section>

      <!-- app's introduction -->
      <section class="section">
          <!-- app's feature-->
          <div class="app-feature">
              <!-- app's image-->
              <div class="app-image">
                  <img src="~/assets/sp1.jpeg" width="100%">
              </div>
              <!-- app's description-->
              <div class="app-description">
                  <p class="p1">あなたの</p>
                  <ul>
                      <li>筋肉の疲労度</li>
                      <li>運動のゴール</li>
                      <li>運動の経験</li>
                      <li>過去の運動履歴</li>
                      <li>持っている器具</li>
                  </ul>
                  <p class="p1">をAIが学習し、常に最も効率の良いワークアウトメニューを生成。</p>
              </div>
          </div>

          <!-- app's feature-->
          <div class="app-feature">
              <!-- app's image-->
              <div class="app-image">
                  <img src="~/assets/sp2.jpeg" width="100%">
              </div>
              <!-- app's description-->
              <div class="app-description">
                  <p class="p1">ワークアウト中は直感的な画面で、</p>
                  <ul>
                      <li>セット</li>
                      <li>回数 / 秒数</li>
                      <li>重量</li>
                  </ul>
                  <p class="p1">のスムーズな記録をサポート。</p>
              </div>
          </div>

          <!-- app's feature-->
          <div class="app-feature">
              <!-- app's image-->
              <div class="app-image">
                  <img src="~/assets/sp3.jpeg" width="100%">
              </div>
              <!-- app's description-->
              <div class="app-description">
                  <p class="p1">ヘルスケアと連動して、日々のワークアウトを効果的にトラッキング。</p>
              </div>
          </div>

          <div class="positive-button-wrap">
              <AppDownloadButton />
              <p class="p3">最初の3ワークアウトは無料！</p>
          </div>
          
      </section>

      <!-- instagram section -->
      <section class="section" id="insta-section">
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
      </section>

  </main>

</template>
<style>

#main-visual {padding: 5px 20px; text-align: center; }
.main-visual-caution {text-align: right;}
.app-feature {display: flex; width: 100%; align-items:center; margin: 60px 0;}
.app-image {width: 50%; padding: 0 30px;}
.app-description {flex: 1; padding-right: 30px;}
.app-description p {margin: 0;}
.app-description ul {margin: 10px 0;}
.positive-button-wrap {text-align: center; margin: 0 auto 20px;}


.main-section { position: relative;background: url(~assets/top-sp.png) top left / 100% auto no-repeat;}
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

@media screen and (min-width: 720px) {
    #main-visual {padding-top: calc(100vw * 0.1);padding-left: 20px;padding-right: 20px; text-align: center; zoom: 1.2;}
    .app-image {width: 40%;}
    .app-description {padding-left: 50px}
    .main-section { position: relative;background: url(~assets/top-pc.png) top left / 100% auto no-repeat;}
    #insta-hashtag{ padding-left: 87.5px;padding-right: 87.5px;}
    #insta-images {transform: translateX(87.5px);height: 175px;}
    #insta-section .sns-icon {font-size: 1.5rem;}
    .insta-images-wrap-arrow {width: 87.5px}
    #insta-images li {width: 175px;}
    .main-section { margin: 0 auto;}
    #main-visual {background-color: transparent; height: calc(100vw * 0.4);max-height: 550px;}
    .main-visual-caution {display: none;}
    .break-span {display:block;}
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
