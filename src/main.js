import './style.css';
import AOS from 'aos';
import jQuery from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Make jQuery available globally
window.jQuery = jQuery;
window.$ = jQuery;

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Initialize breakpoints
window.breakpoints({
  xlarge:   [ '1281px',  '1680px' ],
  large:    [ '981px',   '1280px' ],
  medium:   [ '737px',   '980px'  ],
  small:    [ '481px',   '736px'  ],
  xsmall:   [ '361px',   '480px'  ],
  xxsmall:  [ null,      '360px'  ]
});

// Initialize main functionality
(function($) {
  var $window = $(window),
      $body = $('body'),
      $wrapper = $('#wrapper'),
      $header = $('#header'),
      $footer = $('#footer'),
      $main = $('#main'),
      $main_articles = $main.children('article');

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Fix: Flexbox min-height bug on IE.
  if (browser.name == 'ie') {
    var flexboxFixTimeoutId;

    $window.on('resize.flexbox-fix', function() {
      clearTimeout(flexboxFixTimeoutId);

      flexboxFixTimeoutId = setTimeout(function() {
        if ($wrapper.prop('scrollHeight') > $window.height())
          $wrapper.css('height', 'auto');
        else
          $wrapper.css('height', '100vh');
      }, 250);
    }).triggerHandler('resize.flexbox-fix');
  }

})(jQuery);