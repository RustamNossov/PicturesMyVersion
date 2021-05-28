import popupShow from './modules/popups';
import tabsContainerSelector from './modules/tabs';
import slider from './modules/slider';

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
    
    tabsContainerSelector('.portfolio-menu', '.portfolio-wrapper', 'active');

    slider('.main-slider', '.slider-wrapper', '.main-slider-item');
    


//---------------------
})