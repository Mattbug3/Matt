const menuIcon_1 = document.querySelector('.menu-icon-1')
const closeIcon_1 = document.querySelector('.close-icon-1')

const menuIcon_2 = document.querySelector('.menu-icon-2')
const closeIcon_2 = document.querySelector('.close-icon-2')

const menuIcon_3 = document.querySelector('.menu-icon-3')
const closeIcon_3 = document.querySelector('.close-icon-3')

menuIcon_1.addEventListener('click', () => {
    listContainer.style.right='0px'
    menuIcon.style.display = 'none'
})


closeIcon_1.addEventListener('click', () => {
    listContainer.style.right='-300px'
    menuIcon.style.display = 'block'
})

menuIcon_2.addEventListener('click', () => {
    listContainer.style.right='0px'
    menuIcon.style.display = 'none'
})


closeIcon_2.addEventListener('click', () => {
    listContainer.style.right='-300px'
    menuIcon.style.display = 'block'
})

menuIcon_3.addEventListener('click', () => {
    listContainer.style.right='0px'
    menuIcon.style.display = 'none'
})


closeIcon_3.addEventListener('click', () => {
    listContainer.style.right='-300px'
    menuIcon.style.display = 'block'
})