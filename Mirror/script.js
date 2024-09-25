// Initialize an empty list of mirrors
let defacedSites = [];

// Reference to the list in the HTML
const defaceList = document.getElementById("deface-list");

// Load any existing mirrors from localStorage (optional for local storage support)
if (localStorage.getItem("defacedSites")) {
    defacedSites = JSON.parse(localStorage.getItem("defacedSites"));
    renderList();
}

// Function to add a new defaced site to the list
document.getElementById("submitForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input values
    const siteUrl = document.getElementById("site-url").value;
    const mirrorLink = document.getElementById("mirror-link").value;

    // Create a new site object
    const newSite = {
        url: siteUrl,
        mirror: mirrorLink,
        date: new Date().toLocaleDateString()
    };

    // Add the new site to the list
    defacedSites.push(newSite);

    // Save to localStorage (optional)
    localStorage.setItem("defacedSites", JSON.stringify(defacedSites));

    // Render the updated list
    renderList();

    // Reset the form
    document.getElementById("submitForm").reset();
});

// Function to render the list of defaced sites
function renderList() {
    defaceList.innerHTML = "";
    defacedSites.forEach(site => {
        const listItem = document.createElement("li");
        listItem.innerHTML = 
            <strong>Website:</strong> <a href="${site.url}" target="_blank">${site.url}</a><br>
            <strong>Mirror:</strong> <a href="${site.mirror}" target="_blank">${site.mirror}</a><br>
            <strong>Date:</strong> ${site.date}
        ;
        defaceList.appendChild(listItem);
    });
}
