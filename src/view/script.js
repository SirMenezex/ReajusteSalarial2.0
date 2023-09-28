let salario = prompt("Qual é o seu salário?");
// const reajuste1 280 
// const reajuste2 280_700
// const reajuste3 700_1500
// const reajust4 >=1500
const reajuste1 = salario * 1.20
const reajuste2 = salario * 1.15
const reajuste3 = salario * 1.10
const reajuste4 = salario * 1.05

const fazerReajuste = (salario >= 1500) ? reajuste4 : (salario > 200 && salario < 700) ? reajust2 : (salario > 700 && salario < 1500) ? reajuste3 : reajuste1;

console.log(fazerReajuste);
