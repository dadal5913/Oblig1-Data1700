document.addEventListener("DOMContentLoaded", function () {
    // Henter referanser til HTML-elementer
    const form = document.getElementById("ticketForm");
    const deleteAllButton = document.getElementById("deleteAll");
    const ticketList = document.getElementById("ticketList");

    // Array for å lagre billetter
    const tickets = [];

    // Hendelseslytter for å sende inn skjemaet
    form.addEventListener("submit", function (event) {
        // Forhindrer standard oppførsel av skjemaet (standard er at den refresher siden)
        event.preventDefault();

        // Henter verdier fra skjemaet
        const movie = document.getElementById("movie").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const quantity = parseInt(document.getElementById("quantity").value);

        // Forsikrer at alle inputene er fylt ut
        if (!movie || !firstName || !lastName || !email || !phone || !quantity) {
            alert("Vennligst fyll ut alle feltene.");
            return;
        }

        // Legger til billettinformasjon i arrayet
        const ticket = {
            details: {
                movie: movie,
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
            },
            quantity: quantity,
        };

        tickets.push(ticket);
        renderTickets();
        form.reset();
    });

    // Hendelseslytter for å slette alle billetter
    deleteAllButton.addEventListener("click", function () {
        tickets.length = 0;
        renderTickets();
    });

    // Funksjon for å vise billetter
    function renderTickets() {
        let table =
            "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" + "</tr>";
        tickets.forEach(function (ticket, index) {
            table += "<tr>";
            table +=
                "<td>" +
                ticket.details.movie +
                "</td><td>" +
                ticket.quantity +
                "</td><td>" +
                ticket.details.firstName +
                "</td><td>" +
                ticket.details.lastName +
                "</td><td>" +
                ticket.details.phone +
                "</td><td>" +
                ticket.details.email +
                "</td>";
            table += "</tr>";
        });
        table += "</table>";
        ticketList.innerHTML = table;
    }
});
