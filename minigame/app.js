const board = document.getElementById('board');
const colors = ['#78FFFF', '#CE45FF', '#FFCCFF', '#FFFF99', '#FF1493', '#0038DF']
const SQUARES_COUNT = 875

for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(square) {
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    const square = event.target
    square.style.backgroundColor = '#1d1d1d'
    square.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const idx = Math.floor(Math.random() * colors.length)
    return colors[idx]
}