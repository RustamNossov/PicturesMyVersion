const popupShow = ({btnSelector, popupSelector, closeSelector}) => {
    const btns = document.querySelectorAll(btnSelector),
          popup = document.querySelector(popupSelector),
          closeBtn = document.querySelectorAll(closeSelector),
          giftPopup = document.querySelector('.popup-gift'),
          consultationPopup = document.querySelector('.popup-consultation'),
          allPopups = document.querySelectorAll('[data-modal]'),
          body = document.querySelector('body');


    // open popup popup-consultation after 60 seconds 
    function openPopupSetTimeout(popup, timeout) {
        const popupConsultationOpenTimeout = setTimeout( () =>{
            openPopup(popup);
        }, timeout);

        return popupConsultationOpenTimeout;
    }

    //
    openPopupSetTimeout(consultationPopup, 500000);
    

    // function openint popup
    const openPopup = (e, popupConsultationOpenTimeout) => {
        // block opening popup if any popup already displayed
        let trigger = 0;
        allPopups.forEach( item => {
            if (window.getComputedStyle(item)['display'] != 'none') {
                trigger = 1;
            }
        })

        if (trigger === 0) {

            e.style.display = 'block';

            clearTimeout(popupConsultationOpenTimeout);

            // block body scroll 
            body.style.overflow = 'hidden';

            // remove gift icon from the page
            if (btnSelector === '.fixed-gift') {
                btns.forEach((e) => {
                    e.style.display = 'none';
                })
            }
        }
    }

    // function closing popup
    const closePopup = (e) => {
        e.style.display = 'none';
        body.style.overflow = 'scroll';
    }

    // open popup when a btn clicked
    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(item);

            if (e.target) {
                openPopup(popup);
            };
        });
    });

    // close popup when the cross is clicked
    closeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                closePopup(popup);
            };
        });
    });

    // close popup when the substrate is clicked
    popup.addEventListener( 'click', (e) => {
        if ( e.target && e.target == popup) {
            closePopup(popup);
        }
    })

    // open popup-gift when user scrolled to the bottom
    window.onscroll = function(ev) {

        if ( ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) 
            && window.getComputedStyle(document.querySelector('.fixed-gift'), null)['display'] != 'none') {
            openPopup(giftPopup);
       }
    };


    

};

export default popupShow;