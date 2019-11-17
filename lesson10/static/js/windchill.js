// The formula to calculate the wind chill factor is 
// LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16} f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 , 
// where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
// and s is the wind speed in miles per hour.
// Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometres per hour (3.0 mph)."

function compute_wind_chill(temperature, wind_speed) {
    const T = temperature;
    const W = wind_speed;
    const WC = 35.74 + (0.6215 * T) - (35.75 * wind_speed ** 0.16) + (0.4275 * T * W ** 0.16)

    return Math.floor(WC)
}

let temperature, wind_speed, wind_chill, wind_chill_value;
temperature = parseFloat(document.getElementById('temperature').innerHTML);
wind_speed = parseFloat(document.getElementById('wind_speed').innerHTML);
wind_chill = document.getElementById('wind_chill');
wind_chill_value = compute_wind_chill(temperature, wind_speed);

if (temperature <= 50 && wind_speed > 3) {
    wind_chill.innerHTML = wind_chill_value;
} else {
    wind_chill.innerHTML = 'N/A';
}