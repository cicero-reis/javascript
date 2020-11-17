var btnPacientes = document.querySelector("#buscar-pacientes");

btnPacientes.addEventListener("click", function(){

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientesq");

	xhr.addEventListener("load", function(){

		if(xhr.status == 200) {

			var resposta = xhr.responseText;		

			var pacientes = JSON.parse(resposta);

			pacientes.forEach(function(paciente){

				adicionaPacienteNaTabela(paciente);

			});	

		}else {

			alert("Erro: " + xhr.status + " requisição não encontrada");	
		}			

	});

	xhr.send();		

});