import popupShow from './modules/popups';
import tabsContainerSelector from './modules/tabs';
import slider from './modules/slider';
import showMore from './modules/showMore';
import imageSize from './modules/imageSize';
import accordion from './modules/accordion';
import horisontalSlider from './modules/horisontalSlider';
import calc from './modules/calc';

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
    

    showMore('.button-styles','.styles-container', 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1', 'hidden-lg hidden-md hidden-sm hidden-xs styles-2');

    imageSize('.sizes-block');

    accordion('#accordion');

    horisontalSlider('.feedback-slider', '.feedback-slider__wrapper', '.feedback-block', '.main-prev-btn', '.main-next-btn');

    calc();
//---------------------
})