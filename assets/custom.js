// Mega menu
function megamenuFunction(event, menu_name) {
  console.log(menu_name);
}


// footer accordion
[...document.querySelectorAll('.footer-block__heading')].forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('footer-accordion');
    item.nextElementSibling.classList.toggle('footer-accordion-active');
  });
});
