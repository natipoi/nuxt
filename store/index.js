
const https = require("https");
import Vuex from 'vuex'


export const statusList = [
  {
      degree: 0,
      title: "運動は大切です。",
      image: "🙂",
      fontSize: "5.0em",
      fontSizeSp: "3.0rem"

  },
  {
      degree: 10,
      title: "運動しませんか？",
      image: "😊",
      fontSize: "5.0em",
      fontSizeSp: "3.0rem"

  },
  {
      degree: 20,
      title: "運動しましょう。",
      image: "😉",
      fontSize: "5.0em",
      fontSizeSp: "3.0rem"

  },
  {
      degree: 30,
      title: "運動しよう。",
      image: "😆",
      fontSize: "5.0em",
      fontSizeSp: "3.0rem"

  },
  {
      degree: 40,
      title: "今からでも遅くない！運動しよう！",
      image: "😎",
      fontSize: "4.0em",
      fontSizeSp: "2.5rem"

  },
  {
      degree: 50,
      title: "三日坊主にならないで！自分に負けるな！",
      image: "🤔",
      fontSize: "3.5em",
      fontSizeSp: "2.5rem"

  },
  {
      degree: 60,
      title: "『運動してる人の方が幸福度が高い』って聞いたことある？",
      image: "🧐",
      fontSize: "3.0em",
      fontSizeSp: "2.5rem"

  },
  {
      degree: 70,
      title: "みんな運動してるけど、しないの？",
      image: "😅",
      fontSize: "3.5em",
      fontSizeSp: "2.5rem"

  },
  {
      degree: 80,
      title: "運動しろ。",
      image: "😤",
      fontSize: "5.0em",
      fontSizeSp: "3.0rem"

  },
  {
      degree: 90,
      title: "え、運動しないの？",
      image: "🤨",
      fontSize: "5.0em",
      fontSizeSp: "3.0rem"

  },
  {
      degree: 100,
      title: "運動しないとかまじありえん。運動した方がいいって自分でわかってんでしょ？周りのみんなも運動してるよ。サボってる暇なんてないからな。ほら、運動すんぞ。",
      image: "🤬",
      fontSize: "2.0em",
      fontSizeSp: "1.5rem"

  }
]

export const degreeStatus = () => ({
  nowStatus: statusList[3]
});


export const state = () => ({
  message: "a",
  nowStatus: statusList[3]
});

export const mutations = {
  afterSendMessage(state, sendStatus) {
    state.message = sendStatus
      ? "お問い合わせ内容を送信しました。回答まで 1〜7日ほどお待ちください。"
      : "お問い合わせ内容を送信できませんでした。お手数ですが再度お試しください。";
  },
  getStatus(state, degree) {
    state.nowStatus = statusList.find(status => status.degree === degree)
  }

};

export const actions = {
  sendMessageToSlack({ commit }, message) {

    var data = JSON.stringify({
      username: message.email,
      text: message.message,
      icon_emoji: ":ghost:"
    });

    var options = {
      hostname: "hooks.slack.com",
      port: 443,
      path: "/services/TLQPTRKR8/B017D8JS8MU/341twjPTtSOJkjXZ8NCwkNmH",
      method: "POST",
      headers: {
        "Content-Length": Buffer.byteLength(data)
      }
    };
    //リクエスト
    var req = https.request(options, res => {
      if (res.statusCode === 200) {
        console.log("OK:" + res.statusCode);
        commit("afterSendMessage", true);
      } else {
        console.log("Status Error:" + res.statusCode);
        commit("afterSendMessage", false);
      }
    });

    //そもそもなエラー時
    req.on("error", e => {
      console.error("err");
      commit("afterSendMessage", false);
    });

    //データ送信
    req.write(data);
    //終わり
    req.end();
  },
  showDegreeText({commit}, degree) {
    console.log("ok")
    commit("getStatus", degree)
  }
};
