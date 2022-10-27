window.onload = () => {
    navdropdown = document.getElementsByClassName("navDropdown")[0]
    headerdropdown = document.getElementsByClassName("headerDropdown")[0]
    sokkenImgs = document.getElementsByClassName("socksBestelwielImg")
    navdropdown.addEventListener("click", () => {
        if (navdropdown.classList.contains("toggled")) {
            navdropdown.classList.remove("toggled");
            headerdropdown.classList.remove("headerOpen")
            Array.prototype.forEach.call(sokkenImgs, (element) => {
              element.style.marginTop = `0px`;
            })
        } else {
            navdropdown.classList.add("toggled");
            headerdropdown.classList.add("headerOpen");
            Array.prototype.forEach.call(sokkenImgs, (element) => {
              element.style.marginTop = `263.2px`;
            })
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