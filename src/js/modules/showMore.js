const showMore = (btnSelestor, containerSelector, activeClassList, hiddenStyleList) => {
    const btn = document.querySelector(btnSelestor),
          stylesContainer = document.querySelector(containerSelector),
          images = stylesContainer.querySelectorAll('div');

    btn.addEventListener( 'click', ()=>{
        images.forEach(element => {
            if (element.classList.value === hiddenStyleList) {
                element.classList.value = activeClassList;
                btn.style.display = 'none';
            }
            
        });
    })
    
    
};
export default showMore; 