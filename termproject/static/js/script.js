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