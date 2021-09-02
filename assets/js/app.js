(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utilities = require("./utilities");

var _components = require("./components");

// --- utilities
// --- components
// --- App
var App = function () {
  // --- run transition
  var runTransition = function runTransition() {
    $('body').removeClass('hold-transition');
  }; // --- show site content


  var showSiteContent = function showSiteContent() {
    $('.js-main-site').removeClass('main-site--hide'); // --- disable scroll

    _utilities.Scrolllable.enable();
  }; // --- ready


  var ready = function ready() {
    (function ($) {
      // --- image finished loading
      $('body').imagesLoaded(function () {
        // --- disable scroll
        _utilities.Scrolllable.disable(); // --- Global


        runTransition();
        showSiteContent();

        _utilities.BrowserCheck.init(); // --- Project


        _components.WindowResize.init();

        _components.WindowScroll.init();

        _components.Header.init();

        _components.HeroBanner.init();

        _components.Blog.init();

        _components.Tabs.init();

        _components.Templates.init();

        _components.TemplateBanner.init();

        _components.Footer.init();

        _components.BlogBanner.init();

        _components.Validation.init();

        _components.InputForm.init();

        _components.JilidSummary.init();

        _components.PrintSummary.init();

        _components.Testimony.init();
      });
    })(jQuery);
  }; // --- load


  var load = function load() {
    (function ($) {
      $(window).on("load", function () {});
    })(jQuery);
  }; // --- init


  var init = function init() {
    load();
    ready();
  }; // --- return


  return {
    init: init
  };
}(); // ---  run main js


App.init();

},{"./components":17,"./utilities":20}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Blog
@description: Blog
--------------------------------------------------------------------------------- */
var Blog = function () {
  // - handleRunCarouselWidget
  var handleRunCarouselWidget = function handleRunCarouselWidget() {
    var _selector = $('.js-blog-widget-carousel');

    var _widthItem = $('.js-blog-widget-carousel .blog__item').outerWidth(true) * $('.js-blog-widget-carousel .blog__item').length;

    var _widthList = $('.blog-widget__list').width();

    if (_selector.hasClass('owl-carousel')) {
      // destroy carousel
      _selector.owlCarousel('destroy');
    } // init carousel more extra small


    if ($(window).width() > 576) {
      // --- check if _widthList < _widthItem
      if (_widthList < _widthItem) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          loop: false,
          autoWidth: true,
          mouseDrag: false,
          touchDrag: true,
          pullDrag: false,
          items: 1,
          nav: true,
          rewind: false,
          dots: false,
          autoplay: false,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          autoplaySpeed: 500,
          navSpeed: 500
        });

        _selector.removeClass('blog-widget__list--show-grad-left').addClass('blog-widget__list--show-grad-right');

        _selector.on('translated.owl.carousel', function (event) {
          if (_selector.find('.owl-prev').hasClass('disabled')) {
            _selector.removeClass('blog-widget__list--show-grad-left').addClass('blog-widget__list--show-grad-right');
          } else {
            _selector.addClass('blog-widget__list--show-grad-left');
          }

          if (_selector.find('.owl-next').hasClass('disabled')) {
            _selector.removeClass('blog-widget__list--show-grad-right').addClass('blog-widget__list--show-grad-left');
          } else {
            _selector.addClass('blog-widget__list--show-grad-right');
          }
        });
      } else {
        _selector.removeClass('owl-carousel');
      }
    } else {
      _selector.removeClass('owl-carousel');
    }
  }; // - init


  var init = function init() {
    handleRunCarouselWidget();
  };

  return {
    init: init,
    runCarouselWidget: handleRunCarouselWidget
  };
}();

var _default = Blog;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Blog Banner
@description: Blog Banner
--------------------------------------------------------------------------------- */
var BlogBanner = function () {
  // handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-blog-banner');

    var _itemLength = $('.js-blog-banner .blog-banner__item').length;
    var _itemRun = 1; // destroy carousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        dots: true,
        nav: false,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 8000
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }

      _selector.addClass('blog-banner--single');
    }
  }; // init


  var init = function init() {
    handleRunCarousel();
  };

  return {
    init: init
  };
}();

