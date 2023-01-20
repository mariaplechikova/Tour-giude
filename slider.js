let sliderLeft = 0;
// ширина картинки
let widthItem;

const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

if (document.documentElement.clientWidth < 600) {
    widthItem = document.documentElement.clientWidth;

    renderSlider(0);
    renderButtons(0);

    function renderSlider(sliderLeft) {
        track.style.left = `${sliderLeft}px`;
    };

    function renderButtons(sliderLeft) {
        sliderLeft < 0 ? btnPrev.style.display  = 'block' : btnPrev.style.display  = 'none';
        sliderLeft > -(widthItem * 5) ? btnNext.style.display  = 'block' : btnNext.style.display  = 'none';
    }

    btnNext.addEventListener('click', function() {
        if (sliderLeft > -(widthItem * 5)) {
            sliderLeft = sliderLeft - widthItem;
            renderSlider(sliderLeft);
        }
        renderButtons(sliderLeft)
    })

    btnPrev.addEventListener('click', function() {
        if (sliderLeft < 0) {
            sliderLeft = sliderLeft + widthItem;
            renderSlider(sliderLeft);
        }
        renderButtons(sliderLeft)
    })

}

if (document.documentElement.clientWidth < 850 && document.documentElement.clientWidth >= 650) {
    widthItem = document.documentElement.clientWidth / 2;

    renderSlider(0);
    renderButtons(0);

    function renderSlider(sliderLeft) {
        track.style.left = `${sliderLeft}px`;
    };

    function renderButtons(sliderLeft) {
        sliderLeft < 0 ? btnPrev.style.display  = 'block' : btnPrev.style.display  = 'none';
        sliderLeft > -(widthItem * 4) ? btnNext.style.display  = 'block' : btnNext.style.display  = 'none';
    }

    btnNext.addEventListener('click', function() {
        if (sliderLeft > -(widthItem * 4)) {
            sliderLeft = sliderLeft - widthItem;
            renderSlider(sliderLeft);
        }
        renderButtons(sliderLeft)
    })

    btnPrev.addEventListener('click', function() {
        if (sliderLeft < 0) {
            sliderLeft = sliderLeft + widthItem;
            renderSlider(sliderLeft);
        }
        renderButtons(sliderLeft)
    })
}

if (document.documentElement.clientWidth >= 850) {
    widthItem = document.documentElement.clientWidth / 4;

    renderSlider(0);
    renderButtons(0);

    function renderSlider(sliderLeft) {
        track.style.left = `${sliderLeft}px`;
    };

    function renderButtons(sliderLeft) {
        sliderLeft < 0 ? btnPrev.style.display  = 'block' : btnPrev.style.display  = 'none';
        sliderLeft > -(widthItem * 4) ? btnNext.style.display  = 'block' : btnNext.style.display  = 'none';
    }

    btnNext.addEventListener('click', function() {
        if (sliderLeft > -(widthItem * 2)) {
            sliderLeft = sliderLeft - widthItem;
            renderSlider(sliderLeft);
        }
        renderButtons(sliderLeft)
    })

    btnPrev.addEventListener('click', function() {
        if (sliderLeft < 0) {
            sliderLeft = sliderLeft + widthItem;
            renderSlider(sliderLeft);
        }
        renderButtons(sliderLeft)
    })
}