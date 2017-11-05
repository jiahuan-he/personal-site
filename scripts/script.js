const header = document.getElementById("header");
const cactusImg = document.getElementById("cactus-img");
header.onmouseover = function () {
  cactusImg.src = "img/cactus-color.png";
};
header.onmouseout = function () {
    cactusImg.src = "img/cactus-bnw.png";
};





