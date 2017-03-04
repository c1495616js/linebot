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
    
    if(msg.indexOf('天氣') > -1){
        var city = msg.substring(0,2);
        console.log(city);
        weather(city,(res)=>{

            /* "img": "02@2x.png",
  "desc": "多雲",
  "temperature": "16",
  "humidity": "89",
  "rainfall": "0.0",
  "sunrise": "06:13",
  "sunset": "17:57",
  "at": "2017-03-04 19:05:07",
  "specials": [],
  "histories": [
    {*/


            var reply = `${msg}: 
            時間：${res.at}, 
            概況：${res.desc},
            氣溫：${res.temperature}, 
            濕度：${res.humidity},
            降雨機率：${res.rainfall},
            `;
            event.reply(reply).then(function(data) {
            // success 
            console.log(msg);
            }).catch(function(error) {
            // error 
            console.log('error',error);
            });
        });
    }else{
       event.reply('錯誤').then(function(data) {
            // success 
            console.log(msg);
            }).catch(function(error) {
            // error 
            console.log('error',error);
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

