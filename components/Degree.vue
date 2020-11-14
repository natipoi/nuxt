<template>
    <div>
        <div class="progress-wrap">
            
            <div class="progress">
                <div class="progress-drag" id="js-drag-pinch" @click="moveBar" @touchleave="dragLeave" @touchmove="dragOver" @touchend="dragEnd" @dragleave="dragLeave" @dragover="dragOver" @dragend="dragEnd" draggable=true touchable=true></div>
                <div class="progress-bar-wrap scroll_hide">
                    <div class="progress-bar">
                        <div class="in-progress-bar"></div>
                        
                    </div>
                    <div class="progress-pinch">
                    </div>
                    
                    
                </div>
                
                <div class="progress-emoji-wrap" @click="clickEmoji()">
                    <p class="progress-emoji">{{ $store.state.nowStatus.image }}</p>
                    <p class="degree-text scroll_hide">挑発度 {{ $store.state.nowStatus.degree }}%</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style>

.font5em { font-size: 5.0rem !important;}
.font4em { font-size: 4.0rem !important;}
.font3em { font-size: 5.0rem !important;}
.font2em { font-size: 3.0rem !important;}

.progress-wrap {
    position:fixed;
    bottom: 20px;
    right: 40px;
    width: 90%;
    max-width: 400px;
}
.progress {
    background: #fff;
    border-radius: 300px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    padding: 5px 25px;
    min-height: 56px;
}
.progress-bar-wrap {
    position:relative;
    width: 80%;
    margin-right: 5px;
    height: 10px;
}
.progress-bar {
    position:absolute;
    border-radius: 300px;
    width: 100%;
    height: 10px;
    background: #E6E6E6;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
}
.in-progress-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 30%;
    background: #FF4B00;
}
.progress-emoji-wrap {
    flex: 1;
    text-align: center;
}
.progress-emoji-wrap p {
margin-bottom:0;
line-height: 1.2;
}
.progress-emoji {
    font-size: 2rem;
} 
.degree-text {
    font-size: 0.8rem;
}
.progress-pinch {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    left: 30%;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
}
.progress-drag {
    position: absolute;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 30%;
    z-index: 100;
}
@media screen and (max-width: 768px) {
    .progress-wrap {
        right: 5%;
    }
}
</style>
<script>
export default {
    // `env` is available in the context object
    data(){
        return {
            is_drag: true,
            rate: 30,
            bar_show: true,
            scrolled: false
        }
    },
    methods: {
        dragOver(event) {
            if (process.client) {
                const barMinX = $(".progress-bar").offset().left
                const barWidth = $(".progress-bar").width()
                if (this.is_drag === true) {
                    var cursorX = event.clientX;
                    this.rate = Math.round((cursorX - barMinX)/barWidth * 10)* 10;
                    if (this.rate > 100 ) { this.rate = 100 }
                    if (this.rate < 0 ) { this.rate = 0 }
                    $(".progress-pinch").css("left", "calc(" + this.rate + "% - 12px)")
                    $(".in-progress-bar").css("width", "calc(" + this.rate + "% - 12px)")
                }
            }
        },
        dragEnd(){
            this.is_drag = true;
            console.log(this.rate)
            this.$store.dispatch('showDegreeText', this.rate)
            console.log(this.$store.state.nowStatus.fontSize)
            if ($(window).width()< 768) {
                $(".h1").css("font-size",this.$store.state.nowStatus.fontSizeSp)
            } else {
                $(".h1").css("font-size",this.$store.state.nowStatus.fontSize)
            }
            
            
        },
        dragLeave(){
            this.is_drag = false;
        },
        handleScroll () {
            var setTimeoutId;
            if(this.bar_show) {
                $(".progress-wrap").animate({
                    width: "56px"
                }, 100);
                $(".scroll_hide").hide(100);
                this.bar_show = false

                // if(setTimeoutId){
                //     clearTimeout(setTimeoutId) ;
                // }

                // // 新しくsetTimeoutイベントを設定
                // setTimeoutId = setTimeout( function(){
                //     // スクロール終了時の処理内容
                //     this.destroyed
                //     if(!this.bar_show) {
                //         var barH = $(".progress-wrap").height();
                //         $(".progress-wrap").animate({
                //             width: "400px"
                //         }, 100);
                //         $(".scroll_hide").show(100);
                //         this.bar_show = true
                        
                //     }

                //     // setTimeoutIdを空にする
                //     setTimeoutId = null;
                // }, 2000) ;
            }
        },
        clickEmoji(){
            if(!this.bar_show) {
                var barH = $(".progress-wrap").height();
                $(".progress-wrap").animate({
                    width: "90%"
                }, 100);
                $(".scroll_hide").show(100);
                $("#js-drag-pinch").show();
                this.bar_show = true
            } else {
                $(".progress-wrap").animate({
                    width: "56px"
                }, 100);
                $(".scroll_hide").hide(100);
                this.bar_show = false
                $("#js-drag-pinch").hide();
            }
            
        },
        moveBar(event){
            const barMinX = $(".progress-bar").offset().left
            const barWidth = $(".progress-bar").width()
            if (this.is_drag === true) {
                var cursorX = event.clientX;
                this.rate = Math.round((cursorX - barMinX)/barWidth * 10)* 10;
                if (this.rate > 100 ) { this.rate = 100 }
                if (this.rate < 0 ) { this.rate = 0 }
                $(".progress-pinch").css("left", "calc(" + this.rate + "% - 12px)")
                $(".in-progress-bar").css("width", "calc(" + this.rate + "% - 12px)")
            }
        }
    },
    created () {
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    destroyed () {
        if (process.client) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}

</script>