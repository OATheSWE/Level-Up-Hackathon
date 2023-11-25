// CODE FOR NAVBAR DROPDOWN ANIMATION

// Get references to all dropdowns and dropdown buttons
const dropdowns = document.querySelectorAll(".drp");
const dropdownsBtn = document.querySelectorAll(".drp-btn");

// Variable to keep track of the currently open dropdown
let activeDropdown = null;

// Function to toggle the dropdown animation for a specific index
function toggleDropdownAnimation(index) {
  if (activeDropdown !== null && activeDropdown !== dropdowns[index]) {
    // Close the currently open dropdown if it's not the one being toggled
    activeDropdown.classList.remove("drp-anim");
  }

  // Toggle the animation class for the clicked button
  dropdowns[index].classList.toggle("drp-anim");
  activeDropdown = dropdowns[index].classList.contains("drp-anim") ? dropdowns[index] : null;
}

// Event listeners for dropdown buttons
for (let i = 0; i < dropdownsBtn.length; i++) {
  dropdownsBtn[i].addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the click event from reaching the document
    toggleDropdownAnimation(i); // Toggle the dropdown animation for the clicked button
  });
  dropdownsBtn[i].addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Prevents the default behavior (e.g., scrolling)
      toggleDropdownAnimation(i); // Toggle the dropdown animation for the clicked button
    }
  });
}

// Event listener added to the document to close the dropdown when clicking outside of it
document.addEventListener("click", function () {
  if (activeDropdown !== null) {
    activeDropdown.classList.remove("drp-anim");
    activeDropdown = null;
  }
});






// CODE TO HIDE BOX FROM THE PAGE

// Get reference to the cancel icon and the box
const cancelIcon = document.getElementById("cancelIcon");
const box = document.getElementById("myBox");


// Event Listeners for the cancel icon
cancelIcon.addEventListener("click", function () {
  box.classList.add("box-anim");
});
cancelIcon.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    // Trigger the button click or perform the desired action
    box.classList.add("box-anim");
  }
});
