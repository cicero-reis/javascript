var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

	var valor = confirm("Você deseja excluir?");

	if(valor) {

		event.target.parentNode.classList.add("fadeOut");

		setTimeout(function(){
			event.target.parentNode.remove();
		},500);

	}	

});




