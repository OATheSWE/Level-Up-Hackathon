// CODE FOR NAVBAR DROPDOWN ANIMATION
const dropdowns = document.querySelectorAll(".drp");
const dropdownsBtn = document.querySelectorAll(".drp-btn");

for(let i = 0; i < dropdownsBtn.length; i++) {
    dropdownsBtn[i].addEventListener("click", function () {
        for(j = 0; j < dropdowns.length; j++) {
            dropdowns[j].classList.toggle("drp-anim");
        }
    })
}