var _default = BlogBanner;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */
// --- Footer
var Footer = function () {
  // --- handleSet
  var handleSet = function handleSet() {
    if ($(window).width() >= 992) {
      var _footerHeight = $('.footer').outerHeight();

      $('.main-site').css('padding-bottom', _footerHeight);
    } else {
      $('.main-site').removeAttr('style');
    }
  }; // --- init


  var init = function init() {
    handleSet();
  }; // --- return


  return {
    init: init,
    setFooter: handleSet
  };
}();

var _default = Footer;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */
// --- utilities
// --- Header
var Header = function () {
  // --- handleClick
  var handleClick = function handleClick() {
    $(".js-search-bar input").focus();
    $('body').on('click', function () {
      handleCheckClass();
    });
    $('.js-search-bar').on('click', function (e) {
      e.stopPropagation();
    }); // Cache selectors

    var lastId,
        topMenu = $(".header__nav"),
        topMenuHeight = topMenu.outerHeight(),
        // All list items
    menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));

      if (item.length) {
        return item;
      }
    }); // Bind click handler to menu items
    // so we can get a fancy scroll animation

    menuItems.click(function (e) {
      if ($(window).width() < 992) {
        $('body').removeClass('rm-scroll show-nav');
      }

      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - 20;
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 750);
      e.preventDefault();
    }); // Bind to scroll

    $(window).scroll(function () {
      // Get container scroll position
      var fromTop = $(this).scrollTop() + topMenuHeight; // Get id of current scroll item

      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      }); // Get the id of the current element

      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id; // Set/remove active class

        menuItems.parent().removeClass("header__nav__item--active").end().filter("[href='#" + id + "']").parent().addClass("header__nav__item--active");
      }
    });
  }; // handleKeyup


  var handleKeyup = function handleKeyup() {
    $(document).on('keyup', function (e) {
      if (e.which === 27) {
        handleCheckClass();
      }
    });
  }; // --- handleMobileNav


  var handleMobileNav = function handleMobileNav() {
    $('.js-nav').on('click', function (e) {
      if ($('body').hasClass('show-nav')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-nav');
      } else {
        _utilities.Scrolllable.disable();

        $('body').addClass('show-nav');
      }

      e.stopPropagation();
    });
  }; // --- handleScrollMobileMenu


  var handleScrollMobileMenu = function handleScrollMobileMenu() {
    $('.js-mobile-menu').on('scroll', function (e) {
      if ($(e.currentTarget).scrollTop() > 4) {
        $('body').addClass('on-scroll-mobile-menu');
      } else {
        $('body').removeClass('on-scroll-mobile-menu');
      }
    });
  }; // --- handleSearchBtn


  var handleSearchBtn = function handleSearchBtn() {
    $('.js-search-bar').css('visibility', 'hidden');
    $('.js-search-btn').on('click', function (e) {
      if ($('body').hasClass('show-search-bar')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-search-bar');
        $('.js-search-bar').css('visibility', 'hidden');
      } else {
        _utilities.Scrolllable.disable();

        $('body').addClass('show-search-bar');
        $('.js-search-bar').css('visibility', 'visible');
        setTimeout(function () {
          $('input.header__search-bar__input').trigger('focus');
        }, 1000);
      }

      e.stopPropagation();
    });
  }; // --- handleCheckClass


  var handleCheckClass = function handleCheckClass() {
    $('.js-search-bar').css('visibility', 'hidden');

    if ($(window).width() >= 992) {
      _utilities.Scrolllable.enable();

      $('body').removeClass('show-nav');
    }

    if ($('body').hasClass('show-search-bar')) {
      _utilities.Scrolllable.enable();

      $('body').removeClass('show-search-bar');

      if ($(window).width() >= 992) {
        $('.js-search-bar').removeAttr('style');
      }
    }
  }; // --- init


  var init = function init() {
    handleClick();
    handleKeyup();
    handleMobileNav();
    handleScrollMobileMenu();
    handleSearchBtn();
  }; // --- return


  return {
    init: init,
    checkClass: handleCheckClass
  };
}();

var _default = Header;
exports["default"] = _default;

},{"../utilities":20}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* -------------------------------------------------------------------------- */

/* hero-banner                                                                */

