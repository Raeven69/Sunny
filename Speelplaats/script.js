window.onload = () => {
    Array.prototype.forEach.call(document.getElementsByClassName("socksSpeelplaatsImg"), (element, index) => {
        element.style.left = `${25+(index-2)*10}%`;
    })
}