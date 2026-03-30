const dropDown = document.querySelector('.drop-down');
const links = document.querySelector('.links');
dropDown.addEventListener('click', function() {

    if (links.classList.contains('show-links')) {
        // dropDown.style.transform = 'rotate(90deg)';
        links.classList.toggle('show-links');
        links.style.height = '0rem'
        links.style.transition = 'height 1s'
    } else if (!links.classList.contains('show-links')) {
        links.classList.toggle('show-links');
        links.style.height = '10rem'
    }
})

dropDown.addEventListener('click', () => {
    if (dropDown.classList.contains('animation')) {
        dropDown.classList.toggle('animation');
        // dropDown.style.transition = "rotate(0deg)"
    } else if (!dropDown.classList.contains('animation')) {
        dropDown.classList.toggle('animation')
    }
});