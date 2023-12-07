const menuIcon_1 = document.querySelector('.menu-icon-1')
const closeIcon_1 = document.querySelector('.close-icon-1')

const menuIcon_2 = document.querySelector('.menu-icon-2')
const closeIcon_2 = document.querySelector('.close-icon-2')

const menuIcon_3 = document.querySelector('.menu-icon-3')
const closeIcon_3 = document.querySelector('.close-icon-3')

document.querySelector('.menu-icon-1').addEventListener('click', () => {
    document.querySelector('.list-container').style.right='0px'
    document.querySelector('.menu-icon').style.display = 'none'
})


document.querySelector('.close-icon-1').addEventListener('click', () => {
    document.querySelector('.list-container').style.right='-300px'
    document.querySelector('.menu-icon').style.display = 'block'
})

document.querySelector('.menu-icon-2').addEventListener('click', () => {
    document.querySelector('.list-container').style.right='0px'
    document.querySelector('.menu-icon').style.display = 'none'
})


document.querySelector('.close-icon-2').addEventListener('click', () => {
    document.querySelector('.list-container').style.right='-300px'
    document.querySelector('.menu-icon').style.display = 'block'
})

document.querySelector('.menu-icon-3').addEventListener('click', () => {
    document.querySelector('.list-container')r.style.right='0px'
    document.querySelector('.menu-icon').style.display = 'none'
})


document.querySelector('.close-icon-3').addEventListener('click', () => {
    document.querySelector('.list-container').style.right='-300px'
    document.querySelector('.menu-icon').style.display = 'block'
})
