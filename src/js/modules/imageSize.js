const replaceWithPicture = (blockSelector) => {
    const block = document.querySelectorAll(blockSelector);

    function replaceWithPhoto(block) {
        const img = block.querySelector('img'),
              pList = block.querySelectorAll('p');

        img.src = img.src.slice(0, -4) + '-1' + img.src.slice(img.src.length-4, img.src.length);
        pList.forEach(element => {
            element.style.display = 'none';
        });
    }

    function returnEverything(block) {
        const img = block.querySelector('img'),
              pList = block.querySelectorAll('p');
        img.src = img.src.slice(0, -6) + img.src.slice(img.src.length-4, img.src.length);
        pList.forEach(element => {
            element.style.display = 'block';
        });
    }

    block.forEach( item => {
        item.addEventListener( 'mouseenter', (e)=>{
            replaceWithPhoto(e.target);
        });

        item.addEventListener( 'mouseleave', (e)=>{
            returnEverything(e.target);
        });


    })

          
}

export default replaceWithPicture;