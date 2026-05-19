const searchInput =
document.getElementById("searchInput");

const toolCards =
document.querySelectorAll(".tool-card");

const categoryButtons =
document.querySelectorAll(".category-btn");

let currentCategory = "all";


// MAIN FILTER FUNCTION
function filterCards() {

    const searchText =
    searchInput.value.toLowerCase();

    toolCards.forEach(card => {

        const title =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        const description =
        card.querySelector("p")
        .textContent
        .toLowerCase();

        const category =
        card.dataset.category.toLowerCase();

        // SEARCH MATCH
        const searchMatch =
            title.includes(searchText) ||
            description.includes(searchText) ||
            category.includes(searchText);

        // CATEGORY MATCH
        const categoryMatch =
            currentCategory === "all" ||
            category === currentCategory;

        // SHOW/HIDE
        if(searchMatch && categoryMatch) {

            card.style.display = "block";
        }
        else {

            card.style.display = "none";
        }
    });
}


// SEARCH EVENT
searchInput.addEventListener(
    "keyup",
    filterCards
);


// CATEGORY BUTTON EVENTS
categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentCategory =
        button.dataset.category;

        filterCards();
    });
});
const logoutBtn =
document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    alert("Logged Out Successfully");

    window.location.href = "login.html";
});