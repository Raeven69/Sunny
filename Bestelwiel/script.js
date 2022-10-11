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
    refreshSocks();
}

function selectBackward()
{
    currentSelected = currentSelected-1;
    if (currentSelected < 0) { currentSelected = 4; }
    refreshSocks();
}

function refreshSocks()
{
    Array.prototype.forEach.call(document.getElementsByClassName("socksBestelwielImg"), (element, index) => {
      element.style.left = `${(index === 0 ? 37 : 45+(index-2)*5)}%`;
      element.style.bottom = `${40+Math.abs(index-2)*2}%`;
      element.style.width = `${180+Math.abs(index-2)*-20}px`;
      element.style.zIndex = `${3+Math.abs(index-2)*-1}`;
      element.src = socksImages[(index+currentSelected)%5];
    })
}