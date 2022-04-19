$(function () {

  $('.header__dropdown-button').on('click', function () {
    $('.header__dropdown-list').toggleClass('header__dropdown-list--active');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header__dropdown-button, .header__dropdown-list')) {
        $('.header__dropdown-list').removeClass('header__dropdown-list--active');
      }
    });
  });

  $('.accordion__btn').on('click', function () {
    $(this).toggleClass('accordion__btn--active');
    $('.accordion__content').toggleClass('accordion__content--active');
    $(this).next('.accordion__content').slideToggle(350);
  });

  $('.map__current').on('click', function () {
    $('.map__list').toggleClass('map__list--active');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.map__current, .map__list')) {
        $('.map__list').removeClass('map__list--active');
      }
    });
  });

});

function initMap() {
  const pos = {
    lat: 60.05096296918317,
    lng: 30.382495863583244
  };
  const opt = {
    center: pos,
    zoom: 18
  };

  const map = new google.maps.Map(document.getElementById('map'), opt);

  const marker = new google.mapsMarker({
    position: pos,
    map: map,
  });
}

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