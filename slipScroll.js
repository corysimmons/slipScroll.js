// slipScroll.js - https://github.com/corysimmons/slipScroll.js
;(function($) {

  $.fn.slipScroll = function(options) {

    var settings = $.extend({
      fixed: '.fixed',
      moveable: '.moveable',
      container: '.container'
    }, options);

    $(settings.container).css({
      position: 'relative',
      overflow: 'hidden'
    });

    $(settings.fixed).css('position', 'fixed');

    $(settings.moveable).css('position', 'absolute');

    var setLogo = function() {

      $(settings.moveable).each(function() {
        $(this).css('top',
          $(settings.fixed).offset().top -
          $(this).closest(settings.container).offset().top
        );
      });

    };

    $(document).scroll(function() {
      setLogo();
    });

    setLogo();

  }

}(jQuery));
