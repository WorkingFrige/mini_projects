const startBtn = document.getElementById('start-btn')
const screens = document.querySelectorAll('.screen')
const timeList = document.getElementById('time-list')
const timer = document.getElementById('time')
const board = document.getElementById('board')
const stopBtn = document.getElementById('stop-btn')
const colors = ['#16d9e3', '#CE45FF', '#FFCCFF', '#FFFF99', '#FF1493', '#0038DF']

let time = 0
let score = 0


startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('target')) {
        score++
        event.target.remove()
        createTarget()
    }
})

stopBtn.addEventListener('click', () => {
    finishGame()
})

function startGame() {
    if (time !== -1) {
        setInterval(changeTime, 1000)
        timer.innerHTML = `00:${time}`
    } else {
        timer.parentNode.innerHTML = 'Бесконечный режим'
        timer.classList.add('hide')
    }
    createTarget()
}

function changeTime() {
    if (time === 0) {
        finishGame()
    } else {
        let currentTime = --time
        timer.innerHTML = `00:${currentTime}`
        if (currentTime < 10) {
            timer.innerHTML = `00:0${currentTime}`
        }
    }

}

function finishGame() {
    if (time !== -1) {
        timer.parentNode.classList.add('hide')
    } else {
        timer.classList.add('hide')
    }
    stopBtn.classList.add('hide')
    board.innerHTML = `<h1>Ваш счёт: <span class="primary">${score}</span></h1>`
}

function createTarget() {
    const target = document.createElement('div')
    const size = getRandomValue(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomValue(0, width - size)
    const y = getRandomValue(0, height - size)
    const color = getRandomColor()

    target.classList.add('target')
    target.style.width = `${size}px`
    target.style.height = `${size}px`
    target.style.top = `${y}px`
    target.style.left = `${x}px`
    target.style.backgroundColor = color

    board.append(target)
}

function getRandomValue (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor () {
    const idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}


// For console

function winTheGame () {
    function kill() {
        const target = document.querySelector('.target')
        if (target) {
            target.click()
        }

    }

    setInterval(kill, 1)
}