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

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.addresses__tabs');
  const tabsBtn = document.querySelectorAll('.addresses__btn');
  const tabsContent = document.querySelectorAll('.addresses__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('addresses__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {
      el.classList.remove('addresses__btn--active')
    });
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('addresses__btn--active');

    tabsContent.forEach(el => {
      el.classList.remove('addresses__content--active')
    });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('addresses__content--active');
  };
});