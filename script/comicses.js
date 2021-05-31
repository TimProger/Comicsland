const swiper_container = document.querySelector('.swiper-container')
class ComicPage{
    constructor(name, img, main_img, url, length, img_type){
        this.name = name,
        this.img = img,
        this.main_img = main_img,
        this.url = url,
        this.length = length,
        this.img_type = img_type
    }
}
const jojo6 = new ComicPage('JoJo Stone Ocean', './images/jojo6-1.jpg', './images/jojo6-1.jpg', 'images/jojo6/', 45, 'jpg')
const aot1 = new ComicPage('Attack on Titan', './images/aot.png', './images/aot-1.jpg', `images/aot/`, 49, 'png')
const chainsaw1 = new ComicPage('Chainsaw', './images/main-chainsaw.jpg', './images/main-chainsaw.jpg', `images/chainsaw/`, 55, 'jpg')
const comics_container = [
    jojo6,
    aot1,
    chainsaw1,
    
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
    const btn = document.createElement('div')
    btn.classList.add('comic-btn')
    btn.style.background = `${comics_container[i].btnbgcol}`
    btn.innerText= 'Start reading'
    const comic_content = comics_container[i].main_img
    const comic_url = comics_container[i].url
    const comic_length = comics_container[i].length
    const comic_img_type = comics_container[i].img_type
    comic.addEventListener('click', function(evt){
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
                <div class="comic-page-container">
                    <div class="main-comic-block" style="background: url(${comic_content}); background-repeat: no-repeat; background-size: cover;">
                        <div class="arrow-container">
                            <div class="arrow-left arrows"></div>
                            <div class="arrow-right arrows"></div>
                        </div>
                    </div>
                    <div class="pages"></div>
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
            const arrow_right = document.querySelector('.arrow-right')
            const arrow_left = document.querySelector('.arrow-left')
            const main_comic_block = document.querySelector('.main-comic-block')
            // let comic_length = aot[0].length;
            // console.log(comic_length)
            let counter = 0
            arrow_right.addEventListener('click', function(evt){
                counter++
                console.log(counter)

                if(counter<=0){
                    counter=1
                }
                else if(counter==comic_length+1){
                    main_comic_block.style = `background: url(${comic_content}); background-repeat: no-repeat; background-size: cover;`
                    counter = 1
                }
                main_comic_block.style = `background: url(${comic_url}page${counter}.${comic_img_type}); background-repeat: no-repeat; background-size: cover;`
            })
            arrow_left.addEventListener('click', function(evt){
                counter--
                main_comic_block.style = `background: url(${comic_url}page${counter}.${comic_img_type}); background-repeat: no-repeat; background-size: cover;`

                if(counter<=0){
                    main_comic_block.style = `background: url(${comic_content}); background-repeat: no-repeat; background-size: cover;`
                    console.log(counter)
                    counter = 0
                }
            })
        })
    console.log(comics_container);
    read.appendChild(btn)
    comic.appendChild(read)
    swiper_container.appendChild(comic)

}
