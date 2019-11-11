//const request_url = "https://byui-cit230.github.io/weather/data/towndata.json";
const request_url = "https://splucena.github.io/lesson9/weather/towndata.json";

offline_data = {
    towns: [{
            name: "Fish Haven",
            photo: "fishhaven.jpg",
            motto: "This is Fish Heaven.",
            yearFounded: 1864,
            currentPopulation: 501,
            averageRainfall: 14.2,
            events: [
                "April 1: How Big Was That Fish Day",
                "May 15-30: Rush the Creek Days",
                "July 24: Bear Lake Blunder Run",
                "December 12: Light the Tree"
            ]
        },
        {
            name: "Preston",
            photo: "preston.jpg",
            motto: "Home of Napoleon Dynamite.",
            yearFounded: 1866,
            currentPopulation: 5204,
            averageRainfall: 16.65,
            events: [
                "March 29: Work Creek Revival",
                "July 8-12: Napoleon Dynamite Festival",
                "November 2-4: Freedom Days"
            ]
        },
        {
            name: "Soda Springs",
            photo: "sodasprings.jpg",
            motto: "Historic Oregon Trail Oasis. The Soda is on Us.",
            yearFounded: 1858,
            currentPopulation: 2985,
            averageRainfall: 15.75,
            events: [
                "February 29: Geyser Song Day",
                "May 1-6: Days of May Celebration",
                "October 15-16: Octoberfest"
            ]
        }
    ]
};

function create_cards(json_object) {
    let accepted_towns = ["Preston", "Soda Springs", "Fish Haven"];
    let towns = json_object["towns"].filter(town => {
        return accepted_towns.includes(town.name);
    });

    if (!towns.includes("Preston")) {
        towns.splice(1, 0, offline_data['towns'][1]);
    }

    console.log(towns);

    for (let i = 0; i < towns.length; i++) {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");

        let town_name;
        if (towns[i].hasOwnProperty("name")) {
            town_name = towns[i].name;
            h2.textContent = town_name;
        } else {
            town_name = offline_data['towns'][i].name;
            h2.textContent = town_name;
        }
        card.appendChild(h2);

        let motto = document.createElement("p");
        if (towns[i].hasOwnProperty("motto")) {
            motto.textContent = towns[i].motto;
            motto.setAttribute("class", "motto");
        } else {
            motto.textContent = offline_data['towns'][i].motto;
            motto.setAttribute("class", "motto");
        }
        card.appendChild(motto);

        let population = document.createElement("p");
        if (towns[i].hasOwnProperty("currentPopulation")) {
            population.textContent = "Population: " + towns[i].currentPopulation;
        } else {
            population.textContent =
                "Population: " + offline_data['towns'][i].currentPopulation;
        }
        card.appendChild(population);

        let average_rainfall = document.createElement("p");
        if (towns[i].hasOwnProperty("averageRainfall")) {
            average_rainfall.textContent =
                "Annual Rainfall: " + towns[i].averageRainfall;
        } else {
            average_rainfall.textContent =
                "Annual Rainfall: " + offline_data['towns'][i].averageRainfall;
        }
        card.appendChild(average_rainfall);

        let img = document.createElement("img");
        if (towns[i].hasOwnProperty("photo")) {
            img.setAttribute("src", "static/img/home/" + towns[i].photo);
            img.setAttribute("alt", town_name);
        } else {
            img.setAttribute("src", "static/img/home/" + offline_data['towns'][i].photo);
            img.setAttribute("alt", town_name);
        }
        card.appendChild(img);

        document.querySelector("div.cards").appendChild(card);
    }
}

fetch(request_url)
    .then(response => {
        if (!response.ok) {
            return offline_data;
        }

        return response.json();
    })
    .then(json_object => {
        create_cards(json_object);
    })
    .catch(error => console.log(JSON.parse(error)));