/* -------------------------------------------------------------------------- */
var HeroBanner = function () {
  // --- handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-hero-banner');

    var _itemLength = $('.js-hero-banner .hero-banner__item').length;
    var _itemRun = 1; // destroy carousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        dots: true,
        nav: false,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 8000
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }

      _selector.addClass('hero-banner--single');
    }
  }; // --- init


  var init = function init() {
    handleRunCarousel();
  }; // --- return


  return {
    init: init
  };
}();

var _default = HeroBanner;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Input Form
@description: Input Form
--------------------------------------------------------------------------------- */
// --- Input Form
var InputForm = function () {
  // --- handleClickDropdown
  var handleClickDropdown = function handleClickDropdown() {
    // handle click dropdown
    $('.js-fi-dropdown').on('click', function (e) {
      var _this = $(e.currentTarget);

      if (!_this.parents('.fi-row').hasClass('fi-dropdown--show')) {
        _this.parents('.fi-row').addClass('fi-dropdown--show');
      }
    }); // handle click body

    $('body').on('click', function (e) {
      if ($('.fi-row').hasClass('fi-dropdown--show')) {
        $('.fi-row').removeClass('fi-dropdown--show');
      }
    }); // stop progation

    $('body').on('click', '.js-fi-dropdown', function (e) {
      e.stopPropagation();
    });
  }; // --- handleKeyupDropdown


  var handleKeyupDropdown = function handleKeyupDropdown() {
    $('body').on('keyup', function (e) {
      if (e.which == 27 && $('.fi-row').hasClass('fi-dropdown--show')) {
        $('.fi-row').removeClass('fi-dropdown--show');
      }
    });
  };

  var handleSelectDropdown = function handleSelectDropdown() {
    var _val = $('.fi-dropdown-item').first().text();

    $('.js-fi-dropdown').val(_val).attr('readonly', 'readonly');
    $('.fi-dropdown-item').on('click', function (e) {
      var _this = $(e.currentTarget);

      var _txt = _this.text();

      _this.parents('.fi-row').find('.fi-dropdown').val(_txt);
    });
  }; // --- init


  var init = function init() {
    handleClickDropdown();
    handleKeyupDropdown();
    handleSelectDropdown();
  }; // --- return


  return {
    init: init
  };
}();

var _default = InputForm;
exports["default"] = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* -------------------------------------------------------------------------- */

/* jilid summary                                                              */

/* -------------------------------------------------------------------------- */
var JilidSummary = function () {
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-carousel-jilid-summary');

    var _widthItem = $('.js-carousel-jilid-summary .card-primary__item').outerWidth(true) * $('.js-carousel-jilid-summary .card-primary__item').length;

    var _widthList = $('.js-carousel-jilid-summary').width();

    if (_selector.hasClass('owl-carousel')) {
      // destroy carousel
      _selector.owlCarousel('destroy');
    } // init carousel more extra small


    if ($(window).width() > 576) {
      // --- check if _widthList < _widthItem
      if (_widthList < _widthItem) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          loop: false,
          autoWidth: true,
          mouseDrag: false,
          touchDrag: true,
          pullDrag: false,
          items: 1,
          nav: true,
          rewind: false,
          dots: true,
          autoplay: false,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          autoplaySpeed: 500,
          navSpeed: 500
        });
      } else {
        _selector.removeClass('owl-carousel');
      }
    } else {
      _selector.removeClass('owl-carousel');
    }
  }; // --- init


  var init = function init() {
    handleRunCarousel();
  }; // --- return


  return {
    init: init
  };
}();

var _default = JilidSummary;
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* -------------------------------------------------------------------------- */

/* print-summary                                                              */

