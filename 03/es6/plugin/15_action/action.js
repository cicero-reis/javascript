(function($){
	
	var form_name;
	var action;
	var xform;
	var url;
	var btn;
	
	$.fn.action = function(options) {
		
		elem = $(this);
		form_name = elem.attr('name');	
		
		switch(form_name) {
			case "create":
				form = elem;
				create();
			break;
			case "read": 
				alert('Read');
				break;
			case "update":
				alert('Update');
			break;
			case "delete":
				 alert('Delete');
				break;
			default:
				alert('Action not find');
		}
	};

	var create = function() {
		form_name.on('submit', function(event){
			
			event.preventDefault();
										
			url = xform.attr('action');		
			btn = xform.find(':button');
			btn.val('Gravando...').attr('disable', true);
			/*$.ajax({
				url: url,
				type: 'post',
				data: 'action='+form_name+'&'+xform.serialize(),
				beforeSend: function() {
					btn.val('Gravando...').attr('disable', true);
				},
				success: function(xreturn) {
					btn.attr(disable, false).val('Gravar');
					alert(xreturn);
				}
			});*/
			
		});
	};
	
	var read = function() {
		//implements
	};
	
	var update = function() {
		//implements
	};
	
	var delet = function() {
		//implements
	};

})(jQuery);

/*

      $.ajax({
    		url: 'ajax/controleUsuario.php',
    		type: 'post',
    		data: 'action=cadastrar&'+formulario.serialize(),
    		beforeSend: function() {
    			$('#btnGravar').val('Gravando...').attr('disable', true);
    		},
    		success: function(retorno) {
    			$('#btnGravar').attr('disable', false).val('Gravar');
          retorno = JSON.parse(retorno);
          if(retorno == true) {
    				$('#mensagem').text('Usuário cadastrado com sucesso').css(
    				{'color':'red','text-align':'center'}).fadeOut(5000);
            $('#form-cadastrar').fadeOut(1000);
            window.setTimeout(carregaPagina, 5000);
    				$('#cnome').val('');
    				$('#cemail').val('');
    				$('#csenha').val('');
    			}else {
            $('#mensagem').text('Favor, preencher todos os campos').css(
    				{'color':'red','text-align':'center'}).fadeOut(7000);
    			}
    		}
      });
   });
   //Fim Cadastra Usuario
*/