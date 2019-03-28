$('.mfp-lightbox').magnificPopup({
	delegate: 'a', // child items selector, by clicking on it popup will open
	type: 'image',
	mainClass: 'mfp-with-zoom', // this class is for CSS animation below
	zoom: {
		enabled: true, // By default it's false, so don't forget to enable it

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		// The "opener" function should return the element from which popup will be zoomed in
		// and to which popup will be scaled down
		// By defailt it looks for an image tag:
		opener: function(openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}
});
$('.mfp-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	// tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-with-zoom',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [1,3] // Will preload 0 - before current, and 1 after the current image
	  	// preload: [0,2], // read about this option in next Lazy-loading section
	  	// arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%" onclick="magnificPopup.next();"></button>' // markup of an arrow button
/*	  	tPrev: 'Previous (Left arrow key)', // title for left button
	  	tNext: 'Next (Right arrow key)', // title for right button
	  	tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
*/	}
/*	,
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
	  		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		}
	}
*/
});

