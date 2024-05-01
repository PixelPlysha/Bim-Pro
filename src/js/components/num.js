export const useNum = () => {
  const time = 1000; // ms
  const step = 1;
  const targetNum = 20; // Целевое значение

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

  // Вызов функции outNum после инициализации
  outNum('out-1');
};
