let obj = {
    // количество картинок, которые мы видим одновременно на экране
    indexScreen: '',
    // ширина картинки
     widthItem: '',
}
// общее колличество картинок в слайдере
let countItem = 6;
// крайнее левое положение slider-track
let sliderLeft = 0;


const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

getDate();
renderSlider(sliderLeft);
renderButtons(sliderLeft); 

window.addEventListener('resize', function() {
    sliderLeft = 0;
    getDate();
    renderSlider(sliderLeft);
    renderButtons(sliderLeft); 
  });

function getDate() {
    if (document.documentElement.clientWidth < 600) {
        obj.widthItem = document.documentElement.clientWidth;
        obj.indexScreen = 1;
    }
    
    if (document.documentElement.clientWidth < 850 && document.documentElement.clientWidth >= 650) {
        obj.widthItem = document.documentElement.clientWidth / 2;
        obj.indexScreen = 2;
    }
    
    if (document.documentElement.clientWidth >= 850) {
        obj.widthItem = document.documentElement.clientWidth / 4;
        obj.indexScreen = 4;
    }
    return obj
}

function renderSlider(sliderLeft) {
    track.style.left = `${sliderLeft}px`;
};

function renderButtons(sliderLeft) {
    sliderLeft < 0 ? btnPrev.style.display  = 'block' : btnPrev.style.display  = 'none';
    sliderLeft > -(obj.widthItem * (countItem - obj.indexScreen)) ? btnNext.style.display  = 'block' : btnNext.style.display  = 'none';
}

btnNext.addEventListener('click', function() {
    if (sliderLeft > -(obj.widthItem * (countItem - obj.indexScreen))) {
        sliderLeft = sliderLeft - obj.widthItem;
        renderSlider(sliderLeft);
    }
    renderButtons(sliderLeft)
})

btnPrev.addEventListener('click', function() {
    if (sliderLeft < 0) {
        sliderLeft = sliderLeft + obj.widthItem;
        renderSlider(sliderLeft);
    }
    renderButtons(sliderLeft)
})