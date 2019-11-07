const request_url =
    "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(request_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json_object) {
        console.table(json_object);
        console.log(Object.keys(json_object['towns'][0]));

        //["name", "photo", "motto", "yearFounded", "currentPopulation", "averageRainfall", "events"]

        const towns = json_object["towns"];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");

            let town_name = towns[i].name;
            h2.textContent = town_name;
            card.appendChild(h2);

            let motto = document.createElement("p");
            motto.textContent = towns[i].motto;
            motto.setAttribute('class', 'motto');
            card.appendChild(motto);

            let year_founded = document.createElement("p");
            year_founded.textContent = "Year Founded: " + towns[i].yearFounded;
            card.appendChild(year_founded);

            let population = document.createElement("p");
            population.textContent = "Population: " + towns[i].currentPopulation;
            card.appendChild(population);

            let average_rainfall = document.createElement("p");
            average_rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            card.appendChild(average_rainfall);

            console.log(towns[i].photo);

            let img = document.createElement("img");
            img.setAttribute("src", "static/img/home/" + towns[i].photo);
            //let order = towns[i].order;
            img.setAttribute("alt", town_name);
            card.appendChild(img);

            document.querySelector("div.cards").appendChild(card);
        }
    });