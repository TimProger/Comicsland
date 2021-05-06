const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 7000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
  });