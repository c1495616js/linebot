var axios = require('axios');
var cityUrl = 'https://works.ioa.tw/weather/api/all.json';

var currentCityId;
function weather(city, callback){
    axios.get(cityUrl).then((citys)=>{
        
        var arr = citys.data;
        for (var i = 0, len = arr.length; i < len; i++) {
             
             var e = arr[i];
             if(e.name == city){
                currentCityId = e.id;
                // return false;
            }
            
        };
        if(currentCityId){
            var weatherUrl = `https://works.ioa.tw/weather/api/weathers/${currentCityId}.json`;
            axios.get(weatherUrl).then((res)=>{
                    callback(res.data);
                });
        }
        
        // citys.forEach(function(e){
        //     if(e.name == city){
        //         currentCityId = e.id;
        //         return false;
        //     }
        // });
        // var weatherUrl = `https://works.ioa.tw/weather/api/weathers/${currentCityId}.json`;
        // axios.get(weatherUrl).then((res)=>{
        //     callback(res.data);
        // });
    });
    


    
}



module.exports = weather;