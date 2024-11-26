/*pseudo code
-> get variables from document
-> get data from api
-> set values to the variables
*/

window.onload= start;
//key a3b62a898a0b902f8a058d561609ed0b
function start(){
   
//Buttons to show output and call function with api (passing the city)  
    document.getElementById("Toronto").onclick = function(){
        document.getElementById("output").style.display="block";
        request("Toronto");
    }
    
    document.getElementById("Tokyo").onclick= function(){
        document.getElementById("output").style.display="block";
        request("Tokyo")
    }

}

function request(city){
    // get documents id and set them to variables
    var location = document.getElementById("location");
    var icon = document.getElementById("icon");
    var error = document.getElementById("error");
    var temperature= document.getElementById("temperature");
    var condition = document.getElementById("conditions");
    var time = document.getElementById("time");
    
    //Data with {city}
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3b62a898a0b902f8a058d561609ed0b&units=metric`;

    var xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.responseType= "json";
    xhr.send(null);

    xhr.onreadystatechange = function(){

        // Check if data is processed correctly 
        if (xhr.readyState===4){
            if (xhr.status===200){
                // Setting document variables with data from api
                var DATA = xhr.response;
                
                // city name
                location.innerHTML=DATA.name;
                // icon of weather condition
                var iconDATA = DATA.weather[0].icon;
                // to set alt attribute to img
                var alttext=DATA.weather[0].description;
                
                //getting img for icon
                const iconUrl = `https://openweathermap.org/img/wn/${iconDATA}.png`;
                // setting icon
                icon.innerHTML= `<img src="${iconUrl}" alt="${alttext}">`;

                //tempreture 
                temperature.innerHTML= DATA.main.temp+" &deg;C";
                condition.innerHTML=DATA.weather[0].description;

                //time for sunrise UTC format
                var sunrise = new Date(DATA.sys.sunrise * 1000)
                var sunrisehours = sunrise.getUTCHours();
                var sunrisemins = sunrise.getUTCMinutes();
                time.innerHTML = sunrisehours +":"+ sunrisemins +" UTC";

                // If data not received show error in document 
            }else {
                error.innerHTML="API call was unsuceesful"
                console.log(xhr.status);
            }

        }
    }

} // End