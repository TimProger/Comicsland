const swiper_container = document.querySelector('.swiper-container')
const comics_container = [
    comic_aot = {
        name: 'JoJo Stone Ocean',
        img: './images/jojo6-1.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    },
    comic_aot = {
        name: 'Attack on Titan2',
        img: './images/2.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    },
    comic_aot = {
        name: 'Attack on Titan412',
        img: './images/3.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    },
    comic_aot = {
        name: 'Attack on Titan12',
        img: './images/4.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    },
    comic_aot = {
        name: 'Attack on Titan12',
        img: './images/4.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    },
    comic_aot = {
        name: 'Attack on Titan12',
        img: './images/4.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    },
    comic_aot = {
        name: 'Attack on Titan12',
        img: './images/4.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    },
    comic_aot = {
        name: 'Attack on Titan12',
        img: './images/4.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    },
    comic_aot = {
        name: 'Attack on Titan12',
        img: './images/1.jpg',
        main_img: './images/jojo6-1.jpg',
        bgcol: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',

    }
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
    read.style.background = `${comics_container[i].bgcol}`
    const btn = document.createElement('div')
    btn.classList.add('comic-btn')
    btn.style.background = `${comics_container[i].btnbgcol}`
    btn.innerText= 'Start reading'
    const comic_content = comics_container[i].main_img
    btn.addEventListener('click', function(evt){
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
                    <div class="main-comic-block" style="background: url(${comic_content}) no-repeat; background-size: cover;">
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
        })
    console.log(comics_container);
    read.appendChild(btn)
    comic.appendChild(read)
    swiper_container.appendChild(comic)

}
