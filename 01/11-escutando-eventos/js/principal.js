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

	var tdGordura = paciente.querySelector(".info-gordura");
	var gordura = tdGordura.textContent;

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

var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){

	event.preventDefault();	

	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
	var nomeTd = document.createElement("td");
	nomeTd.classList.add("info-nome");
	var pesoTd = document.createElement("td");
	pesoTd.classList.add("info-peso");
	var alturaTd = document.createElement("td");
	alturaTd.classList.add("info-altura");
	var gorduraTd = document.createElement("td");
	gorduraTd.classList.add("info-gordura")
	var imcTd = document.createElement("td");
	imcTd.classList.add("info-imc");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	console.log(pacienteTr);

	var tabelaPaciente = document.querySelector("#tabela-pacientes");

	tabelaPaciente.appendChild(pacienteTr);
	
	
});
	

