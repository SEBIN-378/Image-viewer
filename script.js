const images = [
  "images/image1.jpg",
  "images/image2.jpg"
];

let currentImage = 0;

function nextImage() {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  document.getElementById("imageViewer").src = images[currentImage];
}
