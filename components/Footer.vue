<template>
<footer>
    <div id="footer">
        
        <ul id="footer-list1" class="footer-list">
            <li><a href="/about/">運営会社</a></li>
            <li><a href="/partner/">協力ジム</a></li>
            <li><a href="/contact/">お問い合わせ</a></li>
        </ul>
        <div class="footer-bottom">
            <ul id="footer-list2" class="footer-list">
                <li><a href="/terms-conditions/">Fitpoi利用規約</a></li>
                <li><a href="/privacy_policy/">プライバシーポリシー</a></li>
            </ul>
            <div id="footer-logo">
                <Logo />
                <p class="p3">COPYRIGHT 2020 Fitpoi, Inc.</p>
            </div>
        </div>
    </div>
</footer>
</template>

<style>
    #footer {padding: 30px 30px 0;max-width: 700px;margin: 0 auto;}
    .footer-list {list-style-type: none; margin-bottom: 20px;}
    #footer-list1 a {color: #000}
    #footer-logo {text-align: right;}

    @media screen and (min-width: 720px) {
        #footer {padding-left: 0; padding-right: 0;}
        .footer-bottom {display: flex; align-items: baseline;}
        .footer-bottom ul li {display: inline-block; padding-right: 20px}
        #footer-logo {margin-left: auto}
    }
</style>