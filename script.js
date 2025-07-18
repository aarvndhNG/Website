document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const imageCount = 10; // Number of images to display
    const images = [];

    // Replace with your image URLs
    for (let i = 1; i <= imageCount; i++) {
        images.push(`images/image${i}.jpg`);
    }

    images.forEach(src => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        const img = document.createElement('img');
        img.src = src;
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
});
