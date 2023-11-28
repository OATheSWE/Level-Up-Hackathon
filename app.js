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
  activeDropdown = dropdowns[index].classList.contains("drp-anim")
    ? dropdowns[index]
    : null;
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


// CODE FOR KEYBOARD USERS TO NAVIGATE THE PROFILE DROPDOWN

document.addEventListener('DOMContentLoaded', function () {
 
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');

  dropdowns[1].addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault();
          const index = Array.from(dropdownLinks).indexOf(document.activeElement);
          const nextIndex = (event.key === 'ArrowDown') ? (index + 1) % dropdownLinks.length : (index - 1 + dropdownLinks.length) % dropdownLinks.length;
          dropdownLinks[nextIndex].focus();
      } else if (event.key === 'Escape') {
          dropdowns[1].focus();
      }
  });
});

// CODE TO HIDE BOX SECTION FROM THE PAGE

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


// CODE FOR CHECKING AND UNCHECKING THE SVG

// Function to reset the check element to its initial state
function resetCheckElement(check) {
  const initialSvg = check.querySelector(".initialSvg");
  const circleHover = check.querySelector(".circle-hover");
  const rotateSvg = check.querySelector(".rotateSvg");
  const finalSvg = check.querySelector(".finalSvg");

  // Check if the 'check-show' class is still present in finalSvg
  if (finalSvg.classList.contains("check-show")) {
    // Reset the state of the check element
    initialSvg.classList.remove("check-hide");
    circleHover.classList.remove("check-show");
    rotateSvg.classList.remove("check-show");
    rotateSvg.style.transform = ""; // Reset the transform property
    finalSvg.classList.remove("check-show");

    // Reattach event listeners
    addCheckEventListeners(check);
  }

  // Reattach event listeners after a delay
  setTimeout(() => {
    addCheckEventListeners(check);
  }, 1000);
}

// Function to handle mouseover event
function handleMouseOver() {
  const initialSvg = this.querySelector(".initialSvg");
  const circleHover = this.querySelector(".circle-hover");

  // Show hover effect
  initialSvg.classList.add("check-hide");
  circleHover.classList.add("check-show");
}

// Function to handle mouseleave event
function handleMouseLeave() {
  const initialSvg = this.querySelector(".initialSvg");
  const circleHover = this.querySelector(".circle-hover");

  // Remove hover effect
  initialSvg.classList.remove("check-hide");
  circleHover.classList.remove("check-show");
}

// Function to handle click event
function handleClick() {
  const check = this;
  const initialSvg = check.querySelector(".initialSvg");
  const circleHover = check.querySelector(".circle-hover");
  const rotateSvg = check.querySelector(".rotateSvg");
  const finalSvg = check.querySelector(".finalSvg");

  // Change state to indicate loading
  initialSvg.classList.add("check-hide");
  circleHover.classList.remove("check-show");
  rotateSvg.classList.add("check-show");

  // Rotate the loading icon and reveal the final state
  setTimeout(() => {
    rotateSvg.style.transform = "rotate(360deg)";
    setTimeout(() => {
      rotateSvg.classList.remove("check-show");
      finalSvg.classList.add("check-show");
    }, 300);
  }, 0);
  
  check.removeAttribute("tabindex");

  finalSvg.setAttribute("tabindex", "0");

  const index = Array.from(document.querySelectorAll(".check")).indexOf(check);
  executeAccordionLogic(index);

  // Remove event listeners on "check" element
  removeCheckEventListeners(check);
}

// Function to add event listeners to a check element
function addCheckEventListeners(check) {
  check.addEventListener("mouseover", handleMouseOver);
  check.addEventListener("mouseleave", handleMouseLeave);
  check.addEventListener("click", handleClick);

  const finalSvgElements = check.querySelectorAll(".finalSvg");
  finalSvgElements.forEach((finalSvg, index) => {
    finalSvg.addEventListener("click", () =>
      handleFinalSvgClick(check, index)
    );
  });
}

// Function to remove event listeners from a check element
function removeCheckEventListeners(check) {
  check.removeEventListener("mouseover", handleMouseOver);
  check.removeEventListener("mouseleave", handleMouseLeave);
  check.removeEventListener("click", handleClick);

  const finalSvgElements = check.querySelectorAll(".finalSvg");
  finalSvgElements.forEach((finalSvg, index) => {
    finalSvg.removeEventListener("click", () =>
      handleFinalSvgClick(check, index)
    );
  });
}


function tabClickEvent(element) {
  // Trigger a click event on the specified element
  const clickEvent = new Event("click");
  element.dispatchEvent(clickEvent);
}

// Loop through elements with ids "check1" to "check5"
for (let i = 1; i <= 5; i++) {
  // Get the check element using the current index
  const check = document.getElementById(`check${i}`);

  // Get all elements with class "finalSvg" within the current check element
  const finalSvgElements = check.querySelectorAll(".finalSvg");

  // Add event listeners to the check element
  check.addEventListener("mouseover", handleMouseOver);
  check.addEventListener("mouseleave", handleMouseLeave);
  check.addEventListener("click", handleClick);
  check.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      tabClickEvent(check);
    }
  });


  // Add click event listeners to each finalSvg element within the check element
  finalSvgElements.forEach((finalSvg, index) => {
    finalSvg.addEventListener("click", () => handleFinalSvgClick(check, index));
    finalSvg.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        tabClickEvent(finalSvg);
      }
    });
  });
}