/* -------------------------------------------------------------------------- */
var PrintSummary = function () {
  // --- handleSet
  var handleSet = function handleSet() {
    // --- selector
    var _selector = $('.js-content-filter'); // --- init projects


    _selector.imagesLoaded(function () {
      _selector.isotope({
        itemSelector: '.print-summary__item',
        percentPosition: true
      });
    });
  }; // --- handleClick


  var handleClick = function handleClick() {
    // --- projects tab onClick
    $('.js-tab-filter li').on('click', function (e) {
      // --- selector
      var _this = $(e.currentTarget);

      var _parents = _this.parents('.main-site');

      var _contentFilter = _parents.find('.js-content-filter');

      var _dataFilter = _this.attr('data-filter'); // _scrollLeft = _this.position().left - 32,


      var _scrollLeft = _this.offset().left + _this.outerWidth(true) / 2 + $('.js-tab-filter').scrollLeft() - $('.js-tab-filter').width() / 2;

      if ($(window).width() <= 992) {
        if (!_this.hasClass('active')) {
          $('.js-tab-filter').animate({
            scrollLeft: _scrollLeft
          });
        }
      } // --- removeClass


      _this.siblings().removeClass('active'); // --- addClass active


      _this.addClass('active'); // --- filter


      _contentFilter.isotope({
        filter: _dataFilter
      });
    });
  }; // --- init


  var init = function init() {
    handleSet();
    handleClick();
  }; // --- return


  return {
    init: init
  };
}();

var _default = PrintSummary;
exports["default"] = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Tabs
@description: Tabs
--------------------------------------------------------------------------------- */
var Tabs = function () {
  // handleClick
  var handleClick = function handleClick() {
    var _list = '.ds__nav__item',
        _pane = '.ds__content__item';
    $(_list).first().addClass('ds__nav__item--active');
    $(_pane).first().addClass('ds__content__item--active');
    $(_list).on('click', function (e) {
      var _this = $(e.currentTarget),
          _target = _this.attr('data-target');

      if (!_this.hasClass('ds__nav__item--active')) {
        _this.siblings().removeClass('ds__nav__item--active');

        _this.parents('.js-tabs').find(_pane).removeClass('ds__content__item--active');

        _this.addClass('ds__nav__item--active');

        $('[data-pane="' + _target + '"]').addClass('ds__content__item--active');
      }
    });
  }; // init


  var init = function init() {
    handleClick();
  };

  return {
    init: init
  };
}();

var _default = Tabs;
exports["default"] = _default;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Template Banner
@description: Template Banner
--------------------------------------------------------------------------------- */
var TemplateBanner = function () {
  // handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-template-banner');

    var _itemLength = $('.js-template-banner .template-banner__item').length;
    var _itemRun = 1; // destroy carousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        dots: true,
        nav: false,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 8000
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }

      _selector.addClass('template-banner--single');
    }
  }; // init


  var init = function init() {
    handleRunCarousel();
  };

  return {
    init: init
  };
}();

var _default = TemplateBanner;
exports["default"] = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Templates
@description: Templates
--------------------------------------------------------------------------------- */
var Templates = function () {
  // handleClick
  var handleClick = function handleClick() {
    var _list = '.inv-tpl__tab__control__item';
    var _pane = '.inv-tpl__tab__pane__item';

    var _txt = $('.inv-tpl__tab__control__item--active').text();

    $('.inv-tpl__tab__control__item--active').parents('.js-inv-tpl').find('.inv-tpl__select__text').text(_txt);
    $(_list).on('click', function (e) {
      var _this = $(e.currentTarget);

      var _target = _this.attr('data-target');

      var _text = _this.text();

      if (!_this.hasClass('inv-tpl__tab__control__item--active')) {
        _this.siblings().removeClass('inv-tpl__tab__control__item--active');

        _this.parents('.js-inv-tpl').find(_pane).removeClass('inv-tpl__tab__pane__item--active');

        _this.parents('.js-inv-tpl').removeClass('inv-tpl--active');

        _this.addClass('inv-tpl__tab__control__item--active');

        $('[data-pane="' + _target + '"]').addClass('inv-tpl__tab__pane__item--active');

        _this.parents('.js-inv-tpl').find('.inv-tpl__select__text').text(_text);
      }
    });
  }; // handleClickSelect


  var handleClickSelect = function handleClickSelect() {
    $('.js-inv-tpl-select').on('click', function (e) {
      var _this = $(e.currentTarget);

      if (_this.parents('.js-inv-tpl').hasClass('inv-tpl--active')) {
        _this.parents('.js-inv-tpl').removeClass('inv-tpl--active');
      } else {
        _this.parents('.js-inv-tpl').addClass('inv-tpl--active');
      }
    });
    $('body').on('click', function (e) {
      if ($('.js-inv-tpl').hasClass('inv-tpl--active')) {
        $('.js-inv-tpl').removeClass('inv-tpl--active');
      }
    });
    $('body').on('click', '.js-inv-tpl-select', function (e) {
      e.stopPropagation();
    });
  };

  var handleKeyupSelect = function handleKeyupSelect() {
    $('body').on('keyup', function (e) {
      if (e.which == 27 && $('.js-inv-tpl').hasClass('inv-tpl--active')) {
        $('.js-inv-tpl').removeClass('inv-tpl--active');
      }
    });
  }; // init


  var init = function init() {
    handleClick();
    handleClickSelect();
    handleKeyupSelect();
  };

  return {
    init: init
  };
}();

