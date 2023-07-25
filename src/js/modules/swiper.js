const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1150: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }

  });



export default swiper;