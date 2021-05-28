const bot_form = document.querySelector('.bot-form')
const bot_show = document.querySelector('.show-bot')
const bot_input = document.querySelector(".bot-input")
const bot_btn = document.querySelector(".bot-btn")
const bot_content = document.querySelector(".bot-content")
const bot_close = document.querySelector('.close-bot')
let answerComic1 = `Очень советую прочитать русский комикс Майор Гром.`
let answerMore = `Этот сайт был заданием, которое я должен был выполнить, однако во время
его создания я много эксперементировал из-за чего некоторые части кода могут
выглядеть ужасно.`
let answerSpoiler = `Джирайя умрёт, а Наруто и Саске станут богами, 
после чего лишатся всей силы из-за Боруто.`
window.addEventListener('load', function(evt){
    setTimeout(function(){
        bot_show.style.right = '100px'
    }, 5000)
})
function enterMessage(evt) {
    let message = document.createElement('div')
    if (bot_input.value == "") {
        return false
    } else {
        message.innerHTML = `${bot_input.value}`
        message.classList.add('bot-message')
        message.style.float = 'right'
        message.style.borderBottomRightRadius = '0px'
        message.style.borderBottomLeftRadius = '12px'
        bot_content.appendChild(message)
        bot_content.scrollTo(0, bot_content.scrollHeight)
        bot_input.value = ""
        setTimeout(function () {
            const answer = document.createElement('div')
            function createAnswer(text){
                answer.innerHTML = text
                answer.classList.add('bot-message')
                bot_content.appendChild(answer)
                bot_content.scrollTo(0, bot_content.scrollHeight)
            }
            switch (message.innerHTML) {
                case `1`:
                    createAnswer(answerComic1)
                    return  
                case `1.`:
                    createAnswer(answerComic1)
                    return                                                        
                case `2`:
                    createAnswer(answerMore)
                    return
                case `2.`:
                    createAnswer(answerMore)
                    return
                case `3`:
                    createAnswer(answerSpoiler)
                    return
                case `3.`:
                    createAnswer(answerSpoiler)
                    return
                case `Пасхалка`:
                    createAnswer(`Ты думал, что это будет пасхалка? Но это был я, Дио!`)
                    return
                case `пасхалка`:
                    createAnswer(`Ты думал, что это будет пасхалка? Но это был я, Дио!`)
                    return
                case `ПАСХАЛКА`:
                    createAnswer(`Ты думал, что это будет пасхалка? Но это был я, Дио!`)
                    return
                default:
                    createAnswer(`Слишком сложная команда, даттебаё!`)
                    return
            }
        }, 200)
    }
}
bot_input.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        enterMessage()
    }
});
const forShowTimeoutClose = () => { 
    bot_show.style.right = '100px' 

}
const forShowTimeoutShow = () => { 
    bot_form.style.bottom = '0px' 
}
bot_close.addEventListener('click', function (evt) {
    bot_form.style.bottom = '-480px'
    setTimeout(forShowTimeoutClose, 500)
})
bot_show.addEventListener('click', function (evt) {

    bot_show.style.right = '-100px'

    setTimeout(forShowTimeoutShow, 1000)


})
bot_btn.addEventListener('click', enterMessage)

