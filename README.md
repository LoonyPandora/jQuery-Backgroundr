DEPRECATED
==========

This plugin is deprecated, and should not be used.

CSS3 can create this same effect, and is supported in modern versions Firefox, Safari, Chrome, and Opera. It is even supported in IE9!

The following CSS should do the trick. The relevant CSS being `background-size: cover` and the vendor-prefixed versions for really old brwosers. This will scale the image to fill the whole of it's container, while keeping the aspect ratio the same. the ``background-position: left center;`` can be adjusted to taste. 


``` css
#selector {
  background-image:      url('/path/to/images');
  background-repeat:     no-repeat;
  background-position:   left center;
  background-attachment: fixed;
  
  -webkit-background-size: cover;
     -moz-background-size: cover;
       -o-background-size: cover;
          background-size: cover;
}
```


About
=====

This is a very simple jQuery plugin that I wrote because the 2 existing plugins (Backstretch and Supersized) whilst both excellent plugins, didn't quite do what I wanted.

This takes the best of both plugins, removes all the things I didn't need, and just does one thing very well.


Requirements
============

jQuery - Only tested with jQuery > 1.5 - but should work with lower.


Usage
=====

``` javascript
$('#selector').backgroundr({
  src: '/path/to/images',
  fade: 1000
});
```

It's that simple.

This will create an ```img``` tag, with a class of ```bg_stretch``` inside the ```#selector```. The ```img``` will be sized so that it is centered in it's containing element, and fills it entirely - cropped if it's too big, blown up if it's too small.

You can pass it an optional fade-in time in ms, if you want to be fancy.

