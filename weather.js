var axios = require('axios');
var cityUrl = 'https://works.ioa.tw/weather/api/all.json';

var currentCityId;
function weather(city, callback){
    axios.get(cityUrl).then((citys)=>{
        console.log(citys);
        for (var i = 0, len = citys.length; i < len; i++) {
             
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