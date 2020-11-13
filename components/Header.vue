<template>
<header>
    <div id="header-wrap">
        <div id="header-logo">
            <Logo />
        </div>
        <ul class="header-menu-common only-pc" id="header-menu">
            <li><a href="/posts/">ブログ</a></li>
            <li><a href="/about/">運営会社</a></li>
            <li><a href="/corporate_services/">法人事業</a></li>
            <li><a href="/recruit/">採用</a></li>
            <li><a href="/contact/" class="last-menu">お問い合わせ</a></li>
        </ul>
        <div class="only-sp" id="header-sp-menu">
            <input type="checkbox" name="click-hamburger" id="click-hamburger">
            <label id="header-hamburger" for="click-hamburger" onclick="">
                <span class="hamburger-bar-wrap">
                    <span id="hamburger-bar-top" :class="{'hamburger-bar': true }"></span>
                </span>
                <span class="hamburger-bar-wrap">
                    <span id="hamburger-bar-bottom" :class="{'hamburger-bar': true }"></span>
                </span>
            </label>
            <div id="sp-modal-menu-wrap">
              <ul id="sp-modal-menu">
                <li><a href="/posts/">ブログ</a></li>
                <li><a href="/about/">運営会社</a></li>
                <li><a href="/corporate_services/">法人事業</a></li>
                <li><a href="/recruit/">採用</a></li>
                <li><a href="/contact/" class="last-menu">お問い合わせ</a></li>
                <!-- ハンバーガーオープン時のSNSアイコン -->
                <ul class="header-sns-menu sns-icon">
                    <li><a href="https://www.instagram.com/fitpoi_app/" class="insta"></a></li>
                    <li><a href="https://www.facebook.com/fitpoi" class="fb"></a></li>
                    <li><a href="https://twitter.com/Fitpoi1" class="twitter"></a></li>
                </ul>
              </ul>
                <!--<div class="change-lang">
                <p><span class="selected-lang">日本語</span> / <span class="noselected-lang">English</span></p>
                </div>-->
            </div>
        </div>
    </div>
</header>
</template>
<style>
header {padding: 15px;}
header ul {line-height: 1;}
#header-wrap {display: flex; flex-wrap: nowrap; align-items: baseline; max-width: 1000px;margin: 0 auto;}

#header-logo{ display: inherit;zoom: 1.5;z-index: 100;}
#header-logo a {display: inherit;}
#header-menu {margin: auto 0 auto auto; margin-left: auto; }
.header-menu-common {height: 100%; }
.header-menu-common li {display: inline-block; padding: 0 20px;}
.header-menu-common li:last-child {padding-right: 0;}
.header-menu-common li a {color: #000 !important;}
.header-sns-icon { margin: auto 0;}


#header-sp-menu {position: relative; margin-left: auto; width: 48px; height: 48px;}
#header-hamburger {position: relative;z-index: 1000}
.hamburger-bar-wrap {position: absolute; top: 9px;left: 9px;width: 30px;height: 30px;}
.hamburger-bar {display: block; position: absolute; width: 17px;height: 2px; left: 7px;background: rgb(0 0 0);border-radius: 0.5px;}
#hamburger-bar-top {top: 10px;}
#hamburger-bar-bottom {bottom: 10px;}
#header-background {position: absolute; top: 0;left:0;bottom:0;right:0; z-index:1;}
#sp-modal-menu-wrap {position: fixed; top:0; 
height: 100vh;
transform-origin: 0% 0%;
transform: translate(0, calc(-100%));
transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
left:0; right:0; padding: 120px 40px 20px; z-index:1;overflow: hidden;background: #fff;}
.header-sns-menu {display: flex;margin-top: 30px;}
input[id="click-hamburger"]:checked + label + div {transform: none !important;}
#sp-modal-menu {list-style: none;}
#sp-modal-menu a {color: #000; display: inline-block;padding: 10px; font-size: 1.2rem;}
input[id="click-hamburger"] {display: none;}
input[id="click-hamburger"]:checked + label .hamburger-bar-wrap:nth-child(1) {transform: rotate(45deg) translateY(3.3px); transition: all 0.3s;}
input[id="click-hamburger"]:checked + label .hamburger-bar-wrap:nth-child(2) {transform: rotate(-45deg) translateY(-3.3px); transition: all 0.3s;}

.hamburger-bar-wrap {transition: all 0.3s;}
@media screen and (min-width: 720px) {
    header {padding: 25px;}
    #header-logo svg {zoom: 1.3}
    #sp-modal-menu-wrap {display: none;}
    #header-menu-sns li a {font-size: 1.2rem;}
}
</style>
<script>
if (process.client) {
  
  $(function(){
    $(document).on('change','#click-hamburger',function(){
      var status = $(this).prop('checked');
      if (status) {
         $("body").css('overflow','hidden');
      } else {
        $("body").css('overflow','visible');
      }
    });
  });
}
</script>