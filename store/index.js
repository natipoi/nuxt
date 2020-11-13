
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

const keys = {
  visitor_id: "aaklsdjhlskac",
};  // イベントを発生させるユーザーとの紐付け情報
const events = [{
  event_name: 'test',
  values: {
    item_id: '123',
    name: 'hoge',
    price: 10000,
    quantity: 1
  }
}]; // keysで紐付ける特定のユーザーに対して、最大10イベントまで同時に指定可能

export const actions = {
  trackEvents(keys, events);
  // sendMessageToSlack({ commit }, message) {

  //   var data = JSON.stringify({
  //     username: message.email,
  //     text: message.message,
  //     icon_emoji: ":ghost:"
  //   });

  //   var options = {
  //     hostname: "hooks.slack.com",
  //     port: 443,
  //     path: "/services/TLQPTRKR8/B017D8JS8MU/341twjPTtSOJkjXZ8NCwkNmH",
  //     method: "POST",
  //     headers: {
  //       "Content-Length": Buffer.byteLength(data)
  //     }
  //   };
  //   //リクエスト
  //   var req = https.request(options, res => {
  //     if (res.statusCode === 200) {
  //       console.log("OK:" + res.statusCode);
  //       commit("afterSendMessage", true);
  //     } else {
  //       console.log("Status Error:" + res.statusCode);
  //       commit("afterSendMessage", false);
  //     }
  //   });

  //   //そもそもなエラー時
  //   req.on("error", e => {
  //     console.error("errrrroooooo");
  //     commit("afterSendMessage", false);
  //   });

  //   //データ送信
  //   req.write(data);
  //   //終わり
  //   req.end();
  // }
};

const http = require('https');
const ACCESS_TOKEN = 'atf0.58pgtjpyGYQrDhEMhAPcfM5yEzUGx8qQPu6QwLyKJu2Xgarw6RMWV8bKsEbWbJGs';

function trackEvents(keys, events) {
  const body = JSON.stringify({
    client_id: '19bl5thkh7c0t4j',
    api_key: 'da60f4e3fd7c03e6874a05c0c741bd85',
    keys: keys,
    events: events
  });

  const authorizationHeader = 'Bearer ' + ACCESS_TOKEN;

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': authorizationHeader
  };

  const options = {
    hostname: 'api.karte.io',
    path: '/v1/event/track',
    method: 'POST',
    headers: headers
  };

  const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(chunk);
    });
  });

  req.write(body);
  req.end();
}



