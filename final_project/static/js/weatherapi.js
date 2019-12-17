let = city_ids = [5879400, 1701668, 5850027, 2643743]


function compute_wind_chill(temperature, wind_speed) {
    const T = temperature;
    const W = wind_speed;
    const WC = 35.74 + (0.6215 * T) - (35.75 * wind_speed ** 0.16) + (0.4275 * T * W ** 0.16)

    return Math.floor(WC)
}

for (let i = 1; i < city_ids.length + 1; i++) {
    const apiURL =
        "https://api.openweathermap.org/data/2.5/weather?id=" + city_ids[i - 1] + "&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a";

    fetch(apiURL)
        .then(response => response.json())
        .then(jsObject => {
            let data_source = jsObject;
            let currently = data_source.weather[0].main;
            //let temple = document.getElementById('temple-' + i);
            //let c = document.createElement("p");
            //c.textContent = currently;
            document.getElementById('currently-' + i).textContent = currently;
            let temperature = data_source.main.temp_max;
            document.getElementById('temp-' + i).textContent = temperature;
            //let t = document.createElement("p");
            //t.textContent = temperature;
            //temple.appendChild(c);
            //temple.appendChild(t);
        });
}