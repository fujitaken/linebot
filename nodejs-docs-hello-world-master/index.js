// -----------------------------------------------------------------------------
// モジュールのインポート
const server = require("express")();
const line = require("@line/bot-sdk"); // Messaging APIのSDKをインポート

// -----------------------------------------------------------------------------
// パラメータ設定
const line_config = {
    channelId: "1651271946",
    channelAccessToken: "+QEnAN65fLKOSfG7nBkiSDhonU6i7wZgu5sCVjmYE1xIgWLRsADAoFwW6t0XfBaE92B0NwpdDt0zxFHcIsxOTss6f+4nRDxuNUK/ZaAfDuum+wsT3VXPiDJmU7BNW2UQnYOHoRt2jQTs66WNJ9XhiQdB04t89/1O/w1cDnyilFU=", // 環境変数からアクセストークンをセットしています
    //channelAccessToken: process.env.LINE_ACCESS_TOKEN, // 環境変数からアクセストークンをセットしています
    channelSecret: "39ed73518f0cd630485c5e7f6fee70fa" // 環境変数からChannel Secretをセットしています
    //channelSecret: process.env.LINE_CHANNEL_SECRET // 環境変数からChannel Secretをセットしています
};

// -----------------------------------------------------------------------------
// Webサーバー設定
server.listen(process.env.PORT || 3000);


// -----------------------------------------------------------------------------
// ルーター設定
server.post('/bot/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);
    console.log(req.body);
});

/*
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
*/