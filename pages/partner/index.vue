<template>
    <section class="section">
        <div class="inner-section">

        <div class="heading-box">
            <h1>協力ジム</h1>
        </div>

        <div class="partner-list">
        <a href="https://www.wellness-j.com/" class="partnet-box">
            <div class="partner-icon">
                <img src="~/assets/partner/wellness.png" width="100%">
            </div>
            <div class="partnte-detail">
                <div class="partner-detail-inner">
                <h2>WELLNESS JOURNAL</h2>
                <p class="p3">スペシャルティパーソナルトレーニングジム</p>
                </div>
            </div>
            
        </a>
        <a href="https://www.fitexceed.com/" class="partnet-box">
            <div class="partner-icon">
                <img src="~/assets/partner/exceedLogo.jpg" width="100%">
            </div>
            <div class="partner-detail">
                <div class="partnte-detail-inner">
                <h2>エクシードスポーツジム</h2>
                <p class="p3">キックボクシングメインのフィットネスジム</p>
                </div>
            </div>
            
        </a>
        </div>
        </div>


    </section>
</template>
<script>
export default {
    head () {
        return {
            title: "Fitpoiの協力パートナー｜Fitpoi",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "Fitpoiの協力パートナー" },
                { hid: 'og:url', property: 'og:url', content: `https://fitpoi.com/partner/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://fitpoi.com/partner/` }
            ]
        }
    }
}
</script>
<style>
.heading-box { padding: 40px 0;}
.inner-section {max-width: 800px;}
    h1::after {content:"Fitpoiの頼れるパートナー"; font-size: 1.0rem; padding-left: 10px;font-weight: 400;}
    .partnet-box {display: flex; align-items: center;padding: 20px;background-color: #fff;  border-radius: 10px; color: black}
    .partnet-box:hover {opacity: 0.7;}
    .partner-icon {width: 20%;margin-right: 20px}
    .partner-detail-inner {margin: auto 0;}
    .partner-list a {margin-bottom: 30px;}
    .p3 {margin-bottom: 0;}
    h2 {margin-bottom: 0;}

    @media screen and (min-width: 720px){
        .partner-list {display: flex;justify-content: space-between;}
        .partner-list a {width: 48%; }
        .partner-list h2 {font-size: 1.0rem;}
        .partner-list .p3 {font-size: 0.5rem;}
        .heading-box {padding: 100px 0 80px; }
    }
</style>
