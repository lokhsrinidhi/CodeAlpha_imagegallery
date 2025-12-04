const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
let currentIndex = 0;


galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox(img.src);
    });
});

function openLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

document.getElementById("closeBtn").onclick = () => {
    lightbox.style.display = "none";
};


document.getElementById("prev").onclick = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
};

document.getElementById("next").onclick = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
};


const navItems = document.querySelectorAll("nav ul li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(li => li.classList.remove("active"));
        item.classList.add("active");

        let category = item.dataset.category;

        galleryImages.forEach(img => {
            if (category === "all" || img.classList.contains(category)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    });
});
