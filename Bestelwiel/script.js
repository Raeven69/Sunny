var socksImages = [
    "../img/sockYellow.png",
    "../img/sockRed.png",
    "../img/sockCyan.png",
    "../img/sockPink.png",
    "../img/sockBlue.png"
];

var currentSelected = 0;

window.onload = () => {
    refreshSocks();
}

function selectForward()
{
    currentSelected = (currentSelected+1)%5;
    refreshSocks(-1);
}

function selectBackward()
{
    currentSelected = currentSelected-1;
    if (currentSelected < 0) { currentSelected = 4; }
    refreshSocks(1);
}

function refreshSocks(mod = 0)
{
    Array.prototype.forEach.call(document.getElementsByClassName("socksBestelwielImg"), (element, index) => {
        let pos = index + mod;
        if (pos < 0) { pos = 4; }
        if (pos > 4) { pos = 0; }
        if (mod != 0) { element.style.transition = "all 0.2s linear"; }
        else { element.style.transition = "none"; }
        element.style.left = `${45+(pos-2)*5.5}%`;
        element.style.bottom = `${40+Math.abs(pos-2)*2}%`;
        element.style.width = `${180+Math.abs(pos-2)*-20}px`;
        element.style.zIndex = `${3+Math.abs(pos-2)*-1}`;
        if (mod == 0) { element.src = socksImages[(pos+currentSelected)%5]; }
    })

    if (mod != 0) {
        window.setTimeout(function () {
            refreshSocks();
        }, 200);
    }
}