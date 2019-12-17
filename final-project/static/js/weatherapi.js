let = city_ids = [5879400, 1701668, 5850027, 2643743]

for (let i = 1; i < city_ids.length + 1; i++) {
    const apiURL =
        "https://api.openweathermap.org/data/2.5/weather?id=" + city_ids[i - 1] + "&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a";

    fetch(apiURL)
        .then(response => response.json())
        .then(jsObject => {
            let data_source = jsObject;
            let currently = data_source.weather[0].main;
            document.getElementById('currently-' + i).textContent = currently;
            let temperature = data_source.main.temp_max;
            document.getElementById('temp-' + i).textContent = temperature;
        });
}