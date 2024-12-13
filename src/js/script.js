// Fonction pour initialiser un carrousel
function initCarousel(carouselElement) {
    const container = carouselElement.querySelector('.carousel-container');
    const slides = Array.from(container.children);
    const prevButton = carouselElement.querySelector('.carousel-button.prev');
    const nextButton = carouselElement.querySelector('.carousel-button.next');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Positionner les slides côte à côte
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    let currentIndex = 0;

    // Fonction pour déplacer le carrousel
    function moveToSlide(index) {
        const offset = -(index * slideWidth);
        container.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    // Gestion du bouton "précédent"
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    });

    // Gestion du bouton "suivant"
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        }
    });
}

// Initialiser tous les carrousels sur la page
document.querySelectorAll('.carousel').forEach(initCarousel);

let autoScroll = setInterval(() => {
    if (currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        moveToSlide(0); // Recommence au début
    }
}, 3000); // 3 secondes

// Arrêter le défilement automatique lors d'une interaction utilisateur
carouselElement.addEventListener('mouseenter', () => clearInterval(autoScroll));
carouselElement.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        } else {
            moveToSlide(0);
        }
    }, 3000);
});

function initCarousel(carouselElement) {
    const container = carouselElement.querySelector('.carousel-container');
    const slides = Array.from(container.children);
    const prevButton = carouselElement.querySelector('.carousel-button.prev');
    const nextButton = carouselElement.querySelector('.carousel-button.next');
    const slideWidth = slides[0].offsetWidth; // Corrige la largeur du slide

    // Positionner les slides côte à côte
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    let currentIndex = 0;

    function moveToSlide(index) {
        const offset = -(index * slideWidth);
        container.style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        }
    });
}

document.querySelectorAll('.carousel').forEach(initCarousel);




