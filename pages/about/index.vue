<template>
        <section class="section">
            <div class="inner-section">
            <div class="title">
                <h1>運営会社</h1>
            </div>

            <div class="info-box">
                <h2>会社名</h2>
                <p class="p1-m0">株式会社Fitpoi （フィットポイ）</p>
            </div>
            <hr class="hr">
            <div class="info-box">
                <h2>代表者</h2>
                <p class="p1-m0">遠山 晋作</p>
            </div>
            <hr class="hr">
            <div class="info-box">
                <h2>所在地</h2>
                <p class="p1-m0">〒164-0003 東京都中野区東中野3-19-18</p>
            </div>
            <hr class="hr">
            <div class="info-box">
                <h2>資本金</h2>
                <p class="p1-m0">3,000,000円</p>
            </div>
            <hr class="hr">
            <div class="info-box">
                <h2>電話番号</h2>
                <p class="p1-m0">03-5931-8537</p>
            </div>
            <hr class="hr">
            </div>


        </section>
</template>
<script>
export default {
    head () {
        return {
            title: "Fitpoiについて｜Fitpoi",
            meta: [
                { hid: 'og:title', property: 'og:title', content: "Fitpoiについて" },
                { hid: 'og:url', property: 'og:url', content: `https://fitpoi.com/about/` },
                // { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
            ],
            link: [
                { hid:"canonical", rel: "canonical", href: `https://fitpoi.com/about/` }
            ]
        }
    }
}
</script>
<style>
.title {padding: 40px 0;}
.hr {margin: 25px 0; width: 15%;}
@media screen and (min-width: 700px) {
    .title {padding: 100px 0 80px;}
    .inner-section {max-width: 800px;}
    .hr {display: none;}
    .info-box {display: flex; margin: 0 auto 20px;}
    .info-box h2 {width: 30%;}
    .info-box p {flex: 1}

}
</style>
