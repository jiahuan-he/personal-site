const header = document.getElementById("header");
const cactusImg = document.getElementById("cactus-img");
const hoverRedUnderline = document.getElementsByClassName("hover-red-underline");

const changeToColoredImage = () => {
    cactusImg.src = "img/watch.png";
};

const changeToUncoloredImage = () => {
    cactusImg.src = "img/blink.png";
};

header.onmouseover = changeToColoredImage;
header.onmouseout = changeToUncoloredImage;

for(let i=0; i<hoverRedUnderline.length; i++){
    hoverRedUnderline[i].onmouseover = changeToColoredImage;
    hoverRedUnderline[i].onmouseout = changeToUncoloredImage;
}

// for phones
if (document.documentElement.clientWidth < 600){
    cactusImg.src = "img/cactus-color.png";
    const element = document.getElementById("links");
    element.outerHTML = "";
}

