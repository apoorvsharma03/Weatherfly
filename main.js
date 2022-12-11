var icon;
var link;
var imglink;
var cityname; 

var form = document.getElementById("form");
function handleform(e){
    e.preventDefault();
    cityname = document.getElementById("searchbox").value
    link = `https://api.openweathermap.org/data/2.5/weather?&q=${cityname}&units=metric&appid=13665658ffdd1095aba85caf0ffae6ff`
    fetchinfo(link);
}
form.addEventListener('submit', handleform)

function fetchinfo(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        getinfo(data)
    })
    .catch(e => {
        document.getElementById("country").innerText = "";
        document.getElementById("city").innerText = "404: City Not Found";
        document.getElementById("temp").innerText = "---";
        document.getElementById("weathericon").innerHTML = `<img src="images/output-onlinepngtools.png" alt="weather_icon" class="weathericon"></img>`;
        document.getElementById("feelslike").innerText = "--°C";
        document.getElementById("humidity").innerText = "--%";
        document.getElementById("weather").innerText = "Weather:--";
        document.getElementById("windspeed").innerText = "--";
    })
}

function getinfo(arr){
    console.log(arr);
    document.getElementById("city").innerText = arr.name + ","
    document.getElementById("country").innerText = arr.sys.country;
    var t = arr.main.temp;
    t = t - t%1;
    document.getElementById("temp").innerText = t + "°C";
    document.getElementById("weather").innerText = arr.weather[0].description;
    var k = arr.main.feels_like;
    k = k - k%1;
    document.getElementById("feelslike").innerText = k + "°C";
    document.getElementById("humidity").innerText = arr.main.humidity + "%";
    icon = arr.weather[0].icon;
    imglink = `images/${icon}@2x.png`
    document.getElementById("weathericon").innerHTML = `<img src="${imglink}" alt="weather_icon" class="weathericon"></img>`;
    document.getElementById("windspeed").innerText = arr.wind.speed;

    console.log(icon);
    if(icon == "01d"){
        document.getElementById("body").style.backgroundImage = "url(images/clear_sky_day.jpg)"
    }
    else if(icon == "01n"){
        document.getElementById("body").style.backgroundImage = "url(images/clear_sky_night.jpg)"
    }
    else if(icon == "02d" || icon == "03d" || icon == "04d"){
        document.getElementById("body").style.backgroundImage = "url(images/few_clouds_day.jpeg)"
    }
    else if(icon == "02n" || icon == "03n" || icon == "04n"){
        document.getElementById("body").style.backgroundImage = "url(images/few_clouds_night.jpg)"
    }
    else if(icon == "09d" || icon == "10d"){
        document.getElementById("body").style.backgroundImage = "url(images/rain_day.jpg)"
    }
    else if(icon == "09n" || icon == "10n"){
        document.getElementById("body").style.backgroundImage = "url(images/rain_night.jpg)"
    }
    else if(icon == "11d"){
        document.getElementById("body").style.backgroundImage = "url(images/thunderstorm_day.jpeg)"
    }
    else if(icon == "11n"){
        document.getElementById("body").style.backgroundImage = "url(images/thunderstorm_night.jpg)"
    }
    else if(icon == "13d"){
        document.getElementById("body").style.backgroundImage = "url(images/snow_day.jpg)"
    }
    else if(icon == "13n"){
        document.getElementById("body").style.backgroundImage = "url(images/snow_night.jpg)"
    }
    else if(icon == "50d"){
        document.getElementById("body").style.backgroundImage = "url(images/mist_day.jpeg)"
    }
    else if(icon == "50n"){
        document.getElementById("body").style.backgroundImage = "url(images/mist_night.jpg)"
    }
}