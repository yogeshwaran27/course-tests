const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=c3b55673d680ababf4a94299705952ac&query="+latitude;+","+longitude;
    request({url:url},(error,response)=>{
        const data=JSON.parse(response.body);
        if(error){
            return callback("unable to connect to the weather checker!!",undefined)
        }else if(data.success==false){
            return callback("unable to fetch the weather!!",undefined);
        }
        callback(undefined,data.current.weather_descriptions+" temperature is "+ data.current.temperature+" feels like "+data.current.feelslike);
    })
}
module.exports=forecast