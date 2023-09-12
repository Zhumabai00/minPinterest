$(document).ready(function () {
  // слайдер цветов в попапе
  /*$(".add-basket__color-slider").on(`init reInit`, function (event, slick) {
    $(".detail-page__dots-color").text(1 + " / " + slick.slideCount);
  });
  $(".add-basket__color-slider").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".detail-page__dots-color").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );
  $(".add-basket__color-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: ".detail-page__dots-color",
  }); */

  //слайдер дополнительных фото
  /*$(".detail-page__add-slider").on(`init reInit`, function (event, slick) {
    $(".detail-page__dots-add").text(1 + " / " + slick.slideCount);
  });
  $(".detail-page__add-slider").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".detail-page__dots-add").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );
  $(".detail-page__add-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: ".detail-page__dots-add",
  });*/

  // слайдер на детальной странице
  /*$(".detail-page__slider").on(`init reInit`, function (event, slick) {
    $(".detail-page__dots").text(1 + " / " + slick.slideCount);
  });
  $(".detail-page__slider").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".detail-page__dots").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );
  $(".detail-page__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: ".detail-page__dots",
  });*/

  // переключение меню
  $(".header-bottom__link").click(function (e) {
    $(".header-bottom__link").removeClass("active");
    $(this).toggleClass("active");
    $(".main__content").removeClass("active");
    $(".main__content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  // переключение кнопок в подвале
  $(".footer__link").click(function () {
    $(".footer__link").removeClass("active");
    $(this).toggleClass("active");
  });

  // кнопки плюс минус
  $(document).on("click", ".minus", function () {
    var parent = $(this).closest(".add-basket__count-el");
    var item = parent.find(".add-basket__count-number");
    if (item.val() >= 1) {
      item.val(parseInt(item.val()) - 1);
    }
  });

  $(document).on("click", ".plus", function () {
    var parent = $(this).closest(".add-basket__count-el");
    var item = parent.find(".add-basket__count-number");
    item.val(parseInt(item.val()) + 1);
  });

  // Переключение контента на subcategories и index страницах
  $(".toggle-button").click(function () {
    $(".toggle-button").removeClass("active");
    $(this).toggleClass("active");

    $(".toggle-content").removeClass("active");
    $(".toggle-content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  //Выпадающее меню
  let = isSortShow = false;
  $("#sort").click(function () {
    if (isSortShow) {
      $("body").css("overflow", "auto");
      $(".subcategories-page__panel-sort").removeClass('rotate');
      $('.subcategories-page__panel-hide').removeClass('subcategories-page__hide-open');
      $("#shadow-sort").fadeOut();
      isSortShow = false;
    } else {
      $("#shadow-sort").fadeIn(function () {
        $("body").css("overflow", "hidden");
        $(".subcategories-page__panel-sort").addClass('rotate');
        $('.subcategories-page__panel-hide').addClass('subcategories-page__hide-open');
        isSortShow = true;
      })
    }
  });

  $("#shadow-sort, #filter, .subcategories-page__hide-open, .subcategories-page__nav, .page-header__form-input, .subcategories-page__header, .subcategories-page__hide-item")
    .click(function () {
      $("body").css("overflow", "auto");
      $(".subcategories-page__panel-sort").removeClass('rotate');
      $('.subcategories-page__panel-hide').removeClass('subcategories-page__hide-open');
      isSortShow = false;
      $("#shadow-sort").fadeOut();
    });

  //Смена вида сортировки
  $('#sort-text-1').click(function () {
    document.getElementById('sort-text').innerHTML = `Сортировка <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort">`;
    $('#sort-text-1').addClass('active');
    $('#sort-text-2, #sort-text-3, #sort-text-4').removeClass('active');
  });
  $('#sort-text-2').click(function () {
    document.getElementById('sort-text').innerHTML = `По новизне <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort">`;
    $('#sort-text-2').addClass('active');
    $('#sort-text-1, #sort-text-3, #sort-text-4').removeClass('active');
  });
  $('#sort-text-3').click(function () {
    document.getElementById('sort-text').innerHTML = `По возрастанию <span>цены <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort"></span>`;
    $('#sort-text-3').addClass('active');
    $('#sort-text-2, #sort-text-1, #sort-text-4').removeClass('active');
  });
  $('#sort-text-4').click(function () {
    document.getElementById('sort-text').innerHTML = `По убыванию <span>цены <img src="./img/arrow-down.svg" id="sort-icon" alt="sort" class="subcategories-page__panel-sort"></span>`;
    $('#sort-text-4').addClass('active');
    $('#sort-text-2, #sort-text-3, #sort-text-1').removeClass('active');
  });

  //Переключение вида колонки продуктов
  $('.subcategories-page__panel-shake').click(function () {
    $('.subcategories-page__panel-shake').toggleClass('rotate');
    $('.page-products').toggleClass('container');
    $('.subcategories-page__products-wrapper').toggleClass('subcategories-page__products-wrapper-toggle');
    $('.page-products__col').toggleClass('page-products__col-toggle');
    $('.page-products__col-item').toggleClass('page-products__col-item-toggle');
    $('.products-col__item-img').toggleClass('products-col__item-img-toggle');
    $('.products-col__item-info').toggleClass('products-col__item-info-toggle');
    $('.products-col__info-text').toggleClass('products-col__info-text-toggle');
    $('body').toggleClass('body-white-toggle');
  });

  //Вызов модального окна фильтра
  $("#filter").click(function (event) {
    event.preventDefault();
    $("#shadow-filter").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $("#filter-window")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#filter-close, #shadow-filter, #filter-apply").click(function () {
    $("#filter-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("display", "none");
      $("#shadow-filter").fadeOut(297);
    });
  });

  //Показ и скрытие дополнительных цветов
  $('#more-colors').click(function () {
    $('.second-colors').removeClass('toggle-colors');
    $('#more-colors').addClass('toggle-colors');
  });

  $('#more-colors-close').click(function () {
    $('.second-colors').addClass('toggle-colors');
    $('#more-colors').removeClass('toggle-colors');
  });

  //Подставление значений цены min max
  $('#price-low-block').click(function () {
    $('#min-price').val('0');
    $('#max-price').val('2990');
  });

  $('#price-medium-block').click(function () {
    $('#min-price').val('3000');
    $('#max-price').val('8990');
  });

  $('#price-high-block').click(function () {
    $('#min-price').val('9000');
    $('#max-price').val('14990');
  });

  //Нажатие на кнопку Применить и на кнопку Сбросить
  let filterIcon = document.querySelector('#filter-icon');
  $("#filter-apply").click(function () {
    $(".subcategories-page__panel-filter").addClass('active');
    filterIcon.setAttribute('src', './img/filter-orange.svg');
  });

  $("#filter-reset").click(function () {
    $(".subcategories-page__panel-filter").removeClass('active');
    filterIcon.setAttribute('src', './img/filter.svg');
  });

  // вызов модального окна добавления в корзину
  $("button.popup-basket").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#add-basket').addClass('add-basket-open');
      $("#add-basket")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#add-basket__close, #btn-to-basket, #shadow").click(function () {
    $("body").css("overflow", "auto");
    $('#add-basket').removeClass('add-basket-open');
    $("#add-basket").animate({ opacity: 0 }, 198, function () {
      $(this).css("display", "none");
      $("#shadow").fadeOut(297);
    });
  });



  /* $(".add-basket__popup").click(function () {
    $(".add-basket").css("bottom", "-100%");
  }); */

  $("input[name='size']").change(function () {
    $(".add-basket__tab-content").removeClass("active");
    $(".add-basket__tab-content")
      .filter('[id="' + $(this).data("btn") + '"]')
      .toggleClass("active");
  });

  $(".header-bottom-recall__item").click(function () {
    $(".header-bottom-recall__item").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".auth__else").click(function () {
    $(".auth-fade__popup").addClass("show");
  });

  $(".auth__popup").click(function () {
    $(".auth-fade__popup").removeClass("show");
  });

  $("#all").click(function () {
    if ($(this).is(":checked")) {
      $(".basket-page__card input:checkbox").prop("checked", true);
    } else {
      $(".basket-page__card input:checkbox").prop("checked", false);
    }
  });
  $("#footer-check").click(function () {
    if ($(this).is(":checked")) {
      $(".basket-page__card input:checkbox").prop("checked", true);
    } else {
      $(".basket-page__card input:checkbox").prop("checked", false);
    }
  });

  //Всплывающее окно Доставка / Возврат
  $("a.to-delivery-popup").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#detail-page__params-window').addClass('add-params-open');
      $("#detail-page__params-window")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#detail-page__params-close, #shadow").click(function () {
    $('#detail-page__params-window').removeClass('add-params-open');
    $("#detail-page__params-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("display", "none");
      $("#shadow").fadeOut(297);
    });
  });

  //Всплывающее окно Подробнее
  $("a.detail-page__info-link").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#detail-page__info-window').addClass('add-info-open');
      $("#detail-page__info-window")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#detail-page__info-close, #shadow").click(function () {
    $("body").css("overflow", "auto");
    $('#detail-page__info-window').removeClass('add-info-open');
    $("#detail-page__info-window").animate({ opacity: 0 }, 198, function () {
      $(this).css("display", "none");
      $("#shadow").fadeOut(297);
    });
  });

  //Увеличение дополнительных картинок
  $(".detail-page__info-img").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-4").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $("#detail-page__info-img-window")
        .css("visibility", "visible")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#detail-page__info-img-close, #shadow-dark-4").click(function () {
    $("#detail-page__info-img-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("visibility", "hidden");
      $("#shadow-dark-4").fadeOut(297);
    });
  });

  //Попап с слайдером
  $("div.slide-item").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-3").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $("#detail-page__slide-window")
        .css("visibility", "visible")
        .animate({ opacity: 1 }, 198);
    });
  });
  $("div.slide-item-mod").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-3").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $("#detail-page__slide-window")
        .css("visibility", "visible")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#detail-page__slide-close, #shadow-dark-3").click(function () {
    $(".detail-page__slide-window-menu .detail-page__dots").css("display", "none");
    $("#detail-page__slide-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("visibility", "hidden");
      $("#shadow-dark-3").fadeOut(297);
    });
  });

  //Увеличение картинок в отзывах

  $("div.recall-page__img").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-5").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $("#recall-page__img-window")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
      $("div.container")
        .css("margin", "0");
    });
  });
  $("#recall-page__img-close, #shadow-dark-5").click(function (e) {
    if ($(e.target).closest(".swiper-slide-active").length) {
      return;
    }
    $("#recall-page__img-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("display", "none");
      $("#shadow-dark-5").fadeOut(297);
      $("div.container")
        .css("margin", "0 8px");
    });
  });

  //Всплывающее окно Больше информации
  $("#burger").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $("body").css("overflow", "hidden");
      $('#burger-window').addClass('burger-open');
      $("#burger-window")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
      $("div.container")
        .css("margin", "0");
    });
  });

  $("#burger-close, #shadow").click(function () {
    $('#burger-window').removeClass('burger-open');
    $("#burger-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("display", "none");
      $("#shadow").fadeOut(297);
      $("div.container")
        .css("margin", "0 8px");
    });
  });

  //Счётчики "Мои заказы"
  let expectPayment = $("#expectPayment").text() ? $("#expectPayment").text() : 0;
  let handedDelivery = 0;
  let receiveOrder = 0;
  let productReturn = 0;

  function checkOrdersStatus() {
    if (expectPayment > 0) {
      $("#expectPayment").parent().css("display", "block");
    } else {
      $("#expectPayment").parent().css("display", "none");
    }
    if (handedDelivery > 0) {
      $("#handedDelivery").text(handedDelivery);
      $("#handedDelivery").parent().css("display", "block");
    } else {
      $("#handedDelivery").parent().css("display", "none");
    }
    if (receiveOrder > 0) {
      $("#receiveOrder").text(receiveOrder);
      $("#receiveOrder").parent().css("display", "block");
    } else {
      $("#receiveOrder").parent().css("display", "none");
    }
    if (productReturn > 0) {
      $("#productReturn").text(productReturn);
      $("#productReturn").parent().css("display", "block");
    } else {
      $("#productReturn").parent().css("display", "none");
    }
  }
  checkOrdersStatus();

  //Счётчик корзины
  let countBasket = 0;

  $("#btn-to-basket").click(function (event) {
    event.preventDefault();
    $(".counter").text(++countBasket);
    $(".basket-counter").css("display", "block");
  });
  $("#btn-to-basket-sizes").click(function (event) {
    event.preventDefault();
    $(".counter").text(++countBasket);
    $(".basket-counter").css("display", "block");
  });

  //Увеличение картинок в addbasket
  $("img.add-basket__color-zoom").click(function (event) {
    event.preventDefault();
    $("#shadow-dark-2").fadeIn(297, function () {
      $("#add-basket__color-window")
        .css("visibility", "visible")
        .animate({ opacity: 1 }, 198);
      $("div.container")
        .css("margin", "0");
    });
  });

  $("#add-basket__color-close, #shadow-dark-2").click(function () {
    $("#add-basket__color-window").animate({ opacity: 0 }, 198, function () {
      $(this).css("visibility", "hidden");
      $("#shadow-dark-2").fadeOut(297);
      $("div.container")
        .css("margin", "0 8px");
    });
  });

  //Всплывающее окно, информирующее о добавлении в корзину или в избранное
  $("#btn-to-basket").click(function () {
    setTimeout(() => {
      $('#done').css("display", "flex");
    }, 100)
    setTimeout(() => {
      $('#done').css("display", "none");
    }, 2000)
  });
  $("#btn-to-basket-sizes").click(function () {
    setTimeout(() => {
      $('#done').css("display", "flex");
    }, 100)
    setTimeout(() => {
      $('#done').css("display", "none");
    }, 2000)
  });

  let isFavorites = false;
  $("#favorites").click(function () {
    if (isFavorites) {
      document.querySelector('#favorites-img').setAttribute('src', './img/heart-like.svg');
      isFavorites = false;
    } else {
      document.querySelector('#favorites-img').setAttribute('src', './img/like-active.svg');
      setTimeout(() => {
        $('#done-favorites').css("display", "flex");
      }, 0)
      setTimeout(() => {
        $('#done-favorites').css("display", "none");
      }, 2000)
      isFavorites = true;
    }
  });

  //Окно изменения данных в профиле
  $("#mydata, #user-name, #user-ava").click(function (event) {
    event.preventDefault();
    $("body").css("overflow", "hidden");
    $("#mydata-window")
      .css("display", "block")
      .animate({ opacity: 1 }, 198);
  });

  $("#mydata-close, #mydata-user-exit").click(function () {
    $("#mydata-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("display", "none");
    });
  });

  //Окно купонов в профиле
  $(".coupons").click(function (event) {
    event.preventDefault();
    $("#shadow").fadeIn(297, function () {
      $('#coupons-window').addClass('coupon-open');
      $("body").css("overflow", "hidden");
      $("#coupons-window")
        .css("display", "block")
        .animate({ opacity: 1, top: "25%" }, 0);
    });
  });

  $("#coupons-close, #coupon-accept, #shadow").click(function () {
    $("#coupons-window").animate({ opacity: 0, top: "100%" }, 300, function () {
      $('#coupons-window').removeClass('coupon-open');
      $("body").css("overflow", "auto");
      $(this).css("display", "none");
      $("#shadow").fadeOut(297);
    });
  });

  //Переключение текста купонов с "Выбрать" на "Выбрано"
  $('.page-coupon__input').change(function () {
    if ($(this).prop('checked')) {
      $(this).next('.page-coupon__input-label').children('.page-coupons__right-button').text('Выбрано');
      $(this).siblings('.page-coupons__blocked').css("display", "block");
    }
    else {
      $(this).next('.page-coupon__input-label').children('.page-coupons__right-button').text('Выбрать');
    }
  });

  //Вход и выход в профиле
  let userIsAuth = true;

  if (userIsAuth) {
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item").css("pointer-events", "auto");
  } else {
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item").css("pointer-events", "none");
  }

  $("#mydata-user-exit").click(function () {
    userIsAuth = false;
    $("#user-name").css("display", "none");
    $("#to-user-auth, .user-not-auth").css("display", "block");
    expectPayment = 0;
    handedDelivery = 0;
    receiveOrder = 0;
    productReturn = 0;
    checkOrdersStatus();
  });

  $("#auth-button").click(function () {
    userIsAuth = true;
    $(".profile-header__settings-item, .profile-page__list-item, .myorders-content__item, #user-ava .to-auth").removeClass("user-not-auth");
    $("#user-name").css("display", "block");
    $("#to-user-auth, .user-not-auth").css("display", "none");
    checkOrdersStatus();
  });

  $("#to-user-auth, .user-not-auth").click(function (event) {
    event.preventDefault();
    $("body").css("overflow", "hidden");
    $("#auth-window")
      .css("display", "block")
      .animate({ opacity: 1 }, 198);
  });


  $("#auth-close, #auth-button").click(function () {
    $("#auth-window").animate({ opacity: 0 }, 198, function () {
      $("body").css("overflow", "auto");
      $(this).css("display", "none");
    });
  });

  //Загрузка фото
  $('#my-file-label').on('click', function () {
    $('#my-file').trigger('click');
  });

  let maxFileSize = 10 * 1024 * 1024; // (байт) Максимальный размер файла (10мб)
  let queue = {};

  let imagesList = $('#uploadImagesList');
  // 'detach' подобно 'clone + remove'
  let itemPreviewTemplate = imagesList.find('.send-page__images-item').detach();

  // Вычисление лимита
  function limitUpload() {
    return 5 - imagesList.children().length;
  }
  // Отображение лимита
  function limitDisplay() {
    let sTxt;
    switch (limitUpload()) {
      case 5:
        sTxt = '(0/5)';
        break;
      case 0:
        sTxt = '(5/5)';
        $('#my-file-label, #my-file').css("display", "none");
        $('#uploadImagesList').css("max-width", "100%");
        break;
      default:
        sTxt = '(' + (5 - +limitUpload()) + '/5)';
        $('#my-file-label, #my-file').css("display", "block");
        $('#uploadImagesList').css("max-width", "80%");
    }
    if (limitUpload() == 0) {
      $('#my-file-label, #my-file').css(("display", "none"));
    } else {
      $('#my-file-label, #my-file').css(("display", "block"));
    }
    $('.add_photo-item').html(sTxt);
  }

  $('#my-file').on('change', function () {
    let files = this.files;
    // Перебор файлов до лимита
    for (var i = 0; i < limitUpload(); i++) {

      let file = files[i];
      if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
        continue;
      }
      if (file.size > maxFileSize) {
        alert('Размер фотографии не должен превышать 10 Мб');
        continue;
      }
      preview(files[i]);
    }
    this.value = '';
  });
  function preview(file) {
    let reader = new FileReader();
    reader.addEventListener('load', function (event) {
      let img = document.createElement('img');
      let itemPreview = itemPreviewTemplate.clone();
      itemPreview.find('.img-wrap img').attr('src', event.target.result);
      itemPreview.data('id', file.name);
      imagesList.append(itemPreview);
      // Обработчик удаления
      itemPreview.on('click', function () {
        delete queue[file.name];
        $(this).remove();
        limitDisplay();
      });

      queue[file.name] = file;
      // Отображение лимита при добавлении
      limitDisplay();
    });
    reader.readAsDataURL(file);
  }
  // Отображение лимита при запуске
  limitDisplay();

  //инициализация счётчика избранных товаров
  $("#delayed-counter").text(`(${$(".delayed-page").children('.delayed-page__item').length})`);

  //инициализация счётчика просмотренных товаров
  $("#viewed-counter").text(`(${$(".viewed-page__content").children('.viewed-page__content-item').length})`);
  $("#select-viewed-products").text($('.viewed-page__input:checked').length)

  $('.viewed-page__input').bind('click', function (e, a) {
    if (this.checked) {
      $("#select-viewed-products").text($('.viewed-page__input:checked').length)
    } else {
      $("#select-viewed-products").text($('.viewed-page__input:checked').length)
    }
  });

  //если счётчик равен нулю
  if ($(".delayed-page").children('.delayed-page__item').length === 0 && $(".viewed-page__content").children('.viewed-page__content-item').length === 0 && $(".my-orders__list").children('.my-orders__list-item').length === 0) {
    $(".delayed-page__zero").css("display", "block");
  } else {
    $(".delayed-page__zero").css("display", "none");
  }

  //Удаление через выдвигающуюся кнопку
  $(".delayed-page__item-delete").click(function () {
    $(this).parent().remove();
    $("#delayed-counter").text(`(${$(".delayed-page").children('.delayed-page__item').length})`);
    if ($(".delayed-page").children('.delayed-page__item').length === 0) {
      $(".delayed-page__zero").css("display", "block");
      $(".delayed-page").css("min-height", "400px");
      $("input[type=checkbox]").prop('checked', false);
    } else {
      $(".delayed-page__zero").css("display", "none");
      $(".delayed-page").css("min-height", "100px");
    }
  });

  //Включение/выключение режима редактирования
  let = isEdit = false;
  $("#delayed-edit, #viewed-edit").click(function () {
    if (isEdit) {
      $(".custom-checkbox-span").css("display", "none");
      $(".delayed-page__window").css("display", "none");
      $('.delayed-page__item-delete').css("display", "flex");
      $(this).text('Выбрать');
      isEdit = false;
    } else {
      $(".custom-checkbox-span").css("display", "inline-flex");
      $(".delayed-page__window").css("display", "flex");
      $('.delayed-page__item-delete').css("display", "none");
      $(this).text('Отменить');
      isEdit = true;
    }
  });

  //Выделение всех чекбоксов
  let isAllSelect = false;
  $(".select-all").click(function () {
    if (isAllSelect) {
      $("input[type=checkbox]").prop('checked', false);
      $('.delayed-page__item-input, .viewed-page__input').parent().addClass('posiv').removeClass('active');
      $("#select-viewed-products").text($('.viewed-page__input:checked').length)
      isAllSelect = false;
    } else {
      $("input[type=checkbox]").prop('checked', true);
      $('.delayed-page__item-input, .viewed-page__input').parent().addClass('active').removeClass('posiv');
      $("#select-viewed-products").text($('.viewed-page__input:checked').length)
      isAllSelect = true;
    }
  });

  //Удаление выделенных чекбоксов по кнопке в меню редактирования
  $('.checkboxes').on('change', function () {
    $(this).is(':checked') ?
      $(this).parent().addClass('active').removeClass('posiv')
      :
      $(this).parent().addClass('posiv').removeClass('active');
  });

  $('.delayed-page__window-remove, .delayed-page__window-delay').click(function () {
    $('label.active').remove();
    $("#select-viewed-products").text($('.viewed-page__input:checked').length);
    $("#viewed-counter").text(`(${$(".viewed-page__content").children('.viewed-page__content-item').length})`);
    $("#delayed-counter").text(`(${$(".delayed-page").children('.delayed-page__item').length})`);
    if ($(".delayed-page").children('.delayed-page__item').length === 0 && $(".viewed-page__content").children('.viewed-page__content-item').length === 0) {
      $(".delayed-page").css("min-height", "400px");
      $(".delayed-page__zero").css("display", "block");
      $("input[type=checkbox]").prop('checked', false);
    } else {
      $(".delayed-page").css("min-height", "100px");
      $(".delayed-page__zero").css("display", "none");
    }
  });

  //Нажатие на лайк/дизлайк в answer.html

  $(".rating-buttons__like").click(function () {
    $(".rating-buttons__like").children('img').attr('src', './../img/rating.svg');
    $(".rating-buttons__text").css("color", "#8c8c8c");
    $(this).children('img').attr('src', './../img/rating-press.svg');
    $(this).children(".rating-buttons__text").css("color", "black");
  });

});

