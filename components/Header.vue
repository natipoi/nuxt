<template>
<header>
    <div id="header-wrap">
        <div id="header-logo">
            <Logo />
        </div>
        <HeaderMenu class="only-pc" id="header-menu-pc" />
        <div class="only-sp" id="header-menu-sp">
            <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
            <input type="checkbox" name="drawer-check" id="drawer-check">
            <!-- ハンバーガーアイコン -->
            <label for="drawer-check" id="drawer-open" onclick="">
                <span class="menu-bar-wrap">
                    <span id="menu-bar-top" :class="{'menu-bar': true }"></span>
                </span>
                <span class="menu-bar-wrap">
                    <span id="menu-bar-bottom" :class="{'menu-bar': true }"></span>
                </span>
            </label>
            <div id="sp-modal-menu-wrap">
                <HeaderMenu id="sp-modal-menu" />
                <ul class="header-sns-menu sns-icon">
                    <li><a href="https://www.instagram.com/fitpoi_app/" class="insta"></a></li>
                    <li><a href="https://www.facebook.com/fitpoi" class="fb"></a></li>
                    <li><a href="https://twitter.com/fitpoi_app" class="twitter"></a></li>
                </ul>
            </div>
        </div>
    </div>
</header>
</template>

<style>
header {padding: 15px;}
header ul {line-height: 1;}
#header-wrap {display: flex; flex-wrap: nowrap; align-items: baseline; max-width: 1000px;margin: 0 auto;}
/* ロゴ */
#header-logo{ display: inherit;zoom: 1.5;z-index: 100;}
#header-logo a {display: inherit;}
input[id="drawer-check"] {display: none;}
@media screen and (min-width: 769px) {
header {padding: 25px;}
#header-menu-pc {margin: auto 0 auto auto; margin-left: auto; }
#header-menu-pc {height: 100%; }
#header-menu-pc li {display: inline-block; padding: 0 20px;}
#header-menu-pc li:last-child {padding-right: 0;}
#header-menu-pc li a {color: #000 !important;}
#sp-modal-menu-wrap {display: none;}

}
@media screen and (max-width: 768px) {
#header-menu-sp {position: relative; margin-left: auto; width: 48px; height: 48px;}
#sp-modal-menu {list-style: none;}
#sp-modal-menu-wrap {position: fixed; top:0; height: 100vh;transform-origin: 0% 0%;transform: translate(0, calc(-100%));transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);left:0; right:0; padding: 120px 40px 20px; z-index:1;overflow: hidden;background: #fff;}
#sp-modal-menu a {color: #000; display: inline-block;padding: 10px; font-size: 1.2rem;}

input[id="drawer-check"]:checked + label + div {transform: none !important;}

input[id="drawer-check"]:checked + label .menu-bar-wrap:nth-child(1) {transform: rotate(45deg) translateY(3.3px); transition: all 0.3s;}
input[id="drawer-check"]:checked + label .menu-bar-wrap:nth-child(2) {transform: rotate(-45deg) translateY(-3.3px); transition: all 0.3s;}
.menu-bar-wrap {transition: all 0.3s;}
#drawer-open {position: relative;z-index: 1000}
.menu-bar-wrap {position: absolute; top: 9px;left: 9px;width: 30px;height: 30px;}
.menu-bar {display: block; position: absolute; width: 17px;height: 2px; left: 7px;background: rgb(0 0 0);border-radius: 0.5px;}
#menu-bar-top {top: 10px;}
#menu-bar-bottom {bottom: 10px;}
#header-background {position: absolute; top: 0;left:0;bottom:0;right:0; z-index:1;}
.header-sns-icon { margin: auto 0;}
.header-sns-menu {display: flex;margin-top: 25px;padding-left: 10px;}
.header-sns-menu li {margin-right: 30px;}
.header-sns-menu li a {font-size: 1.2rem;font-size: 25px;}
}
</style>
<script>
if (process.client) {
  
  $(function(){
    $(document).on('change','#drawer-check',function(){
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