/* ============================================================
   APEX F1
   Formula 1 Historical Archive — 2000 to 2025

   Built & managed by Samyam Ojha.
   ============================================================ */

/* ============================================================
   APPLICATION
   ============================================================ */

const app = document.getElementById("app");

/* ============================================================
   HELPER
   ============================================================ */

function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* ============================================================
   NAVIGATION
   ============================================================ */

function setActive(id) {
    document.querySelectorAll(".nav-btn")
        .forEach(button => button.classList.remove("active"));

    const selected = document.getElementById(`nav-${id}`);

    if (selected) {
        selected.classList.add("active");
    }
}

function showHome() {
    history.pushState({ page: "home" }, "", "#home");
    setActive("home");
    app.innerHTML = homeTemplate();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSeasons() {
    history.pushState({ page: "seasons" }, "", "#seasons");
    setActive("seasons");
    app.innerHTML = seasonsTemplate();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDrivers() {
    history.pushState({ page: "drivers" }, "", "#drivers");
    setActive("drivers");
    app.innerHTML = driversTemplate();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showRecords() {
    history.pushState({ page: "records" }, "", "#records");
    setActive("records");
    app.innerHTML = recordsTemplate();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showRivalries() {
    history.pushState({ page: "rivalries" }, "", "#rivalries");
    setActive("rivalries");
    app.innerHTML = rivalriesTemplate();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMoments() {
    history.pushState({ page: "moments" }, "", "#moments");
    setActive("moments");
    app.innerHTML = momentsTemplate();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDocumentation() {
    history.pushState({ page: "documentation" }, "", "#documentation");
    setActive("documentation");
    app.innerHTML = documentationTemplate();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   FULL LOCAL SEASON DATASET (2000–2025)
   ============================================================ */

const seasonChampions = {
    2000: ["Michael Schumacher", "Ferrari"],
    2001: ["Michael Schumacher", "Ferrari"],
    2002: ["Michael Schumacher", "Ferrari"],
    2003: ["Michael Schumacher", "Ferrari"],
    2004: ["Michael Schumacher", "Ferrari"],
    2005: ["Fernando Alonso", "Renault"],
    2006: ["Fernando Alonso", "Renault"],
    2007: ["Kimi Räikkönen", "Ferrari"],
    2008: ["Lewis Hamilton", "Ferrari"],
    2009: ["Jenson Button", "Brawn GP"],
    2010: ["Sebastian Vettel", "Red Bull Racing"],
    2011: ["Sebastian Vettel", "Red Bull Racing"],
    2012: ["Sebastian Vettel", "Red Bull Racing"],
    2013: ["Sebastian Vettel", "Red Bull Racing"],
    2014: ["Lewis Hamilton", "Mercedes"],
    2015: ["Lewis Hamilton", "Mercedes"],
    2016: ["Nico Rosberg", "Mercedes"],
    2017: ["Lewis Hamilton", "Mercedes"],
    2018: ["Lewis Hamilton", "Mercedes"],
    2019: ["Lewis Hamilton", "Mercedes"],
    2020: ["Lewis Hamilton", "Mercedes"],
    2021: ["Max Verstappen", "Mercedes"],
    2022: ["Max Verstappen", "Red Bull Racing"],
    2023: ["Max Verstappen", "Red Bull Racing"],
    2024: ["Max Verstappen", "McLaren"],
    2025: ["Lando Norris", "McLaren"]
};

const fullSeasonData = {
  "2000": [
    { round: 1, gp: "Australia", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Ralf Schumacher" },
    { round: 2, gp: "Brazil", p1: "Michael Schumacher", p2: "Giancarlo Fisichella", p3: "Heinz-Harald Frentzen" },
    { round: 3, gp: "San Marino", p1: "Michael Schumacher", p2: "Mika Häkkinen", p3: "David Coulthard" },
    { round: 4, gp: "Great Britain", p1: "David Coulthard", p2: "Mika Häkkinen", p3: "Michael Schumacher" },
    { round: 5, gp: "Spain", p1: "Mika Häkkinen", p2: "David Coulthard", p3: "Rubens Barrichello" },
    { round: 6, gp: "Europe", p1: "Michael Schumacher", p2: "Mika Häkkinen", p3: "David Coulthard" },
    { round: 7, gp: "Monaco", p1: "David Coulthard", p2: "Rubens Barrichello", p3: "Giancarlo Fisichella" },
    { round: 8, gp: "Canada", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Giancarlo Fisichella" },
    { round: 9, gp: "France", p1: "David Coulthard", p2: "Mika Häkkinen", p3: "Rubens Barrichello" },
    { round: 10, gp: "Austria", p1: "Mika Häkkinen", p2: "David Coulthard", p3: "Rubens Barrichello" },
    { round: 11, gp: "Germany", p1: "Rubens Barrichello", p2: "Mika Häkkinen", p3: "David Coulthard" },
    { round: 12, gp: "Hungary", p1: "Mika Häkkinen", p2: "Michael Schumacher", p3: "David Coulthard" },
    { round: 13, gp: "Belgium", p1: "Mika Häkkinen", p2: "Michael Schumacher", p3: "Ralf Schumacher" },
    { round: 14, gp: "Italy", p1: "Michael Schumacher", p2: "Mika Häkkinen", p3: "Ralf Schumacher" },
    { round: 15, gp: "USA", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Heinz-Harald Frentzen" },
    { round: 16, gp: "Japan", p1: "Michael Schumacher", p2: "Mika Häkkinen", p3: "David Coulthard" },
    { round: 17, gp: "Malaysia", p1: "Michael Schumacher", p2: "David Coulthard", p3: "Rubens Barrichello" }
  ],
  "2001": [
    { round: 1, gp: "Australia", p1: "Michael Schumacher", p2: "David Coulthard", p3: "Rubens Barrichello" },
    { round: 2, gp: "Malaysia", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "David Coulthard" },
    { round: 3, gp: "Brazil", p1: "David Coulthard", p2: "Michael Schumacher", p3: "Nick Heidfeld" },
    { round: 4, gp: "San Marino", p1: "Ralf Schumacher", p2: "David Coulthard", p3: "Rubens Barrichello" },
    { round: 5, gp: "Spain", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "Jacques Villeneuve" },
    { round: 6, gp: "Austria", p1: "David Coulthard", p2: "Michael Schumacher", p3: "Rubens Barrichello" },
    { round: 7, gp: "Monaco", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Eddie Irvine" },
    { round: 8, gp: "Canada", p1: "Ralf Schumacher", p2: "Michael Schumacher", p3: "Eddie Irvine" },
    { round: 9, gp: "Europe", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "David Coulthard" },
    { round: 10, gp: "France", p1: "Michael Schumacher", p2: "Ralf Schumacher", p3: "Rubens Barrichello" },
    { round: 11, gp: "Great Britain", p1: "Mika Häkkinen", p2: "Michael Schumacher", p3: "Rubens Barrichello" },
    { round: 12, gp: "Germany", p1: "Ralf Schumacher", p2: "Rubens Barrichello", p3: "Jacques Villeneuve" },
    { round: 13, gp: "Hungary", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "David Coulthard" },
    { round: 14, gp: "Belgium", p1: "Michael Schumacher", p2: "David Coulthard", p3: "Giancarlo Fisichella" },
    { round: 15, gp: "Italy", p1: "Juan Pablo Montoya", p2: "Rubens Barrichello", p3: "Ralf Schumacher" },
    { round: 16, gp: "USA", p1: "Mika Häkkinen", p2: "Michael Schumacher", p3: "David Coulthard" },
    { round: 17, gp: "Japan", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "David Coulthard" }
  ],
  "2002": [
    { round: 1, gp: "Australia", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "Kimi Räikkönen" },
    { round: 2, gp: "Malaysia", p1: "Ralf Schumacher", p2: "Juan Pablo Montoya", p3: "Michael Schumacher" },
    { round: 3, gp: "Brazil", p1: "Michael Schumacher", p2: "Ralf Schumacher", p3: "David Coulthard" },
    { round: 4, gp: "San Marino", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Ralf Schumacher" },
    { round: 5, gp: "Spain", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "David Coulthard" },
    { round: 6, gp: "Austria", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Juan Pablo Montoya" },
    { round: 7, gp: "Monaco", p1: "David Coulthard", p2: "Michael Schumacher", p3: "Ralf Schumacher" },
    { round: 8, gp: "Canada", p1: "Michael Schumacher", p2: "David Coulthard", p3: "Rubens Barrichello" },
    { round: 9, gp: "Europe", p1: "Rubens Barrichello", p2: "Michael Schumacher", p3: "Kimi Räikkönen" },
    { round: 10, gp: "France", p1: "Michael Schumacher", p2: "Kimi Räikkönen", p3: "David Coulthard" },
    { round: 11, gp: "Great Britain", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Juan Pablo Montoya" },
    { round: 12, gp: "Germany", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "Ralf Schumacher" },
    { round: 13, gp: "Hungary", p1: "Rubens Barrichello", p2: "Michael Schumacher", p3: "Ralf Schumacher" },
    { round: 14, gp: "Belgium", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Kimi Räikkönen" },
    { round: 15, gp: "Italy", p1: "Rubens Barrichello", p2: "Michael Schumacher", p3: "Eddie Irvine" },
    { round: 16, gp: "USA", p1: "Rubens Barrichello", p2: "Michael Schumacher", p3: "Juan Pablo Montoya" },
    { round: 17, gp: "Japan", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Kimi Räikkönen" }
  ],
  "2003": [
    { round: 1, gp: "Australia", p1: "David Coulthard", p2: "Juan Pablo Montoya", p3: "Kimi Räikkönen" },
    { round: 2, gp: "Malaysia", p1: "Kimi Räikkönen", p2: "Rubens Barrichello", p3: "Fernando Alonso" },
    { round: 3, gp: "Brazil", p1: "Giancarlo Fisichella", p2: "Kimi Räikkönen", p3: "Fernando Alonso" },
    { round: 4, gp: "San Marino", p1: "Michael Schumacher", p2: "Kimi Räikkönen", p3: "Rubens Barrichello" },
    { round: 5, gp: "Spain", p1: "Michael Schumacher", p2: "Fernando Alonso", p3: "Rubens Barrichello" },
    { round: 6, gp: "Austria", p1: "Michael Schumacher", p2: "Kimi Räikkönen", p3: "Rubens Barrichello" },
    { round: 7, gp: "Monaco", p1: "Juan Pablo Montoya", p2: "Kimi Räikkönen", p3: "Michael Schumacher" },
    { round: 8, gp: "Canada", p1: "Michael Schumacher", p2: "Ralf Schumacher", p3: "Juan Pablo Montoya" },
    { round: 9, gp: "Europe", p1: "Ralf Schumacher", p2: "Juan Pablo Montoya", p3: "Rubens Barrichello" },
    { round: 10, gp: "France", p1: "Ralf Schumacher", p2: "Juan Pablo Montoya", p3: "Michael Schumacher" },
    { round: 11, gp: "Great Britain", p1: "Rubens Barrichello", p2: "Juan Pablo Montoya", p3: "Kimi Räikkönen" },
    { round: 12, gp: "Germany", p1: "Juan Pablo Montoya", p2: "David Coulthard", p3: "Jarno Trulli" },
    { round: 13, gp: "Hungary", p1: "Fernando Alonso", p2: "Kimi Räikkönen", p3: "Juan Pablo Montoya" },
    { round: 14, gp: "Italy", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "Rubens Barrichello" },
    { round: 15, gp: "USA", p1: "Michael Schumacher", p2: "Kimi Räikkönen", p3: "Heinz-Harald Frentzen" },
    { round: 16, gp: "Japan", p1: "Rubens Barrichello", p2: "Kimi Räikkönen", p3: "David Coulthard" }
  ],
  "2004": [
    { round: 1, gp: "Australia", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Fernando Alonso" },
    { round: 2, gp: "Malaysia", p1: "Michael Schumacher", p2: "Juan Pablo Montoya", p3: "Jenson Button" },
    { round: 3, gp: "Bahrain", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Jenson Button" },
    { round: 4, gp: "San Marino", p1: "Michael Schumacher", p2: "Jenson Button", p3: "Juan Pablo Montoya" },
    { round: 5, gp: "Spain", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Jarno Trulli" },
    { round: 6, gp: "Monaco", p1: "Jarno Trulli", p2: "Jenson Button", p3: "Rubens Barrichello" },
    { round: 7, gp: "Europe", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Jenson Button" },
    { round: 8, gp: "Canada", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Giancarlo Fisichella" },
    { round: 9, gp: "USA", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Takuma Sato" },
    { round: 10, gp: "France", p1: "Michael Schumacher", p2: "Fernando Alonso", p3: "Rubens Barrichello" },
    { round: 11, gp: "Great Britain", p1: "Michael Schumacher", p2: "Kimi Räikkönen", p3: "Rubens Barrichello" },
    { round: 12, gp: "Germany", p1: "Michael Schumacher", p2: "Jenson Button", p3: "Fernando Alonso" },
    { round: 13, gp: "Hungary", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Fernando Alonso" },
    { round: 14, gp: "Belgium", p1: "Kimi Räikkönen", p2: "Michael Schumacher", p3: "Rubens Barrichello" },
    { round: 15, gp: "Italy", p1: "Rubens Barrichello", p2: "Michael Schumacher", p3: "Jenson Button" },
    { round: 16, gp: "China", p1: "Rubens Barrichello", p2: "Jenson Button", p3: "Kimi Räikkönen" },
    { round: 17, gp: "Japan", p1: "Michael Schumacher", p2: "Ralf Schumacher", p3: "Jenson Button" },
    { round: 18, gp: "Brazil", p1: "Juan Pablo Montoya", p2: "Kimi Räikkönen", p3: "Rubens Barrichello" }
  ],
  "2005": [
    { round: 1, gp: "Australia", p1: "Giancarlo Fisichella", p2: "Rubens Barrichello", p3: "Fernando Alonso" },
    { round: 2, gp: "Malaysia", p1: "Fernando Alonso", p2: "Jarno Trulli", p3: "Nick Heidfeld" },
    { round: 3, gp: "Bahrain", p1: "Fernando Alonso", p2: "Jarno Trulli", p3: "Kimi Räikkönen" },
    { round: 4, gp: "San Marino", p1: "Fernando Alonso", p2: "Michael Schumacher", p3: "Alexander Wurz" },
    { round: 5, gp: "Spain", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Jarno Trulli" },
    { round: 6, gp: "Monaco", p1: "Kimi Räikkönen", p2: "Nick Heidfeld", p3: "Mark Webber" },
    { round: 7, gp: "Europe", p1: "Fernando Alonso", p2: "Nick Heidfeld", p3: "Rubens Barrichello" },
    { round: 8, gp: "Canada", p1: "Kimi Räikkönen", p2: "Michael Schumacher", p3: "Rubens Barrichello" },
    { round: 9, gp: "USA", p1: "Michael Schumacher", p2: "Rubens Barrichello", p3: "Tiago Monteiro" },
    { round: 10, gp: "France", p1: "Fernando Alonso", p2: "Kimi Räikkönen", p3: "Michael Schumacher" },
    { round: 11, gp: "Great Britain", p1: "Juan Pablo Montoya", p2: "Fernando Alonso", p3: "Kimi Räikkönen" },
    { round: 12, gp: "Germany", p1: "Fernando Alonso", p2: "Juan Pablo Montoya", p3: "Jenson Button" },
    { round: 13, gp: "Hungary", p1: "Kimi Räikkönen", p2: "Michael Schumacher", p3: "Ralf Schumacher" },
    { round: 14, gp: "Turkey", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Juan Pablo Montoya" },
    { round: 15, gp: "Italy", p1: "Juan Pablo Montoya", p2: "Fernando Alonso", p3: "Giancarlo Fisichella" },
    { round: 16, gp: "Belgium", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Jenson Button" },
    { round: 17, gp: "Brazil", p1: "Juan Pablo Montoya", p2: "Kimi Räikkönen", p3: "Fernando Alonso" },
    { round: 18, gp: "Japan", p1: "Kimi Räikkönen", p2: "Giancarlo Fisichella", p3: "Fernando Alonso" },
    { round: 19, gp: "China", p1: "Fernando Alonso", p2: "Kimi Räikkönen", p3: "Ralf Schumacher" }
  ],
  "2006": [
    { round: 1, gp: "Bahrain", p1: "Fernando Alonso", p2: "Michael Schumacher", p3: "Kimi Räikkönen" },
    { round: 2, gp: "Malaysia", p1: "Giancarlo Fisichella", p2: "Fernando Alonso", p3: "Jenson Button" },
    { round: 3, gp: "Australia", p1: "Fernando Alonso", p2: "Kimi Räikkönen", p3: "Ralf Schumacher" },
    { round: 4, gp: "San Marino", p1: "Michael Schumacher", p2: "Fernando Alonso", p3: "Juan Pablo Montoya" },
    { round: 5, gp: "Europe", p1: "Michael Schumacher", p2: "Fernando Alonso", p3: "Felipe Massa" },
    { round: 6, gp: "Spain", p1: "Fernando Alonso", p2: "Michael Schumacher", p3: "Giancarlo Fisichella" },
    { round: 7, gp: "Monaco", p1: "Fernando Alonso", p2: "Juan Pablo Montoya", p3: "David Coulthard" },
    { round: 8, gp: "Great Britain", p1: "Fernando Alonso", p2: "Michael Schumacher", p3: "Kimi Räikkönen" },
    { round: 9, gp: "Canada", p1: "Fernando Alonso", p2: "Michael Schumacher", p3: "Kimi Räikkönen" },
    { round: 10, gp: "USA", p1: "Michael Schumacher", p2: "Felipe Massa", p3: "Giancarlo Fisichella" },
    { round: 11, gp: "France", p1: "Michael Schumacher", p2: "Fernando Alonso", p3: "Felipe Massa" },
    { round: 12, gp: "Germany", p1: "Michael Schumacher", p2: "Felipe Massa", p3: "Kimi Räikkönen" },
    { round: 13, gp: "Hungary", p1: "Jenson Button", p2: "Pedro de la Rosa", p3: "Nick Heidfeld" },
    { round: 14, gp: "Turkey", p1: "Felipe Massa", p2: "Fernando Alonso", p3: "Michael Schumacher" },
    { round: 15, gp: "Italy", p1: "Michael Schumacher", p2: "Kimi Räikkönen", p3: "Robert Kubica" },
    { round: 16, gp: "China", p1: "Michael Schumacher", p2: "Fernando Alonso", p3: "Giancarlo Fisichella" },
    { round: 17, gp: "Japan", p1: "Fernando Alonso", p2: "Felipe Massa", p3: "Giancarlo Fisichella" },
    { round: 18, gp: "Brazil", p1: "Felipe Massa", p2: "Fernando Alonso", p3: "Jenson Button" }
  ],
  "2007": [
    { round: 1, gp: "Australia", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Lewis Hamilton" },
    { round: 2, gp: "Malaysia", p1: "Fernando Alonso", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 3, gp: "Bahrain", p1: "Felipe Massa", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 4, gp: "Spain", p1: "Felipe Massa", p2: "Lewis Hamilton", p3: "Fernando Alonso" },
    { round: 5, gp: "Monaco", p1: "Fernando Alonso", p2: "Lewis Hamilton", p3: "Felipe Massa" },
    { round: 6, gp: "Canada", p1: "Lewis Hamilton", p2: "Nick Heidfeld", p3: "Alexander Wurz" },
    { round: 7, gp: "USA", p1: "Lewis Hamilton", p2: "Fernando Alonso", p3: "Felipe Massa" },
    { round: 8, gp: "France", p1: "Kimi Räikkönen", p2: "Felipe Massa", p3: "Lewis Hamilton" },
    { round: 9, gp: "Great Britain", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Lewis Hamilton" },
    { round: 10, gp: "Europe", p1: "Fernando Alonso", p2: "Felipe Massa", p3: "Mark Webber" },
    { round: 11, gp: "Hungary", p1: "Lewis Hamilton", p2: "Kimi Räikkönen", p3: "Nick Heidfeld" },
    { round: 12, gp: "Turkey", p1: "Felipe Massa", p2: "Kimi Räikkönen", p3: "Fernando Alonso" },
    { round: 13, gp: "Italy", p1: "Fernando Alonso", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 14, gp: "Belgium", p1: "Kimi Räikkönen", p2: "Felipe Massa", p3: "Fernando Alonso" },
    { round: 15, gp: "Japan", p1: "Lewis Hamilton", p2: "Heikki Kovalainen", p3: "Kimi Räikkönen" },
    { round: 16, gp: "China", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Felipe Massa" },
    { round: 17, gp: "Brazil", p1: "Kimi Räikkönen", p2: "Felipe Massa", p3: "Fernando Alonso" }
  ],
  "2008": [
    { round: 1, gp: "Australia", p1: "Lewis Hamilton", p2: "Nick Heidfeld", p3: "Nico Rosberg" },
    { round: 2, gp: "Malaysia", p1: "Kimi Räikkönen", p2: "Robert Kubica", p3: "Heikki Kovalainen" },
    { round: 3, gp: "Bahrain", p1: "Felipe Massa", p2: "Kimi Räikkönen", p3: "Robert Kubica" },
    { round: 4, gp: "Spain", p1: "Kimi Räikkönen", p2: "Felipe Massa", p3: "Lewis Hamilton" },
    { round: 5, gp: "Turkey", p1: "Felipe Massa", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 6, gp: "Monaco", p1: "Lewis Hamilton", p2: "Robert Kubica", p3: "Felipe Massa" },
    { round: 7, gp: "Canada", p1: "Robert Kubica", p2: "Nick Heidfeld", p3: "David Coulthard" },
    { round: 8, gp: "France", p1: "Felipe Massa", p2: "Kimi Räikkönen", p3: "Jarno Trulli" },
    { round: 9, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Nick Heidfeld", p3: "Rubens Barrichello" },
    { round: 10, gp: "Germany", p1: "Lewis Hamilton", p2: "Nelson Piquet Jr.", p3: "Felipe Massa" },
    { round: 11, gp: "Hungary", p1: "Heikki Kovalainen", p2: "Timo Glock", p3: "Kimi Räikkönen" },
    { round: 12, gp: "Europe", p1: "Felipe Massa", p2: "Lewis Hamilton", p3: "Robert Kubica" },
    { round: 13, gp: "Belgium", p1: "Felipe Massa", p2: "Nick Heidfeld", p3: "Lewis Hamilton" },
    { round: 14, gp: "Italy", p1: "Sebastian Vettel", p2: "Heikki Kovalainen", p3: "Robert Kubica" },
    { round: 15, gp: "Singapore", p1: "Fernando Alonso", p2: "Nico Rosberg", p3: "Lewis Hamilton" },
    { round: 16, gp: "Japan", p1: "Fernando Alonso", p2: "Robert Kubica", p3: "Kimi Räikkönen" },
    { round: 17, gp: "China", p1: "Lewis Hamilton", p2: "Felipe Massa", p3: "Kimi Räikkönen" },
    { round: 18, gp: "Brazil", p1: "Felipe Massa", p2: "Fernando Alonso", p3: "Kimi Räikkönen" }
  ],
  "2009": [
    { round: 1, gp: "Australia", p1: "Jenson Button", p2: "Rubens Barrichello", p3: "Jarno Trulli" },
    { round: 2, gp: "Malaysia", p1: "Jenson Button", p2: "Nick Heidfeld", p3: "Timo Glock" },
    { round: 3, gp: "China", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Jenson Button" },
    { round: 4, gp: "Bahrain", p1: "Jenson Button", p2: "Sebastian Vettel", p3: "Jarno Trulli" },
    { round: 5, gp: "Spain", p1: "Jenson Button", p2: "Rubens Barrichello", p3: "Mark Webber" },
    { round: 6, gp: "Monaco", p1: "Jenson Button", p2: "Rubens Barrichello", p3: "Kimi Räikkönen" },
    { round: 7, gp: "Turkey", p1: "Jenson Button", p2: "Mark Webber", p3: "Sebastian Vettel" },
    { round: 8, gp: "Great Britain", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Rubens Barrichello" },
    { round: 9, gp: "Germany", p1: "Mark Webber", p2: "Sebastian Vettel", p3: "Felipe Massa" },
    { round: 10, gp: "Hungary", p1: "Lewis Hamilton", p2: "Kimi Räikkönen", p3: "Mark Webber" },
    { round: 11, gp: "Europe", p1: "Rubens Barrichello", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 12, gp: "Belgium", p1: "Kimi Räikkönen", p2: "Giancarlo Fisichella", p3: "Sebastian Vettel" },
    { round: 13, gp: "Italy", p1: "Rubens Barrichello", p2: "Jenson Button", p3: "Kimi Räikkönen" },
    { round: 14, gp: "Singapore", p1: "Lewis Hamilton", p2: "Timo Glock", p3: "Fernando Alonso" },
    { round: 15, gp: "Japan", p1: "Sebastian Vettel", p2: "Jarno Trulli", p3: "Lewis Hamilton" },
    { round: 16, gp: "Brazil", p1: "Mark Webber", p2: "Robert Kubica", p3: "Lewis Hamilton" },
    { round: 17, gp: "Abu Dhabi", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Jenson Button" }
  ],
  "2010": [
    { round: 1, gp: "Bahrain", p1: "Fernando Alonso", p2: "Felipe Massa", p3: "Lewis Hamilton" },
    { round: 2, gp: "Australia", p1: "Jenson Button", p2: "Robert Kubica", p3: "Felipe Massa" },
    { round: 3, gp: "Malaysia", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Nico Rosberg" },
    { round: 4, gp: "China", p1: "Jenson Button", p2: "Lewis Hamilton", p3: "Nico Rosberg" },
    { round: 5, gp: "Spain", p1: "Mark Webber", p2: "Fernando Alonso", p3: "Sebastian Vettel" },
    { round: 6, gp: "Monaco", p1: "Mark Webber", p2: "Sebastian Vettel", p3: "Robert Kubica" },
    { round: 7, gp: "Turkey", p1: "Lewis Hamilton", p2: "Jenson Button", p3: "Mark Webber" },
    { round: 8, gp: "Canada", p1: "Lewis Hamilton", p2: "Jenson Button", p3: "Fernando Alonso" },
    { round: 9, gp: "Europe", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Jenson Button" },
    { round: 10, gp: "Great Britain", p1: "Mark Webber", p2: "Lewis Hamilton", p3: "Nico Rosberg" },
    { round: 11, gp: "Germany", p1: "Fernando Alonso", p2: "Felipe Massa", p3: "Sebastian Vettel" },
    { round: 12, gp: "Hungary", p1: "Mark Webber", p2: "Fernando Alonso", p3: "Sebastian Vettel" },
    { round: 13, gp: "Belgium", p1: "Lewis Hamilton", p2: "Mark Webber", p3: "Robert Kubica" },
    { round: 14, gp: "Italy", p1: "Fernando Alonso", p2: "Jenson Button", p3: "Felipe Massa" },
    { round: 15, gp: "Singapore", p1: "Fernando Alonso", p2: "Sebastian Vettel", p3: "Mark Webber" },
    { round: 16, gp: "Japan", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Fernando Alonso" },
    { round: 17, gp: "Korea", p1: "Fernando Alonso", p2: "Lewis Hamilton", p3: "Felipe Massa" },
    { round: 18, gp: "Brazil", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Fernando Alonso" },
    { round: 19, gp: "Abu Dhabi", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Jenson Button" }
  ],
  "2011": [
    { round: 1, gp: "Australia", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Vitaly Petrov" },
    { round: 2, gp: "Malaysia", p1: "Sebastian Vettel", p2: "Jenson Button", p3: "Nick Heidfeld" },
    { round: 3, gp: "China", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Mark Webber" },
    { round: 4, gp: "Turkey", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Fernando Alonso" },
    { round: 5, gp: "Spain", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Jenson Button" },
    { round: 6, gp: "Monaco", p1: "Sebastian Vettel", p2: "Fernando Alonso", p3: "Jenson Button" },
    { round: 7, gp: "Canada", p1: "Jenson Button", p2: "Sebastian Vettel", p3: "Mark Webber" },
    { round: 8, gp: "Europe", p1: "Sebastian Vettel", p2: "Fernando Alonso", p3: "Mark Webber" },
    { round: 9, gp: "Great Britain", p1: "Fernando Alonso", p2: "Sebastian Vettel", p3: "Mark Webber" },
    { round: 10, gp: "Germany", p1: "Lewis Hamilton", p2: "Fernando Alonso", p3: "Mark Webber" },
    { round: 11, gp: "Hungary", p1: "Jenson Button", p2: "Sebastian Vettel", p3: "Fernando Alonso" },
    { round: 12, gp: "Belgium", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Jenson Button" },
    { round: 13, gp: "Italy", p1: "Sebastian Vettel", p2: "Jenson Button", p3: "Fernando Alonso" },
    { round: 14, gp: "Singapore", p1: "Sebastian Vettel", p2: "Jenson Button", p3: "Mark Webber" },
    { round: 15, gp: "Japan", p1: "Jenson Button", p2: "Fernando Alonso", p3: "Sebastian Vettel" },
    { round: 16, gp: "Korea", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Mark Webber" },
    { round: 17, gp: "India", p1: "Sebastian Vettel", p2: "Jenson Button", p3: "Fernando Alonso" },
    { round: 18, gp: "Abu Dhabi", p1: "Lewis Hamilton", p2: "Fernando Alonso", p3: "Jenson Button" },
    { round: 19, gp: "Brazil", p1: "Mark Webber", p2: "Sebastian Vettel", p3: "Jenson Button" }
  ],
  "2012": [
    { round: 1, gp: "Australia", p1: "Jenson Button", p2: "Sebastian Vettel", p3: "Lewis Hamilton" },
    { round: 2, gp: "Malaysia", p1: "Fernando Alonso", p2: "Sergio Pérez", p3: "Lewis Hamilton" },
    { round: 3, gp: "China", p1: "Nico Rosberg", p2: "Jenson Button", p3: "Lewis Hamilton" },
    { round: 4, gp: "Bahrain", p1: "Sebastian Vettel", p2: "Kimi Räikkönen", p3: "Romain Grosjean" },
    { round: 5, gp: "Spain", p1: "Pastor Maldonado", p2: "Fernando Alonso", p3: "Kimi Räikkönen" },
    { round: 6, gp: "Monaco", p1: "Mark Webber", p2: "Nico Rosberg", p3: "Fernando Alonso" },
    { round: 7, gp: "Canada", p1: "Lewis Hamilton", p2: "Romain Grosjean", p3: "Sergio Pérez" },
    { round: 8, gp: "Europe", p1: "Fernando Alonso", p2: "Kimi Räikkönen", p3: "Michael Schumacher" },
    { round: 9, gp: "Great Britain", p1: "Mark Webber", p2: "Fernando Alonso", p3: "Sebastian Vettel" },
    { round: 10, gp: "Germany", p1: "Fernando Alonso", p2: "Jenson Button", p3: "Kimi Räikkönen" },
    { round: 11, gp: "Hungary", p1: "Lewis Hamilton", p2: "Kimi Räikkönen", p3: "Romain Grosjean" },
    { round: 12, gp: "Belgium", p1: "Jenson Button", p2: "Sebastian Vettel", p3: "Kimi Räikkönen" },
    { round: 13, gp: "Italy", p1: "Lewis Hamilton", p2: "Sergio Pérez", p3: "Fernando Alonso" },
    { round: 14, gp: "Singapore", p1: "Sebastian Vettel", p2: "Jenson Button", p3: "Fernando Alonso" },
    { round: 15, gp: "Japan", p1: "Sebastian Vettel", p2: "Felipe Massa", p3: "Kamui Kobayashi" },
    { round: 16, gp: "Korea", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Fernando Alonso" },
    { round: 17, gp: "India", p1: "Sebastian Vettel", p2: "Fernando Alonso", p3: "Kimi Räikkönen" },
    { round: 18, gp: "Abu Dhabi", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Sebastian Vettel" },
    { round: 19, gp: "USA", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Fernando Alonso" },
    { round: 20, gp: "Brazil", p1: "Jenson Button", p2: "Fernando Alonso", p3: "Felipe Massa" }
  ],
  "2013": [
    { round: 1, gp: "Australia", p1: "Kimi Räikkönen", p2: "Fernando Alonso", p3: "Sebastian Vettel" },
    { round: 2, gp: "Malaysia", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Lewis Hamilton" },
    { round: 3, gp: "China", p1: "Fernando Alonso", p2: "Kimi Räikkönen", p3: "Lewis Hamilton" },
    { round: 4, gp: "Bahrain", p1: "Sebastian Vettel", p2: "Kimi Räikkönen", p3: "Romain Grosjean" },
    { round: 5, gp: "Spain", p1: "Fernando Alonso", p2: "Kimi Räikkönen", p3: "Felipe Massa" },
    { round: 6, gp: "Monaco", p1: "Nico Rosberg", p2: "Sebastian Vettel", p3: "Mark Webber" },
    { round: 7, gp: "Canada", p1: "Sebastian Vettel", p2: "Fernando Alonso", p3: "Lewis Hamilton" },
    { round: 8, gp: "Great Britain", p1: "Nico Rosberg", p2: "Mark Webber", p3: "Fernando Alonso" },
    { round: 9, gp: "Germany", p1: "Sebastian Vettel", p2: "Kimi Räikkönen", p3: "Romain Grosjean" },
    { round: 10, gp: "Hungary", p1: "Lewis Hamilton", p2: "Kimi Räikkönen", p3: "Sebastian Vettel" },
    { round: 11, gp: "Belgium", p1: "Sebastian Vettel", p2: "Fernando Alonso", p3: "Lewis Hamilton" },
    { round: 12, gp: "Italy", p1: "Sebastian Vettel", p2: "Fernando Alonso", p3: "Mark Webber" },
    { round: 13, gp: "Singapore", p1: "Sebastian Vettel", p2: "Fernando Alonso", p3: "Kimi Räikkönen" },
    { round: 14, gp: "Korea", p1: "Sebastian Vettel", p2: "Kimi Räikkönen", p3: "Romain Grosjean" },
    { round: 15, gp: "Japan", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Romain Grosjean" },
    { round: 16, gp: "India", p1: "Sebastian Vettel", p2: "Nico Rosberg", p3: "Romain Grosjean" },
    { round: 17, gp: "Abu Dhabi", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Nico Rosberg" },
    { round: 18, gp: "USA", p1: "Sebastian Vettel", p2: "Romain Grosjean", p3: "Mark Webber" },
    { round: 19, gp: "Brazil", p1: "Sebastian Vettel", p2: "Mark Webber", p3: "Fernando Alonso" }
  ],
  "2014": [
    { round: 1, gp: "Australia", p1: "Nico Rosberg", p2: "Kevin Magnussen", p3: "Jenson Button" },
    { round: 2, gp: "Malaysia", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 3, gp: "Bahrain", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sergio Pérez" },
    { round: 4, gp: "China", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Fernando Alonso" },
    { round: 5, gp: "Spain", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Daniel Ricciardo" },
    { round: 6, gp: "Monaco", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Daniel Ricciardo" },
    { round: 7, gp: "Canada", p1: "Daniel Ricciardo", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 8, gp: "Austria", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 9, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Daniel Ricciardo" },
    { round: 10, gp: "Germany", p1: "Nico Rosberg", p2: "Valtteri Bottas", p3: "Lewis Hamilton" },
    { round: 11, gp: "Hungary", p1: "Daniel Ricciardo", p2: "Fernando Alonso", p3: "Lewis Hamilton" },
    { round: 12, gp: "Belgium", p1: "Daniel Ricciardo", p2: "Nico Rosberg", p3: "Valtteri Bottas" },
    { round: 13, gp: "Italy", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Felipe Massa" },
    { round: 14, gp: "Singapore", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Daniel Ricciardo" },
    { round: 15, gp: "Japan", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 16, gp: "Russia", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Valtteri Bottas" },
    { round: 17, gp: "USA", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Daniel Ricciardo" },
    { round: 18, gp: "Brazil", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Felipe Massa" },
    { round: 19, gp: "Abu Dhabi", p1: "Lewis Hamilton", p2: "Felipe Massa", p3: "Valtteri Bottas" }
  ],
  "2015": [
    { round: 1, gp: "Australia", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 2, gp: "Malaysia", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Nico Rosberg" },
    { round: 3, gp: "China", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 4, gp: "Bahrain", p1: "Lewis Hamilton", p2: "Kimi Räikkönen", p3: "Nico Rosberg" },
    { round: 5, gp: "Spain", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Sebastian Vettel" },
    { round: 6, gp: "Monaco", p1: "Nico Rosberg", p2: "Sebastian Vettel", p3: "Lewis Hamilton" },
    { round: 7, gp: "Canada", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Valtteri Bottas" },
    { round: 8, gp: "Austria", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Felipe Massa" },
    { round: 9, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 10, gp: "Hungary", p1: "Sebastian Vettel", p2: "Daniil Kvyat", p3: "Daniel Ricciardo" },
    { round: 11, gp: "Belgium", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Romain Grosjean" },
    { round: 12, gp: "Italy", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Felipe Massa" },
    { round: 13, gp: "Singapore", p1: "Sebastian Vettel", p2: "Daniel Ricciardo", p3: "Kimi Räikkönen" },
    { round: 14, gp: "Japan", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 15, gp: "Russia", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Sergio Pérez" },
    { round: 16, gp: "USA", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" },
    { round: 17, gp: "Mexico", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 18, gp: "Brazil", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Sebastian Vettel" },
    { round: 19, gp: "Abu Dhabi", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" }
  ],
  "2016": [
    { round: 1, gp: "Australia", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Sebastian Vettel" },
    { round: 2, gp: "Bahrain", p1: "Nico Rosberg", p2: "Kimi Räikkönen", p3: "Lewis Hamilton" },
    { round: 3, gp: "China", p1: "Nico Rosberg", p2: "Sebastian Vettel", p3: "Daniil Kvyat" },
    { round: 4, gp: "Russia", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 5, gp: "Spain", p1: "Max Verstappen", p2: "Kimi Räikkönen", p3: "Sebastian Vettel" },
    { round: 6, gp: "Monaco", p1: "Lewis Hamilton", p2: "Daniel Ricciardo", p3: "Sergio Pérez" },
    { round: 7, gp: "Canada", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Valtteri Bottas" },
    { round: 8, gp: "Europe", p1: "Nico Rosberg", p2: "Sebastian Vettel", p3: "Sergio Pérez" },
    { round: 9, gp: "Austria", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Kimi Räikkönen" },
    { round: 10, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Nico Rosberg" },
    { round: 11, gp: "Hungary", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Daniel Ricciardo" },
    { round: 12, gp: "Germany", p1: "Lewis Hamilton", p2: "Daniel Ricciardo", p3: "Max Verstappen" },
    { round: 13, gp: "Belgium", p1: "Nico Rosberg", p2: "Daniel Ricciardo", p3: "Lewis Hamilton" },
    { round: 14, gp: "Italy", p1: "Nico Rosberg", p2: "Lewis Hamilton", p3: "Sebastian Vettel" },
    { round: 15, gp: "Singapore", p1: "Nico Rosberg", p2: "Daniel Ricciardo", p3: "Lewis Hamilton" },
    { round: 16, gp: "Malaysia", p1: "Daniel Ricciardo", p2: "Max Verstappen", p3: "Nico Rosberg" },
    { round: 17, gp: "Japan", p1: "Nico Rosberg", p2: "Max Verstappen", p3: "Lewis Hamilton" },
    { round: 18, gp: "USA", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Daniel Ricciardo" },
    { round: 19, gp: "Mexico", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Daniel Ricciardo" },
    { round: 20, gp: "Brazil", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Max Verstappen" },
    { round: 21, gp: "Abu Dhabi", p1: "Lewis Hamilton", p2: "Nico Rosberg", p3: "Sebastian Vettel" }
  ],
  "2017": [
    { round: 1, gp: "Australia", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 2, gp: "China", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Max Verstappen" },
    { round: 3, gp: "Bahrain", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 4, gp: "Russia", p1: "Valtteri Bottas", p2: "Sebastian Vettel", p3: "Kimi Räikkönen" },
    { round: 5, gp: "Spain", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Daniel Ricciardo" },
    { round: 6, gp: "Monaco", p1: "Sebastian Vettel", p2: "Kimi Räikkönen", p3: "Daniel Ricciardo" },
    { round: 7, gp: "Canada", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Daniel Ricciardo" },
    { round: 8, gp: "Azerbaijan", p1: "Daniel Ricciardo", p2: "Valtteri Bottas", p3: "Lance Stroll" },
    { round: 9, gp: "Austria", p1: "Valtteri Bottas", p2: "Sebastian Vettel", p3: "Daniel Ricciardo" },
    { round: 10, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Kimi Räikkönen" },
    { round: 11, gp: "Hungary", p1: "Sebastian Vettel", p2: "Kimi Räikkönen", p3: "Valtteri Bottas" },
    { round: 12, gp: "Belgium", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Daniel Ricciardo" },
    { round: 13, gp: "Italy", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Sebastian Vettel" },
    { round: 14, gp: "Singapore", p1: "Lewis Hamilton", p2: "Daniel Ricciardo", p3: "Valtteri Bottas" },
    { round: 15, gp: "Malaysia", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Daniel Ricciardo" },
    { round: 16, gp: "Japan", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Daniel Ricciardo" },
    { round: 17, gp: "USA", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Kimi Räikkönen" },
    { round: 18, gp: "Mexico", p1: "Max Verstappen", p2: "Valtteri Bottas", p3: "Kimi Räikkönen" },
    { round: 19, gp: "Brazil", p1: "Sebastian Vettel", p2: "Valtteri Bottas", p3: "Kimi Räikkönen" },
    { round: 20, gp: "Abu Dhabi", p1: "Valtteri Bottas", p2: "Lewis Hamilton", p3: "Sebastian Vettel" }
  ],
  "2018": [
    { round: 1, gp: "Australia", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 2, gp: "Bahrain", p1: "Sebastian Vettel", p2: "Valtteri Bottas", p3: "Lewis Hamilton" },
    { round: 3, gp: "China", p1: "Daniel Ricciardo", p2: "Valtteri Bottas", p3: "Kimi Räikkönen" },
    { round: 4, gp: "Azerbaijan", p1: "Lewis Hamilton", p2: "Kimi Räikkönen", p3: "Sergio Pérez" },
    { round: 5, gp: "Spain", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Max Verstappen" },
    { round: 6, gp: "Monaco", p1: "Daniel Ricciardo", p2: "Sebastian Vettel", p3: "Lewis Hamilton" },
    { round: 7, gp: "Canada", p1: "Sebastian Vettel", p2: "Valtteri Bottas", p3: "Max Verstappen" },
    { round: 8, gp: "France", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Kimi Räikkönen" },
    { round: 9, gp: "Austria", p1: "Max Verstappen", p2: "Kimi Räikkönen", p3: "Sebastian Vettel" },
    { round: 10, gp: "Great Britain", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Kimi Räikkönen" },
    { round: 11, gp: "Germany", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Kimi Räikkönen" },
    { round: 12, gp: "Hungary", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Kimi Räikkönen" },
    { round: 13, gp: "Belgium", p1: "Sebastian Vettel", p2: "Lewis Hamilton", p3: "Max Verstappen" },
    { round: 14, gp: "Italy", p1: "Lewis Hamilton", p2: "Kimi Räikkönen", p3: "Valtteri Bottas" },
    { round: 15, gp: "Singapore", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Sebastian Vettel" },
    { round: 16, gp: "Russia", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Sebastian Vettel" },
    { round: 17, gp: "Japan", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Max Verstappen" },
    { round: 18, gp: "USA", p1: "Kimi Räikkönen", p2: "Max Verstappen", p3: "Lewis Hamilton" },
    { round: 19, gp: "Mexico", p1: "Max Verstappen", p2: "Sebastian Vettel", p3: "Kimi Räikkönen" },
    { round: 20, gp: "Brazil", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Kimi Räikkönen" },
    { round: 21, gp: "Abu Dhabi", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Max Verstappen" }
  ],
  "2019": [
    { round: 1, gp: "Australia", p1: "Valtteri Bottas", p2: "Lewis Hamilton", p3: "Max Verstappen" },
    { round: 2, gp: "Bahrain", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Charles Leclerc" },
    { round: 3, gp: "China", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Sebastian Vettel" },
    { round: 4, gp: "Azerbaijan", p1: "Valtteri Bottas", p2: "Lewis Hamilton", p3: "Sebastian Vettel" },
    { round: 5, gp: "Spain", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Max Verstappen" },
    { round: 6, gp: "Monaco", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Valtteri Bottas" },
    { round: 7, gp: "Canada", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Charles Leclerc" },
    { round: 8, gp: "France", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Charles Leclerc" },
    { round: 9, gp: "Austria", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "Valtteri Bottas" },
    { round: 10, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Charles Leclerc" },
    { round: 11, gp: "Germany", p1: "Max Verstappen", p2: "Sebastian Vettel", p3: "Daniil Kvyat" },
    { round: 12, gp: "Hungary", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Sebastian Vettel" },
    { round: 13, gp: "Belgium", p1: "Charles Leclerc", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 14, gp: "Italy", p1: "Charles Leclerc", p2: "Valtteri Bottas", p3: "Lewis Hamilton" },
    { round: 15, gp: "Singapore", p1: "Sebastian Vettel", p2: "Charles Leclerc", p3: "Max Verstappen" },
    { round: 16, gp: "Russia", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Charles Leclerc" },
    { round: 17, gp: "Japan", p1: "Valtteri Bottas", p2: "Sebastian Vettel", p3: "Lewis Hamilton" },
    { round: 18, gp: "Mexico", p1: "Lewis Hamilton", p2: "Sebastian Vettel", p3: "Valtteri Bottas" },
    { round: 19, gp: "USA", p1: "Valtteri Bottas", p2: "Lewis Hamilton", p3: "Max Verstappen" },
    { round: 20, gp: "Brazil", p1: "Max Verstappen", p2: "Pierre Gasly", p3: "Carlos Sainz Jr." },
    { round: 21, gp: "Abu Dhabi", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Charles Leclerc" }
  ],
  "2020": [
    { round: 1, gp: "Austria", p1: "Valtteri Bottas", p2: "Charles Leclerc", p3: "Lando Norris" },
    { round: 2, gp: "Styria", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Max Verstappen" },
    { round: 3, gp: "Hungary", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Valtteri Bottas" },
    { round: 4, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Charles Leclerc" },
    { round: 5, gp: "70th Anniversary", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 6, gp: "Spain", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Valtteri Bottas" },
    { round: 7, gp: "Belgium", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Max Verstappen" },
    { round: 8, gp: "Italy", p1: "Pierre Gasly", p2: "Carlos Sainz Jr.", p3: "Lance Stroll" },
    { round: 9, gp: "Tuscany", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Alexander Albon" },
    { round: 10, gp: "Russia", p1: "Valtteri Bottas", p2: "Max Verstappen", p3: "Lewis Hamilton" },
    { round: 11, gp: "Eifel", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Daniel Ricciardo" },
    { round: 12, gp: "Portugal", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Max Verstappen" },
    { round: 13, gp: "Emilia Romagna", p1: "Lewis Hamilton", p2: "Valtteri Bottas", p3: "Daniel Ricciardo" },
    { round: 14, gp: "Turkey", p1: "Lewis Hamilton", p2: "Sergio Pérez", p3: "Sebastian Vettel" },
    { round: 15, gp: "Bahrain", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Alexander Albon" },
    { round: 16, gp: "Sakhir", p1: "Sergio Pérez", p2: "Esteban Ocon", p3: "Lance Stroll" },
    { round: 17, gp: "Abu Dhabi", p1: "Max Verstappen", p2: "Valtteri Bottas", p3: "Lewis Hamilton" }
  ],
  "2021": [
    { round: 1, gp: "Bahrain", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Valtteri Bottas" },
    { round: 2, gp: "Emilia Romagna", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Lando Norris" },
    { round: 3, gp: "Portugal", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Valtteri Bottas" },
    { round: 4, gp: "Spain", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Valtteri Bottas" },
    { round: 5, gp: "Monaco", p1: "Max Verstappen", p2: "Carlos Sainz Jr.", p3: "Lando Norris" },
    { round: 6, gp: "Azerbaijan", p1: "Sergio Pérez", p2: "Sebastian Vettel", p3: "Pierre Gasly" },
    { round: 7, gp: "France", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Sergio Pérez" },
    { round: 8, gp: "Styria", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 9, gp: "Austria", p1: "Max Verstappen", p2: "Valtteri Bottas", p3: "Lando Norris" },
    { round: 10, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Charles Leclerc", p3: "Valtteri Bottas" },
    { round: 11, gp: "Hungary", p1: "Esteban Ocon", p2: "Lewis Hamilton", p3: "Carlos Sainz Jr." },
    { round: 12, gp: "Belgium", p1: "Max Verstappen", p2: "George Russell", p3: "Lewis Hamilton" },
    { round: 13, gp: "Netherlands", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Valtteri Bottas" },
    { round: 14, gp: "Italy", p1: "Daniel Ricciardo", p2: "Lando Norris", p3: "Valtteri Bottas" },
    { round: 15, gp: "Russia", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Carlos Sainz Jr." },
    { round: 16, gp: "Turkey", p1: "Valtteri Bottas", p2: "Max Verstappen", p3: "Sergio Pérez" },
    { round: 17, gp: "USA", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Sergio Pérez" },
    { round: 18, gp: "Mexico", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Sergio Pérez" },
    { round: 19, gp: "São Paulo", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Valtteri Bottas" },
    { round: 20, gp: "Qatar", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Fernando Alonso" },
    { round: 21, gp: "Saudi Arabia", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Valtteri Bottas" },
    { round: 22, gp: "Abu Dhabi", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Carlos Sainz Jr." }
  ],
  "2022": [
    { round: 1, gp: "Bahrain", p1: "Charles Leclerc", p2: "Carlos Sainz Jr.", p3: "Lewis Hamilton" },
    { round: 2, gp: "Saudi Arabia", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "Carlos Sainz Jr." },
    { round: 3, gp: "Australia", p1: "Charles Leclerc", p2: "Sergio Pérez", p3: "George Russell" },
    { round: 4, gp: "Emilia Romagna", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Lando Norris" },
    { round: 5, gp: "Miami", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "Carlos Sainz Jr." },
    { round: 6, gp: "Spain", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "George Russell" },
    { round: 7, gp: "Monaco", p1: "Sergio Pérez", p2: "Carlos Sainz Jr.", p3: "Max Verstappen" },
    { round: 8, gp: "Azerbaijan", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "George Russell" },
    { round: 9, gp: "Canada", p1: "Max Verstappen", p2: "Carlos Sainz Jr.", p3: "Lewis Hamilton" },
    { round: 10, gp: "Great Britain", p1: "Carlos Sainz Jr.", p2: "Sergio Pérez", p3: "Lewis Hamilton" },
    { round: 11, gp: "Austria", p1: "Charles Leclerc", p2: "Max Verstappen", p3: "Lewis Hamilton" },
    { round: 12, gp: "France", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "George Russell" },
    { round: 13, gp: "Hungary", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "George Russell" },
    { round: 14, gp: "Belgium", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Carlos Sainz Jr." },
    { round: 15, gp: "Netherlands", p1: "Max Verstappen", p2: "George Russell", p3: "Charles Leclerc" },
    { round: 16, gp: "Italy", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "George Russell" },
    { round: 17, gp: "Singapore", p1: "Sergio Pérez", p2: "Charles Leclerc", p3: "Carlos Sainz Jr." },
    { round: 18, gp: "Japan", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Charles Leclerc" },
    { round: 19, gp: "USA", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Charles Leclerc" },
    { round: 20, gp: "Mexico", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Sergio Pérez" },
    { round: 21, gp: "São Paulo", p1: "George Russell", p2: "Lewis Hamilton", p3: "Carlos Sainz Jr." },
    { round: 22, gp: "Abu Dhabi", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "Sergio Pérez" }
  ],
  "2023": [
    { round: 1, gp: "Bahrain", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Fernando Alonso" },
    { round: 2, gp: "Saudi Arabia", p1: "Sergio Pérez", p2: "Max Verstappen", p3: "Fernando Alonso" },
    { round: 3, gp: "Australia", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Fernando Alonso" },
    { round: 4, gp: "Azerbaijan", p1: "Sergio Pérez", p2: "Max Verstappen", p3: "Charles Leclerc" },
    { round: 5, gp: "Miami", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Fernando Alonso" },
    { round: 6, gp: "Monaco", p1: "Max Verstappen", p2: "Fernando Alonso", p3: "Esteban Ocon" },
    { round: 7, gp: "Spain", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "George Russell" },
    { round: 8, gp: "Canada", p1: "Max Verstappen", p2: "Fernando Alonso", p3: "Lewis Hamilton" },
    { round: 9, gp: "Austria", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "Sergio Pérez" },
    { round: 10, gp: "Great Britain", p1: "Max Verstappen", p2: "Lando Norris", p3: "Lewis Hamilton" },
    { round: 11, gp: "Hungary", p1: "Max Verstappen", p2: "Lando Norris", p3: "Sergio Pérez" },
    { round: 12, gp: "Belgium", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Charles Leclerc" },
    { round: 13, gp: "Netherlands", p1: "Max Verstappen", p2: "Fernando Alonso", p3: "Pierre Gasly" },
    { round: 14, gp: "Italy", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Carlos Sainz Jr." },
    { round: 15, gp: "Singapore", p1: "Carlos Sainz Jr.", p2: "Lando Norris", p3: "Lewis Hamilton" },
    { round: 16, gp: "Japan", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 17, gp: "Qatar", p1: "Max Verstappen", p2: "Oscar Piastri", p3: "Lando Norris" },
    { round: 18, gp: "USA", p1: "Max Verstappen", p2: "Lando Norris", p3: "Carlos Sainz Jr." },
    { round: 19, gp: "Mexico", p1: "Max Verstappen", p2: "Lewis Hamilton", p3: "Charles Leclerc" },
    { round: 20, gp: "São Paulo", p1: "Max Verstappen", p2: "Lando Norris", p3: "Fernando Alonso" },
    { round: 21, gp: "Las Vegas", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "Sergio Pérez" },
    { round: 22, gp: "Abu Dhabi", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "George Russell" }
  ],
  "2024": [
    { round: 1, gp: "Bahrain", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Carlos Sainz Jr." },
    { round: 2, gp: "Saudi Arabia", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Charles Leclerc" },
    { round: 3, gp: "Australia", p1: "Carlos Sainz Jr.", p2: "Charles Leclerc", p3: "Lando Norris" },
    { round: 4, gp: "Japan", p1: "Max Verstappen", p2: "Sergio Pérez", p3: "Carlos Sainz Jr." },
    { round: 5, gp: "China", p1: "Max Verstappen", p2: "Lando Norris", p3: "Sergio Pérez" },
    { round: 6, gp: "Miami", p1: "Lando Norris", p2: "Max Verstappen", p3: "Charles Leclerc" },
    { round: 7, gp: "Emilia Romagna", p1: "Max Verstappen", p2: "Lando Norris", p3: "Charles Leclerc" },
    { round: 8, gp: "Monaco", p1: "Charles Leclerc", p2: "Oscar Piastri", p3: "Carlos Sainz Jr." },
    { round: 9, gp: "Canada", p1: "Max Verstappen", p2: "Lando Norris", p3: "George Russell" },
    { round: 10, gp: "Spain", p1: "Max Verstappen", p2: "Lando Norris", p3: "Lewis Hamilton" },
    { round: 11, gp: "Austria", p1: "George Russell", p2: "Oscar Piastri", p3: "Carlos Sainz Jr." },
    { round: 12, gp: "Great Britain", p1: "Lewis Hamilton", p2: "Max Verstappen", p3: "Lando Norris" },
    { round: 13, gp: "Hungary", p1: "Oscar Piastri", p2: "Lando Norris", p3: "Lewis Hamilton" },
    { round: 14, gp: "Belgium", p1: "Lewis Hamilton", p2: "Oscar Piastri", p3: "Charles Leclerc" },
    { round: 15, gp: "Netherlands", p1: "Lando Norris", p2: "Max Verstappen", p3: "Charles Leclerc" },
    { round: 16, gp: "Italy", p1: "Charles Leclerc", p2: "Oscar Piastri", p3: "Lando Norris" },
    { round: 17, gp: "Azerbaijan", p1: "Oscar Piastri", p2: "Charles Leclerc", p3: "George Russell" },
    { round: 18, gp: "Singapore", p1: "Lando Norris", p2: "Max Verstappen", p3: "Oscar Piastri" },
    { round: 19, gp: "USA", p1: "Charles Leclerc", p2: "Carlos Sainz Jr.", p3: "Max Verstappen" },
    { round: 20, gp: "Mexico", p1: "Carlos Sainz Jr.", p2: "Lando Norris", p3: "Charles Leclerc" },
    { round: 21, gp: "São Paulo", p1: "Max Verstappen", p2: "Esteban Ocon", p3: "Pierre Gasly" },
    { round: 22, gp: "Las Vegas", p1: "George Russell", p2: "Lewis Hamilton", p3: "Carlos Sainz Jr." },
    { round: 23, gp: "Qatar", p1: "Max Verstappen", p2: "Charles Leclerc", p3: "Oscar Piastri" },
    { round: 24, gp: "Abu Dhabi", p1: "Lando Norris", p2: "Carlos Sainz Jr.", p3: "Charles Leclerc" }
  ],
  "2025": [
    { round: 1, gp: "Australia", p1: "Lando Norris", p2: "Max Verstappen", p3: "George Russell" },
    { round: 2, gp: "China", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 3, gp: "Japan", p1: "Max Verstappen", p2: "Lando Norris", p3: "Charles Leclerc" },
    { round: 4, gp: "Bahrain", p1: "Oscar Piastri", p2: "Lando Norris", p3: "George Russell" },
    { round: 5, gp: "Saudi Arabia", p1: "Max Verstappen", p2: "Oscar Piastri", p3: "Charles Leclerc" },
    { round: 6, gp: "Miami", p1: "Lando Norris", p2: "Oscar Piastri", p3: "Max Verstappen" },
    { round: 7, gp: "Emilia Romagna", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 8, gp: "Monaco", p1: "Charles Leclerc", p2: "Max Verstappen", p3: "Lando Norris" },
    { round: 9, gp: "Canada", p1: "George Russell", p2: "Max Verstappen", p3: "Lando Norris" },
    { round: 10, gp: "Spain", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 11, gp: "Austria", p1: "Oscar Piastri", p2: "Lando Norris", p3: "Max Verstappen" },
    { round: 12, gp: "Great Britain", p1: "Lando Norris", p2: "Oscar Piastri", p3: "Nico Hülkenberg" },
    { round: 13, gp: "Hungary", p1: "Lando Norris", p2: "Oscar Piastri", p3: "Max Verstappen" },
    { round: 14, gp: "Belgium", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 15, gp: "Netherlands", p1: "Oscar Piastri", p2: "Lando Norris", p3: "Max Verstappen" },
    { round: 16, gp: "Italy", p1: "Lando Norris", p2: "Oscar Piastri", p3: "Charles Leclerc" },
    { round: 17, gp: "Azerbaijan", p1: "Oscar Piastri", p2: "Max Verstappen", p3: "George Russell" },
    { round: 18, gp: "Singapore", p1: "Lando Norris", p2: "Max Verstappen", p3: "Oscar Piastri" },
    { round: 19, gp: "USA", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 20, gp: "Mexico", p1: "Lando Norris", p2: "Max Verstappen", p3: "Oscar Piastri" },
    { round: 21, gp: "São Paulo", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 22, gp: "Las Vegas", p1: "Max Verstappen", p2: "Lando Norris", p3: "George Russell" },
    { round: 23, gp: "Qatar", p1: "Max Verstappen", p2: "Lando Norris", p3: "Oscar Piastri" },
    { round: 24, gp: "Abu Dhabi", p1: "Lando Norris", p2: "Max Verstappen", p3: "Oscar Piastri" }
  ]
};

/* ============================================================
   DRIVERS
   ============================================================ */

const drivers = [
    {
        rank: 1,
        name: "Max Verstappen",
 country: "Netherlands",
 years: "2015–2025",
 titles: 4,
 wins: 71,
 podiums: 127,
 image:"https://4kwallpapers.com/images/wallpapers/max-verstappen-5120x2880-23585.jpg",
summary: "Four-time World Champion who transformed Red Bull into the dominant force of the early 2020s. Verstappen won 19 races in 2023."
    },
    {
        rank: 2,
        name: "Lewis Hamilton",
        country: "United Kingdom",
        years: "2007–2025",
        titles: 7,
        wins: 105,
        podiums: 202,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVDiIVYOzxWAcdmPBM4QrQGg0XVi5uscXBlYIOnFjtoGdSZ9vtnVX-IKH&s=10",
        summary: "Seven-time World Champion and the winningest driver in Formula 1 history. Hamilton became the central figure of Mercedes' dominant hybrid era."
    },
    {
        rank: 3,
        name: "Michael Schumacher",
        country: "Germany",
        years: "1991–2006 · 2010–2012",
        titles: 7,
        wins: 91,
        podiums: 155,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJCv4RMtjg0yn4vRz3QATDpBCs8iHw9-2t_SOB0JItQ&s=10",
        summary: "Seven-time World Champion whose Ferrari era defined the beginning of the 21st century. Schumacher won five consecutive championships from 2000 to 2004."
    },
    {
        rank: 4,
        name: "Sebastian Vettel",
        country: "Germany",
        years: "2007–2022",
        titles: 4,
        wins: 53,
        podiums: 122,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHfgOi-qb6U9qdqNXdpfucXI0t96_mGzfHzS3EQM2Z4v9XhkYVMOqw7cF&s=10",
        summary: "Four-time World Champion who became the youngest driver to win four consecutive championships with Red Bull from 2010 to 2013."
    },
    {
        rank: 5,
        name: "Fernando Alonso",
        country: "Spain",
        years: "2001–2025",
        titles: 2,
        wins: 32,
        podiums: 106,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89rD_5vOHcYdmK-JQc5XdH1Q19SY6pOKZmGrYXVLMoA&s=10",
        summary: "Two-time World Champion who ended Schumacher's five-year title streak by winning the 2005 championship and retained it in 2006."
    },
    {
        rank: 6,
        name: "Kimi Räikkönen",
        country: "Finland",
        years: "2001–2009 · 2012–2021",
        titles: 1,
        wins: 21,
        podiums: 103,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dMSBH9n4JeU3_6rLIsmW_7kToz4jgmZN8caBsVKT4g&s=10",
        summary: "The 2007 World Champion who won the title for Ferrari by a single point in one of the closest championships in modern F1 history."
    },
    {
        rank: 7,
        name: "Jenson Button",
        country: "United Kingdom",
        years: "2000–2017",
        titles: 1,
        wins: 15,
        podiums: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RtKLmVZNop4SIYzBN27MB-IZi3ailX7ZM2lp2QxYRvKVVaDXtrbiOgA&s=10",
        summary: "2009 World Champion who produced a remarkable season with Brawn GP, winning six of the first seven races."
    },
    {
        rank: 8,
        name: "Nico Rosberg",
        country: "Germany",
        years: "2006–2016",
        titles: 1,
        wins: 23,
        podiums: 57,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-8K8NF2S2eALZ_JzCMRFfy6TIqySG7-GWe5xRBSdGg&s=10",
        summary: "Mercedes driver who finally defeated Lewis Hamilton for the 2016 World Championship before immediately retiring from Formula 1."
    },
    {
        rank: 9,
        name: "Charles Leclerc",
        country: "Monaco",
        years: "2018–2025",
        titles: 0,
        wins: 8,
        podiums: 50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYpPIsEhW9l1gyMtejLauCnOMXI0STPQpslw5H0Ly7Q&s=10",
        summary: "Ferrari's leading driver of the late 2010s and 2020s, known for exceptional qualifying pace and multiple Grand Prix victories."
    },
    {
        rank: 10,
        name: "Lando Norris",
        country: "United Kingdom",
        years: "2019–2025",
        titles: 1,
        wins: 11,
        podiums: 44,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMXDO4z96q2UbPHHXcJfvkDUF-KEZn6u-DnoougntLA&s=10",
        summary: "McLaren driver who became the 2025 World Champion after a season-long title fight involving Oscar Piastri and Max Verstappen."
    }
];

 function driverImage(file) {
    if (!file) return "";
    
    // If you paste a full web link (starting with http or https), use it as is
    if (file.startsWith("http://") || file.startsWith("https://")) {
        return file;
    }
    
    // Otherwise, build the Wikimedia link
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;
}
/* ============================================================
   TEMPLATES
   ============================================================ */

function homeTemplate() {
    return `
        <section class="hero">
            <div class="hero-content">
                <span class="hero-label">FORMULA 1 HISTORICAL ARCHIVE</span>
                <h1>THE <span>APEX</span><br>OF F1 HISTORY.</h1>
                <p>A complete Formula 1 archive covering every season from 2000 through 2025 — championships, Grand Prix results, drivers, rivalries, records and defining moments.</p>
                <button class="btn btn-primary" onclick="showSeasons()">EXPLORE THE SEASONS</button>
            </div>
        </section>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">26</div>
                <div class="stat-label">Seasons Archived</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">500+</div>
                <div class="stat-label">Grand Prix Results</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">2000–25</div>
                <div class="stat-label">Coverage</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">25</div>
                <div class="stat-label">Years of F1 History</div>
            </div>
        </div>

        <section class="section">
            <div class="section-heading">
                <div>
                    <h2>What is APEX F1?</h2>
                    <p>A historical record of the modern Formula 1 era.</p>
                </div>
            </div>

            <div class="card-grid">
                <div class="card">
                    <h3>Every Season</h3>
                    <p>Explore every championship from 2000 to 2025, including World Champions and Constructors' Champions.</p>
                </div>
                <div class="card">
                    <h3>Every Grand Prix</h3>
                    <p>Season pages retrieve the complete race results and identify the verified P1, P2 and P3 of every Grand Prix.</p>
                </div>
                <div class="card">
                    <h3>The Stories</h3>
                    <p>Rivalries, championship battles, records and moments that shaped Formula 1 history.</p>
                </div>
            </div>
        </section>
    `;
}

function seasonsTemplate() {
    let cards = "";
    for (let year = 2025; year >= 2000; year--) {
        const champion = seasonChampions[year];
        cards += `
            <div class="season-card" onclick="openSeason(${year})">
                <div class="season-year">${year}</div>
                <div class="season-champion">
                    <strong>Champion:</strong> ${escapeHTML(champion?.[0] || "-")}
                </div>
                <div class="season-champion">
                    <strong>Constructor:</strong> ${escapeHTML(champion?.[1] || "-")}
                </div>
            </div>
        `;
    }

    return `
        <div class="page">
            <h1 class="page-title">SEASONS</h1>
            <p class="page-subtitle">26 seasons of Formula 1 history. Select a season to see its championship standings and every Grand Prix podium.</p>
            <div class="season-grid">${cards}</div>
        </div>
    `;
}

/* ============================================================
   OPEN SEASON (RENDER DIRECTLY ON PAGE)
   ============================================================ */

function openSeason(year) {
    history.pushState({ page: "season" }, "", `#season-${year}`);
    setActive("seasons");

    const races = fullSeasonData[year] || [];
    const championInfo = seasonChampions[year] || ["Unknown", "Unknown"];

    let rows = "";
    races.forEach(race => {
        rows += `
            <tr>
                <td><strong>${escapeHTML(race.round)}</strong></td>
                <td><strong>${escapeHTML(race.gp)} Grand Prix</strong></td>
                <td class="p1">${escapeHTML(race.p1)}</td>
                <td class="p2">${escapeHTML(race.p2)}</td>
                <td class="p3">${escapeHTML(race.p3)}</td>
            </tr>
        `;
    });

    app.innerHTML = `
        <div class="page">
            <button class="btn btn-green" onclick="showSeasons()">← BACK TO SEASONS</button>
            <br><br>
            <h1 class="page-title">${year}</h1>
            <p class="page-subtitle">Formula 1 World Championship</p>

            <div class="card-grid" style="margin-top:35px;">
                <div class="card">
                    <h3>World Champion</h3>
                    <p>${escapeHTML(championInfo[0])}</p>
                </div>
                <div class="card">
                    <h3>Constructors' Champion</h3>
                    <p>${escapeHTML(championInfo[1])}</p>
                </div>
                <div class="card">
                    <h3>Grand Prix</h3>
                    <p>${races.length} verified race results</p>
                </div>
            </div>

            <section class="section" style="width:100%;">
                <div class="section-heading">
                    <div>
                        <h2>Grand Prix Podiums</h2>
                        <p>Complete verified podiums and race results for the ${year} season.</p>
                    </div>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>ROUND</th>
                                <th>GRAND PRIX</th>
                                <th>P1 (WINNER)</th>
                                <th>P2</th>
                                <th>P3</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    `;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   OTHER SECTIONS (DRIVERS, RECORDS, RIVALRIES, MOMENTS, DOCS)
   ============================================================ */

function driversTemplate() {
    let html = "";
    drivers.forEach(driver => {
        html += `
            <div class="driver-card" onclick="openDriver(${driver.rank})">
                <div class="driver-photo">
                    <img src="${driverImage(driver.image)}" alt="${escapeHTML(driver.name)}" loading="lazy" onerror="this.style.display='none'">
                </div>
                <div class="driver-info">
                    <span class="driver-rank">#${driver.rank}</span>
                    <div class="driver-name">${escapeHTML(driver.name)}</div>
                    <div class="driver-country">${escapeHTML(driver.country)}</div>
                </div>
            </div>
        `;
    });

    return `
        <div class="page">
            <h1 class="page-title">DRIVERS</h1>
            <p class="page-subtitle">Ten major drivers whose careers shaped the 2000–2025 era of Formula 1.</p>
            <p class="page-subtitle">Note:This list is according to APEX F1's ranking of the top drivers of the modern era.</p>
            <div class="driver-grid">${html}</div>
        </div>
    `;
}

function openDriver(rank) {
    const driver = drivers.find(d => d.rank === rank);
    if (!driver) return;

    setActive("drivers");
    app.innerHTML = `
        <div class="page">
            <button class="btn btn-green" onclick="showDrivers()">← BACK TO DRIVERS</button>
            <div class="profile">
                <div class="profile-image">
                    <img src="${driverImage(driver.image)}" alt="${escapeHTML(driver.name)}">
                </div>
                <div class="profile-content">
                    <h2>${escapeHTML(driver.name)}</h2>
                    <div class="profile-country">${escapeHTML(driver.country)} · ${escapeHTML(driver.years)}</div>
                    <p class="profile-summary">${escapeHTML(driver.summary)}</p>
                    <div class="profile-stats">
                        <div class="profile-stat"><strong>${driver.titles}</strong><span>World Titles</span></div>
                        <div class="profile-stat"><strong>${driver.wins}</strong><span>Wins</span></div>
                        <div class="profile-stat"><strong>${driver.podiums}</strong><span>Podiums</span></div>
                        <div class="profile-stat"><strong>#${driver.rank}</strong><span>APEX Ranking</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function recordsTemplate() {
    const records = [
        ["Most World Championships", "7", "Michael Schumacher & Lewis Hamilton"],
        ["Most wins", "105", "Lewis Hamilton"],
        ["Most wins in one season", "19", "Max Verstappen — 2023"],
        ["Most consecutive wins", "10", "Max Verstappen — 2023"],
        ["Closest title finish", "1 point", "2007 — Räikkönen over Hamilton & Massa"],
        ["2016 title margin", "5 points", "Nico Rosberg over Lewis Hamilton"],
        ["2025 title margin", "2 points", "Lando Norris over Max Verstappen"],
        ["Most consecutive titles in archive", "5", "Michael Schumacher — 2000–2004"]
    ];

    return `
        <div class="page">
            <h1 class="page-title">RECORDS</h1>
            <p class="page-subtitle">Numbers that define the 2000–2025 era.</p>
            <div class="record-grid">
                ${records.map(r => `
                    <div class="record-card">
                        <div class="record-label">${escapeHTML(r[0])}</div>
                        <div class="record-value">${escapeHTML(r[1])}</div>
                        <div class="record-detail">${escapeHTML(r[2])}</div>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function rivalriesTemplate() {
    const rivalries = [
        ["Schumacher vs Häkkinen", "2000–2001", "The closing chapter of one of F1's defining rivalries. Schumacher and Häkkinen fought for supremacy as Ferrari and McLaren battled at the front."],
        ["Alonso vs Räikkönen", "2005–2007", "Two elite drivers from the same generation repeatedly collided in championship fights involving Renault, McLaren and Ferrari."],
        ["Hamilton vs Rosberg", "2013–2016", "Mercedes teammates turned championship rivals. Their relationship reached its peak during the intense 2014–2016 title battles."],
        ["Hamilton vs Vettel", "2017–2018", "Ferrari and Mercedes fought for control of the championship while Vettel and Hamilton became the sport's central protagonists."],
        ["Hamilton vs Verstappen", "2021", "One of Formula 1's most intense modern championship battles culminated in the controversial Abu Dhabi finale."],
        ["Verstappen vs Norris vs Piastri", "2024–2025", "A new generation emerged as Verstappen faced increasingly strong McLaren opposition from Norris and Piastri."]
    ];

    return `
        <div class="page">
            <h1 class="page-title">RIVALRIES</h1>
            <p class="page-subtitle">The drivers and teams that defined the battles.</p>
            <div class="card-grid" style="margin-top:35px;">
                ${rivalries.map(item => `
                    <div class="card">
                        <span class="driver-rank">${escapeHTML(item[1])}</span>
                        <h3>${escapeHTML(item[0])}</h3>
                        <p>${escapeHTML(item[2])}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function momentsTemplate() {
    const moments = [
        ["08 October 2000", "Schumacher ends Ferrari's title drought", "Michael Schumacher secured the 2000 World Championship at Suzuka, giving Ferrari its first drivers' title since 1979."],
        ["25 September 2005", "Alonso becomes World Champion", "Fernando Alonso became the youngest World Champion at the time and ended Schumacher's five-year championship run."],
        ["21 October 2007", "Räikkönen wins by one point", "Kimi Räikkönen overturned a seven-point deficit at the final round to win the championship by a single point."],
        ["02 November 2008", "Hamilton's last-corner championship", "Lewis Hamilton clinched his first World Championship on the final lap of the Brazilian Grand Prix."],
        ["18 October 2009", "Brawn's extraordinary season", "Jenson Button and Brawn GP completed one of the most remarkable championship campaigns in modern F1."],
        ["25 November 2012", "Vettel's third title", "Sebastian Vettel survived a chaotic Brazilian Grand Prix to secure his third consecutive championship."],
        ["27 November 2016", "Rosberg becomes champion", "Nico Rosberg finally defeated Lewis Hamilton for the title and announced his retirement shortly afterwards."],
        ["12 December 2021", "The Abu Dhabi finale", "Max Verstappen overtook Lewis Hamilton on the final lap to win his first World Championship."],
        ["03 September 2023", "Ten consecutive wins", "Verstappen won the Italian Grand Prix for his record-breaking tenth consecutive victory."],
        ["26 November 2023", "19 wins in one season", "Verstappen completed the 2023 season with 19 victories from 22 Grands Prix."],
        ["01 December 2024", "Fourth consecutive title", "Max Verstappen secured his fourth World Championship in Las Vegas."],
        ["07 December 2025", "Norris becomes champion", "Lando Norris won the 2025 World Championship by two points in one of the closest modern title fights."]
    ];

    return `
        <div class="page">
            <h1 class="page-title">MOMENTS</h1>
            <p class="page-subtitle">Defining moments from 25 years of Formula 1.</p>
            <div class="timeline">
                ${moments.map(m => `
                    <div class="timeline-item">
                        <div class="timeline-date">${escapeHTML(m[0])}</div>
                        <h3>${escapeHTML(m[1])}</h3>
                        <p>${escapeHTML(m[2])}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function documentationTemplate() {
    return `
        <div class="page">
            <h1 class="page-title">DOCUMENTATION</h1>
            <p class="page-subtitle">What APEX F1 is, how the archive works and who manages it.</p>
            <div class="documentation">
                <h3>About APEX F1</h3>
                <p>APEX F1 is an independent historical archive covering Formula 1 from 2000 through 2025.</p>
                <h3>Managed by Samyam</h3>
                <p>APEX F1 was designed and built by <strong> Samyam Ojha</strong>.</p>
            </div>
        </div>
    `;
}

/* ============================================================
   INITIAL LOAD & NAVIGATION
   ============================================================ */

window.addEventListener("popstate", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "seasons") showSeasons();
    else if (hash === "drivers") showDrivers();
    else if (hash === "records") showRecords();
    else if (hash === "rivalries") showRivalries();
    else if (hash === "moments") showMoments();
    else if (hash === "documentation") showDocumentation();
    else if (hash.startsWith("season-")) {
        const year = hash.replace("season-", "");
        openSeason(year);
    } else showHome();
});

showHome();