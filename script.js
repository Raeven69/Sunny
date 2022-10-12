window.onload = () => {
    element = document.getElementsByClassName("navDropdown")[0]
    element.addEventListener("click", () => {
        if (element.classList.contains("toggled")) {
            element.classList.remove("toggled");
        } else {
            element.classList.add("toggled");
        }
    })
}