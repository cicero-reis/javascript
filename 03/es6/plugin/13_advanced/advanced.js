(function($) {
	
	// Plugin definition.
	$.fn.hilight = function(options) { 	
 
    //Iterate and reformat each matched element.
	return this.each(function(){
		var elem = $(this);		
		var markup = elem.html();
		console.log(elem)
		elem.css({
			color: 'white',
			textAlign: 'center',
			backgroundColor: 'black'
		});
		// Call our format function.
        markup = $.fn.hilight.format(markup); 
		elem.html(markup);
	}); 
};
 
	// Define our format function.
	$.fn.hilight.format = function(txt) {
		return txt;
	};
	
})(jQuery);



