
var paciente = document.querySelector("#primeiro-paciente");

var tdNome = paciente.querySelector(".info-nome");
var nome = tdNome.textContent;

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

console.log("O imc do paciente " + nome + " e de " + imc);