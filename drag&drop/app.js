const draggableItem = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder')

draggableItem.addEventListener('dragstart', (event) => {
    event.target.classList.add('holding')
    setTimeout(() => {
        event.target.classList.add('hidden')
    }, 0)

});
draggableItem.addEventListener('dragend', (event) => {
    event.target.classList.remove('holding', 'hidden')
});

placeHolders.forEach((holder) => {
    holder.addEventListener('dragover', dragover)
    holder.addEventListener('dragenter', dragenter)
    holder.addEventListener('dragleave', dragleave)
    holder.addEventListener('drop', drop)
})

function dragover(event) {
    event.preventDefault();
}
function dragenter(event) {
    event.target.classList.add('hovered');
}
function dragleave(event) {
    event.target.classList.remove('hovered');
}
function drop(event) {
    event.target.append(draggableItem)
    event.target.classList.remove('hovered');
}