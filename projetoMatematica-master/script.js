const carousel = document.querySelector('.carousel');

document.querySelector('.next').onclick = () => {
    carousel.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
};

document.querySelector('.prev').onclick = () => {
    carousel.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
};
