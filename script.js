window.addEventListener('DOMContentLoaded', (event) => {
    const btnMenu = document.querySelectorAll('.open-menu')[0];
    const [menu] = document.querySelectorAll('.nav-menu')
    const [btnMenu2] = document.querySelectorAll('.open-menu2')
    const [closeMenu2] = document.querySelectorAll('.close-menu2')
    const [menu2] = document.querySelectorAll('.top-menu__content_menu')
    

    btnMenu.addEventListener('click', function() {
        toggleBlock(menu)
        toggleBlock(btnMenu)
    })

    btnMenu2.addEventListener('click', function() {
        menu2.classList.add('active')
    })

    closeMenu2.addEventListener('click', function() {
        menu2.classList.remove('active')
    })

    const toggleBlock = (block) => {
        block.classList.toggle('active');
    }
});

