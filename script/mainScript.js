const main_image = document.querySelector('.main_image')
window.addEventListener('scroll', function(evt){
    main_image.style.bottom = `${200 - scrollY/3}px`
})