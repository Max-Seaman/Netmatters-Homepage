let cookiesValue = localStorage.getItem("cookies");

// Show popup if no stored value yet
if (cookiesValue === null) {
    $(".cookie-wrapper").css("display", "flex");
}

// Accept button
function accept() {
    localStorage.setItem("cookies", "accepted");
    $(".cookie-wrapper").css("display", "none");
}

// Decline button
function decline() {
    localStorage.setItem("cookies", "declined");
    $(".cookie-wrapper").css("display", "none");
}