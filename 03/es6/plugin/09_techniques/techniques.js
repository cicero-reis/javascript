(function($){
	
	$.fn.myFunction = function() {
		
		this.filter('a').append(function() {
			return ' (' + this.href + ')';
		});
		
		return this;
	};
})(jQuery);