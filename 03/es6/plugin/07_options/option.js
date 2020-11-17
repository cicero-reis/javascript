(function($){
	
	$.fn.myPlugin = function(options) {
		
		// This is the easiest way to have default options.
		//The default value for color of #556b2f gets overridden by $.extend() to be orange.
		var settings = $.extend({
			// These are the defaults.
			color: '556b2f',
			backgroundColor: 'white',
			textAlign: 'center'
		}, options);
			
		// Greenify the collection based on the settings variable.
		return this.css({
			color: settings.color,
			backgroundColor: settings.backgroundColor,
			textAlign: settings.textAlign
		});
	};	
			
	
})(jQuery);