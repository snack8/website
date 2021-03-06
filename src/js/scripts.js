(function ($, window, document, undefined) {

  /* jshint strict: false */

  $(function () {

    if( window.navigator.userAgent.indexOf('MSIE ') < 0){
      var $background = $('#background');
      var backgroundVideo = $background.children('video')[0];
      backgroundVideo.addEventListener('canplaythrough', function(){
        this.style.opacity = 1;
        this.play();
      });
    }


    var $greetingTicker = $('.greeting');
    if( $greetingTicker.size() ){

      var tickerBegin = function( ticker ){
        var greetings = ['My name is Jack', 'I am a web developer', 'I have a dog', 'I live in Seattle'];
        var messageLength = 4;

        tickerLooper(ticker, greetings, messageLength, 0);
      };

      var tickerLooper = function( $ticker, greetings, messageLength, greetingIndex ){
        $ticker.html(greetings[greetingIndex]);
        fadeIn( $ticker );
        window.setTimeout(function(){
          fadeOut( $ticker, function(){
            tickerLooper( $ticker, greetings, messageLength, ++greetingIndex % greetings.length );
          } );
        }, messageLength * 1000 );
      };

      var fadeIn = function( $ticker ){
        $ticker.removeClass('animated fadeInDown fadeOutDown');
        $ticker.addClass('animated fadeInDown');
      };

      var fadeOut = function( $ticker, callback ){
        $ticker.removeClass('animated fadeInDown fadeOutDown');
        $ticker.addClass('animated fadeOutDown');
        window.setTimeout(function(){
          callback();
        }, 1000 );
      };

      window.setTimeout(function(){
        tickerBegin($greetingTicker);
      }, 1000);
    }


    $('.tab').each( function(){
      var $tab = $( this );
      var $content = buildLightboxContent( $tab );
      var configuration = getLightboxConfig( $tab );

      $tab.featherlight( $content, configuration );
    });

    function buildLightboxContent( $thisTab ){
      var $lightboxContent = $('<div/>');
      
      return $lightboxContent;
    }

    function getLightboxConfig( $thisTab ){
      var thisContent = {};
      return thisContent;
    }

  });



})(jQuery, window, document);
