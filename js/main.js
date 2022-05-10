$(document).ready(function () {
  const sectionsSlider = new Swiper(".sections-container", {
    // Optional parameters

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".sections-wrap__button-next",
      prevEl: ".sections-wrap__button-prev",
      disabledClass: "sections-wrap__button-hidden",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
        spaceBetween: 10,
      },

      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  });

  const booksSlider = new Swiper(".books-container", {
    // Navigation arrows
    navigation: {
      nextEl: ".books-container__next",
      prevEl: ".books-container__prev",
      disabledClass: "books-container__button-disabled",
    },
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  var menuButton = $(".header__button-small");
  menuButton.on("click", function () {
    $(".theory__bottom").toggleClass("theory__bottom--visible");
    $("body").toggleClass("overflow--hidden");
  });
  var colorLike = $(".recomendation-left__text-world");
  colorLike.on("click", function () {
    $(".recomendation-left__text-world").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-educated");
  colorLike.on("click", function () {
    $(".recomendation-left__text-educated").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-flowers");
  colorLike.on("click", function () {
    $(".recomendation-left__text-flowers").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-there");
  colorLike.on("click", function () {
    $(".recomendation-left__text-there").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-business");
  colorLike.on("click", function () {
    $(".recomendation-left__text-business").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-making");
  colorLike.on("click", function () {
    $(".recomendation-left__text-making").toggleClass("recomendation-left__text-red");
  });

  var linkButton = $(".theory__link");
  linkButton.on("click", function () {
    $(".theory__bottom").removeClass("theory__bottom--visible");
    $("body").removeClass("overflow--hidden");
  });

  var buttonBook = $(".recomendation-left__text-button");
  buttonBook.on("click", function () {
    event.preventDefault();
  });
  var rightBook = $(".recomendation-right__text-button");
  rightBook.on("click", function () {
    event.preventDefault();
  });

  var closeModalOverlay = $(".modal__overlay");
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalOverlay.on("click", closeModal);

  var menuButton = $("[data-toggle=menu]");
  menuButton.on("click", openMenu);
  function openMenu() {
    var menuOverlay = $(".menu__overlay");
    var menuDialog = $(".menu__dialog");
    menuOverlay.addClass("menu__overlay--visible");
    menuDialog.addClass("menu__dialog--visible");
  }
  var likeButton = $(".footer__bottom-icon");
  likeButton.on("click", paintHover);
  function paintHover() {
    var svgHover = $(".footer__bottom-svg");
    svgHover.toggleClass("footer__bottom-svg--hover");
  }

  var buttonExit = $(".menu__close");
  buttonExit.on("click", closeMenu);
  function closeMenu(event) {
    event.preventDefault();
    var menuOverlay = $(".menu__overlay");
    var menuDialog = $(".menu__dialog");
    menuOverlay.removeClass("menu__overlay--visible");
    menuDialog.removeClass("menu__dialog--visible");
  }

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    modalBody.addClass("overflow--hidden");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    modalBody.removeClass("overflow--hidden");
    $(document).on("keyup", function (event) {
      if (event.keyCode == 27) {
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        modalBody.removeClass("overflow--hidden");
      }
    });
  }
  $(".header__link-recomendation").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-1").offset().top }, 1000);
    e.preventDefault();
  });
  $(".header__link-books").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-2").offset().top }, 2000);
    e.preventDefault();
  });
  $(".header__link-blog").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-3").offset().top }, 3000);
    e.preventDefault();
  });
  $(".theory__link-books").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-2").offset().top }, 2000);
    e.preventDefault();
  });
  $(".theory__link-blog").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-3").offset().top }, 3000);
    e.preventDefault();
  });
  $(".theory__link-recomendation").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-1").offset().top }, 3000);
    e.preventDefault();
  });
  $(".to-top").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-4").offset().top }, 3000);
    e.preventDefault();
  });
  $(".form").validate({
    errorClass: "input__error",
    messages: {
      name: {
        required: "This field is required",
        minlength: "The name must be at least 2 letters long. You only entered 1 letter",
      },
      email: {
        required: "This field is required",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "This field is required",
        minlength: "The number must be at least 11 digits long",
      },
    },
  });
  $(".menu__form").validate({
    errorClass: "input__error",
    messages: {
      name: {
        required: "This field is required",
        minlength: "The name must be at least 2 letters long. You only entered 1 letter",
      },
      email: {
        required: "This field is required",
        email: "Your email address must be in the format of name@domain.com",
        minlength: "The name must be at least 2 letters long. You only entered 1 letter",
      },
      phone: {
        required: "This field is required",
        minlength: "The number must be at least 11 digits long",
      },
    },
  });
  $(".newsletter__subscribe").validate({
    errorClass: "input__newsletter",
    errorElement: "div",
    messages: {
      email: {
        required: "This field is required",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
  $("input[type='tel']").mask("+7 (000) 000-0000");
});
