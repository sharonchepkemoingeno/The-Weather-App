const apiKey="4df0afdd31fd61de717bc6e339856f0e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")


async function checkWeather(city){
  const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }else{
    var data=await response.json();
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML= data.main.temp +"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

  if (data.weather[0].main=="clouds"){
    weatherIcon.src="https://cdn.icon-icons.com/icons2/2505/PNG/512/cloudy_weather_icon_150660.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="https://vectorportal.com/storage/rainy3_7188.jpg";
  }
  else if(data.weather[0].main=="clear"){
    weatherIcon.src="https://cdn-icons-png.flaticon.com/512/3222/3222800.png";
  }
  else if(data.weather[0].main=="mist"){
    weatherIcon.src="https://cdn.iconscout.com/icon/premium/png-512-thumb/mist-weather-5327967-4443206.png?f=avif&w=256";
  }
  else if (data.weather[0].main=="drizzle"){
    weatherIcon.src="https://as1.ftcdn.net/v2/jpg/01/09/97/46/1000_F_109974696_Uglhkmlzngwbor7gvs0RIf0pFZiwxTzI.jpg";

  }
  document.querySelector('.weather').style.display="block";
    document.querySelector('.error').style.display="none";
  
    
}
    
  }
  
searchBtn.addEventListener("click", () => { 
  checkWeather(searchBox.value);
})
