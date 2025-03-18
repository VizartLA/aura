const swiper = new Swiper('.gallery__swiper', {
  loop: true,
  pagination: {
    el: '.gallery__swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  },
});
