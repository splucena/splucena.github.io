window.onload = function () {
    
    let date_today = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dececember"];
    let days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    document.getElementById('footer-year').innerHTML = date_today.getFullYear();
    document.getElementById('footer-date').innerHTML = days_of_the_week[date_today.getDay()] +', '+ date_today.getDate() + ' ' + months[date_today.getMonth()] + ' ' + date_today.getFullYear()

    let is_friday = 5;
    let friday_banner = document.getElementById('friday-banner');
    if (is_friday == 5) {
        friday_banner.style.display = "block";
    }
}

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}