var _default = Templates;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* -------------------------------------------------------------------------- */

/* testimony                                                                  */

/* -------------------------------------------------------------------------- */
var Testimony = function () {
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-carousel-testimony');

    var _widthItem = $('.js-carousel-testimony .testimony__item').outerWidth(true) * $('.js-carousel-testimony .testimony__item').length;

    var _widthList = $('.testimony__list').width();

    if (_selector.hasClass('owl-carousel')) {
      // destroy carousel
      _selector.owlCarousel('destroy');
    } // init carousel more extra small


    if ($(window).width() > 576) {
      $('.testimony__list').removeAttr('style'); // --- check if _widthList < _widthItem

      if (_widthList < _widthItem) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          loop: false,
          autoWidth: true,
          mouseDrag: false,
          touchDrag: true,
          pullDrag: false,
          items: 2,
          nav: true,
          rewind: false,
          dots: true,
          autoplay: false,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          autoplaySpeed: 500,
          navSpeed: 500
        });
      } else {
        _selector.removeClass('owl-carousel');
      }
    } else {
      $('.testimony__list').css('width', $(window).width());

      _selector.removeClass('owl-carousel');
    }
  }; // --- init


  var init = function init() {
    handleRunCarousel();
  }; // --- return


  return {
    init: init
  };
}();

var _default = Testimony;
exports["default"] = _default;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Validation
@description: Validation
--------------------------------------------------------------------------------- */
var WHITESPACE = /^ *$/;
var EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // Form Validation

var ElementSelector = [{
  id: 'name',
  validation: {
    required: true
  }
}, {
  id: 'email',
  validation: {
    required: true,
    email: true
  }
}, {
  id: 'subdomain',
  validation: {
    required: true
  }
}, {
  id: 'parent',
  validation: {
    required: true
  }
}, {
  id: 'date',
  validation: {
    required: true
  }
}, {
  id: 'time',
  validation: {
    required: true
  }
}, {
  id: 'multiline',
  validation: {
    required: true
  }
}, {
  id: 'file',
  validation: {
    required: true
  }
}];
var ElementEvents = ['input', 'blur'];

