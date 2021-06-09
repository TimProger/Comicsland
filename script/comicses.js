const swiper_container = document.querySelector('.swiper-container')
class titlePage{
    constructor(name, img, main_img, url, length, img_type){
        this.name = name,
        this.img = img,
        this.main_img = main_img,
        this.url = url,
        this.length = length,
        this.img_type = img_type
    }
}
const jojo6 = new titlePage('JoJo Stone Ocean', './images/jojo6-1.jpg', './images/jojo6-1.jpg', 'images/jojo6/', 45, 'jpg')
const aot1 = new titlePage('Attack on Titan', './images/aot.png', './images/aot-1.jpg', `images/aot/`, 49, 'png')
const chainsaw1 = new titlePage('Chainsaw', './images/main-chainsaw.jpg', './images/main-chainsaw.jpg', `images/chainsaw/`, 55, 'jpg')
const onepunch_one_1 = new titlePage('Onepunchman-One', './images/onepunchman-one-main.jpg', './images/onepunchman-one-main.jpg', `images/onepunchman/`, 15, 'png')
const comics_container = [
    jojo6,
    aot1,
    chainsaw1,
    onepunch_one_1,
]
for(i=0;i<comics_container.length; i++){
    const comic = document.createElement('div')
    comic.classList.add('comic')
    const name = document.createElement('h3')
    name.innerText = `${comics_container[i].name}`
    comic.appendChild(name)
    comic.style.background = `url(${comics_container[i].img}) no-repeat`
    comic.style.backgroundSize = `cover`
    const read = document.createElement('div')
    read.classList.add('read')
    const comic_name = comics_container[i].name
    const comic_content = comics_container[i].main_img
    const comic_url = comics_container[i].url
    const comic_length = comics_container[i].length
    const comic_img_type = comics_container[i].img_type
    comic.addEventListener('click', function(evt){
        document.head.innerHTML = `
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
            <title>${comic_name}</title>

        `
        document.body.innerHTML = `
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
                <h1 class="comic-page-header">${name.innerText}</h1>
                <div class="pages">0/${comic_length}</div>
                <div class="comic-page-container">
                    <div class="main-comic-block" style="background: url(${comic_content}); background-repeat: no-repeat; background-size: cover;">
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
            window.scrollTo(0, window.scrollHeight)
            const pages = document.querySelector('.pages')
            const arrow_right = document.querySelector('.arrow-right')
            const arrow_left = document.querySelector('.arrow-left')
            const main_comic_block = document.querySelector('.main-comic-block')
            let counter = 0
            arrow_right.addEventListener('click', function(evt){
                counter++
                (counter)
                window.scrollTo(0, 410)

                if(counter<=0){
                    counter=1
                }
                else if(counter==comic_length+1){
                    main_comic_block.style = `background: url(${comic_content}); background-repeat: no-repeat; background-size: cover;`
                    counter = 1
                }
                main_comic_block.style = `background: url(${comic_url}page${counter}.${comic_img_type}); background-repeat: no-repeat; background-size: cover;`
                pages.innerHTML = `${counter}/${comic_length}`
            })
            arrow_left.addEventListener('click', function(evt){
                counter--
                main_comic_block.style = `background: url(${comic_url}page${counter}.${comic_img_type}); background-repeat: no-repeat; background-size: cover;`
                window.scrollTo(0, 410)
                if(counter<=0){
                    main_comic_block.style = `background: url(${comic_content}); background-repeat: no-repeat; background-size: cover;`
                    counter = 0
                }
                pages.innerHTML = `${counter}/${comic_length}`
            })
        })
    comic.appendChild(read)
    swiper_container.appendChild(comic)
}
