const beta = document.querySelector('.beta-block')
const scroll1 = (evt) => {
    var valueY = window.scrollY;
    beta.style.left = -valueY * 5.5 + 'px'
    setTimeout(function(){
        if(valueY*5.5 >= 300){
        beta.remove()
    }}, 200)
}
window.addEventListener('scroll', scroll1)
