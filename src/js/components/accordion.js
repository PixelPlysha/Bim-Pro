export const useAccordion = () => {
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion-button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const sectionId = this.getAttribute('data-section');
      const section = document.getElementById(sectionId);

      if (section.style.display === 'block') {
        section.style.display = 'none';
      } else {
        section.style.display = 'block';
      }

      // Toggle accordion icon rotation
      const icon = button.querySelector('.accordion-icon');
      icon.style.transform =
        icon.style.transform === 'rotate(90deg)'
          ? 'rotate(0deg)'
          : 'rotate(90deg)';

      // Toggle nested content visibility
      const nestedContent = document.getElementById('nested-' + sectionId);
      nestedContent.classList.toggle('show');
    });
  });

  const options = document.querySelectorAll('.accordion-button.option');

  options.forEach((option) => {
    option.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent the click event from reaching the parent section

      const nestedContent = document.getElementById(
        'nested-' + option.dataset.section,
      );
      nestedContent.classList.toggle('show');

      // Rotate the icon on click
      const icon = option.querySelector('.accordion-icon');
      icon.style.transform =
        icon.style.transform === 'rotate(90deg)'
          ? 'rotate(0deg)'
          : 'rotate(90deg)';
    });
  });
});
};

