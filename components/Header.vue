<template>
<header>
    <div id="header-wrap">
        <div id="header-logo">
            <Logo />
        </div>
        <ul class="header-menu-common" id="header-menu">
            <li><a href="/about/">About</a></li>
            <li><a href="/posts/">Blog</a></li>
            <li><a href="/contact/">Contact</a></li>
        </ul>
        <ul class="header-menu-common header-sns-icon sns-icon only-pc">
            <li><a href="https://www.instagram.com/fitpoi_app/" class="insta"></a></li>
            <li><a href="https://www.facebook.com/fitpoi" class="fb"></a></li>
            <li><a href="https://twitter.com/Fitpoi1" class="twitter"></a></li>
        </ul>
    </div>
</header>
</template>
<style>
header {background: #fff; padding: 15px;}
header ul {line-height: 1;}
#header-wrap {display: flex; flex-wrap: nowrap; align-items: baseline; max-width: 700px;margin: 0 auto;}
#header-wrap a {color: rgb(150 149 148) !important;}
#header-logo{ display: inherit; }
#header-logo a {display: inherit;}
#header-menu {margin: auto 0 auto auto; margin-left: auto; }
.header-menu-common {height: 100%; }
.header-menu-common li {display: inline-block; padding: 0 10px;}
.header-sns-icon { margin: auto 0;}

@media screen and (min-width: 720px) {
    header {padding: 25px;}
    #header-logo svg {zoom: 1.3}
}
</style>