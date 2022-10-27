window.onload = () => {
    navdropdown = document.getElementsByClassName("navDropdown")[0]
    headerdropdown = document.getElementsByClassName("headerDropdown")[0]
    navdropdown.addEventListener("click", () => {
        if (navdropdown.classList.contains("toggled")) {
            navdropdown.classList.remove("toggled");
            headerdropdown.classList.remove("headerOpen")
        } else {
            navdropdown.classList.add("toggled");
            headerdropdown.classList.add("headerOpen");
        }
    })
    footerdropdowns = document.getElementsByClassName("footerItem");
    footertitles = document.getElementsByClassName("footerItemTitle");
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