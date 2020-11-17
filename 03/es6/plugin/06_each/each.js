(function($){
	
	var media = 0;	
	
	$.fn.popup = function() {
		
		return this.each(function(index, elements){	
			media = parseInt($(this).text());
			if(media >= 7) {
				$(this).css('color', 'blue');
			}else {
				$(this).css('color', 'red');
			}			
		});
	};		
	
	$('.action').popup();
	
})(jQuery);