var Validation = function () {
  // - handleInput
  var handleInput = function handleInput() {
    $.each(ElementEvents, function (ie, ve) {
      $.each(ElementSelector, function (i, v) {
        $('#' + v.id).on(ve, function () {
          var _val = $(this).val(),
              _target = $(this).attr('data-target'),
              _alertEl = $('#' + _target),
              _errorMessage; // Condition if validation does not error


          _alertEl.removeClass('error');

          $(this).parent().removeClass('error'); // Password Validation

          if (v.validation.minimum) {
            if (_val.length < v.validation.minimumChar) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Email validation


          if (v.validation.email) {
            if (!EMAIL.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid-email');
            }
          } // Required validation


          if (WHITESPACE.test(_val)) {
            var _errorMessage = _alertEl.attr('data-req');
          } // Error Message


          if (_errorMessage !== undefined) {
            _alertEl.text(_errorMessage);

            _alertEl.addClass('error');

            $(this).parent().addClass('error');
          }
        });
      });
    });
  }; // handleClick


  var handleClick = function handleClick() {
    $('button[type="submit"]').on('click', function (e) {
      $.each(ElementSelector, function (i, v) {
        $('#' + v.id).blur();
      });

      if ($('.error').length > 0) {
        e.preventDefault();
      } // console.log(WHITESPACE);

    });
  }; // - init


  var init = function init() {
    handleInput();
    handleClick();
  };

  return {
    init: init
  };
}();

var _default = Validation;
exports["default"] = _default;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

var _JilidSummary = _interopRequireDefault(require("./JilidSummary"));

var _Testimony = _interopRequireDefault(require("./Testimony"));

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* ------------------------------------------------------------------------------
@name: WindowResize
@description: WindowResize
--------------------------------------------------------------------------------- */
// --- components
// --- WindowResize
var WindowResize = function () {
  var _rtime;

  var _timeout = false;
  var _delta = 200; // --- handleResize

  var handleResize = function handleResize() {
    $(window).resize(function () {
      _rtime = new Date();

      if (_timeout === false) {
        _timeout = true;
        $('body').addClass('hold-transition');
        setTimeout(handleResizeEnd, _delta);
      }
    });
  }; // --- handleResizeEnd


  var handleResizeEnd = function handleResizeEnd() {
    if (new Date() - _rtime < _delta) {
      setTimeout(handleResizeEnd, _delta);
    } else {
      _timeout = false; // Run Function on Resize end

      $('body').removeClass('hold-transition');

      _JilidSummary["default"].init();

      _Testimony["default"].init();

      _index.Footer.setFooter();

      _index.Header.checkClass();

      _WindowScroll["default"].checkScroll();
    }
  }; // --- init


  var init = function init() {
    handleResize();
  }; // --- return


  return {
    init: init
  };
}();

var _default = WindowResize;
exports["default"] = _default;

},{"./JilidSummary":8,"./Testimony":13,"./WindowScroll":16,"./index":17}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: WindowScroll
@description: WindowScroll
--------------------------------------------------------------------------------- */
// --- WindowScroll
var WindowScroll = function () {
  var _lastScrollTop = 0;
  var _delta = 4;

  var _headerHeight = $('.header').height() / 2; // --- handleHeaderScroll


  var handleHeaderScroll = function handleHeaderScroll() {
    // --- _scrollTop
    var _scrollTop = $(window).scrollTop(); // --- Make sure they scroll more than _delta


    if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
      return;
    } // --- Scroll Down


    if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
      $('body').addClass('window-scrolled');
    } else {
      // --- Scroll Up
      if (_scrollTop + $(window).height() < $(document).height()) {
        $('body').removeClass('window-scrolled');
      }
    }

    _lastScrollTop = _scrollTop;
  }; // --- handleScroll


  var handleScroll = function handleScroll() {
    var _didScroll;

    $(window).scroll(function () {
      _didScroll = true;
      setInterval(function () {
        if (_didScroll) {
          handleHeaderScroll();
          _didScroll = false;
        }
      }, 200);
    });
  }; // --- init


  var init = function init() {
    handleHeaderScroll();
    handleScroll();
  }; // --- return


  return {
    init: init,
    checkScroll: handleScroll
  };
}();

