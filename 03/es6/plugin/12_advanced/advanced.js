(function($) {
	
	// Plugin definition.
	$.fn.hilight = function(options) {
 
    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var opts = $.extend({}, $.fn.hilight.defaults, options);
	console.log(opts);
 
    // Our plugin implementation code goes here.
	return this.css({
		background: opts.background
	});
 
};
 
	// Plugin defaults – added as a property on our plugin function.
	$.fn.hilight.defaults = {
		background: "yellow"
	};
	
	// This needs only be called once and does not
	// have to be called from within a "ready" block
	//$.fn.hilight.defaults.background = "blue";

	
})(jQuery);



