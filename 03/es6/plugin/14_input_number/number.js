(function($) {

	$.fn.inputKeys = function(options) {
		
		return this.each(function() {
			var input = $(this);
			
			var defaults = {
				pattern: /[^0-9]/,
				clear: ''
			};
			options = jQuery.extend(input, options);
			
			defaults.bind('keyup blur focus', function(e) {
				e.preventDefault();
				var unicode = options.charCode ? options.charCode : options.keyCode;
				  if (unicode != 8 && unicode != 9) {
				   if (unicode<48||unicode>57) {
					return false				
			});			
		})
		
	}
	
})(jQuery);

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

jQuery.fn.removeNot = function( settings ){
			var $this = jQuery( this );
			var defaults = {
				pattern: /[^0-9]/,
				replacement: ''
			}
			settings = jQuery.extend(defaults, settings);

			$this.keyup(function(){
				var new_value = $this.val().replace( settings.pattern, settings.replacement );
				$this.val( new_value );
			});
			return $this;
		}
		$(document).ready(function(){
			$("#campo1").removeNot({ pattern: /[^0-9]+/g });
			$("#campo2").removeNot({ pattern: /[^a-z]+/g });
			$("#campo3").removeNot({ pattern: /[^a-z]+/gi });
			$("#campo4").removeNot({ pattern: /[^a-z0-9]+/gi });
			$("#campo5").removeNot({ pattern: /[^2468]+/g });
		});