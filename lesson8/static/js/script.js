let date_today = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dececember"];
let days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let is_friday = date_today.getDay();

window.onload = function () {
    document.getElementById('footer-year').innerHTML = date_today.getFullYear();
    document.getElementById('footer-date').innerHTML = days_of_the_week[date_today.getDay()] + ', ' + date_today.getDate() + ' ' + months[date_today.getMonth()] + ' ' + date_today.getFullYear()

    let friday_banner = document.getElementById('friday-banner');

    if (is_friday == 5) {
        friday_banner.style.display = "block";
        on_resize()
    }
}

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function on_resize() {
    let header_element = document.getElementById('header-element');
    let int_viewport_width = window.innerWidth;

    if (is_friday == 5) {
        if (int_viewport_width < 630) {
            header_element.style.paddingTop = "70px";
        } else if (int_viewport_width >= 630 && int_viewport_width <= 700) {
            header_element.style.paddingTop = "50px";
        } else {
            header_element.style.paddingTop = "30px";
        }
    }
}

function adjust_severity_rating(rating) {
    document.getElementById('storm_severity_rating').innerHTML = rating;
}

function validate_form() {
    let full_name, phone_number, zip;
    full_name = document.getElementById('fullname');
    phone_number = document.getElementById('phone_number');
    zip = document.getElementById('zip');


    if (full_name.checkValidity() && phone_number.checkValidity() && zip.checkValidity()) {
        let win = window.open('thanks.html', '_blank');
        win.focus();
    }
}