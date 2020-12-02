// {
//    "businessName" : "",
//    "businessWebsite" : "",
//    "city" : "Chittagong",
//    "continent" : "Asia",
//    "country" : "Bangladesh",
//    "countryCode" : "BD",
//    "ipName" : "",
//    "ipType" : "Residential",
//    "isp" : "Orange Communication",
//    "lat" : "22.3384",
//    "lon" : "91.83168",
//    "org" : "Orange Communication",
//    "query" : "144.48.151.33",
//    "region" : "Chittagong",
//    "status" : "success"
// }
var d = new Date();
var day = d.getDay();
var month = d.getMonth();
var dayMonth = day+"."+month;
console.log(dayMonth)
let thisday;

//  Country Ways function run 
$.ajax({
    type:"get",
    dataType:"json",
    url:"https://extreme-ip-lookup.com/json/",
    success: function(data11){
        if(data11.country == "Bangladesh"){
            bday();
        }
    }
    });

    $(".country").text(thisday);