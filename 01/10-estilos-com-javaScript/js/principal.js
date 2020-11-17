var pesoMinimo = 5;
var pesoMaximo = 500;
var alturaMinima = 1;
var alturaMaxima = 3;
var pesoEhValido = true;
var alturaEhValido = true;


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdNome = paciente.querySelector(".info-nome");
	var nome = tdNome.textContent;

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var imc = peso / (altura * altura);	


	if(peso < pesoMinimo || peso > pesoMaximo) {

		tdImc.textContent = "Peso invalido";
		paciente.classList.add("paciente-invalido");
		pesoEhValido = false;
	}

	if(altura < alturaMinima || altura > alturaMaxima) {

		tdImc.textContent = "Altura invalida";
		paciente.classList.add("paciente-invalido");
		alturaEhValido = false;
	}

	if(pesoEhValido && alturaEhValido) {

		tdImc.textContent = imc.toFixed(2);
	}
}


