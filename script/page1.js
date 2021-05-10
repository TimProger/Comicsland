const about_1 = () => {
    const block1_text_content = document.querySelector(".content_text_1")
    const about_1 = document.querySelector(".about_1")
    if(block1_text_content.classList.contains('unactive')){
    block1_text_content.style.bottom = '0px'
    block1_text_content.classList.add('clicked')
    block1_text_content.classList.remove('unactive')

    }else if(block1_text_content.classList.contains('clicked')){
        block1_text_content.style.bottom = '700px'
        block1_text_content.classList.remove('clicked')
        block1_text_content.classList.add('unactive')

    }
}
  const about_2 = () => {
    const block2_text_content = document.querySelector(".content_text_2")
    const about_2 = document.querySelector(".about_2")
    if(block2_text_content.classList.contains('unactive')){
    block2_text_content.style.bottom = '0px'
    block2_text_content.classList.remove('unactive')
    block2_text_content.classList.add('clicked')
    }else if(block2_text_content.classList.contains('clicked')){
        block2_text_content.style.bottom = '700px'
        block2_text_content.classList.remove('clicked')
        block2_text_content.classList.add('unactive')

    }
}
const about_3 = () => {
    const block3_text_content = document.querySelector(".content_text_3")
    const about_3 = document.querySelector(".about_3")
    if(block3_text_content.classList.contains('unactive')){
    block3_text_content.style.bottom = '0px'
    block3_text_content.classList.remove('unactive')
    block3_text_content.classList.add('clicked')
    }else if(block3_text_content.classList.contains('clicked')){
        block3_text_content.style.bottom = '700px'
        block3_text_content.classList.remove('clicked')
        block3_text_content.classList.add('unactive')

    }
}
const about_4 = () => {
    const block4_text_content = document.querySelector(".content_text_4")
    const about_4 = document.querySelector(".about_4")
    if(block4_text_content.classList.contains('unactive')){
    block4_text_content.style.bottom = '0px'
    block4_text_content.classList.remove('unactive')
    block4_text_content.classList.add('clicked')
    }else if(block4_text_content.classList.contains('clicked')){
        block4_text_content.style.bottom = '700px'
        block4_text_content.classList.remove('clicked')
        block4_text_content.classList.add('unactive')

    }
}