//Промотка страницы вверх
jQuery(document).ready(function () {
  var btn = $('#button-to-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});


/* Скорость поялвения элемента */
var speedOpacity = 295;
var speedOpacityForSVG = speedOpacity / 250;

/* Изменение шапки */
jQuery(document).ready(function () {
  $(window).scroll(function () {
    var offsetFromScreenTop = $(window).scrollTop();
    $(".header-top .page-header__form").css("opacity", offsetFromScreenTop / speedOpacity);
    $(".header-top").css("background-color", "rgba(242, 242, 242, " + offsetFromScreenTop / speedOpacity + ")");
    $(".header-top .page-header__button").css("background-color", "rgba(0, 0, 0, " + (0.7 - offsetFromScreenTop / (speedOpacity / 3.5)) + ")");
    $(".header-top .page-header__button:nth-child(1) svg").css("fill", "rgb(" + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ")");
    // $(".header-top .page-header__button:nth-child(4) svg path").css("stroke", "rgb(" + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ")");
    $(".header-top .page-header__button:nth-child(4) svg").css("fill", "rgb(" + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ")");
    // $(".header-top .page-header__button:nth-child(5) svg").css("fill", "rgb(" + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ")");

    // if (offsetFromScreenTop <= 100) {
    //   $(".swiper-wrapper .slide-item-mod").css("width", 100 + "px");
    // } else {
    //   $(".swiper-wrapper .slide-item-mod").css("width", 100 + "px");
    // }


    $(".header-top .page-header__button__like").css("background-color", "rgba(0, 0, 0, " + (0.7 - offsetFromScreenTop / (speedOpacity / 3.5)) + ")");
    // $(".header-top .page-header__button__like svg").css("fill", "rgb(" + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ", " + (255 - offsetFromScreenTop / speedOpacityForSVG) + ")");
    if (offsetFromScreenTop <= 250) {
      $(".header-top .page-header__button__like-span").css("display", "inline-block");
    } else {
      $(".header-top .page-header__button__like-span").css("display", "none");
    }
    if (offsetFromScreenTop <= 5) {
      $(".header-top .page-header__button__like-span").css("opacity", 1);
    } else {
      $(".header-top .page-header__button__like-span").css("opacity", speedOpacityForSVG / offsetFromScreenTop * 10);
    }

    // $(".header-top .page-header__button").css("background-color", "rgba(0, 0, 0, " + (0.7 - offsetFromScreenTop / (speedOpacity / 3.5)) + ")");
  });
});

// Function to open a specific tab
function openTab(event, tabId) {
  // Get all tab content elements and hide them
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    content.style.display = 'none';
  });

  // Get all tab buttons and remove the 'active' class
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });

  // Show the selected tab content and mark the button as 'active'
  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.classList.add('active');
}

