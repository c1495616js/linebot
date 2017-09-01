var linebot = require('linebot');
var express = require('express');
var weather = require('./weather');
var bot = linebot({
    channelId: '',
    channelSecret: '',
    channelAccessToken: ''
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    //asking weather
    //ex: 台南永康區天氣
    
    if(msg.indexOf('天氣') > -1){
        var city = msg.substring(0,2);
        var ind = msg.indexOf('天氣');
        var district = msg.substring(2,ind);
        console.log(city);
        console.log(district);
        weather(city,district,(res)=>{

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
            資料更新時間：${res.at}, 
            概況：${res.desc},
            氣溫：${res.temperature}度C, 
            濕度：${res.humidity}%,
            降雨量：${res.rainfall}mm
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


//server
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 
8080, ()=>{
    var port = server.address().port;
    console.log("App now running on port", port);
});

