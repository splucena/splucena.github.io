window.onload = function () {
    var current_month, current_day, date_last_modified_value,
        current_hour, current_minutes, current_seconds,
        date_last_modified, current_year;

    date_last_modified = new Date(document.lastModified);
    current_year = date_last_modified.getFullYear();
    current_month = date_last_modified.getMonth() + 1;
    current_day = date_last_modified.getDate();
    current_hour = date_last_modified.getHours();
    current_minutes = date_last_modified.getMinutes();
    current_seconds = date_last_modified.getSeconds();
    date_last_modified_value = current_month + '/' + current_day + '/' + current_year +
        ' ' + current_hour + ':' + current_minutes + ':' + current_seconds;

    document.getElementById('footer-year').innerHTML = current_year;
    //document.getElementById('footer-dt').innerHTML = date_last_modified_value;
}