var pesoMinimo = 5;
var pesoMaximo = 500;
var alturaMinima = 1;
var alturaMaxma = 3;
var pesoEhValido = true;
var alturaEhValido = true;

var paciente = document.querySelector("#primeiro-paciente");

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
	pesoEhValido = false;
}

if(altura < alturaMinima || altura > alturaMaxma) {

	tdImc.textContent = "Altura invalida";
	alturaEhValido = false;
}

if(pesoEhValido && alturaEhValido) {

	tdImc.textContent = imc.toFixed(2);
}

console.log("O imc do paciente " + nome + " e de " + imc.toFixed(2));
