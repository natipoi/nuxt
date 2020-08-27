<template>
<div>
        
<Header />
<nuxt />

        <footer>
            <div id="footer">
                <div class="positive-button-wrap">
                <a href="https://apps.apple.com/jp/app/fitpoi/id1512644821" class="positive-button">
                <svg role="img" viewBox="0 0 24 24" class="apple-icon"><path d="M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505-.43.77-.65 1.64-.644 2.52.015 1.083.29 2.035.84 2.86.387.6.904 1.114 1.534 1.536.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323-.293-.134-.596-.248-.905-.34-.38-.1-.77-.148-1.164-.147-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34-.324.096-.656.154-.99.175-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07-.228.64-.568 1.23-1 1.76-.435.52-.975.95-1.586 1.26z"/></svg>
                アプリをダウンロードする</a>
                </div>
                
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
                    
                    <a href="/"><svg viewBox="0 0 878.04 338.16" width="80px"><defs><style>.a0bde956-142b-4c4a-9811-f64b171c2648{fill:#ff4b00;}</style></defs><title>fitpoi_logo_final</title><g id="baab5df0-0a2c-42b0-aed9-e5a3c92086e7" data-name="レイヤー 2"><g id="a76f7971-fdcb-44d3-89b0-0383798b2e4f" data-name="レイヤー 1"><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M0,337.16V77.33a1,1,0,0,1,.29-.71l11-11L76.62.29A1,1,0,0,1,78,.29l64.27,64.27a1,1,0,0,1,0,1.42L78.08,130.21a1,1,0,0,0,0,1.41l64.23,64.23a1,1,0,0,1,0,1.42L1.71,337.87A1,1,0,0,1,0,337.16Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M233.86,236.37V72.14a4.35,4.35,0,0,1,4.35-4.35h106V92.51a4.37,4.37,0,0,1-4.37,4.37H269.14v45.21h68.58v23.6A4.32,4.32,0,0,1,333.4,170H269.14v62a4.4,4.4,0,0,1-4.4,4.41Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M379.05,111.13H408.8V232a4.4,4.4,0,0,1-4.4,4.39H374.68V115.5A4.37,4.37,0,0,1,379.05,111.13Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M486.65,82.28v28.85h23.13V132.5a4.33,4.33,0,0,1-4.33,4.33h-18.8v59.94c0,9.58,4.67,14.13,14.72,14.13a55.21,55.21,0,0,0,8.29-.58v21.45a4.38,4.38,0,0,1-3.8,4.34,97.83,97.83,0,0,1-12.43.73c-29.44,0-40.89-9.82-40.89-34.23V136.83H434.9v-21.3a4.39,4.39,0,0,1,4.39-4.4h13.25V86.52a4.24,4.24,0,0,1,4.24-4.24Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M664.85,173.75c0,40.31-19.39,64.61-50.7,64.61-18.22,0-32.24-8.88-38.9-23h-.7v57.57a4.35,4.35,0,0,1-4.35,4.35H540.43V115.45a4.33,4.33,0,0,1,4.33-4.32h29.32V133h.7c6.78-14.72,20.68-23.83,38.79-23.83C645.34,109.15,664.85,133.33,664.85,173.75Zm-34.93,0c0-22.66-10.74-37.27-27.8-37.27-16.71,0-27.69,14.84-27.69,37.27,0,22.67,11,37.15,27.69,37.15C619.18,210.9,629.92,196.53,629.92,173.75Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M689.79,173.63c0-40.53,24.53-65.18,62-65.18s62,24.53,62,65.18c0,41.24-24.18,65.43-62,65.43S689.79,214.76,689.79,173.63Zm89.37.12c0-24.88-10.75-39.25-27.34-39.25s-27.45,14.37-27.45,39.25c0,25.12,10.63,39.25,27.45,39.25S779.16,198.87,779.16,173.75Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M848.24,111.13H878V232.2a4.18,4.18,0,0,1-4.18,4.17H843.93V115.44A4.31,4.31,0,0,1,848.24,111.13Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M379.84,60.44h28.9a0,0,0,0,1,0,0V89.25a4.42,4.42,0,0,1-4.42,4.42H375.5a0,0,0,0,1,0,0V64.78A4.33,4.33,0,0,1,379.84,60.44Z"/><path class="a0bde956-142b-4c4a-9811-f64b171c2648" d="M848.39,60.44h28.9a0,0,0,0,1,0,0V89.25a4.42,4.42,0,0,1-4.42,4.42H844.05a0,0,0,0,1,0,0V64.78A4.33,4.33,0,0,1,848.39,60.44Z"/></g></g></svg>
                        </a>
                    <p class="p3">COPYRIGHT 2020 Fitpoi, Inc.</p>
                </div>
                </div>
            </div>
        </footer>
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
      html { background-color: #F6F1F1; color: #000001; font-size: 14px;}
      body {margin: 0 auto; font-family: "San Francisco", Sans-Serif;}
      body * {margin: 0; padding: 0; box-sizing: border-box;}
      a {text-decoration: none; color: #969594}
      .section {max-width: 700px; margin: 0 auto;}
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
      .main {margin: 0 30px;}
      table {text-align: left;border-collapse:separate;border-spacing: 10px}
      .box {padding: 30px 0;}
      .floor-not-yet { position: relative;color: #A2A2A2 !important;text-align: center;}
      .apple-icon {height: 15px;fill: #fff;}

      header {background: #fff; padding: 15px;}
      header ul {line-height: 1;}
      #header-wrap {display: flex; flex-wrap: nowrap; align-items: baseline; max-width: 700px;margin: 0 auto;}
      #header-logo{ display: inherit; }
      #header-logo a {display: inherit;}
      #header-menu {margin: auto 0 auto auto; margin-left: auto; }
      .header-menu-common {height: 100%; }
      .header-menu-common li {display: inline-block; padding: 0 10px;}
      #main-visual {padding: 5px 20px; text-align: center; }
      .positive-button {position:relative;display: inline-block; border-radius: 100px; color: #fff; background: #FF4B00; padding: 15px 40px; font-weight: 600; margin: 0px auto 30px; }

      .main-visual-caution {text-align: right;}
      .sns-icon {list-style: none;}
      .header-sns-icon { margin: auto 0;}
      
      .sns-icon li a {font-family: "Font Awesome 5 Brands"; font-weight: 900; display: block;text-align: center;}
      
      .insta::before {content: '\f16d'; }
      .fb::before {content: '\f39e';}
      .twitter::before {content: '\f099';}
      
      .app-feature {display: flex; width: 100%; align-items:center; margin: 60px 0;}
      .app-image {width: 50%; padding: 0 30px;}
      .app-description {flex: 1; padding-right: 30px;}
      .app-description p {margin: 0;}
      .app-description ul {margin: 10px 0;}
      .positive-button-wrap {text-align: center; margin: 0 auto 20px;}

      #footer {padding: 30px 30px 0;max-width: 700px;margin: 0 auto;}
      .footer-list {list-style-type: none; margin-bottom: 20px;}
      #footer-list1 a {color: #000}
      #footer-logo {text-align: right;}

      .only-pc {display: none;}
      @media screen and (min-width: 720px) {
          .only-pc {display: block;}
          #main-visual {padding-top: calc(100vw * 0.1);padding-left: 20px;padding-right: 20px; text-align: center; zoom: 1.2;}
          .main {max-width: 700px; margin: 0 auto 80px}
          header {padding: 25px;}
          #header-logo svg {zoom: 1.3}
          #footer {padding-left: 0; padding-right: 0;}
          .app-image {width: 40%;}
          .app-description {padding-left: 50px}
          .footer-bottom {display: flex; align-items: baseline;}
          .footer-bottom ul li {display: inline-block; padding-right: 20px}
          #footer-logo {margin-left: auto}

      }
  </style>


