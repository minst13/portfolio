
const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tabContents");


tablinks.forEach(function (tablink, index) {
    tablink.addEventListener("click", function (e) {
        opentab(e, index);
    });
});

function opentab(e, index) {
    tablinks.forEach(function (tablink) {
        tablink.classList.remove("active-tab");
    });


    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove("active-Content");
    });

    e.currentTarget.classList.add("active-tab");

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
