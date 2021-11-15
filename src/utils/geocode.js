const request = require("request");

const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoieW9nZXNod2FyYW5wIiwiYSI6ImNrdnMxdWVxMTBkbjEyb2x5dWpiZXI3OHAifQ.uM2SZIwqL9IhwS_43hG7Ww&limit=1"
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("unable to connect to locator!",undefined);
        }else if(response.body.features.length===0){
            callback("Can't find the address!",undefined);
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0]
            })
        }
    })
}

module.exports=geocode