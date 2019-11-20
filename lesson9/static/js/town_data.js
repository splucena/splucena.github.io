const request_url = "https://byui-cit230.github.io/weather/data/towndata.json";
//const request_url = "https://splucena.github.io/lesson9/weather/towndata.json";
//const request_url = "http://127.0.0.1:5500/lesson9/weather/towndata.json";

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

    let town_names = [];
    towns.forEach(element => {
        town_names.push(element.name);
    });

    if (!town_names.includes("Preston")) {
        towns.splice(1, 0, offline_data['towns'][1]);
    }

    if (!town_names.includes("Fish Haven")) {
        towns.splice(0, 0, offline_data['towns'][0]);
    }

    if (!town_names.includes("Soda Springs")) {
        towns.splice(2, 0, offline_data['towns'][2]);
    }

    for (let i = 0; i < towns.length; i++) {
        let card = document.createElement("section");
        let desc_container = document.createElement('div')
        let img_container = document.createElement('div');
        let h2 = document.createElement("h2");

        card.setAttribute('id', 's-' + i);

        desc_container.setAttribute('class', 'desc_container');
        img_container.setAttribute('class', 'img_container');

        let town_name;
        if (towns[i].hasOwnProperty("name")) {
            town_name = towns[i].name;
            h2.textContent = town_name;
        } else {
            town_name = offline_data['towns'][i].name;
            h2.textContent = town_name;
        }
        desc_container.appendChild(h2);

        let motto = document.createElement("p");
        if (towns[i].hasOwnProperty("motto")) {
            motto.textContent = towns[i].motto;
        } else {
            motto.textContent = offline_data['towns'][i].motto;
        }
        motto.setAttribute("class", "motto");
        desc_container.appendChild(motto);

        let year_founded = document.createElement("p");
        if (towns[i].hasOwnProperty("yearFounded")) {
            year_founded.textContent = "Year Founded: " + towns[i].yearFounded;
        } else {
            year_founded.textContent = "Year Founded: " + offline_data['towns'][i].yearFounded;
        }
        desc_container.appendChild(year_founded);

        let population = document.createElement("p");
        if (towns[i].hasOwnProperty("currentPopulation")) {
            population.textContent = "Population: " + towns[i].currentPopulation;
        } else {
            population.textContent =
                "Population: " + offline_data['towns'][i].currentPopulation;
        }
        desc_container.appendChild(population);

        let average_rainfall = document.createElement("p");
        if (towns[i].hasOwnProperty("averageRainfall")) {
            average_rainfall.textContent =
                "Annual Rainfall: " + towns[i].averageRainfall;
        } else {
            average_rainfall.textContent =
                "Annual Rainfall: " + offline_data['towns'][i].averageRainfall;
        }
        desc_container.appendChild(average_rainfall);

        let img = document.createElement("img");
        if (towns[i].hasOwnProperty("photo")) {
            img.setAttribute("src", "static/img/home/" + towns[i].photo);
        } else {
            img.setAttribute("src", "static/img/home/" + offline_data['towns'][i].photo);
        }
        img.setAttribute("alt", town_name);
        img_container.appendChild(img);

        card.appendChild(desc_container);
        card.appendChild(img_container);
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