// Function to handle click events on finalSvg elements within a check element
function handleFinalSvgClick(check, index) {
  // Get the finalSvg and initialSvg elements within the current check element
  const finalSvg = check.querySelector(".finalSvg");
  const initialSvg = check.querySelector(".initialSvg");

  // Remove the "check-show" class from finalSvg and "check-hide" class from initialSvg
  finalSvg.classList.remove("check-show");
  initialSvg.classList.remove("check-hide");

  finalSvg.removeAttribute("tabindex");

  check.setAttribute("tabindex", "0");

  // Reset the check element to its initial state
  resetCheckElement(check);
}


// CODE FOR MAIN ACCORDION & SUB ACCORDIONS



// Selecting DOM elements related to the accordion functionality
const mainAccordion = document.querySelector(".main-accordion");
const accordions = document.querySelectorAll(".accordion");
const accordionsImg = document.querySelectorAll(".accordion img");
const subAccordion = mainAccordion.querySelector(".sub-accordion");
const accordionIcon = mainAccordion.querySelector(".accordion-icon");
const panelSmall = mainAccordion.querySelectorAll(".panel-small");
const accordionLabel = mainAccordion.querySelectorAll(".accordion-label");

// Function to close all accordions
function closeAllAccordions() {
  accordions.forEach((accordion, index) => {
    // Remove classes and reset styles for each accordion item
    accordion.classList.remove("sub-open");
    accordionsImg[index].classList.remove("accord-show");
    panelSmall[index].classList.remove("accord-show");
    accordionLabel[index].style.fontWeight = "500";
  });
}

// Function to toggle the state of the accordion icon
function toggleAccordionIcon(accordionIcon) {
  const path = accordionIcon.querySelector("path");
  
  // Check the current state of the path and toggle it
  if (
    path.getAttribute("d") ===
    "M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z"
  ) {
    path.setAttribute(
      "d",
      "M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z"
    );
  } else {
    path.setAttribute(
      "d",
      "M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z"
    );
  }
}

// Open the first accordion by default
accordions[0].classList.add("sub-open");
accordionsImg[0].classList.add("accord-show");
panelSmall[0].classList.add("accord-show");
accordionLabel[0].style.fontWeight = "600";

// Event listener for click on the main accordion
mainAccordion.addEventListener("click", function (event) {
  // Check if the clicked element is an accordion item
  const clickedAccordion = event.target.closest(".accordion");
  if (clickedAccordion) {
    // Close all accordions and toggle the state of the clicked accordion
    closeAllAccordions();
    const index = Array.from(accordions).indexOf(clickedAccordion);
    clickedAccordion.classList.toggle("sub-open");
    accordionsImg[index].classList.toggle("accord-show");
    panelSmall[index].classList.toggle("accord-show");
    accordionLabel[index].style.fontWeight = "600";
  }
});

// FOR KEYBOARD USERS TO USE THE CHECKBOX TO OPEN ACCORDIONS
function executeAccordionLogic(index) {
  // Close all accordions and toggle the state of the clicked accordion
  closeAllAccordions();
  accordions[index].classList.toggle("sub-open");
  accordionsImg[index].classList.toggle("accord-show");
  panelSmall[index].classList.toggle("accord-show");
  accordionLabel[index].style.fontWeight = "600";
}

// Event listener for click on the accordion icon
accordionIcon.addEventListener("click", function () {
  // Toggle the state of the subAccordion
  subAccordion.classList.toggle("open");
  toggleAccordionIcon(mainAccordion.querySelector(".accordion-icon"));
});

accordionIcon.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    subAccordion.classList.toggle("open");
    toggleAccordionIcon(mainAccordion.querySelector(".accordion-icon"));
  }
});




// CODE FOR COUNTER AND PROGESS BAR


// Selecting DOM elements related to the check functionality
const checkDivs = document.querySelectorAll('.check');
const counterElement = document.querySelector('.counter');
const progressBarElement = document.getElementById('progress');

// Variable to track the number of completed checks
let completedCount = 0;

// Add click event listeners to each check element
checkDivs.forEach((checkDiv, index) => {
  checkDiv.addEventListener('click', function () {
    // Toggle the 'checked' class on the clicked check element
    const isChecked = checkDiv.classList.toggle('checked');

    // Update completedCount based on the state of the check element
    if (isChecked) {
      completedCount++;
    } else {
      completedCount--;
    }

    // Update counter and progress bar
    updateCounterAndProgress();
  });
});

// Function to update the counter and progress bar based on completedCount
function updateCounterAndProgress() {
  // Calculate total number of check elements
  const totalCount = checkDivs.length;

  // Calculate the percentage of completed checks
  const progressPercentage = (completedCount / totalCount) * 100;

  // Update the width of the progress bar
  progressBarElement.style.width = `${progressPercentage}%`;

  // Update the text content of the counter element
  counterElement.textContent = `${completedCount} / ${totalCount} completed`;
}

// Initial update to set the counter and progress bar based on the initial state
updateCounterAndProgress();





// Event listener for when the window has finished loading


window.addEventListener('DOMContentLoaded', function () {
  // Get the elements you want to animate
  let element1 = document.querySelector('nav');
  let element2 = document.querySelector('.box');
  let element3 = document.querySelector('.main-accordion');
  
  // Add a class to trigger the animation for each element
  element1.classList.add('animate-on-load');
  element2.classList.add('animate-on-load2');
  element3.classList.add('animate-on-load3');
});

