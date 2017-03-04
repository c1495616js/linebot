var axios = require('axios');
var cityUrl = 'https://works.ioa.tw/weather/api/all.json';

var currentCityId;
var currentDistrictId;
function weather(city, district, callback){
    axios.get(cityUrl).then((citys)=>{
        
        var arr = citys.data;
        for (var i = 0, len = arr.length; i < len; i++) {
             
             var e = arr[i];
             if(e.name == city){
                currentCityId = e.id;
                var towns = e.towns;
                for(var j=0, length = towns.length; j < length; j++){
                    var d = towns[j];
                    if(d.name == district){
                        currentDistrictId = d.id;
                    }
                }
                // return false;
            }
            
        };
        if(currentCityId && currentDistrictId){
            var weatherUrl = `https://works.ioa.tw/weather/api/weathers/${currentDistrictId}.json`;
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