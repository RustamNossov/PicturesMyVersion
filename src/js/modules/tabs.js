const tabsSwitcher = (tabsContainerSelector, portfolioContainerSelector, activeClass) => {
    const tabs = document.querySelector(tabsContainerSelector),
          tabsItems = tabs.querySelectorAll('li'),
          portfolio = document.querySelector(portfolioContainerSelector),
          pictures = portfolio.querySelectorAll('.portfolio-block');

// functions for adding and removeing active class
    const addingActiveClass = (item, cls) => {
        item.classList.add(cls);
    }

    const removeActiveClass = (item, cls) => {
        item.classList.remove(cls);
    }

//function for filtering pictures 
    tabs.addEventListener( 'click', (e) => {
        const target = e.target;

        tabsItems.forEach(item => {
            removeActiveClass(item, activeClass) 
        });

// changing portfolio
        let trigger;
        pictures.forEach( item => {
            item.style.display = 'none';
            if (item.classList.contains(target.className)) {
                item.style.display = 'block';
                trigger = 1;
            }
        })

        if (!trigger) {
            document.querySelector('.portfolio-no').style.display = 'block';
        } else {
            document.querySelector('.portfolio-no').style.display = 'none';
        }




        if (target && target.constructor.name === 'HTMLLIElement') {
            addingActiveClass(target, activeClass);
        }

        

    })

// 



    



};

export default tabsSwitcher;
