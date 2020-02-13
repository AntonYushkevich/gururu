const titles = ['кино', 'маркетинг', 'дизайн', 'наука', 'танцы', 'спорт', 'бизнес', 'кулинария', 'фотография', 'мода', 'музыка'];
const allowedWidth = 1238;
const setElemTitle = el => (title) => el.innerHTML = title;
const regEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
const setImage = (name) => `assets/images/${name}.svg`;

window.onload = () => {
    if (window.innerWidth > allowedWidth) {
        addVideoSrc();
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

function inputChange({value}) {
    const submitBtn = document.querySelector('.about__submit');
    if (!value.length) {
        submitBtn.src = setImage('arrow-right');
    } else {
        submitBtn.src = setImage('arrow-right_white');
    }
    if (submitBtn.src.includes('arrow-right_error')) {
        submitBtn.src = setImage('arrow-right_error');
    }
}

function handleSubmitClick(e) {
    e.preventDefault();
    const inputEl = document.querySelector('#userEmail');
    const val = inputEl.value;
    if (val.match(regEmail)) {
        inputEl.blur();
        return e.target.src = setImage('success')
        //return submit
    }
    e.target.src = setImage('arrow-right_error');
}

function addVideoSrc() {
    const videoEl = document.querySelector('.main__video');
    videoEl.setAttribute('poster', 'assets/images/background-lg-l.jpg');
    videoEl.src = `assets/video.mp4`;
}
