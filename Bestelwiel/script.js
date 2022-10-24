var socksImages = [
    "../img/sockYellow.png",
    "../img/sockRed.png",
    "../img/sockCyan.png",
    "../img/sockPink.png",
    "../img/sockBlue.png"
];

var currentSelected = 0;

const FEITJES = [
    "Sunny Socks begonnen is al grap onder een paar vrienden: “sokken met witte strepen zouden niet verkopen” maar na ruim 23 jaar verkopen we ze nog steeds",
    "Materialen 100% natuurlijk en eerlijk zijn",
    "Sunny Socks meer sokken verkocht heeft inmiddels dan er voeten in Nederland zijn",
    "De uitspraak van autofabrikant Henri Ford 'De Ford Model T is in iedere mogelijke kleur leverbaar, als het maar zwart is' Sunny Socks op het idee bracht om zoveel mogelijk kleuren te leveren",
    "Onder studenten de uitdaging is 2 verschillende kleuren Sunny Socks te dragen en kijken welke kombinatie die dag het meeste gedragen wordt",
    "De sokken getest zijn in een wasserij en de strepen na een jaar lang iedere dag 3 keer gewassen te zijn nog steeds wit waren",
    "Honden dol zijn op Sunny Socks (baasje is daar minder blij mee)",
    "Een archeoloog voor de grap een paar Sunny Socks in de sarcofaag van een farao heeft gelegd bij de opgraving"
];

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

function popup()
{
    Array.prototype.forEach.call(document.getElementsByClassName("darken"), (darken, index) => {
        darken.style.visibility = "visible";
        darken.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    })
    Array.prototype.forEach.call(document.getElementsByClassName("popup"), (popup, index) => {
        popup.style.marginTop = "0px";
        popup.style.visibility = "visible";
    })
    document.getElementById("weetje").innerHTML = `${getWeetje()}`;
}

function closePopup()
{
    Array.prototype.forEach.call(document.getElementsByClassName("popup"), (popup, index) => {
        popup.style.marginTop = "200px";
        popup.style.visibility = "hidden";
    })
    Array.prototype.forEach.call(document.getElementsByClassName("darken"), (darken, index) => {
        darken.style.backgroundColor = "rgba(0, 0, 0, 0)";
        window.setTimeout(function () {
            darken.style.visibility = "hidden";
        }, 200);
    })
}

function getWeetje()
{
    let lastWeetje = getCookie("last_weetje");
    let weetjeIndex = Math.floor(Math.random() * FEITJES.length);
    if (lastWeetje == "")
    {
        document.cookie = `last_weetje=${weetjeIndex}`
        return FEITJES[weetjeIndex];
    }
    lastWeetje = parseInt(lastWeetje);
    for (let i = 0; i < FEITJES.length; i++) {
        weetjeIndex = Math.floor(Math.random() * FEITJES.length);
        if (weetjeIndex != lastWeetje)
        {
            document.cookie = `last_weetje=${weetjeIndex}`
            return FEITJES[weetjeIndex];
        }
    }
    document.cookie = `last_weetje=${weetjeIndex}`
    return FEITJES[weetjeIndex];
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}