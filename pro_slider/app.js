const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let currentSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})
document.addEventListener('keydown', () => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})


function changeSlide(direction) {
    if (direction === 'down') {
        currentSlideIndex++
        if (currentSlideIndex === slidesCount) {
            currentSlideIndex = 0
        }
    } else if (direction === 'up') {
        currentSlideIndex--
        if (currentSlideIndex < 0) {
            currentSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${currentSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${currentSlideIndex * height}px)`
}
