let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
}

document.querySelector('.next').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
});

// Initial image display
showImage(currentImageIndex);
