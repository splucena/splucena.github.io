// Temple Data

const apiURL = 'static/js/temple.json';

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        let data_source = jsObject;
        let temples = data_source.temples;
        /*for (let i = 0; i < forecast_data.length; i++) {
      let dt_txts = forecast_data[i].dt_txt.split(" ");

      if (dt_txts[1] == "18:00:00") {
        document.getElementById("forecast_value_" + counter).textContent =
          forecast_data[i].main.temp;
        let weather_icon = forecast_data[i].weather[0].icon;

        let img = document.createElement("img");
        let image_src =
          "https://openweathermap.org/img/wn/" + weather_icon + "@2x.png";
        img.setAttribute("src", image_src);
        let image_alt = forecast_data[i].weather[0].description;
        img.setAttribute("alt", image_alt);

        document.getElementById("forecast_image_" + counter).appendChild(img);
        counter = counter + 1;
      }
    }
        }*/
        let temple_ids = ['alaska', 'manila', 'laie', 'london'];

        for (let i = 0; i < temple_ids.length; i++) {
            let container = document.getElementById(temple_ids[i]);
            let summary = document.createElement('p');
            summary.textContent = temples[i]['summary'];
            container.appendChild(summary);

            // address
            let address = document.createElement('p');
            let address_label = document.createElement('span');
            address_label.textContent = 'Address';
            address_label.style.fontWeight = 'bold';
            container.appendChild(address_label);
            address.textContent = temples[0]['address'];
            container.appendChild(address);

            // phone
            let phone = document.createElement('p');
            let phone_label = document.createElement('span');
            phone_label.textContent = 'Telephone';
            phone_label.style.fontWeight = 'bold';
            container.appendChild(phone_label);
            phone.textContent = temples[0]['telephone'];
            container.appendChild(phone);

            // email
            let email = document.createElement('p');
            let email_label = document.createElement('span');
            email_label.textContent = 'Email';
            email_label.style.fontWeight = 'bold';
            container.appendChild(email_label);
            email.textContent = temples[0]['email'];
            container.appendChild(email);

            // services
            let services = temples[0]['services'];
            let services_label = document.createElement('span');
            services_label.textContent = 'Services';
            services_label.style.fontWeight = 'bold';
            container.appendChild(services_label);
            let service_ul = document.createElement('ul');
            container.appendChild(service_ul);
            for (let s = 0; s < services.length; s++) {
                let service_li = document.createElement('li');
                service_li.textContent = services[s];
                service_ul.appendChild(service_li);
            }

            // history
            let history = document.createElement('p');
            let history_label = document.createElement('span');
            history_label.textContent = 'History';
            history_label.style.fontWeight = 'bold';
            container.appendChild(history_label);
            history.textContent = temples[0]['history'];
            container.appendChild(history);

            // ordinance_schedule
            let ordinance_schedule = document.createElement('p');
            let ordinance_schedule_label = document.createElement('span');
            ordinance_schedule_label.textContent = 'Ordinance Schedule';
            ordinance_schedule_label.style.fontWeight = 'bold';
            container.appendChild(ordinance_schedule_label);
            ordinance_schedule.textContent = temples[0]['ordinance_schedule'];
            container.appendChild(ordinance_schedule);

            // session_schedule
            let session_schedule = document.createElement('p');
            let session_schedule_label = document.createElement('span');
            session_schedule_label.textContent = 'Session Schedule';
            session_schedule_label.style.fontWeight = 'bold';
            container.appendChild(session_schedule_label);
            session_schedule.textContent = temples[0]['session_schedule'];
            container.appendChild(session_schedule);

            // temple closure schedule
            let tcs_data = temples[0]['temple_closure_schedule'];
            let tcs_data_label = document.createElement('span');
            tcs_data_label.textContent = 'Temple Closure Schedule';
            tcs_data_label.style.fontWeight = 'bold';
            container.appendChild(tcs_data_label);

            let tcs1_label = document.createElement('p');
            tcs1_label.textContent = '2019';
            tcs1_label.style.fontWeight = 'bold';
            container.appendChild(tcs1_label);
            let tcs1_ul = document.createElement('ul');
            container.appendChild(tcs1_ul);
            for (let tcs1 = 0; tcs1 < tcs_data['2019'].length; tcs1++) {
                let tcs1_li = document.createElement('li');
                tcs1_li.textContent = tcs_data['2019'][tcs1];
                tcs1_ul.appendChild(tcs1_li);
            }

            let tcs2_label = document.createElement('p');
            tcs2_label.textContent = '2020';
            tcs2_label.style.fontWeight = 'bold';
            container.appendChild(tcs2_label);
            let tcs2_ul = document.createElement('ul');
            container.appendChild(tcs2_ul);
            for (let tcs2 = 0; tcs2 < tcs_data['2020'].length; tcs2++) {
                let tcs2_li = document.createElement('li');
                tcs2_li.textContent = tcs_data['2020'][tcs2];
                tcs2_ul.appendChild(tcs2_li);
            }
        }
    });