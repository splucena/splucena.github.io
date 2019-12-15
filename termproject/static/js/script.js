let date_today = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dececember"];
let days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let is_friday = date_today.getDay();

window.onload = function () {
    document.getElementById('footer-year').innerHTML = date_today.getFullYear();
}

function toggleMenu() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}

function displayPopup() {
    var w = 400;
    var h = 400;
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var systemZoom = width / window.screen.availWidth;
    var left = (width - w) / 2 / systemZoom + dualScreenLeft
    var top = (height - h) / 2 / systemZoom + dualScreenTop
    window.open('thanks.html', '_blank', 'scrollbars=yes, width=' + w / systemZoom + ', height=' + h / systemZoom + ', top=' + top + ', left=' + left);
}

/*var frm_reservation = document.getElementById('frm-reservation');
frm_reservation.onsubmit = function () {
    displayPopup();
}

var frm_contact_us = document.getElementById('frm-contact-us');
frm_contact_us.onsubmit = function () {
    displayPopup();
}*/

function validate_form(formID) {
    let full_name, phone_number, zip;
    full_name = document.getElementById('fullname');
    phone_number = document.getElementById('phone_number');
    zip = document.getElementById('zip');

    if (full_name.checkValidity() && phone_number.checkValidity() && zip.checkValidity()) {
        /*let win = window.open('thanks.html', '_blank');
        win.focus();*/
        //console.log(1);
        //return displayPopup(btnID);
        var frm = document.getElementById(formID);
        frm.onsubmit = function () {
            displayPopup();
        }
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    slides[slideIndex - 1].style.zIndex = "1";
}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);