window.onload=start;
//key a3b62a898a0b902f8a058d561609ed0b
function start(){
    var location= document.getElementById("location");
    var temp = document.getElementById("temperature");
    var condition = document.getElementById("conditions");

    var tempconverted= document.getElementById("temp");
    var description = document.getElementById("description");

    var url= "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a3b62a898a0b902f8a058d561609ed0b&units=metric";

    var xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.responseType= "json";
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if (xhr.readyState===4){
            if (xhr.status===200){
                var DATA = xhr.response;
                console.log(DATA);
                location.innerHTML=DATA.name;
                temp.innerHTML= DATA.main.temp;
                condition.innerHTML=DATA.weather[0].description;

                tempconverted.innerHTML= Math.round(DATA.main.temp)+" &deg;C";

                var string = DATA.weather[0].description;
                var result = string.charAt(0).toUpperCase() + string.slice(1);

                description.innerHTML= result;

            }else {
                location.innerHTML="API call was unsuceesful"
                console.log(xhr.status);
            }

        }
    }
}