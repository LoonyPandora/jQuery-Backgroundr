/*
 * jQuery Backgroundr
 * Version 0.1.0
 * https://github.com/LoonyPandora/jQuery-Backgroundr
 *
 * Add a dynamically-resized background image to any element.
 * Based on "Backstretch" and "Supersized" jQuery plugins.
 * I suggest you use one of those plugins, they are better supported
 *
 * Copyright (c) 2011 James Aitken (loonypandora.co.uk)
 * Dual licensed under the MIT and GPL licenses.
*/

(function($){

  //Resize image on ready or resize
  $.fn.backgroundr = function(e) {
    var t = $(this);

    if (t.attr('id')) {
      var img = $("<img/>").attr({
        'id':     'bg_' + t.attr('id'),
        'class':  'bg_stretch'
      })
      .bind("load", function() {
        if (e.fade)
          var loader = $(this),
          timer  = setTimeout(function(){
            loader.fadeIn(1000);
          }, 2000); 
        
        $('.bg_stretch').resizenow();
      })
      .appendTo(t);

      if (e.fade)
        img.attr("style", 'display: none;');

      img.attr("src", e.src); // IE is buggy about the onload, aggressively caches images - so give it a src here to bypass the bug

      $(window).bind("resize", function(){
        $('.bg_stretch').resizenow();
      });
    }
  };

  $.fn.resizenow = function() {

    var t = $(this);

    t.each(function() {      
      try {
        var root          = ("onorientationchange" in window) ? $(document) : $(window), // iOS root element
            aspect_ratio  = t.width()/t.height(),
            screenwidth   = root.width(),
            screenheight  = root.height();
        
        if (isNaN(aspect_ratio))
          return true;

        if ((screenwidth/screenheight) >= aspect_ratio) {
          t.width(screenwidth);
          t.height(screenwidth / aspect_ratio);
        } else {
          t.height(screenheight);
          t.width(screenheight * aspect_ratio);
        }
        
        t.css({
          left:     (screenwidth - t.width()) / 2,
          top:      (screenheight - t.height()) / 2,
          position: 'absolute',
          zIndex:   '-1'
        });
      } catch(err) {
        // From backstretch. Apparently IE sometimes doesn't wait until an image is loaded before triggering this
        // So this lets it fail gracefully.
      }

      return false;
    });
  };

})(jQuery);

