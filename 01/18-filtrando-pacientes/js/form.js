var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){

	event.preventDefault();	

	var form = document.querySelector("#form-adiciona");
	
	var paciente = obtemPacienteForm(form);

	if (!validaEntradaPeso(paciente)) {
        form.peso.classList.add("message-erro");
        return;
    }

    if(!validaEntradaAltura(paciente)) {
    	form.altura.classList.add("message-erro");
    	return;
    }
	
	var pacienteTr = montaTr();	
	
	montaTd(pacienteTr, paciente);	
	
	montaTabela(pacienteTr);

	form.reset();	
	
});

function obtemPacienteForm(form) {

	var paciente = {

		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)

	}
	return paciente;
}

function validaEntradaPeso(paciente) {

    return validaPeso(paciente.peso) ? true : false; 
}

function validaEntradaAltura(paciente) {

	return validaAltura(paciente.altura) ? true : false; 
}


function montaTr() {

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	return pacienteTr;

}

function montaTd(pacienteTr, paciente) {

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
	
	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;

	pacienteTr.appendChild(nomeTd, nomeTd.classList.add("info-nome"));
	pacienteTr.appendChild(pesoTd, pesoTd.classList.add("info-peso"));
	pacienteTr.appendChild(alturaTd, alturaTd.classList.add("info-altura"));
	pacienteTr.appendChild(gorduraTd, gorduraTd.classList.add("info-gordura"));
	pacienteTr.appendChild(imcTd, imcTd.classList.add("info-imc"));

}

function montaTabela(pacienteTr) {

	var tabelaPaciente = document.querySelector("#tabela-pacientes");

	tabelaPaciente.appendChild(pacienteTr);
}

