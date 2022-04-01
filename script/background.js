const images = [
  "102135.jpg",
  "102970.jpg",
  "103533.jpg",
  "331193.jpg",
  "419386.jpg",
  "422909.jpg",
  "487211.jpg",
  "692649.jpg",
  "692667.jpg",
  "692750.jpg",
  "704638.jpg",
  "704771.jpg",
  "708304.png",
];

const IMG_DIR_PATH = "img";

const chosenImage = images[Math.floor(Math.random() * images.length)];

let bgImage = document.createElement("style");
bgImage.innerText = `body {
  background-image: url(\'${IMG_DIR_PATH}/${chosenImage}\');
}`;

document.head.appendChild(bgImage);