// Set the default tab to be displayed (Tab 1)
openTab({ currentTarget: document.querySelector('.tab-button') }, 'tab1');


// // JavaScript to change the width of carousel items on scroll
const carousel = document.getElementById('detail-page__sliderBasket');
const carouselItems = carousel.querySelectorAll('.swiper-slide');
const windowes = document.getElementById('add-basket');
// Variable to track the previous scroll position

let prevScrollY = windowes.scrollTop;

// Function to change the item width based on scroll direction
function changeItemWidth() {
  const scrollY = windowes.scrollTop;

  // Check if the scroll direction is up (scrollY is less than prevScrollY)
  if (scrollY < prevScrollY && scrollY < 1) {
    // If scrolling up and scroll position is less than or equal to 200px, set item width to 50%
    carouselItems.forEach(item => {
      item.classList.remove("detail-page__sliderBasket-active")
      // item.style.width = '30% !important';
      // console.log("window 100");
    });
  } else {
    // If scrolling down or beyond 200px, set item width to 100%
    carouselItems.forEach(item => {
      item.classList.add("detail-page__sliderBasket-active")
      // item.style.width = '50% !important';
      // console.log("window 0");
    });
  }

  // Update the previous scroll position
  prevScrollY = scrollY;
}

// Add an event listener to monitor scroll position
windowes.addEventListener('scroll', changeItemWidth);


