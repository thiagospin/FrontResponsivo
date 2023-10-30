window.document.getElementById('openMenu').addEventListener('click', abrirMenu)
window.document.getElementById('closeMenu').addEventListener('click', fecharMenu)

function abrirMenu() {

    menu.style.display = 'flex'
    menu.style.opacity = '1'
    
}

function fecharMenu() {
    menu.style.opacity = '0'
    menu.removeAttribute('style')
}

