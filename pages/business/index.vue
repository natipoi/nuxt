<template>
    <main>
      <div id="all">
        <!-- 法人事業セクション -->
        <section>
            <div class="section-corporate inner-section">
                <div class="corporate-title">
                    <h1>法人事業</h1>
                </div>
                <div class="corporate-text">
                    <p class="p2">株式会社Fitpoiはフィットネスクラブを中心に法人向けの事業を展開しています。</p>    
                </div>
            </div>
        </section>
        

        <!-- 会員退会率改善 -->
        
        <section class="section">
            <div class="inner-section">
                <div class="common-title">
                    <h2>会員の退会率を改善！ <span>Fitpoi for Gymの提供</span></h2> 
                </div>
                <div class="corporate-btn member-btn">
                    <a href="/contact/fitpoi_for_gym/">問い合わせ・事前申し込みはこちら</a>
                </div> 
                <div class="member-text">
                    <p class="p2">Fitpoi for Gymでは各フィットネスクラブの会員様の基本的な情報だけでなく <br class="only-pc"> 日々のトレーニング情報も収集・分析することで、より会員様に寄り添ったクラブ運営を実現します。</p>
                    <p class="p2">※ Fitpoi for Gymの詳細は近日公開予定です</p>
                </div>
                
            </div>
            
        </section>
        
        

        <!-- 新規顧客獲得 -->
        <section class="section">
            <div class="inner-section">
                <div class="common-title">
                    <h2>新規顧客を獲得！<span>ホームページ・SNS 運用改善</span></h2>
                </div>
                <div class="new-member-text">
                    <p class="p2">新規顧客獲得のために必須になってきているホームページとSNSの運用を改善します。<br> フィットネスクラブごとの特色を活かせるよう、お客様に寄り添ってお手伝いいたします。</p>
                </div>
                <div class="new-member-services">
                    <ul>
                        <li><p class="p2 new-member-sns-title">既存ホームページの修正</p><p class="service-price">50,000円 〜</p></li>
                        <li><p class="p2 new-member-sns-title">新規ホームページの制作</p><p class="service-price">150,000円 〜</p></li>
                        <li><p class="p2 new-member-sns-title">ホームページ運用</p><p class="service-price">月額10,000円 〜</p></li>
                    </ul>
                </div>
                <div class="new-member-sns">
                    <p class="p2 new-member-sns-title">SNSコンサルティング</p>
                    <p class="sns-price">回数制：1回10,000円</p>
                    <p class="sns-price">定額制：月額50,000円</p>
                </div>
                <div class="corporate-btn corporate-btn-subtext">
                    <a href="/contact/hp_sns_sales/">無料相談・見積もりはこちら</a>
                </div>
            </div>
            
        </section>
        
          

        <!-- Fitpoiユーザーに訴求 -->
        <section class="section">
             <div class="inner-section">
                <div class="common-title">
                    <h2>Fitpoiユーザーに訴求！ <span>Fitpoiアプリ内広告掲載</span></h2>
                </div>
                <div class="member-text">
                    <p class="p2">Fitpoiアプリではユーザーが閲覧するフィード、アイディアページに広告枠を設けています。<br> 広告主様のご要望に合わせてインタラクティブな形式で広告を掲載させていただきます。</p>
                    <p class="p2">※ Fitpoiアプリ内広告の詳細は近日公開予定です</p>
                </div>
                <div class="corporate-btn">
                    <a href="/contact/ads/">問い合わせはこちら</a>
                </div>
            </div>
            
        </section>
        
     </div>
    </main>

</template>
<script>
export default {
    head () {
        return {
            title: "Fitpoiの法人事業｜Fitpoi",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "Fitpoiの法人事業｜Fitpoi" },
                { hid: 'og:url', property: 'og:url', content: `https://fitpoi.com/business/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://fitpoi.com/business/` }
            ]
        }
    }
}
</script>
<style>
/* body{background-color: #F6F1F1;} */
#all{overflow-x: hidden;}
.section {margin:0;}
.common-title h2{padding-bottom: 30px;font-weight: normal;}
/* 法人事業セクション */
.section-corporate{display: flex; padding: 100px 0px;align-items: flex-end;}
.corporate-title h1{line-height: 1;}
.corporate-title{margin-right: 20px;}
.corporate-text{padding-top: 20px; width: 34%;}
.corporate-text p{vertical-align:middle;margin-bottom: 0;line-height: 1.5;}

/* 会員退会率改善 */
.member-text .p2{padding-left: 20px;}

/* 新規顧客獲得 */

.new-member-text .p2{padding-left: 20px;padding-bottom: 40px;}
.new-member-services ul{display: flex;padding-left: 20px;}
.new-member-services ul li{list-style: none;margin-right: 60px;}
.service-price{font-weight: bold; font-size: 24px;}
.sns-price{font-weight: bold; font-size: 24px;padding-left: 20px;margin-bottom: 0px;}
.new-member-sns .p2{padding-left: 20px;}
.new-member-sns-title {margin-bottom: 0px !important;}


/* ボタン */
.corporate-btn a{color: #FF4B00; padding-left: 30px;text-align: left;font-weight: bold;height: 60px;display: inline-block;overflow-x: hidden;line-height: 60px;font-size: 1.2rem;width: 300px;
}
.corporate-btn::before{position: absolute;content: '';top: 0;left: 0; width: 2500px;height: 60px;background-color: #ffffff ;z-index: -100;}

.corporate-btn{position:absolute; top: 2%; right: 0; text-align: right; margin-bottom: 30px;height: 60px;}
.corporate-btn p{font-size: 8px;  margin: 15px calc(55% - 50vw);width: 100vw;}
.corporate-btn-subtext:after {content:"※1時間程度のヒアリングの後、見積もりをお送りさせていただきます。"; font-size: 0.9rem;position: absolute; top: 110%;left:20px;text-align: left;width: 500px;}


@media screen and (max-width: 1000px){
.inner-section {margin-bottom: 100px;padding-bottom:70px;}
.section-corporate{display: block; padding: 40px 0px; margin-bottom: 30px;}
.corporate-title{width: 100%; }
.corporate-title h1{font-size: 3.0em; }
.corporate-text{width: 100%;}
/* .member-title span{margin-left: 0;} */
.corporate-btn a{font-weight: bold; font-size: 1.1rem;}
.new-member-section{padding-bottom: 50px; }
/* .new-member-title span{margin-left: 0;} */
/* .new-member-sns-title {font-size: 1.2rem;} */
.new-member-services ul{display: block;text-align:right;}
.new-member-services ul li{list-style: none;margin-right: 0px;}
.new-member-services ul li .p2{margin-bottom:0px;}
.service-price{font-weight: bold; font-size: 24px; margin-top:0px;}
.new-member-sns{text-align: right;}
.sns-price{font-weight: bold; font-size: 24px;text-align:right;}
/* .member-title h2 {padding-bottom: 30px;font-weight: normal;} */
.corporate-btn{text-align: right; top:96% ;}
.corporate-btn p{text-align: right; }
}

@media screen and (max-width: 1200px){
    .corporate-btn:after {width: 95%;}
}
</style>