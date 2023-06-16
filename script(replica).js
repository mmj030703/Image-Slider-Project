const images = document.querySelectorAll('.img');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
let counter = 0; //* indicates currently we are 0 step forward

images.forEach((image, index) => {
    image.style.left = `${index * 100}%`;
});

const nextSlide = () => {
    counter++; //* incrementing the step by one which means we move every image by counter times.
    if(counter === images.length) {
        counter = 0;
    }
    moveSlide();
}

const previousSlide = () => {
    counter--; //* decrementing the step by one which means we move every image by counter times.
    if(counter === -1) {
        counter = images.length-1;
    }
    moveSlide();
}

const moveSlide = () => {
    images.forEach((image) => {
        image.style.transform = `translateX(-${counter * 100}%)`;
    });
}

nextBtn.addEventListener('click', nextSlide);
previousBtn.addEventListener('click', previousSlide);