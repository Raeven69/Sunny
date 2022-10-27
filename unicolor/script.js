// List of facts to choose from when showing the under construction popup
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

// Positions for the socks in the carousel
var sockValues = [
    {
        width: "140px",
        top: "10px",
        left: "175px",
        zindex: "0"
    },
    {
        width: "160px",
        top: "15px",
        left: "260px",
        zindex: "1"
    },
    {
        width: "180px",
        top: "20px",
        left: "360px",
        zindex: "2"
    },
    {
        width: "160px",
        top: "15px",
        left: "480px",
        zindex: "1"
    },
    {
        width: "140px",
        top: "10px",
        left: "585px",
        zindex: "0"
    }
];

// The same positions but for mobile
var mobileSockValues = [
    {
        width: "45px",
        top: "6px",
        left: "60px",
        zindex: "0"
    },
    {
        width: "52.5px",
        top: "7.5px",
        left: "87.5px",
        zindex: "1"
    },
    {
        width: "60px",
        top: "10px",
        left: "120px",
        zindex: "2"
    },
    {
        width: "52.5px",
        top: "7.5px",
        left: "160px",
        zindex: "1"
    },
    {
        width: "45px",
        top: "6px",
        left: "195px",
        zindex: "0"
    }
];

window.onload = () => {
    // Change the socks sizes when the screen switches to mobile
    addEventListener("resize", () => {
        var values = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth) < 576 ? mobileSockValues : sockValues;
        updateSocks(values);
    })
    // Push back the first sock to the end of the array and update it
    document.getElementsByClassName("leftScroll")[0].addEventListener("click", () => {
        var values = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth) < 576 ? mobileSockValues : sockValues;
        values.unshift(values.pop());
        updateSocks(values);
    });
    // Push the last sock in the array to the front and update it
    document.getElementsByClassName("rightScroll")[0].addEventListener("click", () => {
        var values = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth) < 576 ? mobileSockValues : sockValues;
        values.push(values.shift());
        updateSocks(values);
    });
    // The same dropdown code as in the main script because you cannot have 2 onloads
    navdropdown = document.getElementsByClassName("navDropdown")[0];
    headerdropdown = document.getElementsByClassName("headerDropdown")[0];
    navdropdown.addEventListener("click", () => {
        if (navdropdown.classList.contains("toggled")) {
            navdropdown.classList.remove("toggled");
            headerdropdown.classList.remove("headerOpen");
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

// Update the size and position for every sock in the carousel
function updateSocks(values) {
    var images = document.getElementsByClassName("carouselImage");
    Array.prototype.forEach.call(images, (element, index) => {
        element.style.width = values[index].width;
        element.style.top = values[index].top;
        element.style.left = values[index].left;
        element.style.zIndex = values[index].zindex;
    });
}

// Open the under construction popup
function popup() {
    Array.prototype.forEach.call(document.getElementsByClassName("darken"), (darken) => {
        darken.style.visibility = "visible";
        darken.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    });
    Array.prototype.forEach.call(document.getElementsByClassName("popup"), (popup) => {
        popup.style.marginTop = "0px";
        popup.style.visibility = "visible";
    });
    document.getElementById("weetje").innerHTML = `${getWeetje()}`;
}

// Close the under construction popup
function closePopup() {
    Array.prototype.forEach.call(document.getElementsByClassName("popup"), (popup) => {
        popup.style.marginTop = "200px";
        popup.style.visibility = "hidden";
    });
    Array.prototype.forEach.call(document.getElementsByClassName("darken"), (darken) => {
        darken.style.backgroundColor = "rgba(0, 0, 0, 0)";
        window.setTimeout(() => {
            darken.style.visibility = "hidden";
        }, 200);
    });
}

// Check if a randomly selected fact is also the last one and return a new one nonetheless
function getWeetje() {
    let lastWeetje = getCookie("last_weetje");
    let weetjeIndex = Math.floor(Math.random() * FEITJES.length);
    if (lastWeetje === "") {
        document.cookie = `last_weetje=${weetjeIndex}`;
        return FEITJES[weetjeIndex];
    }
    lastWeetje = parseInt(lastWeetje);
    for (let i = 0; i < FEITJES.length; i++) {
        weetjeIndex = Math.floor(Math.random() * FEITJES.length);
        if (weetjeIndex != lastWeetje) {
            document.cookie = `last_weetje=${weetjeIndex}`;
            return FEITJES[weetjeIndex];
        }
    }
    document.cookie = `last_weetje=${weetjeIndex}`;
    return FEITJES[weetjeIndex];
}

// Return the value of a cookie from a specified key
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