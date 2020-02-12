const titles = ['кино', 'маркетинг', 'дизайн', 'наука', 'танцы', 'спорт', 'бизнес', 'кулинария', 'фотография', 'мода', 'музыка'];
const allowedWidth = 1238;
const setElemTitle = el => (title) => el.innerHTML = title;

window.scroll(0, 0);
window.onload = () => {
    if (window.innerWidth > allowedWidth) {
        const elem = document.querySelector('.main__block-title');
        const setTitle = setElemTitle(elem);
        let i = 0;
        setInterval(
            () => {
                if (i === titles.length) {
                    i = 0;
                }
                setTitle(titles[i]);
                i++;
            },
            1000
        )
    }
};
