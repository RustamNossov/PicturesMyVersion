const horisontalSlider = (sliderContainerSelector, sliderWrapperSelector, sliderItemSelector, nextSelector, prevSelector) => {
    const container = document.querySelector(sliderContainerSelector),
            wrapper = container.querySelector(sliderWrapperSelector),
            sliderItem = wrapper.querySelectorAll(sliderItemSelector),
            next = container.querySelector(nextSelector),
            prev = container.querySelector(prevSelector);
            let slideWidth;
    

    wrapper.querySelectorAll('img').forEach(pct => {
        pct.style.width = '100%';
        pct.style.maxWidth = '360px';
        pct.style.height ='auto';
    })

    
            

    

    //document.querySelectorAll('.feedback-slider-item')[0].style.width = slideWidth;
    wrapper.style.display = 'flex';
    wrapper.style.transition = '0.5s all';
    container.style.overflow = 'hidden';

    function settingSlideSize(sliderItem) {
        slideWidth = window.getComputedStyle(container).width;
        sliderItem.forEach(item => {
            
            item.style.width = slideWidth;
            

        })
    }
    
    settingSlideSize(sliderItem);
    window.addEventListener(`resize`, (e) => {
        settingSlideSize(sliderItem);
    })
    

    let position = 0;
    function moveSliderLeft(slider, ofset) {
        ++position;
        if (position < sliderItem.length) {
            ofset = +ofset.replace(/[^+\d]/g, '') * position;
            slider.style.transform = `translatex(-${ofset}px)`;
        } else {
            position = 0;
            ofset = +ofset.replace(/[^+\d]/g, '') * position;
            slider.style.transform = `translatex(-${ofset}px)`;
        }

    }

    function moveSliderRight(slider, ofset) {
        --position;
        if (position >= 0) {
            ofset = +ofset.replace(/[^+\d]/g, '') * position;
            slider.style.transform = `translatex(-${ofset}px)`;
        } else {
            position = +sliderItem.length - 1;
            ofset = +ofset.replace(/[^+\d]/g, '') * position;
            slider.style.transform = `translatex(-${ofset}px)`;
            //--position;
        }
    }

    setInterval(()=>{
        moveSliderLeft(wrapper, slideWidth);
    }, 5000);
    

    next.addEventListener('click', ()=>{
        moveSliderRight(wrapper, slideWidth);
    })

    prev.addEventListener('click', ()=>{
        moveSliderLeft(wrapper, slideWidth);
        
    })

   //moveSlider(wrapper, slideWidth);




}



export default horisontalSlider;