$(document).ready(function(){
var lon,lat,fTemp,cTemp;  
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
     var currentPosition = position;
    lat = position.coords.latitude;
     lon = position.coords.longitude;
 
  //Create API with GEOLOCATION
var api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=a9bcf4f4899aaab6b7194e3f674f162b';
        
 $.getJSON(api,function(data){
   //JSON call open weather API
   var tempSwap=true;
   var weatherType=data.weather[0].description;
   var kTemp =data.main.temp;
   var windSpeed =data.wind.speed;
   var city=data.name;
   //temperature in kelvin
   fTemp = ((kTemp)*(9/5)-459.67).toFixed(1);
   cTemp =((kTemp -273)).toFixed(1);
//console.log(city);
 //  console.log(api);
  // console.log("lat");
   
   $("#city").html(city);
     $("#weatherType").html(weatherType);
     $("#set-temp").html(cTemp+" Celcius");
   $("#set-temp").click(function(){
     if(tempSwap===true){
       $("#set-temp").html(fTemp+" Farheneit");
     tempSwap = false;}
     
     else {
       $("#set-temp").html(cTemp+" Celcius");
         tempSwap = true;
          }
     
     
   });
 //change Background - image
   if(cTemp>40){
   $("body").css("background-image","url(http://www.themasterpiececards.com/hs-fs/hub/40667/file-274184125-jpeg/images/vincent-van-gogh-paintings-wheatfield-with-reaper-resized-600.jpeg?t=1487864775450&width=609&height=479&name=vincent-van-gogh-paintings-wheatfield-with-reaper-resized-600.jpeg)");
 }
   else if(cTemp>30){
       $("body").css("background-image", "url(https://s-media-cache-ak0.pinimg.com/originals/94/4c/46/944c46beebf908a2009c51b274ecdcff.jpg)");
   }
   else if(cTemp>20){
      $("body").css("background-image", "url(http://www.metmuseum.org/toah/images/hb/hb_1993.132.jpg)");
   }
   else if(cTemp<20){ $("body").css("background-image", "url(http://www.freakingnews.com/pictures/91500/Van-Gogh-s-Snowy-Night-91892.jpg)");
     
   }

 });

        function initMap(lat,lon) {
    var myLatLng = {lat: lat, lng: lon};
    var map = new google.maps.Map(document.getElementById("map"),{
          center: myLatLng,
          scrollwheel: false,
          zoom: 4
        });

  var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!'
        });
   console.log(myLatLng);
  } 
    initMap(lat,lon);
 
    
  });

}
 
}); 
