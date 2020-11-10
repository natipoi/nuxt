<template>
<footer>
    <div id="footer">
        <div class="footer-left">
          <div class="footer-list">
            <ul class="footer-list1" >
              <li><a href="/about/">運営会社</a></li>
              <li><a href="/partner/">協力ジム</a></li>
              <li><a href="/contact/">お問い合わせ</a></li>
            </ul>
            <ul class="footer-list2">
              <li><a href="/corporate_services/">法人事業</a></li>
              <li><a href="/recruit/">採用</a></li>
            </ul>
          </div>
          
          <div class="footer-bottom">
            <ul class="footer-list3">
                <li><a href="/terms-conditions/">Fitpoi利用規約</a></li>
                <li><a href="/privacy_policy/">プライバシーポリシー</a></li>
            </ul>
            
        </div>
        </div>
       <div class="footer-right">
           <ul class="footer-menu-common footer-sns-icon sns-icon only-pc">
            <li><a href="https://www.instagram.com/fitpoi_app/" class="insta"></a></li>
            <li><a href="https://www.facebook.com/fitpoi" class="fb"></a></li>
            <li><a href="https://twitter.com/Fitpoi1" class="twitter"></a></li>
           </ul>
           <div id="footer-logo">
               <div class="footer-logo-img">
                   <Logo />
               </div>  
               <p class="p3">COPYRIGHT 2020 Fitpoi, Inc.</p>
            </div>
       </div>
        
    </div>
</footer>
</template>

<style>
#footer {display: flex; justify-content:space-around; padding-top: calc(100vw * 0.1);padding-left: 20px;padding-right: 20px;}
.footer-list{display: flex; }
.footer-list1 { list-style-type: none; margin-bottom: 20px; margin-right: 30px;}
.footer-list2 { list-style-type: none; margin-bottom: 20px;}
.footer-list1 a { color: #000; display: flex;}
.footer-list2 a { color: #000; display: flex;}
.footer-list3{display: flex; }
.footer-list3 li{ list-style: none; margin-right: 15px;}
.footer-menu-common{display: flex; justify-content: space-between;}
.footer-menu-common li{list-style: none;}
.footer-menu-common li a{font-size: 24px;  color:#000000;}
.footer-logo-img{text-align: right;}
    @media screen and (max-width: 767px) {
        #footer{display: block; margin-top: 50px;}
        .footer-list1 li ,.footer-list2 li{margin-bottom: 10px;}
        .footer-list3 {display: block; }
        .footer-list3 li{margin-bottom: 10px;}
        .footer-menu-common{display: none;}
        #footer-logo .p3{text-align: right;}
    }
</style>