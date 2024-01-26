var isImageChanging = {};

function changeImage(imageElement) {
  if (isImageChanging[imageElement.id]) {
    return; // Exit if the image is already changing
  }
  
  isImageChanging[imageElement.id] = true;

  var originalSrc = imageElement.src;
  var newImageUrl = imageElement.getAttribute('data-new-image-url');
  
  // Change the image source to the new image URL
  imageElement.src = newImageUrl;
  
  // Wait for 1 second (1000 milliseconds)
  setTimeout(function() {
    // Change the image source back to the original
    imageElement.src = originalSrc;
    isImageChanging[imageElement.id] = false;
  }, 1000);
}

// Add click event listeners to the images
var images = document.getElementsByClassName('clickable-image');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    changeImage(this);
  });
}