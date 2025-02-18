function showDates() {
    const nameInput = document.getElementById('nameInput').value.toLowerCase();
    const dateDisplay = document.getElementById('dateDisplay');
    let dates = "";

    if (nameInput === "simon") {
        dates = "15.02: Thema Gott liebt alle Menschen, 16.02: Thema Gott liebt sich";
    } else if (nameInput === "angy") {
        dates = "18.02, 19.02";
    } else {
        dates = "Keine Daten verfügbar";
    }

    dateDisplay.textContent = dates;
}
