const navbar = document.querySelector('.navbar')
const tabLinks = document.getElementsByClassName('tab-links')
const tabContents = document.getElementsByClassName('tab-contents')
const tabTitles = document.querySelector('.tab-titles')
const span = document.querySelector('.span')
const listContainer = document.querySelector('.list-container')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')


window.addEventListener('scroll', () => {
    if(window.scrollY < 230){
        navbar.classList.remove('dark')

        if(window.innerWidth <= 819){
            document.documentElement.style.setProperty('--pseudo-color', '#fff')
        }else{
            document.documentElement.style.setProperty('--pseudo-color', '#00FF40')
        }
        menuIcon.style.color = '#00FF40'
         
    }else if(window.scrollY >= 230 && window.scrollY < 545){

       navbar.classList.add('dark')
       span.classList.remove('white')
       navbar.classList.remove('green')

    }else if(window.scrollY >= 545){

        navbar.classList.remove('dark')
        navbar.classList.add('green')
        span.classList.add('white')
        document.documentElement.style.setProperty('--pseudo-color', '#fff')
        menuIcon.style.color = '#fff'
    }
})


tabTitles.addEventListener('click', (e) => {
    for(let tabLink of tabLinks){
        tabLink.classList.remove('active')
    }
    for(let tabContent of tabContents){
            tabContent.classList.remove('active')
    }

    document.getElementById(e.target.innerHTML.toLowerCase()).classList.add('active')
    e.target.classList.add('active')
})


menuIcon.addEventListener('click', () => {
    listContainer.style.right='0px'
    menuIcon.style.display = 'none'
})


closeIcon.addEventListener('click', () => {
    listContainer.style.right='-300px'
    menuIcon.style.display = 'block'
})




