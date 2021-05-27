import popupShow from './modules/popups';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    popupShow({
        btnSelector: '.button-design', 
        popupSelector: '.popup-design', 
        closeSelector: '.popup-close'
    });

    popupShow({
        btnSelector: '.button-consultation', 
        popupSelector: '.popup-consultation', 
        closeSelector: '.popup-close'
    });

    popupShow({
        btnSelector: '.fixed-gift', 
        popupSelector: '.popup-gift', 
        closeSelector: '.popup-close'
    });
    

    


//---------------------
})