var linebot = require('linebot');
var express = require('express');
var weather = require('./weather');
var bot = linebot({
    channelId: '1504082432',
    channelSecret: '4e000a81508b9df6798824b7bf4007c7',
    channelAccessToken: '4S0EpVGerYXuFHqBHu0RfgXokS+a7hsMNTW0mKWe9DOixrblLCuOxdutu7reL2iSI0GmUrAnP9IWcYaUacyBCbmgNoCH4/Ne0iWKs/hlfmLiKDlB2GqO0Yb2PrtaLmCriv7MQI7Mb8LWQqJZlLREtQdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;

    //asking weather
    //ex: 台南天氣
    console.log('fjoisjofj::',msg.indexOf('天氣'));
    if(msg.indexOf('天氣') > -1){
        var city = msg.substring(0,2);
        console.log(city);
        weather(city,(res)=>{
            console.log(res);
            var reply = res.temperature;
            event.reply(reply).then(function(data) {
            // success 
            console.log(msg);
            }).catch(function(error) {
            // error 
            console.log('error');
            });
        });
    }  
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

