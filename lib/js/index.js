document.addEventListener("DOMContentLoaded", function () {
    //Now put the Year in the Footer
    var currentYear = new Date().getFullYear();
    document.getElementById('cur-year').innerHTML = currentYear; // outputs the current year (e.g. 2023)
});
