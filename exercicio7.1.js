// Função A — tradicional
function calcularArea(base, altura) {
  return (base * altura) / 2;
}

// Função A — arrow function
const calcularAreaArrow = (base, altura) => (base * altura) / 2;

// Função B — tradicional
function cumprimentar(nome, periodo) {
  return "Boa " + periodo + ", " + nome + "!";
}

// Função B — arrow function
const cumprimentarArrow = (nome, periodo) => "Boa " + periodo + ", " + nome + "!";

// Testes:
console.log(calcularArea(10, 5));
console.log(calcularAreaArrow(8, 4));

console.log(cumprimentar("Ana", "manhã"));
console.log(cumprimentarArrow("Carlos", "noite"));