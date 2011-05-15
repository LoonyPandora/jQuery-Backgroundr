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

