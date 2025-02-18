// Array of image paths
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];

// Function to get a random image from the array
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Set the random image and download link when the page loads
window.onload = function() {
    const randomImage = getRandomImage();
    const imageElement = document.getElementById("random-image");
    const downloadLink = document.getElementById("download-link");

    // Set the image source and download link dynamically
    imageElement.src = randomImage;
    downloadLink.href = randomImage;
    downloadLink.textContent = `Download ${randomImage.split('/').pop()}`;
};
