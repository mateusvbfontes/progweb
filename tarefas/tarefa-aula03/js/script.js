alert("Atividade Aula 03!")

// const A = 10
// const b = 20

// let resultado = a + b
// console.log(resultado)

// resultado = a- b
// console.log(resultado)


const a = Number(prompt("Digite o valor do salário:"))
const b = Number(prompt("Digite o valor da porcentagem de aumento"))

const lista = [a,b]

let resultado = a * b / 100

resultado = a + resultado

document.write("Salário com aumento percentual:" + resultado);