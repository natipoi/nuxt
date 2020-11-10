<template>
<header>
    <div id="header-wrap" >
        <div id="header-logo">
            <Logo />
        </div>
        <!-- ハンバーガーメニュー部分 -->
        <div class="drawer inner">
            <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
            <input type="checkbox" id="drawer-check" class="drawer-hidden" >

            <!-- ハンバーガーアイコン -->
            <label for="drawer-check" class="drawer-open"><span></span></label>
            
            <ul class="header-menu-common" id="header-menu">
                <li class="header-logo-sp"><Logo /></li><!-- ハンバーガーオープン時のロゴ -->
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
        </div>
    </div>
</header>
</template>
<style>
#header-wrap {display: flex; justify-content: space-around; padding: 50px 0; }
.header-logo{z-index: 200;}
.header-menu-common{display: flex;}
.header-menu-common li{list-style: none;}
.header-menu-common li a{margin-right: 50px; color:#000000; }
.header-menu-common li {margin-right: 0;}

/* チェックボックスは非表示に */
.drawer-hidden {
  display: none;
}
/* ドロワークローズ時は非表示 */
.header-sns-menu{
    display: none;
}
.header-logo-sp{
    display: none;
}
@media screen and (max-width: 767px) {
    header {padding: 0px;}
    /* ハンバーガーアイコンの設置スペース */
    .drawer-open {  
    justify-content: center;
    top: 10px;
    position: relative;
    z-index: 100;/* 重なり順を一番上に */
    cursor: pointer;
    }
/* ハンバーガーメニューのアイコン */
.drawer-open span,
.drawer-open span:before,
.drawer-open span:after {
  content: '';
  display: block;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #333;
  transition: 0.5s;
  position: absolute;
}
/* 三本線のうち一番上の棒の位置調整 */
.drawer-open span:before {
  bottom: 8px;
}
/* 三本線のうち一番下の棒の位置調整 */
.drawer-open span:after {
  top: 8px;
}
/* アイコンがクリックされたら真ん中の線を透明にする */
#drawer-check:checked ~ .drawer-open span {
  background: rgba(255, 255, 255, 0);
}
/* アイコンがクリックされたらアイコンが×印になように上下の線を回転 */
#drawer-check:checked ~ .drawer-open span::before {
  bottom: 0;
  transform: rotate(45deg);
}
#drawer-check:checked ~ .drawer-open span::after {
  top: 0;
  transform: rotate(-45deg);
}
/* メニューのデザイン*/
.header-menu-common{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 100%;/* メニューを画面の外に飛ばす */
  z-index: 99;
  background: #fff;
  transition: .5s;
}
.header-logo-sp{display: block;}
/* アイコンがクリックされたらロゴとメニューを表示 */
#drawer-check:checked ~ .header-menu-common {
  left: 0;/* メニューを画面に入れる */
  display: block;
  padding: 70px;
}
#drawer-check:checked ~ .header-menu-sns {
  left: 0;/* メニューを画面に入れる */
  display: block;
  padding: 50px;
}

/* 以下レスポンシブコーディング */
#header-wrap{justify-content: space-between;padding-left: 20px;padding-right: 20px;}
.header-sns-menu{display: flex;}
.header-sns-menu li a{font-size: 24px;  color:#000000;}
.header-menu-common li{
    font-weight: bold;
    margin-bottom: 20px;
}
}



@media screen and (min-width: 720px) {
  #header-wrap #nav_hbg {
    position: fixed;
    top: 2%;
    right: 2%;
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    cursor: pointer;
  }
}


/* @media screen and (min-width: 720px) {
    header {padding: 25px;}
    #header-logo svg {zoom: 1.3}
} */
</style>