const beta = document.querySelector('.beta-block')
window.addEventListener('scroll', function(){
    var valueY = window.scrollY;
    beta.style.left = -valueY * 5.5 + 'px'
    setTimeout(function(){
        if(valueY*5.5 > 300){
        beta.style.display = 'none'
    }}, 200)
})