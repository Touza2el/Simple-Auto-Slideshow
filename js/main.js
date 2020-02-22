// The Environement
const imageContainer = document.querySelector(".image-container img");
const imageSlides = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg",
  "images/slide5.jpg",
  "images/slide6.jpg"
];
let i = 0;

// The Function
function changeImageSource() {
  if (i < imageSlides.length) {
    imageContainer.src = imageSlides[i];
    i++;
  } else {
    i = 0;
  }
}
setInterval(changeImageSource, 2000);
window.onload = changeImageSource;
