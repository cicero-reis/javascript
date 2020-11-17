var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdNome = paciente.querySelector(".info-nome");
	var nome = tdNome.textContent;

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdGordura = paciente.querySelector(".info-gordura");
	var gordura = tdGordura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	var imc = peso / (altura * altura);	


	if(!pesoEhValido) {

		tdImc.textContent = "Peso invalido";
		paciente.classList.add("paciente-invalido");
		pesoEhValido = false;
	}

	if(!alturaEhValido) {

		tdImc.textContent = "Altura invalida";
		paciente.classList.add("paciente-invalido");
		alturaEhValido = false;
	}

	if(pesoEhValido && alturaEhValido) {

		tdImc.textContent = calculaImc(peso, altura);
	}
}

function calculaImc(peso, altura) {

	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso) {

	return peso >= 0 && peso <= 500 ? true : false;
}

function validaAltura(altura) {

	return altura >= 0 && altura <= 3.0 ? true : false; 
}
	

