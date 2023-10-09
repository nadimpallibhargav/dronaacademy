
const sliderWrapper = document.querySelector('.sliderWrapper');
const prevSlideBtn = document.querySelector('.prevSlideBtn');
const nextSlideBtn = document.querySelector('.nextSlideBtn');

let currentSlide = 0;

nextSlideBtn.addEventListener('click', () => {
    sliderWrapper.scrollLeft += sliderWrapper.clientWidth;
    if (sliderWrapper.scrollLeft >= sliderWrapper.scrollWidth) {
        sliderWrapper.scrollLeft = 0;
    }
});

prevSlideBtn.addEventListener('click', () => {
    sliderWrapper.scrollLeft -= sliderWrapper.clientWidth;
    if (sliderWrapper.scrollLeft < 0) {
        sliderWrapper.scrollLeft = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faqItem');

    faqItems.forEach(function (item) {
        const question = item.querySelector('.faqQuestion');
        const answer = item.querySelector('.faqAnswer');

        question.addEventListener('click', function () {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                faqItems.forEach(function (faqItem) {
                    faqItem.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    });

    const mobileMenuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
});

const watchNowButton = document.querySelector('.bannerVideo');
const popupOverlay = document.getElementById('popupOverlay');
const videoPlayer = document.getElementById('videoPlayer');
const closePopupButton = document.getElementById('closePopupButton');

watchNowButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
    videoPlayer.src = videoPlayer.src;
});

closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

const applyButton = document.querySelector('.ctaButton');
const popupOverlayForm = document.getElementById('formPopup');
const closePopupButtonForm = document.getElementById('closePopupButtonForm');

applyButton.addEventListener('click', () => {
    popupOverlayForm.style.display = 'flex';
});

closePopupButtonForm.addEventListener('click', () => {
    popupOverlayForm.style.display = 'none';
});