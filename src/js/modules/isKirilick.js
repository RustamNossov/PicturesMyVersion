const isKirilick = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach( item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яА-я-]/g, '');
        });
    });
}

export default isKirilick;