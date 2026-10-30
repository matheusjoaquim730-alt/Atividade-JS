let consumo = parseFloat(prompt("Digite o valor total da conta:"));
let pessoas = parseInt(prompt("Digite a quantidade de pessoas:"));
let valorPorPessoa = consumo / pessoas;
alert(`Resumo da Conta \n consumo: R$ ${consumo} \n divisão por pessoa (3 pessoas) R$ ${valorPorPessoa}`);