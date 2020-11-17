(function($){
	
	var blue = "blue";
	
	$.fn.colorBlue = function() {
		
		this.css('color', 'blue');
		return this;
	};
	
	$('p').colorBlue();	
	
	
})(jQuery);

