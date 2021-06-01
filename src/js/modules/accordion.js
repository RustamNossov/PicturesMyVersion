const accordion = (accordionSelector) => {
    const accordion = document.querySelector(accordionSelector),
          text = accordion.querySelectorAll('.accordion-heading'),
          block = accordion.querySelectorAll('.accordion-block');

    block.forEach(element => {
        element.classList.add('animated');
    });

    function showBlock(blockId) {
        block[blockId].classList.add('flipInX');
        block[blockId].style.zIndex = '10';
        block[blockId].style.display = 'block';
    }


    function hideBlock(block) {
        block.forEach(element => {
            element.style.display = 'none';
        });
        
    }
    
    hideBlock(block);

    text.forEach( (element, i) => {
        element.addEventListener( 'click', (e) => {
            if (window.getComputedStyle(block[i])['display'] === 'none') {
                hideBlock(block);
                showBlock(i);
            } else {
                hideBlock(block);
            }
        })
    });
}

export default accordion;