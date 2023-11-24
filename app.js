// CODE FOR NAVBAR DROPDOWN ANIMATION

// Get references to all dropdowns and dropdown buttons
const dropdowns = document.querySelectorAll(".drp");
const dropdownsBtn = document.querySelectorAll(".drp-btn");

// Function to toggle the dropdown animation for a specific index
function toggleDropdownAnimation(index) {
    dropdowns[index].classList.toggle("drp-anim");
}

// Function to close all dropdowns
function closeAllDropdowns() {
    // Iterate through all dropdowns and remove the "drp-anim" class
    for (let j = 0; j < dropdowns.length; j++) {
        dropdowns[j].classList.remove("drp-anim");
    }
}

// Event listeners for dropdown buttons
for (let i = 0; i < dropdownsBtn.length; i++) {
    dropdownsBtn[i].addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the document
        toggleDropdownAnimation(i); // Toggle the dropdown animation for the clicked button
    });
}

// Event listener added to the document to close all dropdowns when clicking outside of them
document.addEventListener("click", function () {
    closeAllDropdowns();
});

// Additional event listeners to prevent propagation for dropdowns themselves
for (let j = 0; j < dropdowns.length; j++) {
    dropdowns[j].addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the document
    });
}




