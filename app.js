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

function updateProgress(value) {
  const progress = document.getElementById("progress");
  const checkboxes = document.querySelectorAll(
    '.inner-accordion input[type="checkbox"]:checked'
  );
  const percentage = (checkboxes.length / 5) * 100;
  progress.style.width = `${percentage}%`;
}

function resetCheckElement(check) {
  const initialSvg = check.querySelector(".initialSvg");
  const circleHover = check.querySelector(".circle-hover");
  const rotateSvg = check.querySelector(".rotateSvg");
  const finalSvg = check.querySelector(".finalSvg");

  if (finalSvg.classList.contains("check-show")) {
    // Check if the 'check-show' class is still present in finalSvg
    initialSvg.classList.remove("check-hide");
    circleHover.classList.remove("check-show");
    rotateSvg.classList.remove("check-show");
    rotateSvg.style.transform = ""; // Reset the transform property
    finalSvg.classList.remove("check-show");

    // Reattach event listeners
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

  setTimeout(() => {
    check.addEventListener("mouseover", handleMouseOver);
    check.addEventListener("mouseleave", handleMouseLeave);
    check.addEventListener("click", handleClick);

    const finalSvgElements = check.querySelectorAll(".finalSvg");
    finalSvgElements.forEach((finalSvg, index) => {
      finalSvg.addEventListener("click", () =>
        handleFinalSvgClick(check, index)
      );
    });
  }, 1000);
}

function handleMouseOver() {
  const initialSvg = this.querySelector(".initialSvg");
  const circleHover = this.querySelector(".circle-hover");

  initialSvg.classList.add("check-hide");
  circleHover.classList.add("check-show");
}

function handleMouseLeave() {
  const initialSvg = this.querySelector(".initialSvg");
  const circleHover = this.querySelector(".circle-hover");

  initialSvg.classList.remove("check-hide");
  circleHover.classList.remove("check-show");
}

function handleClick() {
  const check = this;
  const initialSvg = check.querySelector(".initialSvg");
  const circleHover = check.querySelector(".circle-hover");
  const rotateSvg = check.querySelector(".rotateSvg");
  const finalSvg = check.querySelector(".finalSvg");

  initialSvg.classList.add("check-hide");
  circleHover.classList.remove("check-show");
  rotateSvg.classList.add("check-show");

  setTimeout(() => {
    rotateSvg.style.transform = "rotate(360deg)";
    setTimeout(() => {
      rotateSvg.classList.remove("check-show");
      finalSvg.classList.add("check-show");
    }, 300);
  }, 0);

  // Remove event listeners on "check" element
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

// Rest of your existing code...
for (let i = 1; i <= 5; i++) {
  const check = document.getElementById(`check${i}`);
  const finalSvgElements = check.querySelectorAll(".finalSvg");

  // Add event listeners to each item
  check.addEventListener("mouseover", handleMouseOver);
  check.addEventListener("mouseleave", handleMouseLeave);
  check.addEventListener("click", handleClick);

  finalSvgElements.forEach((finalSvg, index) => {
    finalSvg.addEventListener("click", () => handleFinalSvgClick(check, index));
  });
}

function handleFinalSvgClick(check, index) {
  const finalSvg = check.querySelector(".finalSvg");
  const initialSvg = check.querySelector(".initialSvg");

  finalSvg.classList.remove("check-show");
  initialSvg.classList.remove("check-hide");
  resetCheckElement(check);
}

// const mainAccordion = document.querySelector(".main-accordion");
// const subAccordion = mainAccordion.querySelector(".sub-accordion");
// const accordionIcon = mainAccordion.querySelector(".accordion-icon");
// const accordions = subAccordion.querySelectorAll('.accordion');
// const accordionsImg = document.querySelectorAll('.accordion img');

// function toggleAccordionIcon() {
//   const path = accordionIcon.querySelector("path");
//   if (
//     path.getAttribute("d") ===
//     "M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z"
//   ) {
//     // Change to the second SVG path data
//     path.setAttribute(
//       "d",
//       "M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z"
//     );
//   } else {
//     // Change back to the original SVG path data
//     path.setAttribute(
//       "d",
//       "M14.5303 12.2803C14.2374 12.5732 13.7626 12.5732 13.4697 12.2803L10 8.81066L6.53033 12.2803C6.23744 12.5732 5.76256 12.5732 5.46967 12.2803C5.17678 11.9874 5.17678 11.5126 5.46967 11.2197L9.46967 7.21967C9.76256 6.92678 10.2374 6.92678 10.5303 7.21967L14.5303 11.2197C14.8232 11.5126 14.8232 11.9874 14.5303 12.2803Z"
//     );
//   }
// }

// accordionIcon.addEventListener("click", function () {
//   subAccordion.classList.toggle("open");
//   toggleAccordionIcon();
// });

// accordions.forEach((accordion, index) => {
//   accordion.addEventListener("click", function () {
//     accordion.classList.toggle("sub-open");
//     accordionsImg.forEach((img) => {
//       img.classList.toggle("img-show");
//     })
//   })
// })

const mainAccordion = document.querySelector(".main-accordion");
const accordions = document.querySelectorAll(".accordion");
const accordionsImg = document.querySelectorAll(".accordion img");
const subAccordion = mainAccordion.querySelector(".sub-accordion");
const accordionIcon = mainAccordion.querySelector(".accordion-icon");
const panelSmall = mainAccordion.querySelectorAll(".panel-small");
const accordionLabel = mainAccordion.querySelectorAll(".accordion-label");

function closeAllAccordions() {
  accordions.forEach((accordion, index) => {
    accordion.classList.remove("sub-open");
    accordionsImg[index].classList.remove("accord-show");
    panelSmall[index].classList.remove("accord-show");
    accordionLabel[index].style.fontWeight = "500";
  });
}

function toggleAccordionIcon(accordionIcon) {
  const path = accordionIcon.querySelector("path");
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

mainAccordion.addEventListener("click", function (event) {
  const clickedAccordion = event.target.closest(".accordion");
  if (clickedAccordion) {
    closeAllAccordions();
    const index = Array.from(accordions).indexOf(clickedAccordion);
    clickedAccordion.classList.toggle("sub-open");
    accordionsImg[index].classList.toggle("accord-show");
    panelSmall[index].classList.toggle("accord-show");
    accordionLabel[index].style.fontWeight = "600";
  }
});

accordionIcon.addEventListener("click", function () {
  subAccordion.classList.toggle("open");
  toggleAccordionIcon(mainAccordion.querySelector(".accordion-icon"));
});


const checkDivs = document.querySelectorAll('.check');
const counterElement = document.querySelector('.counter');
const progressBarElement = document.getElementById('progress');

let completedCount = 0;

checkDivs.forEach((checkDiv, index) => {
  checkDiv.addEventListener('click', function () {
    const isChecked = checkDiv.classList.toggle('checked');

    if (isChecked) {
      completedCount++;
    } else {
      completedCount--;
    }

    updateCounterAndProgress();
  });
});

function updateCounterAndProgress() {
  const totalCount = checkDivs.length;

  const progressPercentage = (completedCount / totalCount) * 100;
  progressBarElement.style.width = `${progressPercentage}%`;

  counterElement.textContent = `${completedCount} / ${totalCount} completed`;
}

updateCounterAndProgress();



// window.addEventListener('load', function () {
//   // Get the element you want to animate
//   let element1 = document.querySelector('nav');
//   let element2 = document.querySelector('.box');
//   let element3 = document.querySelector('.main-accordion');
  
//   // Add a class to trigger the animation
//   element1.classList.add('animate-on-load');
//   element2.classList.add('animate-on-load2');
//   element3.classList.add('animate-on-load3');
// });

