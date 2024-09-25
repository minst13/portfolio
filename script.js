// document.addEventListener('DOMContentLoaded', function () {
//     // Select all tab links
//     const tabLinks = document.querySelectorAll('.tab-links');

//     // Add click event listener to each tab link
//     tabLinks.forEach(function (tab) {
//         tab.addEventListener('click', function () {
//             // Remove active class from all tab links
//             tabLinks.forEach(function (link) {
//                 link.classList.remove('active');
//             });

//             // Add active class to the clicked tab link
//             tab.classList.add('active');

//             // Hide all tab contents
//             hideAllTabContents();

//             // Show the corresponding tab content based on the clicked tab
//             if (tab.classList.contains('active-skills')) {
//                 document.getElementById('skills').style.display = 'block';
//             } else if (tab.classList.contains('active-experience')) {
//                 document.getElementById('experience').style.display = 'block';
//             } else if (tab.classList.contains('active-education')) {
//                 document.getElementById('Education').style.display = 'block';
//             }
//         });
//     });

//     // Function to hide all tab contents
//     function hideAllTabContents() {
//         const tabContents = document.querySelectorAll('.tabContents');
//         tabContents.forEach(function (content) {
//             content.style.display = 'none';
//         });
//     }

//     // Initially hide all content except the first one
//     hideAllTabContents();
//     document.getElementById('skills').style.display = 'block'; // Show Skills by default
// });



const tablinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tabContents");

// Adding event listeners to all tab links
tablinks.forEach(function (tablink, index) {
    tablink.addEventListener('click', function (e) {
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

