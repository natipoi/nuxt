<template>
    <div>    
        <Header />
            <nuxt />
        <Footer /> 
    </div>
</template>

<script>

  export default {
    head () {
        return {
            title: "今、あなたに、最適な運動を。",
        }
    }
  }
</script>
<style>
<<<<<<< HEAD
html { background-color: #F6F1F1; color: #000001; font-size: 14px;}
body {margin: 0 auto; font-family: "San Francisco", Sans-Serif;}
=======
html { background-color: #F6F1F1; color: #000001; font-size: 14px;overflow-x:hidden;padding:0;}
body {font-family: "San Francisco", Sans-Serif;box-sizing: border-box;margin:0;padding:0;clear:both;}
>>>>>>> 7c289a0c3334dc63f597ebfdc8565c245e2e73a6
body * {margin: 0; padding: 0; box-sizing: border-box;}
a {text-decoration: none;color: #000;}
.section {position:relative; margin: 0 auto 80px; padding-bottom: 100px;overflow: hidden;}
.inner-section {max-width: 1000px;margin: 0 auto 30px;    position: relative;}
ul {list-style-type: disc;list-style-position: inside;margin-bottom: 20px; line-height: 2.0}
h1 {margin: 40px 0; font-size: 1.4rem;}
h2 {font-size: 1.2rem;margin-bottom: 5px;}
h3 {margin-bottom: 30px;font-weight: 400;font-size: 1.1rem;}
h4 {margin-bottom: 10px;font-weight: 400;font-size: 1.0rem;}
p {margin-bottom: 30px;font-weight: 400; font-size: 1.0rem; line-height: 2.0;}
.p1 {font-size: 0.9rem;}
.p1-m0 {font-size: 1.1rem; margin:0}
.p3 {font-size: 0.8rem; color: #969594}
.p4 {font-size: 1.0rem; font-weight: 900; margin:0;}
.main {margin: 0 30px; }
table {text-align: left;border-collapse:separate;border-spacing: 10px}
.box {padding: 30px 0;}
.only-pc {display: block;}
.only-sp {display: none;}

/* 共通タイトル */
.common-title h2{position: relative; padding:0px 20px 60px 20px;}
/* 共通タイトルの左線のボーダー */
.common-title h2:before {
  position: absolute;
    background-color: #000000; /* 線色 */
    border-radius: 5px; /* 線幅の半分 */
    content: "";
    display: inline;
    height: 120px; /* 線の長さ */
    vertical-align: top;
    width: 10px; /* 線幅 */
    top: 0;
    left: -2%;
}
.common-title h2{font-size: 24px;}
.common-title span{margin-left: 30px; }




.sns-icon {list-style: none;}
.sns-icon li a {font-family: "Font Awesome 5 Brands"; font-weight: 900; display: block;text-align: center;}
.insta::before {content: '\f16d'; }
.fb::before {content: '\f39e';}
.twitter::before {content: '\f099';}

@media screen and (max-width: 1001px) {
.inner-section { margin-right: 20px;margin-left: 20px;}
}

@media screen and (max-width: 768px) {
  .only-pc {display: none;}
  .only-sp {display: block;}
  .section { padding-bottom: 80px;margin-bottom: 20px;}
  
}

  </style>


