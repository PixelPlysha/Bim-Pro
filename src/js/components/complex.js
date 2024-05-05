export const useComplex = () => {
    const accordions = document.querySelectorAll('.acordion');
  
    accordions.forEach((acordion) => {
      const header = acordion.querySelector('.acordion-header');
      const content = acordion.querySelector('.acordion-content');
      const icon = header.querySelector('svg');
  
      header.addEventListener('click', () => {
        content.classList.toggle('show');
        icon.classList.toggle('rotate');
      });
    });
  };
