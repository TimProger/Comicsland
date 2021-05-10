const beta_button = document.querySelector('.beta-button')
const close = (evt) => {
    window.removeEventListener('scroll', scroll1)
    var value = -300;
    beta.style.left = `${value}px`
    if(beta.style.left = value){
        setTimeout(function(){
            beta.remove()
        }, 200)
    }
}
beta_button.addEventListener('click', close)