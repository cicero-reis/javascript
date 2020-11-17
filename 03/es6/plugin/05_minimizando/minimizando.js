(function($){
	
	$.fn.popup = function(action = 'open') {
		
		if(action == 'open') {
			this.css('color', 'blue');
			return this;
		}
		if(action == 'close') {
			this.css('color', 'red');
			return this;
		}
	};
	
	$('#action').popup();
	
})(jQuery);