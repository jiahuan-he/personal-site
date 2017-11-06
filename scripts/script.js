const header = document.getElementById("header");
const cactusImg = document.getElementById("cactus-img");
const hoverRedUnderline = document.getElementsByClassName("hover-red-underline");

const changeToColoredImage = () => {
    cactusImg.src = "img/cactus-color.png";
};

const changeToUncoloredImage = () => {
    cactusImg.src = "img/cactus-bnw.png";
};

header.onmouseover = changeToColoredImage;
header.onmouseout = changeToUncoloredImage;

for(let i=0; i<hoverRedUnderline.length; i++){
    hoverRedUnderline[i].onmouseover = changeToColoredImage;
    hoverRedUnderline[i].onmouseout = changeToUncoloredImage;
}

