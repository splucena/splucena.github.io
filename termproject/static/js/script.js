function toggleMenu() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
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