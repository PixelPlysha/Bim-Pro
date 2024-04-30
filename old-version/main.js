const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    




    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    // Default parameters
    slidesPerView: 1,
    // Responsive breakpoints

    

});


const time = 1000; // ms 
const step = 1;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
    t);
}

outNum(+20, 'out-1');



