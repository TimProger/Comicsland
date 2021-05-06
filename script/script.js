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
const block_rus = document.querySelector('.rus-comics')
block_rus.addEventListener('click', function(evt){
  window.location.href = "russian.html";
})
const block_hero = document.querySelector('.hero-comics')
block_hero.addEventListener('click', function(evt){
  window.location.href = "american.html";
})
const block_japan = document.querySelector('.japan-comics')
block_japan.addEventListener('click', function(evt){
  window.location.href = "japaneese.html";
})
const block_other = document.querySelector('.other-comics')
block_other.addEventListener('click', function(evt){
  window.location.href = "other.html";
})
const aboutUs = document.querySelector('.project')
aboutUs.addEventListener('click', function(evt){
  window.location.href = "aboutUs.html";
})
/* <div class="content123">
<h3>Потрясающая история о том, как люди дали отпор силам, что намного</h1>
<p>На что способны люди во время сражения с теми, кто способен оборвать им жизнь одним ударом?
    Титаны, гиганты, великаный. Их называют по разному, однако то, что они творят знают абсолютно
    все. Встречайте мангу способную впечатлить даже самого прожжённого любителя комиксов.
</p>
</div> */