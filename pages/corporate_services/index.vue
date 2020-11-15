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
        
        <section>
            <div class="member-section inner-section">
                <div class="common-title member-title">
                    <h2>会員の退会率を改善！ <span>Fitpoi for Gymの提供</span></h2> 
                </div>
                <div class="corporate-btn member-btn">
                    <a href="">問い合わせ・事前申し込みはこちら</a>
                </div> 
                <div class="member-text">
                    <p class="p2">Fitpoi for Gymでは各フィットネスクラブの会員様の基本的な情報だけでなく <br class="only-pc"> 日々のトレーニング情報も収集・分析することで、より会員様に寄り添ったクラブ運営を実現します。</p>
                    <p class="p2">※ Fitpoi for Gymは2021年6月リリース予定です</p>
                </div>
                
            </div>
            
        </section>
        
        

        <!-- 新規顧客獲得 -->
        <section>
            <div class="new-member-section inner-section">
                <div class="common-title new-member-title">
                    <h2>新規顧客を獲得！<span>ホームページ・SNS 運用改善</span></h2>
                </div>
                <div class="new-member-text">
                    <p class="p2">新規顧客獲得のために必須になってきているホームページとSNSの運用を改善します。<br> フィットネスクラブごとの特色を活かせるよう、お客様に寄り添ってお手伝いいたします。</p>
                </div>
                <div class="new-member-services">
                    <ul>
                        <li><p class="p2">既存ホームページの修正</p><p class="service-price">50,000円 〜</p></li>
                        <li><p class="p2">新規ホームページの制作</p><p class="service-price">150,000円 〜</p></li>
                        <li><p class="p2">ホームページ運用</p><p class="service-price">月額10,000円 〜</p></li>
                    </ul>
                </div>
                <div class="new-member-sns">
                    <p class="p2">SNSコンサルティング</p>
                    <p class="sns-price">回数制：1回10,000円</p>
                    <p class="sns-price">定額制：月額50,000円</p>
                </div>
                <div class="corporate-btn new-member-btn">
                    <a href="">無料相談・見積もりはこちら　　　</a>
                    <p>※1時間程度のヒアリングの後、<br class="only-sp"> 見積もりをお送りさせていただきます。</p>
                </div>
            </div>
            
        </section>
        
          

        <!-- Fitpoiユーザーに訴求 -->
        <section>
             <div class="member-section user-section inner-section">
                <div class="common-title member-title">
                    <h2>Fitpoiユーザーに訴求！ <span>Fitpoiアプリ内広告掲載</span></h2>
                </div>
                <div class="member-text">
                    <p class="p2">Fitpoiアプリではユーザーが閲覧するフィード、アイディアページに広告枠を設けています。<br> 広告主様のご要望に合わせてインタラクティブな形式で広告を掲載させていただきます。</p>
                    <p class="p2">※ Fitpoiアプリ内広告は2021年2月スタート予定です</p>
                </div>
                <div class="corporate-btn user-btn">
                    <a href="">問い合わせはこちら　　　　　　　</a>
                </div>
            </div>
            
        </section>
        
     </div>
    </main>

</template>

<style>
body{background-color: #F6F1F1;}
#all{overflow-x: hidden;}
/* 法人事業セクション */
.section-corporate{display: flex; padding: 100px 0px;}
.corporate-title h1{font-size: 5.0em; margin-top: 0;}
.corporate-title{width: 35%; margin-right: 20px;}
.corporate-text{padding-top: 20px; width: 34%;}
.corporate-text p{vertical-align:middle;}
@media screen and (max-width: 768px){
.section-corporate{display: block; padding: 40px 0px;}
.corporate-title{width: 100%; }
.corporate-title h1{font-size: 3.0em; }
.corporate-text{padding-top: 20px; width: 100%;}
}

/* 会員退会率改善 */
.member-section{padding-bottom: 80px; }
.member-title h2{padding-bottom: 10px;font-weight: normal; display: inline-blo;}
.member-text .p2{padding-left: 20px;}
@media screen and (max-width: 768px){
.member-section{padding-bottom: 50px; position: relative;}
.member-title span{margin-left: 0;}
.member-title span::before {
	content: "\A" ;
	white-space: pre ;
}
.only-pc{ display: none;}
}

/* 新規顧客獲得 */
.new-member-section{padding-bottom: 80px; position: relative;}
.member-title{display: flex;}
.new-member-title h2{padding-bottom: 10px;font-weight: normal;}
.new-member-text .p2{padding-left: 20px;}
.new-member-services ul{display: flex;padding-left: 20px;}
.new-member-services ul li{list-style: none;margin-right: 60px;}
.service-price{font-weight: bold; font-size: 24px;}
.sns-price{font-weight: bold; font-size: 24px;padding-left: 20px;}
.new-member-sns .p2{padding-left: 20px;}
@media screen and (max-width: 768px){
.new-member-section{padding-bottom: 50px; }
.new-member-title span{margin-left: 0;}
.new-member-title span::before {content: "\A" ;white-space: pre ;}
.new-member-services ul{display: block;text-align:right;}
.new-member-services ul li{list-style: none;margin-right: 0px;}
.new-member-services ul li .p2{margin-bottom:0px;}
.service-price{font-weight: bold; font-size: 24px; margin-top:0px;}
.new-member-sns{text-align: right;}
.sns-price{font-weight: bold; font-size: 24px;text-align:right;margin:15px 0 15px 0;
}
}

/* Fitpoi */
.user-section{position: relative; }
@media screen and (max-width: 768px){
.user-section{padding-top: 30px; padding-bottom: 50px; }

}

/* ボタン */
.corporate-btn a{color: #FF4B00; padding: 20px 0px 20px 50px; font-weight: bold; overflow-x: hidden;}
.corporate-btn::before{position: absolute;content: '';top: -13px;bottom: 0; width: 2500px;height: 50px;background-color: #ffffff ;z-index: -100;}
.member-btn{position:absolute; top: 10%; right: 0; text-align: right;}
.new-member-btn{position:absolute; top: 2%; right: 0; text-align: right; margin-bottom: 30px;}
.new-member-btn p{font-size: 8px;  margin: 15px calc(55% - 50vw);width: 100vw;}
.only-sp{ display: none;}
.user-btn{position:absolute; top: 10%; right: 0; }


@media screen and (max-width: 768px){
.corporate-btn a{padding: 15px 40px 15px 20px; font-weight: bold; font-size: 12px;}
.member-btn{text-align: right; top: 90%;}
.new-member-btn{text-align: right; top:96% ;}
.new-member-btn p{text-align: right; }
.only-sp{ display: block;}
.user-btn{ text-align: right; top: 95%;}
}
</style>