const openiconMenu = document.querySelector('.openiconMenu')
const closeiconMenu = document.querySelector('.closeiconMenu')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

function togglefun() {
    sidebar.classList.toggle('show')
    overlay.classList.toggle('show')
}

openiconMenu.addEventListener('click', togglefun)
closeiconMenu.addEventListener('click', togglefun)
overlay.addEventListener('click', togglefun)