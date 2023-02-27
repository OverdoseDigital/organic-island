// Mega menu
function megamenuFunction(event, menu_name) {
  console.log(menu_name);
  [...document.querySelectorAll('nav.megamenu')].forEach(function (item) {
    console.log(item.getAttribute('data_menu'));
    var nav_megamenu_title = item.getAttribute('data_menu');
    if( menu_name == nav_megamenu_title ){
      item.classList.add('active');
    }else{
      item.classList.remove('active');
    }
  });  
}


// footer accordion
[...document.querySelectorAll('.footer-block__heading')].forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('footer-accordion');
    item.nextElementSibling.classList.toggle('footer-accordion-active');
  });
});
