const slider = (sliderInnerSelector, sliderWrapperSelector, sliderItemSelector, oneSlideheight = 668) => {
    const wrapper = document.querySelector(sliderWrapperSelector),
          inner = wrapper.querySelector(sliderInnerSelector),
          items = inner.querySelectorAll(sliderItemSelector);

        wrapper.style.height = oneSlideheight+'px';
        wrapper.style.overflow = "hidden";

        inner.style.height = oneSlideheight * items.length +'px';
        inner.style.transition = '0.5s all';
          
        function moveSlide(ofset) {
            inner.style.transform = `translateY(-${ofset}px)`;      
        }

        let i=1; 
        setInterval(()=>{
            moveSlide(oneSlideheight*i+i);
            ++i;
            if (i===items.length) {
                i = 0;
            }
        }, 5000)
            
};

export default slider;