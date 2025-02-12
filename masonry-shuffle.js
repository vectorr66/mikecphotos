// masonry-shuffle.js

// Shuffle function (Fisher-Yates Shuffle)
export function shuffleMasonryGrid(containerSelector) {
    document.addEventListener("DOMContentLoaded", function () {
        var container = document.querySelector(containerSelector);
        if (!container) return; // Prevent errors if container doesn't exist

        var images = Array.from(container.children);
        
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffleArray(images);

        // Append images in the new order
        images.forEach(img => container.appendChild(img));
    });
}
