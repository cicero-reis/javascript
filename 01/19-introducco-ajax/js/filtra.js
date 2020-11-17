var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0) {

		pacientes.forEach(function(paciente){

			var tdNome = paciente.querySelector(".info-nome");

			var nome = tdNome.textContent;	

			var regexp = new RegExp(campoFiltro.value, "i");	

			if(!regexp.test(nome)) {
				paciente.classList.add("esconde");				
			}else {
				paciente.classList.remove("esconde");
			}		

		});
	
	}else {

		pacientes.forEach(function(paciente) {

			paciente.classList.remove("esconde");

		});
	}
	
});