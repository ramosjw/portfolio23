respostas = [];

function limpar() {
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
    })
}

function calcular() {
var deslocamento = document.getElementById("deslocamento").value;
var tempo = document.getElementById("tempo").value;
z = deslocamento / tempo 
document.getElementById('resultado').value = z
console.log(resultado);
respostas.push(z)
document.getElementById('result').innerHTML += `Velocidade Média: ${z} \n` 
}