var _default = WindowScroll;
exports["default"] = _default;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WindowScroll", {
  enumerable: true,
  get: function get() {
    return _WindowScroll["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "HeroBanner", {
  enumerable: true,
  get: function get() {
    return _HeroBanner["default"];
  }
});
Object.defineProperty(exports, "JilidSummary", {
  enumerable: true,
  get: function get() {
    return _JilidSummary["default"];
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs["default"];
  }
});
Object.defineProperty(exports, "Blog", {
  enumerable: true,
  get: function get() {
    return _Blog["default"];
  }
});
Object.defineProperty(exports, "WindowResize", {
  enumerable: true,
  get: function get() {
    return _WindowResize["default"];
  }
});
Object.defineProperty(exports, "Templates", {
  enumerable: true,
  get: function get() {
    return _Templates["default"];
  }
});
Object.defineProperty(exports, "TemplateBanner", {
  enumerable: true,
  get: function get() {
    return _TemplateBanner["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "BlogBanner", {
  enumerable: true,
  get: function get() {
    return _BlogBanner["default"];
  }
});
Object.defineProperty(exports, "Validation", {
  enumerable: true,
  get: function get() {
    return _Validation["default"];
  }
});
Object.defineProperty(exports, "InputForm", {
  enumerable: true,
  get: function get() {
    return _InputForm["default"];
  }
});
Object.defineProperty(exports, "Testimony", {
  enumerable: true,
  get: function get() {
    return _Testimony["default"];
  }
});
Object.defineProperty(exports, "PrintSummary", {
  enumerable: true,
  get: function get() {
    return _PrintSummary["default"];
  }
});

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

var _Header = _interopRequireDefault(require("./Header"));

var _HeroBanner = _interopRequireDefault(require("./HeroBanner"));

var _JilidSummary = _interopRequireDefault(require("./JilidSummary"));

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _Blog = _interopRequireDefault(require("./Blog"));

var _WindowResize = _interopRequireDefault(require("./WindowResize"));

var _Templates = _interopRequireDefault(require("./Templates"));

var _TemplateBanner = _interopRequireDefault(require("./TemplateBanner"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _BlogBanner = _interopRequireDefault(require("./BlogBanner"));

var _Validation = _interopRequireDefault(require("./Validation"));

var _InputForm = _interopRequireDefault(require("./InputForm"));

var _Testimony = _interopRequireDefault(require("./Testimony"));

var _PrintSummary = _interopRequireDefault(require("./PrintSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./Blog":2,"./BlogBanner":3,"./Footer":4,"./Header":5,"./HeroBanner":6,"./InputForm":7,"./JilidSummary":8,"./PrintSummary":9,"./Tabs":10,"./TemplateBanner":11,"./Templates":12,"./Testimony":13,"./Validation":14,"./WindowResize":15,"./WindowScroll":16}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: BrowserCheck
@description: BrowserCheck
--------------------------------------------------------------------------------- */
// --- BrowserCheck
var BrowserCheck = function () {
  // --- handleCheck
  var handleCheck = function handleCheck() {
    var _browser = 'dekstop-browser';
    var HTMLElement = document.getElementsByTagName('html')[0];

    if (navigator.userAgent.match(/Android/i)) {
      _browser = 'android-browser';
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
      _browser = 'blackberry-browser';
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      _browser = 'ios-browser';
    } else if (navigator.userAgent.match(/IEMobile/i)) {
      _browser = 'windows-phone-browser';
    }

    $('html').addClass(_browser);
  }; // --- init


  var init = function init() {
    handleCheck();
  }; // --- return


  return {
    init: init
  };
}();

var _default = BrowserCheck;
exports["default"] = _default;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Scrolllable
@description: Scrolllable
--------------------------------------------------------------------------------- */
// --- Scrolllable
var Scrolllable = function () {
  // --- handleEnable
  var handleEnable = function handleEnable() {
    $('body').removeClass('rm-scroll');
  }; // --- handleDisable


  var handleDisable = function handleDisable() {
    $('body').addClass('rm-scroll');
  }; // --- return


  return {
    enable: handleEnable,
    disable: handleDisable
  };
}();

var _default = Scrolllable;
exports["default"] = _default;

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isOS", {
  enumerable: true,
  get: function get() {
    return _isOS["default"];
  }
});
Object.defineProperty(exports, "BrowserCheck", {
  enumerable: true,
  get: function get() {
    return _BrowserCheck["default"];
  }
});
Object.defineProperty(exports, "Scrolllable", {
  enumerable: true,
  get: function get() {
    return _Scrolllable["default"];
  }
});

var _isOS = _interopRequireDefault(require("./isOS"));

var _BrowserCheck = _interopRequireDefault(require("./BrowserCheck"));

var _Scrolllable = _interopRequireDefault(require("./Scrolllable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./BrowserCheck":18,"./Scrolllable":19,"./isOS":21}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: isOS
@description: isOS
--------------------------------------------------------------------------------- */
var isOS = {
  android: function android() {
    return navigator.userAgent.match(/Android/i);
  },
  blackberry: function blackberry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  mac: function mac() {
    return navigator.platform.indexOf('Mac') > -1;
  },
  opera: function opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  win: function win() {
    return navigator.platform.indexOf('Win') > -1;
  },
  winMobile: function winMobile() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isOS.android() || isOS.blackberry() || isOS.iOS() || isOS.mac() || isOS.opera() || isOS.win() || isOS.winMobile();
  }
};
var _default = isOS;
exports["default"] = _default;

},{}]},{},[1])

//# sourceMappingURL=maps/app.js.map
