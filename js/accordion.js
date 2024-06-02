const accordion = () => {
    const contents = document.querySelectorAll('.program-line__content');

    contents.forEach((elem, num, array) => {
        const title = elem.querySelector('.program-line__title');
        const descr = elem.querySelector('.program-line__descr');

        title.addEventListener('click', () => {
            array.forEach((e, n) => {
                const d = e.querySelector('.program-line__descr');
                if (num != n) {
                    d.classList.remove('active');
                };
                console.log(n + 1);
            });
            descr.classList.toggle('active');
        });
    });
};

accordion();