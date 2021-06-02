const slider = (sliderInnerSelector, sliderWrapperSelector, sliderItemSelector) => {
    const wrapper = document.querySelector(sliderWrapperSelector),
          inner = wrapper.querySelector(sliderInnerSelector),
          items = inner.querySelectorAll(sliderItemSelector);
          //oneSlideheight = window.getComputedStyle(items[0]).height.replace(/[^+\d]/g, '');

        
        
        inner.querySelectorAll('img').forEach(pct => {
            pct.style.width = '100%';
            pct.style.maxWidth = '670px';
            pct.style.height ='auto';
        })

        let oneSlideheight;
        
        calculateSliderParam()


        function calculateSliderParam() {

            oneSlideheight = window.getComputedStyle(inner.querySelectorAll('img')[0]).height.replace(/[^+\d.]/g, '');
            //console.log(oneSlideheight);

            wrapper.style.height = oneSlideheight+'px';
            wrapper.style.overflow = "hidden";

            inner.style.height = oneSlideheight * items.length +'px';
            inner.style.transition = '0.5s all';
        }

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
        
        window.addEventListener(`resize`, (e) => {
            
            calculateSliderParam();    
        });
        
            
};

export default slider;