/* Error Site*/
document.addEventListener("DOMContentLoaded", function() {
    // Ελέγχουμε αν υπάρχει σφάλμα 404
    var is404 = window.location.href.includes("error=404");

    // Ελέγχουμε αν το κουμπί έχει οριστεί και εάν έχει συνδέσμους
    var button = document.getElementById("myButton");
    var link = button.getAttribute("href");

    if (is404 || !link || link === "#") {
        // Αν υπάρχει σφάλμα 404 ή το κουμπί δεν έχει συνδέσμους,
        // εμφανίζουμε το επιθυμητό HTML
        var errorHTML = `
            <div style="text-align: center;">
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>TrapLife Leaks | Error/Soon</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1 class="error1">Error/Soon</h1>
                <h6 class="error2">For More Join In <a href="discord.html" class="discordbutton">Discord</a> </h6>
                <a href="index.html" class="home">Back To Home!</a>
                <iframe src="https://discord.com/widget?id=1202596945517088788&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" class="discordlink2"></iframe>
                <h1 class="error4">Welcome To TrapLife Leaks</h1>
                <h5 class="error5">Σας ευχαριστουμε που επισκεφτικατε το Site μας.</h5>
                <h6 class="error6">Copyright 2000-2024</h6>
                <img src="img/Background3.png" alt="error3">
            </body>
            </html>
        `;
        document.body.innerHTML = errorHTML;
    }
});

/* Publish Your Leaks*/

/*Login - Register*/

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const login_btn = document.querySelector("#login-btn"); // Προσθέσαμε το κουμπί σύνδεσης

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

login_btn.addEventListener("click", () => { // Προσθέσαμε ακροατή για το κουμπί σύνδεσης
    // Κώδικας για σύνδεση του χρήστη
    // Παράδειγμα:
    alert("Σύνδεση επιτυχής!");
});
