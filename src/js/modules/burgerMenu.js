const burgerMenu = (burgerBtnSelector, burgerMenuSelector) => {
    const burgerBtn = document.querySelector(burgerBtnSelector),
          burgerMenu = document.querySelector(burgerMenuSelector);

    burgerBtn.addEventListener('click', ()=> {
        
        if (window.getComputedStyle(document.querySelector('.burger-menu')).display === 'none' &&
            window.innerWidth <= 992) {
            burgerMenu.style.display = 'block';
        } else {
            burgerMenu.style.display = 'none';
        }        
    })

}

export default burgerMenu;