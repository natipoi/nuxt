<template>
    <section class="section">
      <div class="inner-section">
        <div class="overlay"><div class="loader"></div></div>
        <div class="heading-title">
            <h1>お問い合わせ<span>Fitpoi for Gymの提供</span></h1>
        </div>

        <form id="form" action="/email/" method="POST">
        <input type="hidden" name="type" value="Fitpoi for Gymの提供" id="type-input">
        <input type="hidden" name="color" value="#29d1c0" id="color-input">
        <div class="form-box">
            <div class="heading-box">
            <h2>メールアドレス</h2>
        </div>
        <div class="mail-box text-field">
            <!-- <label id="mail-label">メールアドレス</label> -->
            <input type="email" id="email-input" placeholder="sample@example.com" name="email">
        </div>
        </div>
        <div class="form-box">
        <div class="heading-box">
            <h2>お問い合わせ内容</h2>
        </div>

        <div class="text-field">
            <textarea id="message-input" rows="10" placeholder="入力してください" name="message"></textarea>
        </div>
        </div>

        <div class="submit-button-box">
            <button type="button" id="submit-button" @click="sendMassage()">お問い合わせを送信する</button>
        </div>
        </form>
        <div class="after-send-message">{{ $store.state.message }}</div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        sendMassage () {
            var email = $("#email-input").val()
            var message = $("#message-input").val()
            var type = $("#type-input").val()
            var color = $("#color-input").val()
            this.$store.dispatch('sendMessageToSlack', {
               email: email,
               message: message,
               type: type,
               color: color
            })
            if (process.client) {
                $("#form").hide()
            }
        }
    }
}
</script>

<style>
h1 span {font-weight: 400;font-size: 1.2rem;display: block;}
h2 {margin-bottom: 10px;}
input, textarea, button {border-style: none;outline: none;resize: none;}
.heading-box {margin: 0 30px;}
.heading-title {padding: 40px 0;}
.main-contact {margin: 0 auto; max-width: 700px;}
.mail-box {background-color: #fff; padding: 20px; margin-bottom: 30px;}
#mail-label {width: 30%; margin-right: 10px;}
/* input[type=email] {flex: 1;} */
.text-field {background-color: #fff; padding: 20px; margin-bottom: 30px;}
textarea[id=body]{width: 100%;}
.submit-button-box {text-align: center;}
#submit-button {color: #FF4B00; border-bottom: solid 2px #FF4B00; font-size: 1.2rem;padding:10px; font-weight: 900; background: transparent}
#submit-button:hover {cursor: pointer;}
#message-input {width: 100%}

.positive-button {display: none;}
.after-send-message {margin: 0 30px;}
.overlay {display: none;position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 1000; background-color: rgba(255, 255, 255, 0.8); transition: all 0.2s;}
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 25px;
  width: 1em;
  height: 1em;
  zoom: 0.2;
  border-radius: 50%;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0) translate(-50%, -50%);
  -ms-transform: translateZ(0) translate(-50%, -50%);
  transform: translateZ(0) translate(-50%, -50%);
}
@-webkit-keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.5), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.5), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.5), 2.5em 0em 0 0em rgba(255, 75, 0, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.5), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.5), 0em 2.5em 0 0em rgba(255, 75, 0, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.5), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.5), -2.6em 0em 0 0em rgba(255, 75, 0, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}
@keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.5), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.5), 2.5em 0em 0 0em rgba(255, 75, 0, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.5), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.2), -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.5), 0em 2.5em 0 0em rgba(255, 75, 0, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 75, 0, 0.2), -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.5), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 75, 0, 0.2), 1.8em -1.8em 0 0em rgba(255, 75, 0, 0.2), 2.5em 0em 0 0em rgba(255, 75, 0, 0.2), 1.75em 1.75em 0 0em rgba(255, 75, 0, 0.2), 0em 2.5em 0 0em rgba(255, 75, 0, 0.2), -1.8em 1.8em 0 0em rgba(255, 75, 0, 0.5), -2.6em 0em 0 0em rgba(255, 75, 0, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}
@media screen and (min-width: 720px) {
    .form-box {display: flex;}
    .form-box .heading-box {width: 20%;}
    .form-box h2 {font-size: 1.0rem;}
    .text-field {flex: 1;}
    .heading-box {margin: 0}
    .heading-title {padding: 100px 0 80px; }
    h1 span {margin-left: 20px;font-weight: 400;display:inline-block;}
}
</style>


