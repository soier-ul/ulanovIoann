$(function () {

  $('.header__dropdown-button').on('click', function () {
    $('.header__dropdown-list').toggleClass('header__dropdown-list--active');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header__dropdown-button, .header__dropdown-list')) {
        $('.header__dropdown-list').removeClass('header__dropdown-list--active');
      }
    });
  });


});