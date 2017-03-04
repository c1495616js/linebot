var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: '1504082432',
    channelSecret: '4e000a81508b9df6798824b7bf4007c7',
    channelAccessToken: '4S0EpVGerYXuFHqBHu0RfgXokS+a7hsMNTW0mKWe9DOixrblLCuOxdutu7reL2iSI0GmUrAnP9IWcYaUacyBCbmgNoCH4/Ne0iWKs/hlfmLiKDlB2GqO0Yb2PrtaLmCriv7MQI7Mb8LWQqJZlLREtQdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
});


const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 
8080, ()=>{
    var port = server.address().port;
    console.log("App now running on port", port);
});

