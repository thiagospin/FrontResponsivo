window.document.getElementById('openMenu').addEventListener('click', abrirMenu)
window.document.getElementById('closeMenu').addEventListener('click', fecharMenu)

function abrirMenu() {

    menu.style.display = 'flex'
    menu.style.right = (menu.offsetWidth * -1) + 'px'
    openMenu.style.display = 'none'

    menu.style.opacity = '1' 
    menu.style.right = '0'

}

function fecharMenu() {
    menu.style.opacity = '0'
    menu.style.right = (menu.offsetWidth * -1) + 'px'

    menu.removeAttribute('style')
    openMenu.removeAttribute('style')
    
}

