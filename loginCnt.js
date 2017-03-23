var axios = require('axios');
var cityUrl = 'https://nutncte.herokuapp.com/api/users/getUsers';

function loginCnt(callback){
    axios.get(cityUrl).then((citys)=>{
        callback(citys);
    }); 
}



module.exports = loginCnt;