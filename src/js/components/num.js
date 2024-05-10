
export const useNum = () => {
  const time = 1000; 
  const step = 1;
  const targetNum = 20;

  function outNum(elem) {
    let n = 0;
    const t = Math.round(time / targetNum / step);
    const interval = setInterval(() => {
      n += step;
      const outElem = document.getElementById(elem);
      outElem.textContent = n;

      if (n === targetNum) {
        clearInterval(interval);
      }
    }, t);
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  let isCounterRunning = false;

  function handleScroll() {
    const section = document.querySelector('.baner');
    const numElement = document.getElementById('out-1');

    if (isInViewport(section)) {
      if (!isCounterRunning) {
        outNum('out-1');
        isCounterRunning = true;
      }
    } else {
      numElement.textContent = '0';
      isCounterRunning = false;
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
};
