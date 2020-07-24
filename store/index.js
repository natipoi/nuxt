
const https = require("https");

export const state = () => ({
  message: ""
});

export const mutations = {
  afterSendMessage(state, sendStatus) {
    state.message = sendStatus
      ? "お問い合わせ内容を送信しました。回答まで 1〜7日ほどお待ちください。"
      : "お問い合わせ内容を送信できませんでした。お手数ですが再度お試しください。";
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
      console.error("errrrroooooo");
      commit("afterSendMessage", false);
    });

    //データ送信
    req.write(data);
    //終わり
    req.end();
  }
};
