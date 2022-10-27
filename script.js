window.onload = () => {
    // Variable declaration for the header dropdown
    navdropdown = document.getElementsByClassName("navDropdown")[0];
    headerdropdown = document.getElementsByClassName("headerDropdown")[0];
    // Toggle the dropdown when clicked
    navdropdown.addEventListener("click", () => {
        if (navdropdown.classList.contains("toggled")) {
            navdropdown.classList.remove("toggled");
            headerdropdown.classList.remove("headerOpen");
        } else {
            navdropdown.classList.add("toggled");
            headerdropdown.classList.add("headerOpen");
        }
    })
    // Variable declaration for the dropdowns in the footer
    footerdropdowns = document.getElementsByClassName("footerItem");
    footertitles = document.getElementsByClassName("footerItemTitle");
    // Add an event listener for all dropdowns to toggle them
    Array.prototype.forEach.call(footertitles, (footertitle, index) => {
        footertitle.addEventListener("click", () => {
            if (footerdropdowns[index].classList.contains("opened")) {
                footerdropdowns[index].classList.remove("opened");
            } else {
                footerdropdowns[index].classList.add("opened");
            }
        })
    })
}