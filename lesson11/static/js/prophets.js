const request_url = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(request_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json_object) {
        console.table(json_object);

        const prophets = json_object['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');

            let prophet_name = prophets[i].name + ' ' + prophets[i].lastname;
            h2.textContent = prophet_name;
            card.appendChild(h2);

            let birthdate = document.createElement('p');
            birthdate.textContent = "Date of Birth: " + prophets[i].birthdate;
            card.appendChild(birthdate);

            let birthplace = document.createElement('p');
            birthplace.textContent = "Place of Birth: " + prophets[i].birthplace;
            card.appendChild(birthplace);

            let img = document.createElement('img');
            img.setAttribute('src', prophets[i].imageurl);
            let order = prophets[i].order;
            img.setAttribute('alt', prophet_name + ' ' + order);
            card.appendChild(img);


            document.querySelector('div.cards').appendChild(card);
        }
    });