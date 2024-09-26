const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tabContents");

// Adding event listeners to all tab links
tablinks.forEach(function (tablink, index) {
    tablink.addEventListener("click", function (e) {
        // Call a function to handle the tab activation
        opentab(e, index);
    });
});

// Function to open the clicked tab and show the corresponding content
function opentab(e, index) {
    // Remove 'active-tab' from all tab links
    tablinks.forEach(function (tablink) {
        tablink.classList.remove("active-tab");
    });

    // Remove 'active-Content' from all tab contents
    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove("active-Content");
    });

    // Add 'active-tab' to the clicked tab link (using e.currentTarget)
    e.currentTarget.classList.add("active-tab");

    // Add 'active-Content' to the corresponding tab content
    tabContents[index].classList.add("active-Content");
}

const closeBtn = document.querySelector(".fa-solid.fa-xmark");
const openBtn = document.querySelector(".fa-solid.fa-bars");
const sideBar = document.querySelector("#sideBar");

function openMenu() {
    sideBar.style.right = "0";
    openBtn.style.display = "none";
}

function closeMenu() {
    sideBar.style.right = "-200px";
    openBtn.style.display = "block";
}

closeBtn.addEventListener("click", closeMenu)
openBtn.addEventListener("click", openMenu)
