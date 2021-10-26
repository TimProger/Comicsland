const swiper__container = document.querySelector('.swiper-container')
class titlePage {
    constructor(name, img, main__img, url, length, img__type) {
        this.name = name,
            this.img = img,
            this.main__img = main__img,
            this.url = url,
            this.length = length,
            this.img__type = img__type
    }
} // Создал класс для клепания объектов
const jojo6 = new titlePage('JoJo Stone Ocean', './images/jojo6-1.jpg', './images/jojo6-1.jpg', 'images/jojo6/', 45, 'jpg')
const aot1 = new titlePage('Attack on Titan', './images/aot.png', './images/aot-1.jpg', `images/aot/`, 49, 'png')
const chainsaw1 = new titlePage('Chainsaw', './images/main-chainsaw.jpg', './images/main-chainsaw.jpg', `images/chainsaw/`, 55, 'jpg')
const onepunch__one__1 = new titlePage('Onepunchman-One', './images/onepunchman-one-main.jpg', './images/onepunchman-one-main.jpg', `images/onepunchman/`, 15, 'png')
// Эти самые объекты, созданные классом titlePage которые нужны для заполнения комиксной части
const comics__container = [
    jojo6,
    aot1,
    chainsaw1,
    onepunch__one__1,
] // Все объеты созданные при помощи класса titlePage были записаны сюда, благодаря чему на главной странице появился их собственный блок
const setAttribute = (el, name, i) => {
    el.classList.add('comic')
    el.appendChild(name)
    el.style.background = `url(${comics__container[i].img}) no-repeat`
    el.style.backgroundSize = `cover`
    name.innerText = `${comics__container[i].name}`
} // Функция создаёт блок используя данные объектов
for (let i = 0; i < comics__container.length; i++) {
    const comic = document.createElement('div')
    const name = document.createElement('h3')
    const comic__name = comics__container[i].name
    const comic__content = comics__container[i].main__img
    const comic__url = comics__container[i].url
    const comic__length = comics__container[i].length
    const comic__img__type = comics__container[i].img__type
    setAttribute(comic, name, i)
    // Создал блок из объекта
    const head__content = `
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Spectral+SC:wght@200&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style/style.css">
            <link rel="stylesheet" href="style/bot.css">
            <link rel="stylesheet" href="style/comicpage.css">
            <link rel="shortcut icon" href="images/main-image.png" type="image/png">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet">
            <title>${comic__name}</title>
        `
    // Создал head для страницы комикса
    const body__content = `
    <div class="addapt">
    <header>
        <nav>
            <a href="index.html" class="main-header">COMICSLAND</a>
            <div class="search">
                <input class="inp-search" type="search">
                <input class="inp-submit" type="submit" value="Поиск">
            </div>
            <div class="container">
                <div class="arrow">
                    <img src="images/arrow-left-solid.svg" alt="">
                </div>
                <a class="back_href"href="index.html">
                    <div class="back">Вернуться назад</div>
                </a>
            </div>
        </nav>
    </header>
    <section>
    <h1 class="comic-page-header">${comics__container[i].name}</h1>
    <div class="pages">0/${comic__length}</div>
    <div class="comic-page-container">
        <div class="main-comic-block" style="background: url(${comic__content}); background-repeat: no-repeat; background-size: cover;">
            <div class="arrow-container">
                <div class="arrow-left arrows"></div>
                <div class="arrow-right arrows"></div>
            </div>
        </div>
    </div>
    </section>
    <footer>
        <div class="list">
            <ul class="ul1 uls">
                <li class="lis">VK</li>
                <li class="lis">Instagram</li>
                <li class="lis">YouTube</li>
            </ul>
        </div>
    </footer>
`
    // Создал body для страницы комикса

    comic.addEventListener('click', function (evt) {
        document.head.innerHTML = head__content
        document.body.innerHTML = body__content
        window.scrollTo(0, window.scrollHeight)
        const pages = document.querySelector('.pages')
        const arrow__right = document.querySelector('.arrow-right')
        const arrow__left = document.querySelector('.arrow-left')
        const main__comic__block = document.querySelector('.main-comic-block')
        let counter = 0
        arrow__right.addEventListener('click', function (evt) {
            counter++
            (counter)
            window.scrollTo(0, window.innerHeight / 4)

            if (counter <= 0) {
                counter = 1
            }
            else if (counter == comic__length + 1) {
                main__comic__block.style = `background: url(${comic__content}); background-repeat: no-repeat; background-size: cover;`
                counter = 1
            }
            main__comic__block.style = `background: url(${comic__url}page${counter}.${comic__img__type}); background-repeat: no-repeat; background-size: cover;`
            pages.innerHTML = `${counter}/${comic__length}`
        })
        arrow__left.addEventListener('click', function (evt) {
            counter--
            main__comic__block.style = `background: url(${comic__url}page${counter}.${comic__img__type}); background-repeat: no-repeat; background-size: cover;`
            window.scrollTo(0, 410)
            if (counter <= 0) {
                main__comic__block.style = `background: url(${comic__content}); background-repeat: no-repeat; background-size: cover;`
                counter = 0
            }
            pages.innerHTML = `${counter}/${comic__length}`
        })
    }) // Создал стрелки для мотания комиксов
    swiper__container.appendChild(comic)
}