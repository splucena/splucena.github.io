const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a";
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
  });

const apiURLForecast =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a";
fetch(apiURLForecast)
  .then(response => response.json())
  .then(jsObject => {
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
