let url = window.location.href;

let current_url = url.split('/').slice(-1)[0];
let city_id;

if (current_url == 'preston-11.html') {
  city_id = 5604473;
} else if (current_url == 'soda-springs-11.html') {
  city_id = 5607916;
} else {
  city_id = 5585010;
}

const fish_haven_url = "https://api.openweathermap.org/data/2.5/weather?zip=83287,us&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a"

fetch(fish_haven_url)
.then(r => r.json)
.then(jobj => {
  console.log(jobj);
})

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=" + city_id + "&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a";

function compute_wind_chill(temperature, wind_speed) {
  const T = temperature;
  const W = wind_speed;
  const WC = 35.74 + (0.6215 * T) - (35.75 * wind_speed ** 0.16) + (0.4275 * T * W ** 0.16)

  return Math.floor(WC)
}

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    let data_source = jsObject;
    let currently = data_source.weather[0].main;
    document.getElementById("currently").textContent = currently;
    let temperature = data_source.main.temp_max;
    document.getElementById("temperature").textContent = temperature;
    let humidity = data_source.main.humidity;
    document.getElementById("humidity").textContent = humidity;
    let wind_speed = data_source.wind.speed;
    document.getElementById("wind_speed").textContent = wind_speed;

    let temperature_value, wind_speed_value, wind_chill_value, wind_chill_computed;
    temperature_value = temperature;
    wind_speed_value = wind_speed;
    wind_chill_value = document.getElementById('wind_chill');
    wind_chill_computed = compute_wind_chill(temperature, wind_speed);

    if (temperature_value <= 50 && wind_speed_value > 3) {
      wind_chill_value.innerHTML = wind_chill_computed;
      document.getElementById('wind_chill_attribute').style.visibility = 'visible';
    } else {
      wind_chill_value.innerHTML = 'N/A';
      document.getElementById('wind_chill_attribute').style.visibility = 'hidden';
    }
  });


const apiURLForecast =
  "https://api.openweathermap.org/data/2.5/forecast?id=" + city_id + "&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a";
fetch(apiURLForecast)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    let forecast_data = jsObject.list;
    let dt_txts_value = [];
    let counter = 1;
    for (let i = 0; i < forecast_data.length; i++) {
      let dt_txts = forecast_data[i].dt_txt.split(" ");

      if (dt_txts[1] == "18:00:00") {
        document.getElementById("forecast_value_" + counter).textContent =
          forecast_data[i].main.temp;
        let weather_icon = forecast_data[i].weather[0].icon;

        let img = document.createElement("img");
        let image_src =
          "http://openweathermap.org/img/wn/" + weather_icon + "@2x.png";
        img.setAttribute("src", image_src);
        let image_alt = forecast_data[i].weather[0].description;
        img.setAttribute("alt", image_alt);

        document.getElementById("forecast_image_" + counter).appendChild(img);
        counter = counter + 1;
      }
    }
  });