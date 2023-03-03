// Mega menu
function megamenuFunction(event, menu_name) {
  // [...document.querySelectorAll('nav.megamenu')].forEach(function (item) {
  //   var nav_megamenu_title = item.getAttribute('data_menu');
  //   if( menu_name == nav_megamenu_title ){
  //     item.classList.add('active');
  //   }else{
  //     item.classList.remove('active');
  //   }
  // });  
  var topMenuElement = document.querySelectorAll("nav.megamenu");
  var mainNavElements = document.querySelectorAll(".topmenu li");
  for (var i = 0; i < topMenuElement.length; i++) {
    var nav_megamenu_title = mainNavElements[i].getAttribute('data-name');
    var topMenuElement_title = topMenuElement[i].getAttribute('data_menu');
    console.log(topMenuElement[i].getAttribute('data_menu'));
    // console.log(topMenuElement_title);

    if (menu_name == nav_megamenu_title) {
      mainNavElements[i].classList.add('active');
    } else {
      mainNavElements[i].classList.remove('active');
    }

    if (menu_name == topMenuElement_title) {
      topMenuElement[i].classList.add('active');
    } else {
      topMenuElement[i].classList.remove('active');
    }
  }
}

// quiz page
function quizFunction() {
  console.log('click');
  document.querySelector('.page-content-wraper').classList.remove('active');
  document.querySelector('.trigger-class').classList.add('active');
}




// footer accordion
[...document.querySelectorAll('.footer-block__heading')].forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('footer-accordion');
    item.nextElementSibling.classList.toggle('footer-accordion-active');
  });
});
